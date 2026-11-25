export type FlowchartIconKey =
  | 'discussion'
  | 'scoping'
  | 'fieldwork'
  | 'drafting'
  | 'delivery';

export interface ProcessFlowNode {
  index: number;
  stepNumber: string;
  title: string;
  description: string;
  iconKey: FlowchartIconKey;
  illustrationAlt: string;
  isFinal: boolean;
}

const FLOWCHART_ILLUSTRATION_ALTS: Record<FlowchartIconKey, string> = {
  discussion: '3D cartoon environmental consultant holding a project brief folder',
  scoping: '3D cartoon specialist reviewing technical site blueprints and compass',
  fieldwork: '3D cartoon field engineer in safety helmet and vest with GIS tablet',
  drafting: '3D cartoon environmental analyst reviewing technical assessment charts',
  delivery: '3D cartoon senior advisor presenting an approved clearance dossier'
};

const CHRONOLOGICAL_STAGE_ICONS: FlowchartIconKey[] = [
  'discussion',
  'scoping',
  'fieldwork',
  'drafting',
  'delivery'
];

export function selectProcessIconKey(
  _stepTitle: string,
  _stepDescription: string,
  index: number,
  usedIcons: Set<FlowchartIconKey>
): FlowchartIconKey {
  const chronologicalKey = CHRONOLOGICAL_STAGE_ICONS[index % CHRONOLOGICAL_STAGE_ICONS.length];
  if (!usedIcons.has(chronologicalKey)) {
    return chronologicalKey;
  }

  for (const candidate of CHRONOLOGICAL_STAGE_ICONS) {
    if (!usedIcons.has(candidate)) {
      return candidate;
    }
  }

  return chronologicalKey;
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
      illustrationAlt: FLOWCHART_ILLUSTRATION_ALTS[iconKey],
      isFinal: index === cleanSteps.length - 1
    };
  });
}

export function partitionFlowchartRows<T>(nodes: T[]): {
  topRow: T[];
  bottomRow: T[];
} {
  if (nodes.length <= 3) {
    return { topRow: nodes, bottomRow: [] };
  }
  return {
    topRow: nodes.slice(0, 3),
    bottomRow: nodes.slice(3)
  };
}
