import test from 'node:test';
import assert from 'node:assert/strict';
import {
  projectSummaries,
  getProjectDetailByIdOrSlug,
  getProjectDetailPath,
  resolveProjectSlugFromPath,
  splitProjectHeroTitle
} from './projectRoutes';

test('projectSummaries has 7 valid non-KDSP-II recent work items', () => {
  assert.equal(projectSummaries.length, 7);
  for (const item of projectSummaries) {
    assert.ok(!/kdsp/i.test(item.id));
    assert.ok(!/kdsp/i.test(item.title));
    assert.ok(item.slug.length > 0);
    assert.ok(item.imageKey.length > 0);
  }
});

test('all recent work items resolve to full project detail records and round-trip paths', () => {
  for (const item of projectSummaries) {
    const path = getProjectDetailPath(item.slug);
    assert.equal(path, `/projects/details/${item.slug}`);
    assert.equal(resolveProjectSlugFromPath(path), item.slug);

    const detail = getProjectDetailByIdOrSlug(item.slug);
    assert.equal(detail.id, item.id);
    assert.ok(detail.assignmentScope.length > 0);
    assert.ok(detail.keyDeliverables.length > 0);
  }
});

test('project titles split cleanly into two-tone hero lines', () => {
  for (const item of projectSummaries) {
    const parts = splitProjectHeroTitle(item.title);
    assert.ok(parts.upper.length > 0);
    assert.ok(parts.lower.length > 0);
  }
});
