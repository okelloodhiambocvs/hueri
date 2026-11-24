import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HOME_SECTION_ORDER,
  HOME_HERO_CONTENT,
  homeFeaturedAssignments,
  homeAdvisoryDisciplines,
  consolidatedPillars,
  projectDeliverySteps
} from './homeContent';
import { serviceSummaries } from './serviceRoutes';

test('homepage renders sections in requested order with delivery steps before consortia', () => {
  assert.deepEqual(HOME_SECTION_ORDER, [
    'hero',
    'grounded',
    'assignments',
    'practices',
    'disciplines',
    'deliverySteps',
    'consortia'
  ]);
});

test('hero headline stays concise and two-line ready', () => {
  const words = `${HOME_HERO_CONTENT.line1} ${HOME_HERO_CONTENT.line2}`.trim().split(/\s+/);
  assert.ok(words.length <= 6, `Expected <= 6 words, got ${words.length}`);
  assert.ok(HOME_HERO_CONTENT.line1.length <= 28);
  assert.ok(HOME_HERO_CONTENT.line2.length <= 28);
});

test('featured assignments omit KDSP II and include valid projects', () => {
  assert.ok(homeFeaturedAssignments.length >= 4);
  for (const item of homeFeaturedAssignments) {
    assert.ok(!/kdsp/i.test(item.id));
    assert.ok(!/kdsp/i.test(item.title));
    assert.ok(item.imageKey, `Missing imageKey for ${item.id}`);
    assert.ok(item.slug, `Missing slug for ${item.id}`);
  }
});

test('homepage advisory disciplines include all offered services', () => {
  assert.equal(homeAdvisoryDisciplines.length, serviceSummaries.length);
  assert.equal(homeAdvisoryDisciplines.length, 9);
  assert.equal(consolidatedPillars.length, 5);
});

test('project delivery steps progress from initial discussion to final report delivery', () => {
  assert.equal(projectDeliverySteps.length, 5);
  assert.match(projectDeliverySteps[0].title, /discussion/i);
  assert.match(projectDeliverySteps[projectDeliverySteps.length - 1].title, /final report delivery/i);
});
