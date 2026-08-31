import { useUi } from '../../content';
import { Icon } from './Icon';
import type { QuestStatus } from '../../types/portfolio';

/** IN PROGRESS (gold, pulsing dot) vs COMPLETE (muted, check). */
export function StatusBadge({ status }: { status: QuestStatus }) {
  const ui = useUi();
  const inProgress = status === 'in-progress';

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.14em] uppercase ${
        inProgress
          ? 'border-gold bg-gold/10 text-gold'
          : 'border-outline-muted bg-surface-lowest text-ink-dim'
      }`}
    >
      {inProgress ? (
        <span className="cq-blink size-1.5 bg-gold" aria-hidden />
      ) : (
        <Icon name="check" className="size-3" />
      )}
      {ui.questStatus[status]}
    </span>
  );
}
