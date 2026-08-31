/* ---------------------------------------------------------------------------
   The nine screens, in narrative order.

   Structure only — paths, icons, order and flags. The visible label and title
   for each screen live in src/content/ui.ts keyed by `number`, so they can be
   translated without touching routing.

   This single list drives: the sidebar, the mobile drawer, the screen
   number/title in the top bar, and Previous/Next (including the arrow keys).
   --------------------------------------------------------------------------- */

export type ScreenRoute = {
  /** Two-digit screen number. Also the key into the localised nav labels. */
  number: string;
  path: string;
  icon: IconName;
  /** Cinematic screens run full-bleed with no sidebar. */
  cinematic?: boolean;
  /** Reachable by Previous/Next but hidden from the menu. */
  hiddenFromMenu?: boolean;
  /** Screen renders its own oversized title, so the bar stays compact. */
  titleInPage?: boolean;
};

export type IconName =
  | 'play'
  | 'user'
  | 'map'
  | 'medal'
  | 'clipboard'
  | 'file'
  | 'sparkles'
  | 'chart'
  | 'at';

export const screens: ScreenRoute[] = [
  { number: '01', path: '/', icon: 'play', cinematic: true },
  { number: '02', path: '/profile', icon: 'user' },
  { number: '03', path: '/journey', icon: 'map' },
  { number: '04', path: '/skills', icon: 'medal', titleInPage: true },
  { number: '05', path: '/quests', icon: 'clipboard' },
  { number: '06', path: '/quests/r10', icon: 'file', hiddenFromMenu: true },
  { number: '07', path: '/side-quests', icon: 'sparkles', titleInPage: true },
  { number: '08', path: '/impact', icon: 'chart', titleInPage: true },
  { number: '09', path: '/contact', icon: 'at', cinematic: true },
];

export const menuScreens = screens.filter((screen) => !screen.hiddenFromMenu);

export const totalScreens = screens.length;

/** Index of the screen owning `pathname`, matching /quests/:id to screen 06. */
export const indexOfPath = (pathname: string): number => {
  const exact = screens.findIndex((screen) => screen.path === pathname);
  if (exact !== -1) return exact;
  if (pathname.startsWith('/quests/')) {
    return screens.findIndex((screen) => screen.number === '06');
  }
  return -1;
};

export const screenForPath = (pathname: string): ScreenRoute | undefined => {
  const index = indexOfPath(pathname);
  return index === -1 ? undefined : screens[index];
};

export const neighboursOf = (pathname: string) => {
  const index = indexOfPath(pathname);
  return {
    previous: index > 0 ? screens[index - 1] : undefined,
    next: index !== -1 && index < screens.length - 1 ? screens[index + 1] : undefined,
  };
};
