import { Link, useLocation } from 'react-router-dom';
import { neighboursOf } from '../../app/navigation';
import { useUi } from '../../content';
import { Icon } from '../ui/Icon';

/** Previous / Next pager. Mirrors the arrow-key shortcuts. */
export function SequentialNav({ className = '' }: { className?: string }) {
  const { pathname } = useLocation();
  const ui = useUi();
  const { previous, next } = neighboursOf(pathname);

  if (!previous && !next) return null;

  return (
    <nav
      aria-label={ui.menu.sequential}
      className={`flex items-center justify-between gap-3 border-t border-outline-muted/60 pt-5 ${className}`}
    >
      {previous ? (
        <Link
          to={previous.path}
          className="cq-focusable group flex min-h-11 items-center gap-2 px-3 font-mono text-[11px] tracking-[0.14em] text-ink-dim uppercase transition-colors hover:text-gold"
        >
          <Icon name="chevron-left" className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="hidden sm:inline">{previous.number}</span>
          <span>{ui.nav[previous.number].label}</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          to={next.path}
          className="cq-focusable group flex min-h-11 items-center gap-2 px-3 font-mono text-[11px] tracking-[0.14em] text-gold uppercase transition-colors hover:text-gold-soft"
        >
          <span>{ui.nav[next.number].label}</span>
          <span className="hidden sm:inline">{next.number}</span>
          <Icon name="chevron-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
