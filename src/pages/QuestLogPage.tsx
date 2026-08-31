import { Link } from 'react-router-dom';
import { GameShell } from '../components/layout/GameShell';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { SectionLabel } from '../components/ui/SectionLabel';
import { StatusBadge } from '../components/ui/StatusBadge';
import { TechTag } from '../components/ui/TechTag';
import { useContent } from '../content';
import type { Experience } from '../types/portfolio';

function QuestEntry({ experience, delay }: { experience: Experience; delay: number }) {
  const { questLogScreen, findCaseStudy, findContributionForQuest } = useContent();
  const hasCaseStudy = Boolean(findCaseStudy(experience.id));
  const isCurrent = experience.status === 'in-progress';
  const flagship = findContributionForQuest(experience.id);

  return (
    <HudPanel
      as="article"
      corners
      variant={isCurrent ? 'raised' : 'default'}
      className={`cq-enter p-5 sm:p-6 ${isCurrent ? 'border-gold/50' : ''}`}
      style={{ '--cq-delay': `${delay}ms` }}
    >
      {/* ---- Header ---- */}
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
            {experience.company}
          </h3>
          <p className="mt-1 font-mono text-[12px] tracking-[0.06em] text-gold/85">
            {experience.role}
          </p>
          {experience.alias ? (
            <p className="mt-1 font-mono text-[10px] text-ink-dim">
              {questLogScreen.alsoKnownAs} {experience.alias}
            </p>
          ) : null}
          {/* Makes an overlapping date range read honestly. */}
          {experience.engagement ? (
            <p className="mt-2 inline-flex items-center gap-1.5 border border-purple-bright/50 bg-purple/15 px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] text-purple-soft uppercase">
              <Icon name="briefcase" className="size-3" />
              {experience.engagement}
            </p>
          ) : null}
          <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-ink-dim">
            <span className="flex items-center gap-1.5">
              <Icon name="calendar" className="size-3.5" />
              {experience.dates}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="target" className="size-3.5" />
              {experience.location}
            </span>
          </p>
        </div>
        <StatusBadge status={experience.status} />
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
        {experience.summary}
      </p>

      {/* The flagship piece of work from this role, if there is one. */}
      {flagship ? (
        <p className="mt-4 flex gap-3 border-l-2 border-gold/60 bg-gold/5 px-4 py-3">
          <Icon name="award" className="mt-0.5 size-4 shrink-0 text-gold" />
          <span className="text-[13px] leading-relaxed text-ink">
            <span className="font-display text-base text-gold">{flagship.name}</span>
            {' — '}
            {flagship.role}
          </span>
        </p>
      ) : null}

      {/* ---- What was actually delivered ---- */}
      <div className="mt-5 border-t border-outline-muted/60 pt-4">
        <SectionLabel>{questLogScreen.highlightsLabel}</SectionLabel>
        <ul className="mt-3 space-y-2">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-[13px] leading-relaxed text-ink">
              <Icon name="chevron-right" className="mt-1 size-3 shrink-0 text-gold" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ---- Stack ---- */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>

      {hasCaseStudy ? (
        <Link
          to={`/quests/${experience.id}`}
          className="cq-focusable group mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-gold uppercase"
        >
          {questLogScreen.viewDetailsLabel}
          <Icon
            name="chevron-right"
            className="size-3 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      ) : null}
    </HudPanel>
  );
}

/** Screen 05 — where Raphael applied it, and what came out of it. */
export function QuestLogPage() {
  const { questLogScreen } = useContent();
  const { experiences } = questLogScreen;

  return (
    <GameShell>
      <HudPanel corners className="cq-enter p-5 sm:p-7">
        <SectionLabel>{questLogScreen.eyebrow}</SectionLabel>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-ink cq-pixel-text sm:text-4xl">
              {questLogScreen.title}
            </h2>
            <p className="mt-3 text-sm text-ink-muted">{questLogScreen.intro}</p>
          </div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">
            {questLogScreen.totalLabel}:{' '}
            <span className="text-gold">{String(experiences.length).padStart(2, '0')}</span>
          </p>
        </div>
      </HudPanel>

      <ul className="mt-6 flex flex-col gap-5">
        {experiences.map((experience, index) => (
          <li key={experience.id}>
            <QuestEntry experience={experience} delay={index * 60} />
          </li>
        ))}
      </ul>
    </GameShell>
  );
}
