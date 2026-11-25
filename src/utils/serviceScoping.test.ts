import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProjectScopingRequirements,
  SCOPE_SECTORS,
  SCOPE_PHASES,
  SCOPE_LENDERS
} from './serviceScoping';

test('scoping matrix catalogs provide non-empty options', () => {
  assert.ok(SCOPE_SECTORS.length >= 5);
  assert.ok(SCOPE_PHASES.length >= 4);
  assert.ok(SCOPE_LENDERS.length >= 4);
});

test('energy planning with IFC lender includes ESIA, SEP, and RAP deliverables', () => {
  const result = calculateProjectScopingRequirements({
    sector: 'energy',
    phase: 'planning',
    lender: 'nema-ifc'
  });
  assert.equal(result.timeline, '8–16 Weeks');
  assert.match(result.standards, /World Bank ESF \/ IFC/);
  assert.ok(result.deliverables.some((d) => /International ESIA/.test(d)));
  assert.ok(result.deliverables.some((d) => /Resettlement Action Plan/.test(d)));
});

test('water operations with AfDB standard returns AfDB benchmark and audit deliverables', () => {
  const result = calculateProjectScopingRequirements({
    sector: 'water',
    phase: 'ops',
    lender: 'afdb'
  });
  assert.equal(result.timeline, '2–4 Weeks');
  assert.match(result.standards, /AfDB ISS/);
  assert.ok(result.deliverables.some((d) => /Hydrological Baseline/.test(d)));
  assert.ok(result.deliverables.some((d) => /Annual Environmental & Compliance Audit/.test(d)));
});
