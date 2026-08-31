import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgrounds } from '../config/assets';
import { useContent } from '../content';
import { GameShell } from '../components/layout/GameShell';
import { FramedArt } from '../components/ui/FramedArt';
import { Icon } from '../components/ui/Icon';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { ProgressBar } from '../components/ui/SegmentedBar';

const NEXT_SCREEN = '/profile';

/** Screen 01 — the five-second pitch, over the Neo-Kyoto cityscape. */
export function StartPage() {
  const navigate = useNavigate();
  const { identity, startScreen } = useContent();
  const [pressed, setPressed] = useState(false);

  // Enter starts the presentation, matching the PRESS START affordance.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') return;
      if (document.activeElement instanceof HTMLElement) {
        const tag = document.activeElement.tagName;
        if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT') return;
      }
      navigate(NEXT_SCREEN);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  return (
    <GameShell
      cinematic
      showTopBar={false}
      background={<FramedArt asset={backgrounds.start} vignette />}
    >
      {/* Screen chip, top-left */}
      <div className="absolute top-5 left-4 z-20 flex items-center gap-3 border border-outline-muted bg-surface-lowest/80 px-3 py-2 backdrop-blur-sm sm:top-6 sm:left-6">
        <span className="border border-gold px-1.5 font-mono text-[10px] font-bold text-gold">
          {startScreen.screenNumber}
        </span>
        <span className="font-display text-xs tracking-[0.18em] text-ink sm:text-sm">
          {startScreen.screenLabel}
        </span>
      </div>

      <div className="absolute top-5 right-4 z-20 sm:top-6 sm:right-6">
        <LanguageToggle className="bg-surface-lowest/80 backdrop-blur-sm" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:py-28">
        <h1 className="cq-enter cq-pixel-text font-display text-[clamp(2.1rem,8vw,4.25rem)] leading-none tracking-[0.06em] text-ink">
          {identity.name.toUpperCase()}
        </h1>

        <p
          className="cq-enter mt-5 font-mono text-[11px] font-bold tracking-[0.28em] text-gold sm:text-sm"
          style={{ '--cq-delay': '80ms' }}
        >
          {startScreen.title}
        </p>
        <p
          className="cq-enter mt-2 font-mono text-[10px] font-bold tracking-[0.24em] text-gold/80 sm:text-xs"
          style={{ '--cq-delay': '120ms' }}
        >
          {startScreen.subtitle}
        </p>

        <p
          className="cq-enter mt-7 max-w-md text-sm whitespace-pre-line text-ink sm:text-base"
          style={{ '--cq-delay': '180ms' }}
        >
          {startScreen.tagline}
        </p>

        {startScreen.disciplines ? (
          <p
            className="cq-enter mt-4 max-w-lg font-mono text-[10px] tracking-[0.14em] text-ink-dim sm:text-[11px]"
            style={{ '--cq-delay': '220ms' }}
          >
            {startScreen.disciplines}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => {
            setPressed(true);
            navigate(NEXT_SCREEN);
          }}
          className="cq-focusable cq-enter mt-10 flex min-h-14 items-center gap-3 border-2 border-gold bg-surface-lowest/70 px-9 font-mono text-xs font-bold tracking-[0.26em] text-gold uppercase backdrop-blur-sm transition-all hover:bg-gold/15 hover:shadow-[0_0_36px_-6px_rgba(255,215,0,0.75)] sm:text-sm"
          style={{ '--cq-delay': '260ms' }}
        >
          <span className={pressed ? '' : 'cq-blink'}>{startScreen.ctaLabel}</span>
          <Icon name="play" className="size-3" />
        </button>

        <Icon name="chevron-down" className="cq-float mt-6 size-5 text-gold/70" />
      </div>

      {/* Status HUD — bottom-left on desktop, centred under the CTA on mobile */}
      <div className="relative z-10 mx-auto mb-6 w-full max-w-xs px-4 sm:absolute sm:bottom-8 sm:left-8 sm:mx-0 sm:mb-0 sm:w-64 sm:px-0">
        <div className="cq-panel cq-corners relative p-4">
          <span className="cq-corner cq-corner--tl" />
          <span className="cq-corner cq-corner--tr" />
          <span className="cq-corner cq-corner--bl" />
          <span className="cq-corner cq-corner--br" />

          <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2.5 font-mono text-[10px] tracking-[0.16em] uppercase">
            <span className="text-ink-muted">{startScreen.hud.levelLabel}</span>
            <span className="font-bold text-ink">{startScreen.hud.level}</span>

            <span className="text-ink-muted">{startScreen.hud.expLabel}</span>
            <ProgressBar
              value={startScreen.hud.expFilled / startScreen.hud.expTotal}
              segments={startScreen.hud.expTotal}
              delayMs={400}
            />

            <span className="text-ink-muted">{startScreen.hud.hpLabel}</span>
            <span className="flex gap-1.5 text-error" aria-hidden>
              {Array.from({ length: startScreen.hud.hearts }, (_, index) => (
                <Icon key={index} name="heart" className="size-4" />
              ))}
            </span>
          </div>

          <div className="mt-4 border-t border-outline-muted/60 pt-3">
            <p className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase">
              {startScreen.hud.locationLabel}
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-ink uppercase">
              {identity.location}
            </p>
          </div>
        </div>
      </div>
    </GameShell>
  );
}
