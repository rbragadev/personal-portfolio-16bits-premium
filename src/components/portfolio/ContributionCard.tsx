import { Link } from 'react-router-dom';
import type { Contribution } from '../../types/portfolio';
import { useContent, useUi } from '../../content';
import { HudPanel } from '../ui/HudPanel';
import { Icon } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';

type ContributionCardProps = {
  contribution: Contribution;
  delayMs?: number;
};

/**
 * A flagship piece of work.
 *
 * `role` is Raphael's own contribution; `facts` belong to the product and are
 * labelled as such; `recognition` is third-party only. Keeping the three
 * visually separate is the point of the card.
 */
export function ContributionCard({ contribution, delayMs = 0 }: ContributionCardProps) {
  const { contributionsSection } = useContent();
  const ui = useUi();
  const questHref = contribution.questId ? `/quests/${contribution.questId}` : '/side-quests';

  return (
    <HudPanel
      as="article"
      corners
      variant="raised"
      className="cq-enter flex flex-col p-5 sm:p-6"
      style={{ '--cq-delay': `${delayMs}ms` }}
    >
      <p className="font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase">
        {contribution.context}
      </p>
      <h3 className="mt-1.5 font-display text-2xl leading-tight text-gold cq-pixel-text--gold">
        {contribution.name}
      </h3>

      {/* What Raphael did, kept distinct from what the product achieved. */}
      <p className="mt-4 border-l-2 border-purple-bright/70 pl-3 text-sm leading-relaxed text-ink">
        <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] text-purple-soft uppercase">
          {contributionsSection.roleLabel}
        </span>
        {contribution.role}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{contribution.summary}</p>

      {contribution.facts.length > 0 ? (
        <div className="mt-5">
          <SectionLabel className="!text-ink-dim">{contributionsSection.factsLabel}</SectionLabel>
          <ul className="mt-2 space-y-1.5">
            {contribution.facts.map((fact) => (
              <li key={fact} className="flex gap-2.5 font-mono text-[12px] text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 bg-gold" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {contribution.recognition ? (
        <p className="mt-5 flex gap-2.5 border-t border-outline-muted/60 pt-4 text-[13px] leading-relaxed text-ink-muted">
          <Icon name="award" className="mt-0.5 size-4 shrink-0 text-gold" />
          <span>
            <span className="mb-0.5 block font-mono text-[10px] tracking-[0.16em] text-gold uppercase">
              {contributionsSection.recognitionLabel}
            </span>
            {contribution.recognition}
          </span>
        </p>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
        <Link
          to={questHref}
          className="cq-focusable group inline-flex min-h-11 items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-gold uppercase"
        >
          {contribution.questId ? ui.actions.openCase : ui.actions.seeSideQuests}
          <Icon
            name="chevron-right"
            className="size-3 transition-transform group-hover:translate-x-0.5"
          />
        </Link>

        {contribution.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="cq-focusable inline-flex min-h-11 items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase hover:text-gold hover:underline"
          >
            <Icon name="link" className="size-3" />
            {link.label}
          </a>
        ))}
      </div>
    </HudPanel>
  );
}
