/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatedWords } from './MotionReveal';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

function renderAnimatedTitle(node: React.ReactNode, wordOffset = { count: 0 }): React.ReactNode {
  if (typeof node === 'string') {
    const startIndex = wordOffset.count;
    const words = node.trim().split(/\s+/).filter(Boolean);
    wordOffset.count += words.length;
    return <AnimatedWords text={node} startIndex={startIndex} />;
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => (
      <React.Fragment key={idx}>{renderAnimatedTitle(child, wordOffset)}</React.Fragment>
    ));
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    if (node.type === 'br') {
      return node;
    }
    if (node.props && node.props.children !== undefined) {
      return React.cloneElement(node, {
        ...node.props,
        children: renderAnimatedTitle(node.props.children, wordOffset)
      });
    }
    return node;
  }

  return node;
}

export default function PageHero({
  image,
  imageAlt,
  title,
  description,
  children
}: PageHeroProps) {
  const animatedTitle = renderAnimatedTitle(title);

  return (
    <section
      key={imageAlt}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center overflow-hidden bg-[#041B44] text-white font-sans"
    >
      {/* Full-bleed clearly visible hero photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Light left-side scrim for text contrast while keeping the photograph clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/80 via-[#041B44]/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.12] drop-shadow">
            {animatedTitle}
          </h1>

          {description && (
            <p
              className="text-sm sm:text-base text-slate-100 font-sans font-light leading-relaxed drop-shadow animate-enter-up"
              style={{ animationDelay: '220ms' }}
            >
              {description}
            </p>
          )}

          {children && (
            <div
              className="pt-1 flex flex-wrap items-center gap-3 animate-enter-left"
              style={{ animationDelay: '320ms' }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
