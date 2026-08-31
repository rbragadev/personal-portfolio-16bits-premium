import type { CSSProperties, ReactNode } from 'react';

type HudPanelProps = {
  children: ReactNode;
  /** Small gold label that sits on the panel's top border. */
  label?: string;
  className?: string;
  variant?: 'default' | 'raised' | 'inset';
  /** Gold rivets at the four corners. */
  corners?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside';
  /** Used to stagger entrance animations via --cq-delay. */
  style?: CSSProperties;
};

const variants = {
  default: 'cq-panel',
  raised: 'cq-panel cq-panel--raised',
  inset: 'cq-panel cq-panel--inset',
} as const;

/** The ornate container every screen is built from. */
export function HudPanel({
  children,
  label,
  className = '',
  variant = 'default',
  corners = false,
  as: Tag = 'div',
  style,
}: HudPanelProps) {
  return (
    <Tag
      className={`${variants[variant]} ${corners ? 'cq-corners' : ''} ${className}`}
      style={style}
    >
      {label ? (
        <span className="absolute -top-2.5 left-4 bg-bg px-2 font-mono text-[10px] font-bold tracking-[0.18em] text-gold">
          {label}
        </span>
      ) : null}
      {corners ? (
        <>
          <span className="cq-corner cq-corner--tl" />
          <span className="cq-corner cq-corner--tr" />
          <span className="cq-corner cq-corner--bl" />
          <span className="cq-corner cq-corner--br" />
        </>
      ) : null}
      {children}
    </Tag>
  );
}
