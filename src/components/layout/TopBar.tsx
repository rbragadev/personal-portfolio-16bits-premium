import { totalScreens } from '../../app/navigation';
import type { ScreenRoute } from '../../app/navigation';
import { useUi } from '../../content';
import { Icon } from '../ui/Icon';
import { LanguageToggle } from '../ui/LanguageToggle';

type TopBarProps = {
  screen: ScreenRoute;
  onOpenMenu: () => void;
  /** Cinematic screens float the bar over artwork instead of on a surface. */
  transparent?: boolean;
};

/** Screen number + title on the left, position counter and menu on the right. */
export function TopBar({ screen, onOpenMenu, transparent }: TopBarProps) {
  const ui = useUi();
  const title = ui.nav[screen.number].title;

  return (
    <header
      className={`sticky top-0 z-30 flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-6 ${
        transparent
          ? 'border-outline-muted/40 bg-surface-lowest/70 backdrop-blur-sm'
          : 'border-outline-muted bg-surface-lowest'
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <Icon name="grid" className="hidden size-5 shrink-0 text-gold sm:block" />
        {/* When the page prints its own oversized title we hide the bar's copy
            visually but keep it in the accessibility tree — the h1 must never
            read as a bare screen number. */}
        <h1 className="truncate font-display text-sm tracking-[0.12em] text-gold sm:text-lg">
          <span className="text-ink-muted">{screen.number}</span>{' '}
          <span className={screen.titleInPage ? 'sr-only' : undefined}>{title}</span>
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <span className="hidden font-mono text-[11px] tracking-[0.16em] text-ink-dim sm:block">
          {screen.number} / {String(totalScreens).padStart(2, '0')}
        </span>
        <LanguageToggle className="lg:hidden" />
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={ui.menu.open}
          className="cq-focusable flex size-11 items-center justify-center text-ink-muted transition-colors hover:text-gold lg:hidden"
        >
          <Icon name="menu" className="size-5" />
        </button>
      </div>
    </header>
  );
}
