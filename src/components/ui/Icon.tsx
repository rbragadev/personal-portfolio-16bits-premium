/* Self-contained icon set — avoids pulling an icon package for ~20 glyphs. */

export type IconGlyph =
  | 'play'
  | 'user'
  | 'map'
  | 'medal'
  | 'clipboard'
  | 'file'
  | 'sparkles'
  | 'chart'
  | 'at'
  | 'menu'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'link'
  | 'globe'
  | 'mail'
  | 'check'
  | 'calendar'
  | 'grid'
  | 'terminal'
  | 'rocket'
  | 'users'
  | 'target'
  | 'heart'
  | 'gamepad'
  | 'code'
  | 'briefcase'
  | 'school'
  | 'award'
  | 'quote'
  | 'dot';

const paths: Record<IconGlyph, string> = {
  play: 'M8 5v14l11-7z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14',
  medal: 'M12 3 9 9h6l-3-6Zm0 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3 1 2 2 .2-1.5 1.4.4 2.2-1.9-1-1.9 1 .4-2.2L9 14.2 11 14l1-2Z',
  clipboard:
    'M9 4h6v3H9V4Zm-2 1H5v16h14V5h-2M8 11h8M8 15h8M8 19h5',
  file: 'M6 3h8l4 4v14H6V3Zm8 0v4h4M9 12h6M9 16h6',
  sparkles: 'm12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 9 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9L19 12Z',
  chart: 'M3 17l5-6 4 3 5-7 4 4M3 21h18',
  at: 'M12 12a3 3 0 1 0 0 .01M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.6 7.2',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  'chevron-left': 'm14 6-6 6 6 6',
  'chevron-right': 'm10 6 6 6-6 6',
  'chevron-down': 'm6 10 6 6 6-6',
  link: 'M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1m-1 8a5 5 0 0 1-7 0 5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 0',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c-3 3-3 15 0 18m0-18c3 3 3 15 0 18M3.5 9h17M3.5 15h17',
  mail: 'M3 6h18v12H3V6Zm0 1 9 7 9-7',
  check: 'M4 12.5 9 17.5 20 6.5',
  calendar: 'M4 6h16v15H4V6Zm4-3v4m8-4v4M4 11h16',
  grid: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z',
  terminal: 'M4 4h16v16H4V4Zm3 5 3 3-3 3m5 0h5',
  rocket:
    'M12 3c3 2 5 5.5 5 9l-2.5 3h-5L7 12c0-3.5 2-7 5-9Zm0 6a1.5 1.5 0 1 0 0 .01M9.5 18 8 21m6.5-3L16 21',
  users: 'M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 8a6 6 0 0 1 12 0m1.5-14.4a3.5 3.5 0 0 1 0 6.8M18 20a6 6 0 0 0-2.5-4.9',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-3a1.5 1.5 0 1 0 0-.01',
  heart: 'M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.5-7 9-7 9Z',
  gamepad: 'M7 8h10a4 4 0 0 1 4 4v3a2.5 2.5 0 0 1-4.5 1.5L15 15H9l-1.5 1.5A2.5 2.5 0 0 1 3 15v-3a4 4 0 0 1 4-4Zm-.5 3v2m-1-1h2m9 0h.01M17 13h.01',
  code: 'm8 8-5 4 5 4m8-8 5 4-5 4M14 5l-4 14',
  briefcase: 'M3 8h18v12H3V8Zm6 0V5h6v3M3 13h18',
  school: 'M2 8.5 12 4l10 4.5L12 13 2 8.5Zm4 3v5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-5',
  award: 'M12 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 9.5L7.5 21l4.5-2.5L16.5 21 15 13.5',
  quote: 'M8 7H5v4h3v6m8-10h-3v4h3v6',
  dot: 'M12 12a2 2 0 1 0 0 .01',
};

const filled: Partial<Record<IconGlyph, boolean>> = { play: true, dot: true };

type IconProps = {
  name: IconGlyph;
  className?: string;
  /** Purely decorative icons are hidden from assistive tech. */
  title?: string;
};

export function Icon({ name, className = 'size-4', title }: IconProps) {
  const isFilled = filled[name];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={paths[name]} />
    </svg>
  );
}
