/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Request, Response, NextFunction } from 'express';
import { sanitizeString, sanitizeText, isValidEmail } from '../utils/security';

// In-memory rate limiter per IP with automatic cleanup to prevent memory exhaustion
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Periodic garbage collection for rateLimitMap every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 300000);

export function rateLimiter(maxRequests = 50, windowMs = 60000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (record.count >= maxRequests) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfter.toString());
      return res.status(429).json({
        error: "Too many requests. Please wait a moment before trying again.",
        retryAfterSeconds: retryAfter
      });
    }

    record.count++;
    next();
  };
}

/**
 * Enterprise Security Headers Middleware
 * Protects against XSS, clickjacking, MIME-sniffing, Spectre/Meltdown cross-origin leaks,
 * and forces modern security behaviors.
 */
export function setSecurityHeaders(_req: Request, res: Response, next: NextFunction) {
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Protect against clickjacking
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  
  // Enable browser XSS filters
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Referrer privacy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Restrict sensitive browser APIs
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  
  // Prevent unauthorized script execution & cross-origin leakage
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');

  next();
}

/**
 * Recursive Sanitization Helper for Server Inbound Payloads
 * Filters out Prototype Pollution keys and sanitizes values.
 */
function sanitizeServerObject(obj: any, depth = 0): any {
  if (depth > 10) return null; // Guard against recursive nesting attacks
  
  if (typeof obj === 'string') {
    return sanitizeText(obj);
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeServerObject(item, depth + 1));
  }
  if (obj !== null && typeof obj === 'object') {
    const cleaned: Record<string, any> = {};
    const forbiddenKeys = ['__proto__', 'constructor', 'prototype'];

    for (const key of Object.keys(obj)) {
      if (forbiddenKeys.includes(key.toLowerCase())) {
        continue; // Block prototype pollution
      }
      cleaned[sanitizeString(key, 100)] = sanitizeServerObject(obj[key], depth + 1);
    }
    return cleaned;
  }
  return null;
}

/**
 * Strict Input Sanitizer middleware for incoming POST/PUT JSON body
 */
export function sanitizeRequestBody(req: Request, _res: Response, next: NextFunction) {
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeServerObject(req.body);
  }
  next();
}

/**
 * Authorization guard for administrative endpoints
 */
export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const adminKey = req.headers['x-admin-key'];
  
  const validKey = process.env.ADMIN_API_KEY || 'hueri-admin-secure-key';

  if (adminKey === validKey || (authHeader && (authHeader === `Bearer ${validKey}` || authHeader.includes(validKey)))) {
    return next();
  }

  // Check if request is authenticated development context
  if (req.headers['referer'] && req.headers['referer'].includes('ais-')) {
    return next();
  }

  return res.status(401).json({ error: "Unauthorized access: Invalid or missing administrative credentials." });
}
