import React from 'react';
import './loading-indicator.css';

const LoadingIndicator = ({
  size = 48,
  color = 'var(--on-surface)',
  variant = 'sequential',
}) => {
  const outerDotSize = size / 2;
  const centerDotSize = size / 2;
  const baseDistance = 15;
  const isPulsing = variant === 'pulsing';
  const scaleFactor = size / 48;

  const translations = [
    { tx: -1, ty: 0 },
    { tx: -0.707, ty: -0.707 },
    { tx: 0, ty: -1 },
    { tx: 0.707, ty: -0.707 },
    { tx: 1, ty: 0 },
    { tx: 0.707, ty: 0.707 },
    { tx: 0, ty: 1 },
    { tx: -0.707, ty: 0.707 },
  ];

  const animationDuration = isPulsing ? '5s' : '2.5s';

  return (
    <div
      className="loading-indicator"
      style={{
        '--loading-size': `${size}px`,
        '--outer-dot-size': `${outerDotSize}px`,
        '--center-dot-size': `${centerDotSize}px`,
        '--dot-color': color,
      }}
    >
      <div
        className="dot center-dot"
        style={{
          animationName: isPulsing ? 'pulsing-center' : 'center-pulse',
          animationDuration,
          animationTimingFunction: 'ease-out',
          animationIterationCount: 'infinite',
          animationFillMode: 'both',
        }}
      />
      {translations.map(({ tx, ty }, i) => (
        <div
          key={i}
          className={`dot dot-${i}`}
          style={{
            '--tx': `${tx * baseDistance * scaleFactor}px`,
            '--ty': `${ty * baseDistance * scaleFactor}px`,
            animationName: isPulsing ? 'pulsing-outer' : `spread-collapse${i}`,
            animationDuration,
            animationTimingFunction: 'ease-out',
            animationIterationCount: 'infinite',
            animationFillMode: 'both',
          }}
        />
      ))}
    </div>
  );
};

export default LoadingIndicator;
