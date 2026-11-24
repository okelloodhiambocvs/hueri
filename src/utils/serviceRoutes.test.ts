import test from 'node:test';
import assert from 'node:assert/strict';
import {
  serviceSummaries,
  getServiceDetailByIdOrSlug,
  getServiceDetailPath,
  resolveServiceSlugFromPath
} from './serviceRoutes';

test('serviceSummaries starts with Environmental Impact Assessment', () => {
  assert.equal(serviceSummaries[0].title, 'Environmental Impact Assessment');
  assert.equal(serviceSummaries.length, 9);
});

test('all 9 service summaries resolve to distinct full service details', () => {
  const seenIds = new Set<string>();
  for (const summary of serviceSummaries) {
    const detail = getServiceDetailByIdOrSlug(summary.slug);
    assert.equal(detail.title, summary.title);
    assert.ok(detail.overview.length > 40);
    assert.ok(detail.methodology.length >= 3);
    assert.ok(detail.deliverables.length >= 3);
    seenIds.add(detail.id);
  }
  assert.equal(seenIds.size, 9);
});

test('service detail paths and slug resolution round-trip cleanly', () => {
  const path = getServiceDetailPath('eia-esia');
  assert.equal(path, '/services/details/environmental-impact-assessment');
  assert.equal(resolveServiceSlugFromPath(path), 'environmental-impact-assessment');
  assert.equal(resolveServiceSlugFromPath('/services'), null);
});
