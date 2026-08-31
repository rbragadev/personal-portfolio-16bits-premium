import { GameShell } from '../components/layout/GameShell';
import { useUi } from '../content';
import { HudPanel } from '../components/ui/HudPanel';
import { PixelLink } from '../components/ui/PixelButton';

export function NotFoundPage() {
  const ui = useUi();

  return (
    <GameShell>
      <HudPanel corners className="mx-auto max-w-lg p-8 text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-ink-dim uppercase">{ui.notFound.code}</p>
        <h2 className="mt-2 font-display text-3xl text-gold cq-pixel-text--gold">
          {ui.notFound.title}
        </h2>
        <p className="mt-4 text-sm text-ink-muted">
          {ui.notFound.body}
        </p>
        <PixelLink to="/" className="mt-7">
          {ui.menu.pressStart}
        </PixelLink>
      </HudPanel>
    </GameShell>
  );
}
