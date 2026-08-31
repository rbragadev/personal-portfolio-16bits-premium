import type { ReactNode } from 'react';

type TimelineRowProps = {
  /** Left-gutter marker: a year range, or "AGE 14" when no year is claimed. */
  when: string;
  /** Marker on the rail. Quests get a filled block, milestones a small dot. */
  node: ReactNode;
  children: ReactNode;
  delayMs: number;
  /** Removes the trailing gap on the final entry. */
  last?: boolean;
};

/**
 * One row of the journey timeline.
 *
 * Mobile keeps the rail on the left and prints `when` above the content;
 * desktop moves `when` into its own right-aligned gutter beside the rail.
 * The continuous dashed line is drawn once by the parent list.
 */
export function TimelineRow({ when, node, children, delayMs, last }: TimelineRowProps) {
  return (
    <li
      className="cq-enter relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start lg:grid-cols-[8rem_2.5rem_minmax(0,1fr)]"
      style={{ '--cq-delay': `${delayMs}ms` }}
    >
      <p className="hidden pt-4 pr-4 text-right font-mono text-[10px] tracking-[0.16em] text-gold uppercase lg:block">
        {when}
      </p>

      <div className="relative flex justify-center self-stretch">{node}</div>

      <div className={`min-w-0 pl-4 ${last ? '' : 'pb-9'}`}>
        <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-gold uppercase lg:hidden">
          {when}
        </p>
        {children}
      </div>
    </li>
  );
}
