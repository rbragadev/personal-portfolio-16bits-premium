import { Link } from 'react-router-dom';
import { useContent, useUi } from '../../content';
import type { Experience } from '../../types/portfolio';
import { Icon } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { TechTag } from '../ui/TechTag';

type QuestCardProps = {
  experience: Experience;
  /** e.g. "CURRENT QUEST" or "FIRST MAJOR QUEST". Omit for none. */
  badge?: string;
  /** Timeline cards show a couple of tech tags; the quest log shows its own. */
  techLimit?: number;
};

/** A professional role on the journey timeline. */
export function QuestCard({ experience, badge, techLimit = 4 }: QuestCardProps) {
  const { findCaseStudy } = useContent();
  const ui = useUi();
  const isCurrent = experience.status === 'in-progress';
  const hasCaseStudy = Boolean(findCaseStudy(experience.id));
  const to = hasCaseStudy ? `/quests/${experience.id}` : '/quests';

  return (
    <Link
      to={to}
      className={`cq-focusable group block border p-5 transition-all duration-200 ${
        isCurrent
          ? 'border-purple-bright/70 bg-surface-high/85 hover:shadow-[0_0_30px_-8px_rgba(138,43,226,0.8)]'
          : 'border-outline-muted bg-surface/80 hover:border-gold/60 hover:bg-surface-high/70'
      }`}
    >
      {badge ? <SectionLabel bracketed>{badge}</SectionLabel> : null}

      <h3
        className={`font-display text-2xl leading-tight ${badge ? 'mt-2' : ''} ${
          isCurrent ? 'text-purple-soft' : 'text-ink'
        }`}
      >
        {experience.company}
      </h3>

      <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-gold/85">
        {experience.role}
      </p>
      <p className="mt-0.5 font-mono text-[10px] tracking-[0.1em] text-ink-dim">
        {experience.dates} · {experience.location}
      </p>
      {experience.engagement ? (
        <p className="mt-2 inline-block border border-purple-bright/50 bg-purple/15 px-2 py-0.5 font-mono text-[9px] tracking-[0.1em] text-purple-soft uppercase">
          {experience.engagement}
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {experience.journeySummary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {experience.tech.slice(0, techLimit).map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
        {experience.tech.length > techLimit ? (
          <li className="self-center font-mono text-[10px] text-ink-dim">
            +{experience.tech.length - techLimit}
          </li>
        ) : null}
      </ul>

      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase transition-colors group-hover:text-gold">
        {hasCaseStudy ? ui.actions.openCase : ui.actions.viewInQuestLog}
        <Icon
          name="chevron-right"
          className="size-3 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
