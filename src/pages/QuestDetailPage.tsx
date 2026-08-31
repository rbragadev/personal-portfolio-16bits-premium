import { Link, useParams } from 'react-router-dom';
import { GameShell } from '../components/layout/GameShell';
import { FramedArt } from '../components/ui/FramedArt';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { PixelLink } from '../components/ui/PixelButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { TechTag } from '../components/ui/TechTag';
import { backgrounds } from '../config/assets';
import { useContent, useUi } from '../content';

/** Screen 06 — the proof. Fully data-driven: add a case study, get a page. */
export function QuestDetailPage() {
  const { questId } = useParams();
  const {
    questDetailScreen,
    contributionsSection,
    findCaseStudy,
    findContributionForQuest,
    findExperience,
  } = useContent();
  const ui = useUi();
  const caseStudy = questId ? findCaseStudy(questId) : undefined;
  // Company, role, dates and status are never duplicated in the case study —
  // they belong to the matching quest.
  const experience = questId ? findExperience(questId) : undefined;
  const flagship = questId ? findContributionForQuest(questId) : undefined;

  if (!caseStudy || !experience) {
    return (
      <GameShell>
        <HudPanel className="p-8 text-center">
          <h2 className="font-display text-2xl text-gold">{ui.questNotFound.title}</h2>
          <p className="mt-3 text-sm text-ink-muted">{ui.questNotFound.body}</p>
          <PixelLink to="/quests" variant="ghost" className="mt-6">
            {questDetailScreen.backLabel}
          </PixelLink>
        </HudPanel>
      </GameShell>
    );
  }

  return (
    <GameShell background={<FramedArt asset={backgrounds.questDetails} />}>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase">
          <li className="flex items-center gap-2">
            <Icon name="clipboard" className="size-3.5" />
            <Link to="/quests" className="cq-focusable hover:text-gold">
              Quests
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-gold">{caseStudy.title}</li>
        </ol>
      </nav>

      {/* ---- Header ---- */}
      <HudPanel label={questDetailScreen.fileLabel} corners className="cq-enter p-5 pt-7 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-tight text-ink cq-pixel-text sm:text-[2.6rem]">
              {caseStudy.title} — {caseStudy.subtitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.1em] text-ink-muted uppercase">
              <li className="flex items-center gap-1.5">
                <Icon name="user" className="size-3.5 text-gold" /> {experience.role}
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="calendar" className="size-3.5 text-gold" /> {experience.dates}
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="target" className="size-3.5 text-gold" /> {experience.location}
              </li>
            </ul>
          </div>
          <span className="hidden size-16 shrink-0 items-center justify-center border border-gold/70 text-gold sm:flex">
            <Icon name="medal" className="size-8" />
          </span>
        </div>
      </HudPanel>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start">
        {/* ---- Challenge + contribution ---- */}
        <div className="flex flex-col gap-6">
          <HudPanel className="cq-enter p-5 sm:p-7" style={{ '--cq-delay': '80ms' }}>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-[0.06em] text-gold">
              <span className="size-2 bg-gold" aria-hidden />
              {questDetailScreen.challengeLabel}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink">{caseStudy.challenge}</p>
          </HudPanel>

          <HudPanel className="cq-enter p-5 sm:p-7" style={{ '--cq-delay': '140ms' }}>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-[0.06em] text-purple-soft">
              <span className="size-2 bg-purple-bright" aria-hidden />
              {questDetailScreen.contributionLabel}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {caseStudy.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 text-sm text-ink">
                  <Icon name="chevron-right" className="mt-1 size-3 shrink-0 text-gold" />
                  {contribution}
                </li>
              ))}
            </ul>
          </HudPanel>
        </div>

        {/* ---- Stack + result ---- */}
        <div className="flex flex-col gap-6">
          <HudPanel
            variant="raised"
            className="cq-enter p-5 sm:p-6"
            style={{ '--cq-delay': '200ms' }}
          >
            <SectionLabel className="block border-b border-outline-muted/60 pb-3">
              {questDetailScreen.stackLabel}
            </SectionLabel>
            <ul className="mt-4 flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <li key={tech}>
                  <TechTag>{tech}</TechTag>
                </li>
              ))}
            </ul>
          </HudPanel>

          {flagship && (flagship.facts.length > 0 || flagship.recognition) ? (
            <HudPanel
              label={flagship.name.toUpperCase()}
              corners
              className="cq-enter p-5 pt-7 sm:p-6 sm:pt-8"
              style={{ '--cq-delay': '230ms' }}
            >
              {flagship.facts.length > 0 ? (
                <>
                  <SectionLabel className="!text-ink-dim">
                    {contributionsSection.factsLabel}
                  </SectionLabel>
                  <ul className="mt-2 space-y-1.5">
                    {flagship.facts.map((fact) => (
                      <li key={fact} className="flex gap-2.5 font-mono text-[12px] text-ink">
                        <span className="mt-1.5 size-1.5 shrink-0 bg-gold" aria-hidden />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {flagship.recognition ? (
                <p
                  className={`flex gap-2.5 text-[13px] leading-relaxed text-ink-muted ${
                    flagship.facts.length > 0
                      ? 'mt-4 border-t border-outline-muted/60 pt-4'
                      : ''
                  }`}
                >
                  <Icon name="award" className="mt-0.5 size-4 shrink-0 text-gold" />
                  {flagship.recognition}
                </p>
              ) : null}

              {flagship.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cq-focusable mt-3 inline-flex min-h-11 items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-gold uppercase hover:underline"
                >
                  <Icon name="link" className="size-3" />
                  {link.label}
                </a>
              ))}
            </HudPanel>
          ) : null}

          <HudPanel
            label={questDetailScreen.outcomeLabel}
            corners
            className="cq-enter p-5 pt-7 sm:p-6 sm:pt-8"
            style={{ '--cq-delay': '260ms' }}
          >
            <dl className="space-y-5">
              {caseStudy.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                    {outcome.label}
                  </dt>
                  <dd className="mt-1 font-display text-base leading-snug text-gold">
                    {outcome.value}
                  </dd>
                </div>
              ))}
            </dl>
          </HudPanel>
        </div>
      </div>

      <div className="mt-8">
        <PixelLink to="/quests" variant="ghost">
          <Icon name="chevron-left" className="size-3" />
          {questDetailScreen.backLabel}
        </PixelLink>
      </div>
    </GameShell>
  );
}
