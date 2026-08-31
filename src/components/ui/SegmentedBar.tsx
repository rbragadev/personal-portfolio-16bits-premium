import type { SkillLevel } from '../../types/portfolio';

import { LEVEL_SEGMENTS, SEGMENT_TOTAL } from './skillLevels';

type SegmentedBarProps = {
  level: SkillLevel;
  /** Stagger the fill animation across a list. */
  delayMs?: number;
  className?: string;
};

/** Blocky EXP-style bar: gold filled squares over a charcoal track. */
export function SegmentedBar({ level, delayMs = 0, className = '' }: SegmentedBarProps) {
  const filled = LEVEL_SEGMENTS[level];
  return (
    <span className={`inline-flex gap-1 ${className}`} aria-hidden>
      {Array.from({ length: SEGMENT_TOTAL }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-3.5 ${index < filled ? 'cq-bar-fill bg-gold' : 'bg-surface-highest'}`}
          style={index < filled ? { '--cq-delay': `${delayMs + index * 45}ms` } : undefined}
        />
      ))}
    </span>
  );
}


type ProgressBarProps = {
  /** 0–1. Decorative only. */
  value: number;
  delayMs?: number;
  className?: string;
  /** Render as discrete blocks rather than one continuous fill. */
  segments?: number;
};

/** Continuous or segmented progress track, used for EXP readouts. */
export function ProgressBar({ value, delayMs = 0, className = '', segments }: ProgressBarProps) {
  if (segments) {
    const filled = Math.round(value * segments);
    return (
      <span className={`flex gap-[3px] ${className}`} aria-hidden>
        {Array.from({ length: segments }, (_, index) => (
          <span
            key={index}
            className={`h-3.5 flex-1 ${index < filled ? 'cq-bar-fill bg-gold' : 'bg-surface-highest'}`}
            style={index < filled ? { '--cq-delay': `${delayMs + index * 40}ms` } : undefined}
          />
        ))}
      </span>
    );
  }

  return (
    <span className={`block h-3.5 bg-surface-highest ${className}`} aria-hidden>
      <span
        className="cq-bar-fill block h-full bg-gold"
        style={{ width: `${Math.round(value * 100)}%`, '--cq-delay': `${delayMs}ms` }}
      />
    </span>
  );
}
