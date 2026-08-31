import { GameShell } from '../components/layout/GameShell';
import { HudPanel } from '../components/ui/HudPanel';
import { SegmentedBar } from '../components/ui/SegmentedBar';
import { TechTag } from '../components/ui/TechTag';
import { useContent, useUi } from '../content';
import type { SkillGroup } from '../types/portfolio';

/** A group renders as bars when its items carry a level, else as tags. */
function SkillPanel({ group, delay }: { group: SkillGroup; delay: number }) {
  const ui = useUi();
  const graded = group.items.some((item) => item.level);

  return (
    <HudPanel
      corners
      label={`[ ${group.label} ]`}
      className="cq-enter p-5 pt-7 sm:p-6 sm:pt-8"
      as="section"
    >
      {graded ? (
        <ul className="flex flex-col gap-3">
          {group.items.map((item, index) => (
            <li key={item.name} className="flex items-center justify-between gap-4">
              <span className="font-mono text-[13px] text-ink">{item.name}</span>
              {item.level ? (
                <span className="flex shrink-0 items-center gap-3">
                  <span className="hidden font-mono text-[9px] tracking-[0.14em] text-ink-dim uppercase sm:inline">
                    {ui.skillLevels[item.level]}
                  </span>
                  <SegmentedBar level={item.level} delayMs={delay + index * 50} />
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li key={item.name}>
              <TechTag>{item.name}</TechTag>
            </li>
          ))}
        </ul>
      )}
    </HudPanel>
  );
}

/** Screen 04 — capabilities, scannable, not a logo wall. */
export function SkillsPage() {
  const { skillsScreen } = useContent();
  const { skillGroups } = skillsScreen;

  return (
    <GameShell>
      <div className="cq-enter mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-outline-muted/60 pb-5">
        <h2 className="font-display text-3xl tracking-[0.04em] text-gold cq-pixel-text--gold sm:text-4xl">
          {skillsScreen.title}
        </h2>
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase">
          {skillsScreen.statusLabel}: <span className="text-gold">{skillsScreen.statusValue}</span>
        </p>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        {skillGroups.map((group, index) => (
          <SkillPanel key={group.id} group={group} delay={index * 120} />
        ))}
      </div>
    </GameShell>
  );
}
