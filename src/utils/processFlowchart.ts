export type FlowchartIconKey =
  | 'compass'
  | 'search'
  | 'layers'
  | 'microscope'
  | 'bar-chart'
  | 'scale'
  | 'users'
  | 'hard-hat'
  | 'shield-check'
  | 'wrench'
  | 'file-check'
  | 'award';

export interface ProcessFlowNode {
  index: number;
  stepNumber: string;
  title: string;
  description: string;
  iconKey: FlowchartIconKey;
  isFinal: boolean;
}

const ICON_RULES: Array<{ pattern: RegExp; icon: FlowchartIconKey }> = [
  { pattern: /\b(inception|scoping|cadastral|boundary|catchment|flight|planning)\b/i, icon: 'compass' },
  { pattern: /\b(curriculum|modular|baseline investigations|geophysical|photogrammetric|esms|formulation)\b/i, icon: 'layers' },
  { pattern: /\b(laboratory|water quality|aquatic|biodiversity|sampling|testing)\b/i, icon: 'microscope' },
  { pattern: /\b(significance|matrix|matrices|ghg|accounting|materiality|gap analysis|non-conformance)\b/i, icon: 'bar-chart' },
  { pattern: /\b(valuation|inventory|crosswalk|statutory audits|supply chain|overlays)\b/i, icon: 'scale' },
  { pattern: /\b(census|public participation|stakeholder|community|grievance|gender|baraza)\b/i, icon: 'users' },
  { pattern: /\b(hira|hazard|inspection|supervision|simulations|construction)\b/i, icon: 'hard-hat' },
  { pattern: /\b(mitigation hierarchy|emergency|preparedness|human rights|c-esmp verification)\b/i, icon: 'shield-check' },
  { pattern: /\b(restoration|nature-based|treatment system|toolkits|auditing & supervision)\b/i, icon: 'wrench' },
  { pattern: /\b(certification|competency|progress monitoring|implementation monitoring)\b/i, icon: 'award' },
  { pattern: /\b(esmp|cap|permitting|reporting|statutory annual audits|plan)\b/i, icon: 'file-check' },
  { pattern: /\b(review|audit|assessment|acquisition|delineation|survey|research|data collection|screening)\b/i, icon: 'search' }
];

const FALLBACK_ICON_CYCLE: FlowchartIconKey[] = [
  'compass',
  'layers',
  'bar-chart',
  'shield-check',
  'file-check',
  'search',
  'scale',
  'users',
  'microscope',
  'wrench',
  'hard-hat',
  'award'
];

export function selectProcessIconKey(
  stepTitle: string,
  stepDescription: string,
  index: number,
  usedIcons: Set<FlowchartIconKey>
): FlowchartIconKey {
  const combined = `${stepTitle} ${stepDescription}`;
  for (const rule of ICON_RULES) {
    if (rule.pattern.test(combined) && !usedIcons.has(rule.icon)) {
      return rule.icon;
    }
  }

  for (const candidate of FALLBACK_ICON_CYCLE) {
    if (!usedIcons.has(candidate)) {
      return candidate;
    }
  }

  return FALLBACK_ICON_CYCLE[index % FALLBACK_ICON_CYCLE.length];
}

export function splitStepText(rawStep: string, index: number): { title: string; description: string } {
  const clean = (rawStep || '').trim();
  const colonIdx = clean.indexOf(':');
  if (colonIdx > 0 && colonIdx < 85) {
    const title = clean.slice(0, colonIdx).trim();
    const description = clean.slice(colonIdx + 1).trim();
    if (title && description) {
      return { title, description };
    }
  }
  return {
    title: `Stage ${String(index + 1).padStart(2, '0')}`,
    description: clean
  };
}

export function buildProcessFlowNodes(steps: string[]): ProcessFlowNode[] {
  const cleanSteps = (steps || []).filter((s) => typeof s === 'string' && s.trim().length > 0);
  const usedIcons = new Set<FlowchartIconKey>();

  return cleanSteps.map((rawStep, index) => {
    const { title, description } = splitStepText(rawStep, index);
    const iconKey = selectProcessIconKey(title, description, index, usedIcons);
    usedIcons.add(iconKey);

    return {
      index,
      stepNumber: String(index + 1).padStart(2, '0'),
      title,
      description,
      iconKey,
      isFinal: index === cleanSteps.length - 1
    };
  });
}

export function partitionFlowchartRows(nodes: ProcessFlowNode[]): {
  topRow: ProcessFlowNode[];
  bottomRow: ProcessFlowNode[];
} {
  if (nodes.length <= 3) {
    return { topRow: nodes, bottomRow: [] };
  }
  return {
    topRow: nodes.slice(0, 3),
    bottomRow: nodes.slice(3)
  };
}
