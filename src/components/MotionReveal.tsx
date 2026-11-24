/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

type MotionDirection = 'left' | 'right' | 'up' | 'down';

const wordAnimationClasses: Record<MotionDirection, string> = {
  left: 'animate-enter-left',
  right: 'animate-enter-right',
  up: 'animate-enter-up',
  down: 'animate-enter-down'
};

const directionCycle: MotionDirection[] = ['left', 'right', 'up', 'down'];

interface AnimatedWordsProps {
  text: string;
  startIndex?: number;
  className?: string;
  stepDelayMs?: number;
}

/**
 * Splits a headline segment into words that converge simultaneously from distinct directions
 * (left, right, bottom-up, top-down) and settle cleanly into place.
 */
export function AnimatedWords({
  text,
  startIndex = 0,
  className = '',
  stepDelayMs = 75
}: AnimatedWordsProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, idx) => {
        const direction = directionCycle[(startIndex + idx) % directionCycle.length];
        const delayMs = (startIndex + idx) * stepDelayMs;
        return (
          <React.Fragment key={`${word}-${idx}`}>
            <span
              className={`inline-block will-change-transform ${wordAnimationClasses[direction]}`}
              style={{ animationDelay: `${delayMs}ms` }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </span>
  );
}

interface RevealBlockProps {
  children: React.ReactNode;
  direction?: MotionDirection;
  delayMs?: number;
  className?: string;
}

/**
 * Scroll-triggered directional reveal wrapper for sections, headings, and content blocks.
 */
export function RevealBlock({
  children,
  direction = 'up',
  delayMs = 0,
  className = ''
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform: Record<MotionDirection, string> = {
    left: '-translate-x-8 opacity-0',
    right: 'translate-x-8 opacity-0',
    up: 'translate-y-7 opacity-0',
    down: '-translate-y-7 opacity-0'
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-x-0 translate-y-0 opacity-100' : hiddenTransform[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
