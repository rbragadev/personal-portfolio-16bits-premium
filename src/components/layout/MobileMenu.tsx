import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContent, useUi } from '../../content';
import { Avatar } from '../ui/Avatar';
import { Icon } from '../ui/Icon';
import { LanguageToggle } from '../ui/LanguageToggle';
import { NavList } from './NavList';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/** Full-height drawer that replaces the sidebar below the desktop breakpoint. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { identity } = useContent();
  const ui = useUi();

  // Escape closes the drawer; focus moves into it so keyboard users are not
  // left behind on the page underneath.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label={ui.menu.close}
        onClick={onClose}
        className="absolute inset-0 bg-surface-lowest/80 backdrop-blur-md"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={ui.menu.screens}
        className="cq-enter absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col border-r border-outline-muted bg-surface-lowest outline-none"
      >
        <div className="flex items-center justify-between border-b border-outline-muted/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <Avatar className="size-11" />
            <div>
              <p className="font-display text-base leading-tight text-gold">{identity.name}</p>
              <p className="font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                {identity.rank}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.menu.close}
            className="cq-focusable flex size-11 items-center justify-center text-ink-muted hover:text-gold"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>

        <nav aria-label={ui.menu.screens} className="flex-1 overflow-y-auto py-4">
          <NavList onNavigate={onClose} size="roomy" />
        </nav>

        <div className="flex items-center gap-3 border-t border-outline-muted/60 p-5">
          <Link
            to="/"
            onClick={onClose}
            className="cq-focusable flex min-h-11 flex-1 items-center justify-center border border-gold/70 bg-gold/5 font-mono text-[11px] font-bold tracking-[0.2em] text-gold uppercase"
          >
            {ui.menu.pressStart}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
