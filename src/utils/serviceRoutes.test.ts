import test from 'node:test';
import assert from 'node:assert/strict';
import {
  serviceSummaries,
  getServiceDetailByIdOrSlug,
  getServiceDetailPath,
  resolveServiceSlugFromPath,
  splitServiceHeroTitle
} from './serviceRoutes';

test('serviceSummaries starts with Environmental Impact Assessment followed by ESHSRIM Procedures Training', () => {
  assert.equal(serviceSummaries[0].title, 'Environmental Impact Assessment');
  assert.equal(serviceSummaries[1].title, 'ESHSRIM Procedures Training');
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

test('all 9 services split cleanly into upper white and lower green lines', () => {
  for (const summary of serviceSummaries) {
    const { upper, lower } = splitServiceHeroTitle(summary.title);
    assert.ok(upper.length > 0);
    assert.ok(lower.length > 0);
    assert.equal(`${upper} ${lower}`, summary.title);
  }
});
