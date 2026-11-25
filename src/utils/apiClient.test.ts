import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAndPrepareLead, submitLeadInquiry, fetchPublicServices } from './apiClient';

test('validateAndPrepareLead strips XSS vectors and normalizes valid lead inputs', () => {
  const result = validateAndPrepareLead({
    fullName: '  <script>alert(1)</script>Belinda Nyakinya  ',
    email: '  BELINDA@HUERIAFRICA.COM ',
    phone: '+254 721<script> 410139',
    organization: '<b>HUERI Limited</b>',
    message: 'ESIA request for <iframe src="bad"></iframe>solar plant in Kisumu.',
    privacyConsent: true,
    requireConsent: true
  });

  assert.equal(result.valid, true);
  assert.equal(result.payload?.fullName, 'Belinda Nyakinya');
  assert.equal(result.payload?.email, 'belinda@hueriafrica.com');
  assert.equal(result.payload?.phone, '+254 721 410139');
  assert.equal(result.payload?.organization, 'HUERI Limited');
  assert.equal(result.payload?.message, 'ESIA request for solar plant in Kisumu.');
});

test('validateAndPrepareLead rejects missing name, invalid email, and missing consent', () => {
  const missingName = validateAndPrepareLead({
    fullName: 'A',
    email: 'user@example.com'
  });
  assert.equal(missingName.valid, false);
  assert.match(missingName.error || '', /full name/i);

  const badEmail = validateAndPrepareLead({
    fullName: 'Amara Ochieng',
    email: 'not-valid'
  });
  assert.equal(badEmail.valid, false);
  assert.match(badEmail.error || '', /valid email/i);

  const missingConsent = validateAndPrepareLead({
    fullName: 'Amara Ochieng',
    email: 'amara@example.com',
    privacyConsent: false,
    requireConsent: true
  });
  assert.equal(missingConsent.valid, false);
  assert.match(missingConsent.error || '', /Privacy Policy/i);
});

test('submitLeadInquiry communicates cleanly with backend response and surfaces server errors', async () => {
  const okFetch = (async () =>
    ({
      ok: true,
      json: async () => ({ success: true, lead: { id: 'l_123' } })
    }) as Response) as unknown as typeof fetch;

  const success = await submitLeadInquiry(
    {
      fullName: 'Daniel Kamau',
      email: 'daniel@example.com',
      phone: '+254700111222',
      message: 'Need annual environmental audit.'
    },
    okFetch
  );
  assert.equal(success.success, true);
  assert.equal(success.lead?.id, 'l_123');

  const errorFetch = (async () =>
    ({
      ok: false,
      json: async () => ({ error: 'Invalid telephone number format.' })
    }) as Response) as unknown as typeof fetch;

  const failed = await submitLeadInquiry(
    {
      fullName: 'Daniel Kamau',
      email: 'daniel@example.com'
    },
    errorFetch
  );
  assert.equal(failed.success, false);
  assert.equal(failed.error, 'Invalid telephone number format.');
});

test('fetchPublicServices safely parses valid arrays and falls back cleanly on errors', async () => {
  const okFetch = (async () =>
    ({
      ok: true,
      json: async () => [{ id: 'eia-esia', title: 'Environmental Impact Assessment' }]
    }) as Response) as unknown as typeof fetch;

  const services = await fetchPublicServices(okFetch);
  assert.equal(services.length, 1);
  assert.equal(services[0].id, 'eia-esia');

  const failingFetch = (async () => {
    throw new Error('offline');
  }) as unknown as typeof fetch;
  const fallback = await fetchPublicServices(failingFetch);
  assert.deepEqual(fallback, []);
});
