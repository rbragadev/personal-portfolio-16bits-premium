import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost';

const base =
  'cq-focusable inline-flex items-center justify-center gap-2 border px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 min-h-11';

const variants: Record<Variant, string> = {
  primary:
    'border-gold text-gold bg-gold/5 hover:bg-gold/15 hover:shadow-[0_0_24px_-4px_rgba(255,215,0,0.6)]',
  ghost:
    'border-outline-muted text-ink-muted bg-surface-lowest/60 hover:border-gold/60 hover:text-gold',
};

type CommonProps = { children: ReactNode; variant?: Variant; className?: string };

export function PixelButton({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PixelLink({
  children,
  to,
  variant = 'primary',
  className = '',
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function PixelAnchor({
  children,
  href,
  variant = 'primary',
  className = '',
}: CommonProps & { href: string }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  );
}
