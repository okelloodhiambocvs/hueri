import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildProcessFlowNodes,
  partitionFlowchartRows,
  splitStepText
} from './processFlowchart';
import { serviceSummaries, getServiceDetailByIdOrSlug } from './serviceRoutes';

test('splitStepText extracts concise stage titles and descriptions', () => {
  const parsed = splitStepText(
    'Inception & Scoping Protocol: Defining project baseline boundaries against regulatory guidelines.',
    0
  );
  assert.equal(parsed.title, 'Inception & Scoping Protocol');
  assert.equal(
    parsed.description,
    'Defining project baseline boundaries against regulatory guidelines.'
  );
});

test('buildProcessFlowNodes assigns distinct domain icons across every service methodology', () => {
  for (const summary of serviceSummaries) {
    const detail = getServiceDetailByIdOrSlug(summary.slug);
    const nodes = buildProcessFlowNodes(detail.methodology);

    assert.equal(nodes.length, detail.methodology.length);
    assert.equal(nodes[0].stepNumber, '01');
    assert.equal(nodes[nodes.length - 1].isFinal, true);

    const uniqueIcons = new Set(nodes.map((node) => node.iconKey));
    assert.equal(
      uniqueIcons.size,
      nodes.length,
      `${summary.title} should assign a unique icon to every process stage`
    );
  }
});

test('partitionFlowchartRows splits 5-stage flows into 3 top nodes and 2 bottom nodes', () => {
  const detail = getServiceDetailByIdOrSlug('environmental-impact-assessment');
  const nodes = buildProcessFlowNodes(detail.methodology);
  const { topRow, bottomRow } = partitionFlowchartRows(nodes);

  assert.equal(topRow.length, 3);
  assert.equal(bottomRow.length, 2);
  assert.equal(topRow[0].stepNumber, '01');
  assert.equal(bottomRow[1].stepNumber, '05');
});
