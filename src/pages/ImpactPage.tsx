import { GameShell } from '../components/layout/GameShell';
import { FramedArt } from '../components/ui/FramedArt';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { PixelLink } from '../components/ui/PixelButton';
import { ContributionCard } from '../components/portfolio/ContributionCard';
import { artwork } from '../config/assets';
import { useContent } from '../content';

/** Screen 08 — the screen that answers "how can you help my team?". */
export function ImpactPage() {
  const { impactScreen, contributionsSection } = useContent();
  const { impactCards, valueAttributes } = impactScreen;
  const { contributions } = contributionsSection;

  return (
    <GameShell>
      <div className="cq-enter mb-8 border-b border-outline-muted/60 pb-5">
        <h2 className="font-display text-3xl tracking-[0.04em] text-gold cq-pixel-text--gold sm:text-4xl">
          {impactScreen.title}
        </h2>
        <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">
          {impactScreen.eyebrow}
        </p>
      </div>

      {/* ---- Proof cards ---- */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {impactCards.map((card, index) => (
          <HudPanel
            key={card.label}
            label={card.label}
            corners
            className="cq-enter flex flex-col p-5 pt-7"
            style={{ '--cq-delay': `${index * 80}ms` }}
          >
            <p className="font-display text-2xl leading-tight text-gold cq-pixel-text--gold">
              {card.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.caption}</p>
          </HudPanel>
        ))}
      </div>

      {/* ---- Signature contributions ---- */}
      <section className="mt-10">
        <div className="cq-enter flex flex-wrap items-end justify-between gap-3 border-b border-outline-muted/60 pb-4">
          <h3 className="font-display text-xl tracking-[0.04em] text-ink cq-pixel-text sm:text-2xl">
            {contributionsSection.label}
          </h3>
          <p className="max-w-md font-mono text-[11px] text-ink-dim">
            {contributionsSection.intro}
          </p>
        </div>

        <div className="mt-5 grid items-start gap-5 xl:grid-cols-2">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
              delayMs={index * 80}
            />
          ))}
        </div>
      </section>

      {/* ---- How I help ---- */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start">
        <HudPanel
          label={impactScreen.howIHelpLabel}
          className="cq-enter p-5 pt-7 sm:p-7 sm:pt-8"
          style={{ '--cq-delay': '240ms' }}
        >
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {valueAttributes.map((attribute) => (
              <li key={attribute.index} className="flex gap-4">
                <span className="shrink-0 font-display text-2xl leading-none text-purple-soft/70">
                  {attribute.index}
                </span>
                <span>
                  <span className="block font-mono text-[12px] font-bold tracking-[0.16em] text-gold uppercase">
                    {attribute.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted">
                    {attribute.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </HudPanel>

        {/* ---- Main objective ---- */}
        <HudPanel
          label={impactScreen.mainObjectiveLabel}
          corners
          variant="raised"
          className="cq-enter relative overflow-hidden p-5 pt-7 sm:p-6 sm:pt-8"
          style={{ '--cq-delay': '300ms' }}
        >
          <FramedArt asset={artwork.impactCore} scrim={0.82} />
          <div className="relative">
            <Icon name="rocket" className="size-8 text-gold" />
            <p className="mt-4 text-sm leading-relaxed text-ink">{impactScreen.mainObjective}</p>
            <PixelLink to="/contact" className="mt-6 w-full">
              Let&apos;s talk
              <Icon name="chevron-right" className="size-3" />
            </PixelLink>
          </div>
        </HudPanel>
      </div>
    </GameShell>
  );
}
