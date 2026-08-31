import { Link } from 'react-router-dom';
import { useContent, useUi } from '../../content';
import { Avatar } from '../ui/Avatar';
import { Icon } from '../ui/Icon';
import { LanguageToggle } from '../ui/LanguageToggle';
import { NavList } from './NavList';

/** Persistent left HUD column. Desktop only — mobile uses the drawer. */
export function Sidebar() {
  const { identity } = useContent();
  const ui = useUi();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-outline-muted bg-surface-lowest lg:flex">
      <div className="flex flex-col items-center gap-3 px-6 pt-8 pb-6">
        <Avatar className="size-24" />
        <h2 className="text-center font-display text-2xl leading-tight text-gold cq-pixel-text">
          {identity.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="font-mono text-[10px] tracking-[0.18em] text-ink-muted uppercase">
          {identity.rank}
        </p>
      </div>

      <div className="mx-6 border-t border-outline-muted/60" />

      <nav aria-label={ui.menu.screens} className="flex-1 overflow-y-auto py-5">
        <NavList />
      </nav>

      <div className="border-t border-outline-muted/60 p-5">
        <Link
          to="/"
          className="cq-focusable flex min-h-11 items-center justify-center border border-gold/70 bg-gold/5 font-mono text-[11px] font-bold tracking-[0.2em] text-gold uppercase transition-all hover:bg-gold/15 hover:shadow-[0_0_20px_-6px_rgba(255,215,0,0.7)]"
        >
          {ui.menu.pressStart}
        </Link>
        <p className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-ink-dim uppercase">
          <Icon name="target" className="size-3 shrink-0" />
          {identity.location}
        </p>
        <div className="mt-3 flex justify-center">
          <LanguageToggle />
        </div>
      </div>
    </aside>
  );
}
