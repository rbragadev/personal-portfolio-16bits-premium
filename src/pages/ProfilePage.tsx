import { GameShell } from '../components/layout/GameShell';
import { Avatar } from '../components/ui/Avatar';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ProgressBar, SegmentedBar } from '../components/ui/SegmentedBar';
import { TechTag } from '../components/ui/TechTag';
import { useContent, useUi } from '../content';

/** Screen 02 — who Raphael is, as a character sheet. */
export function ProfilePage() {
  const { identity, profileScreen, credentials, techSummary } = useContent();
  const ui = useUi();
  const { attributes } = profileScreen;
  const { languages, certifications, education, award } = credentials;

  return (
    <GameShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
        {/* ---- Left column: identity card + main quest ---- */}
        <div className="cq-enter flex flex-col gap-6">
          <HudPanel corners variant="raised" className="p-5">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase">
              <span className="text-purple-soft">
                Profile {profileScreen.screenNumber}
              </span>
              <span className="text-gold">LVL {identity.level}</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-32" />
              <div className="text-center">
                <p className="font-display text-xl leading-tight text-gold cq-pixel-text">
                  {identity.name}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink-muted uppercase">
                  {identity.rank}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-outline-muted/60 pt-4">
              <SectionLabel>{profileScreen.awardLabel}</SectionLabel>
              <p className="mt-2 flex items-start gap-2.5">
                <Icon name="award" className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-mono text-[12px] text-ink">{award.title}</span>
                  <span className="block font-mono text-[11px] text-ink-dim">
                    {award.issuer}
                  </span>
                </span>
              </p>
            </div>
          </HudPanel>

          <HudPanel label={profileScreen.mainQuestLabel} className="p-5 pt-6">
            <p className="text-sm text-ink">{profileScreen.mainQuest}</p>
            <div className="mt-4 flex gap-1.5 text-error" aria-hidden>
              {Array.from({ length: 3 }, (_, index) => (
                <Icon key={index} name="heart" className="size-4" />
              ))}
            </div>
          </HudPanel>

          <HudPanel label={profileScreen.recordsLabel} className="p-5 pt-6">
            <SectionLabel className="!text-ink-muted">
              {profileScreen.educationLabel}
            </SectionLabel>
            <ul className="mt-2 space-y-1">
              {education.map((entry) => (
                <li key={entry.school}>
                  <p className="font-mono text-[12px] text-ink">{entry.course}</p>
                  <p className="font-mono text-[11px] text-ink-dim">
                    {entry.school} · {entry.dates}
                  </p>
                </li>
              ))}
            </ul>

            <SectionLabel className="mt-5 !text-ink-muted">
              {profileScreen.languagesLabel}
            </SectionLabel>
            <ul className="mt-2 space-y-1">
              {languages.map((language) => (
                <li key={language.name} className="flex justify-between gap-3 font-mono text-[12px]">
                  <span className="text-ink">{language.name}</span>
                  <span className="text-ink-dim">{language.level}</span>
                </li>
              ))}
            </ul>

            <SectionLabel className="mt-5 !text-ink-muted">
              {profileScreen.certificationsLabel}
            </SectionLabel>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {certifications.map((certification) => (
                <li key={certification}>
                  <TechTag>{certification}</TechTag>
                </li>
              ))}
            </ul>
          </HudPanel>
        </div>

        {/* ---- Right column: status, attributes, stack ---- */}
        <div className="cq-enter flex flex-col gap-6" style={{ '--cq-delay': '90ms' }}>
          <HudPanel label="STATUS SUMMARY" className="p-5 pt-7 sm:p-7 sm:pt-8">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,240px)] sm:gap-8">
              <div>
                <SectionLabel className="!text-ink-muted">{profileScreen.classLabel}</SectionLabel>
                <p className="mt-1.5 flex items-center gap-2 font-display text-xl text-ink sm:text-2xl">
                  <Icon name="terminal" className="size-5 shrink-0 text-gold" />
                  {profileScreen.className}
                </p>

                <SectionLabel className="mt-6 !text-ink-muted">
                  {profileScreen.rolesLabel}
                </SectionLabel>
                <p className="mt-1.5 font-mono text-sm text-ink">
                  {profileScreen.roles.join(' · ')}
                </p>
              </div>

              <div className="hidden w-px bg-outline-muted/60 sm:block" />

              <div>
                <SectionLabel className="!text-ink-muted">{profileScreen.expLabel}</SectionLabel>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-gold cq-pixel-text--gold sm:text-5xl">
                    {profileScreen.expValue}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-ink-muted uppercase">
                    {profileScreen.expUnit}
                  </span>
                </p>
                <ProgressBar
                  value={profileScreen.expProgress}
                  segments={10}
                  delayMs={300}
                  className="mt-4"
                />
              </div>
            </div>

            <p className="mt-7 border-t border-outline-muted/60 pt-5 text-sm leading-relaxed text-ink-muted">
              {profileScreen.bio}
            </p>
          </HudPanel>

          <HudPanel label={profileScreen.attributesLabel} className="p-5 pt-7 sm:p-7 sm:pt-8">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {attributes.map((attribute, index) => (
                <li key={attribute.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-ink uppercase">
                      {attribute.label}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-gold uppercase">
                      {ui.skillLevels[attribute.level]}
                    </span>
                  </div>
                  <SegmentedBar
                    level={attribute.level}
                    delayMs={200 + index * 60}
                    className="mt-2 w-full"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-outline-muted/60 pt-5">
              <SectionLabel>{ui.techStack}</SectionLabel>
              <ul className="mt-3 flex flex-wrap gap-2">
                {techSummary.map((tech) => (
                  <li key={tech}>
                    <TechTag>{tech}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
          </HudPanel>
        </div>
      </div>
    </GameShell>
  );
}
