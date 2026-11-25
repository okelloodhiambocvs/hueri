import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import photoAssets from '../../utils/photoAssets';
import {
  DeliveryFlowNode,
  buildDeliveryFlowNodes
} from '../../utils/homeContent';
import { partitionFlowchartRows } from '../../utils/processFlowchart';
import {
  HorizontalArrowConnector,
  RowReturnConnector,
  VerticalArrowConnector
} from '../services/ProcessFlowchart';

interface DeliveryProcessFlowchartProps {
  onSelectStep?: (step: DeliveryFlowNode) => void;
}

function DeliveryFlowNodeCard({
  node,
  isActive,
  isCompleted,
  onSelect
}: {
  node: DeliveryFlowNode;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (index: number) => void;
}) {
  const illustrationSrc = photoAssets.deliverySteps[node.icon] || photoAssets.deliverySteps.discussion;

  const cardSurface = isActive
    ? 'bg-white border-[#006B22] ring-2 ring-[#006B22]/15 shadow-md'
    : isCompleted
      ? 'bg-white border-[#006B22]/45 hover:border-[#006B22]'
      : 'bg-white border-slate-200/90 hover:border-[#006B22]/55';

  return (
    <button
      type="button"
      onClick={() => onSelect(node.index)}
      aria-pressed={isActive}
      className={`group flex-1 w-full rounded-xl border p-4 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22] ${cardSurface}`}
    >
      <div className="space-y-3">
        <div className="w-full flex items-center justify-center bg-white">
          <img
            src={illustrationSrc}
            alt={node.illustrationAlt}
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto mix-blend-multiply dark:mix-blend-normal transition-transform duration-300 group-hover:scale-[1.03] select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono tabular-nums">
              <span className="font-bold uppercase tracking-wider text-[#006B22]">
                Step {node.step}
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="text-slate-500">
                {node.isFinal ? 'Final Sign-Off' : 'Feeds Next Stage'}
              </span>
            </div>

            {node.isFinal && (
              <CheckCircle2
                className="w-4 h-4 shrink-0 text-[#006B22]"
                aria-hidden="true"
              />
            )}
          </div>

          <h3 className="font-heading font-extrabold text-base text-[#003B95] leading-snug">
            {node.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            {node.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function DeliveryProcessFlowchart({
  onSelectStep
}: DeliveryProcessFlowchartProps) {
  const nodes = buildDeliveryFlowNodes();
  const [activeIndex, setActiveIndex] = useState(0);

  if (nodes.length === 0) {
    return null;
  }

  const { topRow, bottomRow } = partitionFlowchartRows(nodes);
  const activeNode = nodes[activeIndex] || nodes[0];
  const nextNode = activeIndex < nodes.length - 1 ? nodes[activeIndex + 1] : null;
  const activeIllustration =
    photoAssets.deliverySteps[activeNode.icon] || photoAssets.deliverySteps.discussion;

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    const chosen = nodes[index];
    if (chosen && onSelectStep) {
      onSelectStep(chosen);
    }
  };

  return (
    <div
      className="space-y-6"
      data-testid="home-delivery-flowchart"
      data-active-step={activeNode.step}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3.5">
          <img
            src={activeIllustration}
            alt={activeNode.illustrationAlt}
            className="w-12 h-12 object-contain shrink-0 bg-white mix-blend-multiply dark:mix-blend-normal dark:rounded-lg select-none"
            referrerPolicy="no-referrer"
          />
          <div className="text-left">
            <p className="text-xs font-mono font-bold tabular-nums uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80]">
              Step {activeNode.step} of {String(nodes.length).padStart(2, '0')} · {activeNode.title}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {nextNode
                ? `Next step: Step ${nextNode.step} — ${nextNode.title}`
                : 'Final step — senior peer review, regulatory submission, and clearance approval.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous delivery step"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelect(Math.min(nodes.length - 1, activeIndex + 1))}
            disabled={activeIndex === nodes.length - 1}
            aria-label="Next delivery step"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#006B22] hover:bg-[#00581C] text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Next Stage</span>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="hidden lg:block space-y-1">
        <div className="flex items-stretch">
          {topRow.map((node, idx) => (
            <React.Fragment key={node.step}>
              <DeliveryFlowNodeCard
                node={node}
                isActive={activeIndex === node.index}
                isCompleted={node.index < activeIndex}
                onSelect={handleSelect}
              />
              {idx < topRow.length - 1 && (
                <HorizontalArrowConnector
                  isTraversed={activeIndex > node.index}
                  isGreen={false}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {bottomRow.length > 0 && (
          <>
            <RowReturnConnector
              isTraversed={activeIndex >= topRow.length}
              isGreen={false}
            />

            <div className="lg:w-[68%] lg:mx-auto flex items-stretch">
              {bottomRow.map((node, idx) => (
                <React.Fragment key={node.step}>
                  <DeliveryFlowNodeCard
                    node={node}
                    isActive={activeIndex === node.index}
                    isCompleted={node.index < activeIndex}
                    onSelect={handleSelect}
                  />
                  {idx < bottomRow.length - 1 && (
                    <HorizontalArrowConnector
                      isTraversed={activeIndex > node.index}
                      isGreen={false}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col lg:hidden">
        {nodes.map((node, idx) => (
          <React.Fragment key={node.step}>
            <DeliveryFlowNodeCard
              node={node}
              isActive={activeIndex === node.index}
              isCompleted={node.index < activeIndex}
              onSelect={handleSelect}
            />
            {idx < nodes.length - 1 && (
              <VerticalArrowConnector
                isTraversed={activeIndex > node.index}
                isGreen={false}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
