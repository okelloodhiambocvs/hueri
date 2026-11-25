import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getSeamTransitionMeta,
  getAlternatingTone,
  getAlternatingImagePosition,
  getPageSectionAnchors
} from './sectionTransitions';

test('getSeamTransitionMeta detects contrasting white-to-green transitions', () => {
  const seam = getSeamTransitionMeta('white', 'green');
  assert.equal(seam.hasContrastShift, true);
  assert.equal(seam.fromFillLight, '#ffffff');
  assert.equal(seam.toFillLight, '#006B22');
  assert.equal(seam.badgeLabel, 'green-zone');
});

test('getSeamTransitionMeta marks identical adjacent tones as non-contrasting', () => {
  const seam = getSeamTransitionMeta('white', 'white');
  assert.equal(seam.hasContrastShift, false);
  assert.equal(seam.badgeLabel, 'light-zone');
});

test('alternating helpers cycle cleanly between white/green and right/left', () => {
  assert.equal(getAlternatingTone(0, 'white'), 'white');
  assert.equal(getAlternatingTone(1, 'white'), 'green');
  assert.equal(getAlternatingTone(2, 'white'), 'white');

  assert.equal(getAlternatingImagePosition(0, 'right'), 'right');
  assert.equal(getAlternatingImagePosition(1, 'right'), 'left');
  assert.equal(getAlternatingImagePosition(2, 'right'), 'right');
});

test('page section anchors cover key pages with valid alternating tones', () => {
  const homeAnchors = getPageSectionAnchors('home');
  assert.ok(homeAnchors.length >= 5);
  assert.equal(homeAnchors[0].id, 'home-grounded');
  assert.equal(homeAnchors[1].tone, 'green');

  const servicesAnchors = getPageSectionAnchors('services');
  assert.ok(servicesAnchors.some((a) => a.id === 'service-eia-esia' && a.tone === 'green'));
  assert.ok(servicesAnchors.some((a) => a.id === 'scoping-matrix' && a.tone === 'white'));

  const detailAnchors = getPageSectionAnchors('service-detail');
  assert.ok(detailAnchors.some((a) => a.id === 'service-scope-overview'));
  assert.ok(detailAnchors.some((a) => a.id === 'service-inquiry'));
});
