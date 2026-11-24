import test from 'node:test';
import assert from 'node:assert/strict';
import { getServiceDropdownItems } from './navDropdowns.ts';
import {
  getServiceDetailByIdOrSlug,
  resolveServiceSlugFromPath
} from './serviceRoutes.ts';

test('Our Services dropdown includes all 9 services starting with Environmental Impact Assessment followed by ESHSRIM Procedures Training', () => {
  const items = getServiceDropdownItems();
  assert.equal(items.length, 9);
  assert.equal(items[0].label, 'Environmental Impact Assessment');
  assert.equal(items[1].label, 'ESHSRIM Procedures Training');

  for (const item of items) {
    const slug = resolveServiceSlugFromPath(item.path);
    assert.equal(slug, item.slug);
    const detail = getServiceDetailByIdOrSlug(item.slug);
    assert.ok(detail.overview.length > 20, `${item.label} should have overview text`);
    assert.ok(detail.methodology.length >= 3, `${item.label} should have step-by-step methodology`);
    assert.ok(detail.deliverables.length >= 3, `${item.label} should have key deliverables`);
  }
});
