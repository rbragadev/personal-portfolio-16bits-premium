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
  /**
   * Reached by clicking into something rather than by paging — the quest
   * detail hangs off the quest log. Drill-downs are kept out of the menu AND
   * out of the Previous/Next sequence, so paging moves between top-level
   * screens only.
   */
  drilldown?: boolean;
  /** For a drill-down: the sequence screen it belongs to. */
  parentPath?: string;
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
  { number: '06', path: '/quests/r10', icon: 'file', drilldown: true, parentPath: '/quests' },
  { number: '07', path: '/side-quests', icon: 'sparkles', titleInPage: true },
  { number: '08', path: '/impact', icon: 'chart', titleInPage: true },
  { number: '09', path: '/contact', icon: 'at', cinematic: true },
];

/** Top-level screens: what the menu lists and what Previous/Next walks. */
export const sequence = screens.filter((screen) => !screen.drilldown);

export const menuScreens = sequence;

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

/**
 * Previous/Next for the pager and the arrow keys.
 *
 * On a drill-down, Previous returns to the screen it hangs off and Next
 * continues past it — so /quests/r10 goes back to Quests and forward to Side
 * Quests, never sideways into another detail page.
 */
export const neighboursOf = (pathname: string) => {
  const screen = screenForPath(pathname);
  if (!screen) return { previous: undefined, next: undefined };

  if (screen.drilldown) {
    const parent = sequence.findIndex((entry) => entry.path === screen.parentPath);
    if (parent === -1) return { previous: undefined, next: undefined };
    return {
      previous: sequence[parent],
      next: parent < sequence.length - 1 ? sequence[parent + 1] : undefined,
    };
  }

  const index = sequence.findIndex((entry) => entry.path === screen.path);
  return {
    previous: index > 0 ? sequence[index - 1] : undefined,
    next: index !== -1 && index < sequence.length - 1 ? sequence[index + 1] : undefined,
  };
};
