/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest';
import { 
  sanitizeString, 
  sanitizeText, 
  sanitizeEmail, 
  sanitizePhone, 
  isValidEmail, 
  isValidPhone, 
  sanitizePayload,
  containsMaliciousPattern
} from '../src/utils/security';

describe('Enterprise Security & Input Purification Suite', () => {
  
  describe('sanitizeString', () => {
    it('strips HTML, nested scripts, and event listeners', () => {
      const dangerousInput = '<script>alert("xss")</script><iframe src="malicious.com"></iframe>Hello <b onclick="attack()">World</b>';
      const clean = sanitizeString(dangerousInput);
      expect(clean).toBe('Hello World');
      expect(clean).not.toContain('<script>');
      expect(clean).not.toContain('<iframe>');
      expect(clean).not.toContain('onclick');
    });

    it('neutralizes javascript: and data:text/html protocol vectors', () => {
      const malicious = 'javascript:alert(1) data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==';
      const clean = sanitizeString(malicious);
      expect(clean).not.toContain('javascript:');
      expect(clean).not.toContain('data:text/html');
    });

    it('enforces maximum character length constraints', () => {
      const longInput = 'A'.repeat(500);
      const clean = sanitizeString(longInput, 100);
      expect(clean.length).toBe(100);
    });

    it('handles null, undefined, numbers, and non-string inputs safely', () => {
      expect(sanitizeString(null)).toBe('');
      expect(sanitizeString(12345)).toBe('');
      expect(sanitizeString(undefined)).toBe('');
      expect(sanitizeString({})).toBe('');
    });
  });

  describe('sanitizeText (Multi-line & ToR inputs)', () => {
    it('preserves clean multi-line sentences while eliminating embedded exploit payloads', () => {
      const torText = `
        Environmental Scoping for Kisumu Port.
        <script>stealSession()</script>
        Includes World Bank ESS1-10 assessments and NEMA EIA licensing.
      `;
      const clean = sanitizeText(torText);
      expect(clean).toContain('Environmental Scoping for Kisumu Port.');
      expect(clean).toContain('Includes World Bank ESS1-10 assessments and NEMA EIA licensing.');
      expect(clean).not.toContain('<script>');
      expect(clean).not.toContain('stealSession');
    });
  });

  describe('sanitizeEmail & isValidEmail', () => {
    it('validates standard legitimate institutional email formats', () => {
      expect(isValidEmail('belindah@hueri.co.ke')).toBe(true);
      expect(isValidEmail('hopeenvironment2015@gmail.com')).toBe(true);
      expect(isValidEmail('safeguards.lead@african-development-bank.org')).toBe(true);
    });

    it('rejects invalid or potentially malicious email injections', () => {
      expect(isValidEmail('not-an-email')).toBe(false);
      expect(isValidEmail('bad<script>@domain.com')).toBe(false);
      expect(isValidEmail('user@domain')).toBe(false);
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('   ')).toBe(false);
    });

    it('purifies and normalizes emails safely', () => {
      expect(sanitizeEmail('  Belindah@HUERI.co.ke  ')).toBe('belindah@hueri.co.ke');
    });
  });

  describe('sanitizePhone & isValidPhone', () => {
    it('purifies and validates African & International phone formats', () => {
      expect(isValidPhone('+254 721 410139')).toBe(true);
      expect(isValidPhone('0711989201')).toBe(true);
      expect(isValidPhone('+254-721-410-139')).toBe(true);
      expect(isValidPhone('')).toBe(true); // Optional field allowed
    });

    it('strips injected alpha/malicious code from phone fields', () => {
      const maliciousPhone = '+254 721<script> 410139';
      const clean = sanitizePhone(maliciousPhone);
      expect(clean).toBe('+254 721 410139');
      expect(clean).not.toContain('<script>');
    });
  });

  describe('sanitizePayload & Prototype Pollution Defense', () => {
    it('recursively sanitizes complex form submission payloads', () => {
      const rawPayload = {
        fullName: '  <script>eval()</script>Belindah Nyakinya  ',
        email: 'BELINDA@HUERI.CO.KE',
        company: '<b>HUERI LIMITED</b>',
        serviceNeeded: '<a href="javascript:alert(1)">ESIA Permitting</a>',
        message: 'Normal inquiry text'
      };

      const sanitized = sanitizePayload(rawPayload);
      expect(sanitized.fullName).toBe('Belindah Nyakinya');
      expect(sanitized.company).toBe('HUERI LIMITED');
      expect(sanitized.serviceNeeded).toBe('ESIA Permitting');
      expect(sanitized.message).toBe('Normal inquiry text');
    });

    it('strictly neutralizes Prototype Pollution attack keys (__proto__, constructor, prototype)', () => {
      const maliciousPayload = JSON.parse(`{
        "fullName": "Legit User",
        "__proto__": { "isAdmin": true },
        "constructor": { "prototype": { "polluted": true } }
      }`);

      const sanitized = sanitizePayload(maliciousPayload);
      expect(sanitized.fullName).toBe('Legit User');
      expect(Object.prototype.hasOwnProperty.call(sanitized, '__proto__')).toBe(false);
      expect((Object.prototype as any).isAdmin).toBeUndefined();
      expect((Object.prototype as any).polluted).toBeUndefined();
    });
  });

  describe('containsMaliciousPattern', () => {
    it('detects common exploit signatures', () => {
      expect(containsMaliciousPattern('<script>alert(1)</script>')).toBe(true);
      expect(containsMaliciousPattern('<iframe src="x"></iframe>')).toBe(true);
      expect(containsMaliciousPattern('onclick=bad()')).toBe(true);
      expect(containsMaliciousPattern('Standard project description')).toBe(false);
    });
  });
});
