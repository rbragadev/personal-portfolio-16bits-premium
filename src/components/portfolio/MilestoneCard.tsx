import { Icon } from '../ui/Icon';
import type { IconGlyph } from '../ui/Icon';
import type { Milestone } from '../../types/portfolio';

/**
 * A personal turning point on the timeline.
 *
 * Deliberately lighter than a quest card — no border, no link. These explain
 * how Raphael got into software; the quests explain what he did with it.
 */
export function MilestoneCard({ milestone }: { milestone: Milestone }) {
  return (
    <div className="pt-1">
      <h3 className="flex items-center gap-2.5 font-display text-lg leading-tight text-ink-muted">
        <Icon name={milestone.icon as IconGlyph} className="size-4 shrink-0 text-purple-soft" />
        {milestone.title}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">
        {milestone.description}
      </p>
    </div>
  );
}
