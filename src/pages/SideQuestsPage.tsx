import { useState } from 'react';
import { GameShell } from '../components/layout/GameShell';
import { FramedArt } from '../components/ui/FramedArt';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { SectionLabel } from '../components/ui/SectionLabel';
import { TechTag } from '../components/ui/TechTag';
import { artwork } from '../config/assets';
import { useContent, useUi } from '../content';

/** Screen 07 — what Raphael builds unprompted. */
export function SideQuestsPage() {
  const { sideQuestsScreen } = useContent();
  const ui = useUi();
  const { sideProjects } = sideQuestsScreen;
  const [selectedId, setSelectedId] = useState(sideProjects[0].id);
  const selected = sideProjects.find((project) => project.id === selectedId) ?? sideProjects[0];

  return (
    <GameShell>
      <div className="cq-enter mb-6 border-b border-outline-muted/60 pb-5">
        <h2 className="font-display text-3xl tracking-[0.04em] text-ink cq-pixel-text sm:text-4xl">
          {sideQuestsScreen.title}
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
        {/* ---- Selector ---- */}
        <ul className="cq-enter flex flex-col gap-3">
          {sideProjects.map((project, index) => {
            const isSelected = project.id === selected.id;
            return (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  aria-pressed={isSelected}
                  className={`cq-focusable flex w-full items-center gap-3 border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-purple-bright bg-linear-to-r from-purple/60 to-transparent shadow-[0_0_26px_-10px_rgba(138,43,226,0.9)]'
                      : 'border-outline-muted bg-surface/70 hover:border-gold/50 hover:bg-surface-high/60'
                  }`}
                  style={{ '--cq-delay': `${index * 60}ms` }}
                >
                  <Icon
                    name={isSelected ? 'sparkles' : 'dot'}
                    className={`size-4 shrink-0 ${isSelected ? 'text-gold' : 'text-ink-dim'}`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-base text-ink">{project.name}</span>
                    <span className="block font-mono text-[11px] text-ink-dim">
                      {project.subtitle}
                    </span>
                  </span>
                  <Icon
                    name="chevron-right"
                    className={`size-4 shrink-0 transition-opacity ${
                      isSelected ? 'text-gold opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* ---- Detail ---- */}
        <div className="cq-enter flex flex-col gap-4" style={{ '--cq-delay': '120ms' }}>
          <HudPanel variant="raised" className="relative overflow-hidden">
            {/* Workshop artwork sits behind the detail, as in the reference. */}
            <div className="relative h-44 sm:h-60">
              <FramedArt asset={artwork.sideQuestLab} />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="border border-gold/60 bg-surface-lowest/85 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-gold uppercase backdrop-blur-sm">
                  {sideQuestsScreen.statusLabel}: {sideQuestsScreen.statusValue}
                </span>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{
                  background:
                    'linear-gradient(to top, var(--cq-surface-high), rgba(31,42,60,0))',
                }}
                aria-hidden
              />
            </div>

            <div className="relative p-5 sm:p-7">
              {/* key= restarts the entrance animation on each selection */}
              <div key={selected.id} className="cq-enter">
                <SectionLabel>{selected.subtitle}</SectionLabel>
                <h3 className="mt-2 font-display text-2xl text-ink">{selected.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {selected.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <li key={tech}>
                      <TechTag>{tech}</TechTag>
                    </li>
                  ))}
                </ul>

                {selected.href ? (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cq-focusable mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-gold uppercase hover:underline"
                  >
                    <Icon name="link" className="size-3.5" />
                    {ui.actions.openProject}
                  </a>
                ) : null}
              </div>
            </div>
          </HudPanel>

          {/* Terminal footer */}
          <HudPanel variant="inset" corners className="p-5 text-center">
            <p className="font-mono text-[13px] text-ink">
              <span className="mr-2 text-gold">&gt;</span>
              {sideQuestsScreen.terminalLine}
              <span className="cq-caret ml-1 text-gold">_</span>
            </p>
          </HudPanel>
        </div>
      </div>
    </GameShell>
  );
}
