import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import photoAssets from '../../utils/photoAssets';
import {
  ProcessFlowNode,
  buildProcessFlowNodes,
  partitionFlowchartRows
} from '../../utils/processFlowchart';

interface ProcessFlowchartProps {
  steps: string[];
  tone?: 'green' | 'white';
  serviceTitle?: string;
}

export function HorizontalArrowConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.52)'
    : isTraversed
      ? '#006B22'
      : 'rgba(15, 23, 42, 0.25)';

  return (
    <div
      className="hidden lg:flex w-11 shrink-0 items-center justify-center px-1"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 44 24"
        className="w-full h-6 overflow-visible transition-opacity duration-300"
      >
        <circle cx="4" cy="12" r="2.75" fill={strokeColor} />
        <line
          x1="7"
          y1="12"
          x2="34"
          y2="12"
          stroke={strokeColor}
          strokeWidth="2.25"
          strokeDasharray={isTraversed ? undefined : '4 3'}
          strokeLinecap="round"
        />
        <polygon points="32,6.5 42,12 32,17.5" fill={strokeColor} />
      </svg>
    </div>
  );
}

export function VerticalArrowConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.52)'
    : isTraversed
      ? '#006B22'
      : 'rgba(15, 23, 42, 0.25)';

  return (
    <div className="flex lg:hidden justify-center py-1" aria-hidden="true">
      <svg viewBox="0 0 24 36" className="w-6 h-8 overflow-visible">
        <circle cx="12" cy="4" r="2.5" fill={strokeColor} />
        <line
          x1="12"
          y1="7"
          x2="12"
          y2="27"
          stroke={strokeColor}
          strokeWidth="2.25"
          strokeDasharray={isTraversed ? undefined : '4 3'}
          strokeLinecap="round"
        />
        <polygon points="6.5,25 12,34 17.5,25" fill={strokeColor} />
      </svg>
    </div>
  );
}

export function RowReturnConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.52)'
    : isTraversed
      ? '#006B22'
      : 'rgba(15, 23, 42, 0.28)';

  return (
    <div className="hidden lg:block w-full h-14 px-2" aria-hidden="true">
      <svg
        viewBox="0 0 1200 58"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <circle cx="1014" cy="4" r="4" fill={strokeColor} />
        <path
          d="M 1014 6 L 1014 20 Q 1014 29 1004 29 L 400 29 Q 390 29 390 38 L 390 50"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeDasharray={isTraversed ? undefined : '7 5'}
          strokeLinecap="round"
        />
        <polyline
          points="712,23 698,29 712,35"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="382,46 390,57 398,46" fill={strokeColor} />
      </svg>
    </div>
  );
}

function FlowchartNodeCard({
  node,
  isActive,
  isCompleted,
  isGreen,
  onSelect
}: {
  node: ProcessFlowNode;
  isActive: boolean;
  isCompleted: boolean;
  isGreen: boolean;
  onSelect: (index: number) => void;
}) {
  const illustrationSrc =
    photoAssets.deliverySteps[node.iconKey] || photoAssets.deliverySteps.discussion;

  const cardSurface = isGreen
    ? isActive
      ? 'bg-white border-white ring-2 ring-[#A7F3D0] shadow-xl'
      : isCompleted
        ? 'bg-white border-[#A7F3D0]/85 hover:border-white shadow-md'
        : 'bg-white border-white/85 hover:border-white shadow-md'
    : isActive
      ? 'bg-white border-[#006B22] ring-2 ring-[#006B22]/15 shadow-md'
      : isCompleted
        ? 'bg-white border-[#006B22]/45 hover:border-[#006B22]'
        : 'bg-white border-slate-200/90 hover:border-[#006B22]/55';

  return (
    <button
      type="button"
      onClick={() => onSelect(node.index)}
      aria-pressed={isActive}
      className={`group flex-1 w-full rounded-xl border p-4 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] ${cardSurface}`}
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
                Stage {node.stepNumber}
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

          <h3 className="font-heading font-extrabold text-base leading-snug text-[#003B95]">
            {node.title}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed font-light text-slate-600">
            {node.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function ProcessFlowchart({
  steps,
  tone = 'green',
  serviceTitle
}: ProcessFlowchartProps) {
  const nodes = buildProcessFlowNodes(steps);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [serviceTitle, steps.length]);

  if (nodes.length === 0) {
    return null;
  }

  const isGreen = tone === 'green';
  const { topRow, bottomRow } = partitionFlowchartRows(nodes);
  const activeNode = nodes[activeIndex] || nodes[0];
  const nextNode = activeIndex < nodes.length - 1 ? nodes[activeIndex + 1] : null;
  const activeIllustration =
    photoAssets.deliverySteps[activeNode.iconKey] || photoAssets.deliverySteps.discussion;

  return (
    <div
      className="space-y-6"
      data-testid="process-flowchart"
      data-active-step={activeNode.stepNumber}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3.5">
          {!isGreen && (
            <img
              src={activeIllustration}
              alt={activeNode.illustrationAlt}
              className="w-12 h-12 object-contain shrink-0 bg-white mix-blend-multiply dark:mix-blend-normal dark:rounded-lg select-none"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="text-left">
            <p
              className={`text-xs font-mono font-bold tabular-nums uppercase tracking-wider ${
                isGreen ? 'text-[#A7F3D0]' : 'text-[#006B22] dark:text-[#4ADE80]'
              }`}
            >
              Stage {activeNode.stepNumber} of {String(nodes.length).padStart(2, '0')} · {activeNode.title}
            </p>
            <p
              className={`text-xs sm:text-sm ${
                isGreen ? 'text-emerald-100/90' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {nextNode
                ? `Next step: Stage ${nextNode.stepNumber} — ${nextNode.title}`
                : 'Final stage completed — ready for deliverables and regulatory submission.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous process stage"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isGreen
                ? 'bg-white/15 hover:bg-white/25 text-white'
                : 'border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex((prev) => Math.min(nodes.length - 1, prev + 1))}
            disabled={activeIndex === nodes.length - 1}
            aria-label="Next process stage"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isGreen
                ? 'bg-[#003B95] hover:bg-[#002D73] text-white'
                : 'bg-[#006B22] hover:bg-[#00581C] text-white'
            }`}
          >
            <span>Next Stage</span>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="hidden lg:block space-y-1">
        <div className="flex items-stretch">
          {topRow.map((node, idx) => (
            <React.Fragment key={node.stepNumber}>
              <FlowchartNodeCard
                node={node}
                isActive={activeIndex === node.index}
                isCompleted={node.index < activeIndex}
                isGreen={isGreen}
                onSelect={setActiveIndex}
              />
              {idx < topRow.length - 1 && (
                <HorizontalArrowConnector
                  isTraversed={activeIndex > node.index}
                  isGreen={isGreen}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {bottomRow.length > 0 && (
          <>
            <RowReturnConnector
              isTraversed={activeIndex >= topRow.length}
              isGreen={isGreen}
            />

            <div className="lg:w-[68%] lg:mx-auto flex items-stretch">
              {bottomRow.map((node, idx) => (
                <React.Fragment key={node.stepNumber}>
                  <FlowchartNodeCard
                    node={node}
                    isActive={activeIndex === node.index}
                    isCompleted={node.index < activeIndex}
                    isGreen={isGreen}
                    onSelect={setActiveIndex}
                  />
                  {idx < bottomRow.length - 1 && (
                    <HorizontalArrowConnector
                      isTraversed={activeIndex > node.index}
                      isGreen={isGreen}
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
          <React.Fragment key={node.stepNumber}>
            <FlowchartNodeCard
              node={node}
              isActive={activeIndex === node.index}
              isCompleted={node.index < activeIndex}
              isGreen={isGreen}
              onSelect={setActiveIndex}
            />
            {idx < nodes.length - 1 && (
              <VerticalArrowConnector
                isTraversed={activeIndex > node.index}
                isGreen={isGreen}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
