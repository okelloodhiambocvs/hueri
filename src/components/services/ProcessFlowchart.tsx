import React, { useState, useEffect } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileCheck2,
  HardHat,
  Layers,
  Microscope,
  Scale,
  SearchCheck,
  ShieldCheck,
  Users,
  Wrench
} from 'lucide-react';
import {
  FlowchartIconKey,
  ProcessFlowNode,
  buildProcessFlowNodes,
  partitionFlowchartRows
} from '../../utils/processFlowchart';

interface ProcessFlowchartProps {
  steps: string[];
  tone?: 'green' | 'white';
  serviceTitle?: string;
}

const FLOWCHART_ICONS: Record<FlowchartIconKey, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  search: SearchCheck,
  layers: Layers,
  microscope: Microscope,
  'bar-chart': BarChart3,
  scale: Scale,
  users: Users,
  'hard-hat': HardHat,
  'shield-check': ShieldCheck,
  wrench: Wrench,
  'file-check': FileCheck2,
  award: Award
};

function HorizontalArrowConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.42)'
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

function VerticalArrowConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.42)'
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

function RowReturnConnector({
  isTraversed,
  isGreen
}: {
  isTraversed: boolean;
  isGreen: boolean;
}) {
  const strokeColor = isGreen
    ? isTraversed
      ? '#A7F3D0'
      : 'rgba(255, 255, 255, 0.42)'
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
  const Icon = FLOWCHART_ICONS[node.iconKey];

  const cardSurface = isGreen
    ? isActive
      ? 'bg-[#004A17] border-[#A7F3D0] shadow-lg'
      : isCompleted
        ? 'bg-white/15 border-[#A7F3D0]/55 hover:bg-white/20'
        : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/40'
    : isActive
      ? 'bg-emerald-50/90 dark:bg-[#062456] border-[#006B22] dark:border-[#4ADE80] shadow-md'
      : 'bg-slate-50 dark:bg-[#06183A] border-slate-200 dark:border-slate-800 hover:border-[#006B22]/50';

  const iconTileClasses = isGreen
    ? isActive
      ? 'bg-[#A7F3D0] text-[#004A17]'
      : 'bg-white/15 text-[#A7F3D0]'
    : isActive
      ? 'bg-[#006B22] text-white dark:bg-[#4ADE80] dark:text-[#041B44]'
      : 'bg-emerald-100/80 dark:bg-emerald-950/60 text-[#006B22] dark:text-[#4ADE80]';

  const stepLabelColor = isGreen
    ? 'text-[#A7F3D0]'
    : 'text-[#006B22] dark:text-[#4ADE80]';

  const titleColor = isGreen ? 'text-white' : 'text-[#003B95] dark:text-white';
  const bodyColor = isGreen ? 'text-emerald-50' : 'text-slate-600 dark:text-slate-300';

  return (
    <button
      type="button"
      onClick={() => onSelect(node.index)}
      aria-pressed={isActive}
      className={`group flex-1 w-full rounded-xl border p-5 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] ${cardSurface}`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${iconTileClasses}`}
              aria-hidden="true"
            >
              <Icon className="w-5 h-5" />
            </span>
            <div>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider tabular-nums block ${stepLabelColor}`}>
                Stage {node.stepNumber}
              </span>
              <span
                className={`text-[11px] font-mono ${
                  isGreen ? 'text-emerald-100/80' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {node.isFinal ? 'Final Sign-Off' : 'Feeds Next Stage'}
              </span>
            </div>
          </div>

          {node.isFinal && (
            <CheckCircle2
              className={`w-4 h-4 shrink-0 ${
                isGreen ? 'text-[#A7F3D0]' : 'text-[#006B22] dark:text-[#4ADE80]'
              }`}
              aria-hidden="true"
            />
          )}
        </div>

        <h3 className={`font-heading font-extrabold text-base leading-snug ${titleColor}`}>
          {node.title}
        </h3>

        <p className={`text-xs sm:text-sm leading-relaxed font-light ${bodyColor}`}>
          {node.description}
        </p>
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
  const ActiveIcon = FLOWCHART_ICONS[activeNode.iconKey];

  return (
    <div
      className="space-y-6"
      data-testid="process-flowchart"
      data-active-step={activeNode.stepNumber}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3">
          <span
            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
              isGreen
                ? 'bg-white/15 text-[#A7F3D0]'
                : 'bg-emerald-100 dark:bg-emerald-950/60 text-[#006B22] dark:text-[#4ADE80]'
            }`}
            aria-hidden="true"
          >
            <ActiveIcon className="w-4 h-4" />
          </span>
          <div className="text-left">
            <p
              className={`text-xs font-mono font-bold tabular-nums uppercase tracking-wider ${
                isGreen ? 'text-[#A7F3D0]' : 'text-[#006B22] dark:text-[#4ADE80]'
              }`}
            >
              Stage {activeNode.stepNumber} of {String(nodes.length).padStart(2, '0')} · {activeNode.title}
            </p>
            <p
              className={`text-xs ${
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
