import type { ReactNode } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { screenForPath } from '../../app/navigation';
import { MobileMenu } from './MobileMenu';
import { SequentialNav } from './SequentialNav';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

type GameShellProps = {
  children: ReactNode;
  /**
   * Cinematic screens (01, 09) run full-bleed with no sidebar and no content
   * padding — the artwork is the layout.
   */
  cinematic?: boolean;
  /** Cinematic screens draw their own background art behind the shell. */
  background?: ReactNode;
  /** Screen 01 renders its own corner chip instead of the full bar. */
  showTopBar?: boolean;
};

/** The frame every screen renders inside. */
export function GameShell({ children, cinematic, background, showTopBar = true }: GameShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const screen = screenForPath(pathname);

  if (cinematic) {
    return (
      <div className="relative min-h-dvh overflow-hidden">
        {background}
        <div className="relative z-10 flex min-h-dvh flex-col">
          {screen && showTopBar ? (
            <TopBar screen={screen} onOpenMenu={() => setMenuOpen(true)} transparent />
          ) : null}
          <main className="flex flex-1 flex-col">{children}</main>
        </div>
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh">
      {background ? <div className="fixed inset-0 z-0">{background}</div> : null}
      <Sidebar />
      <div className="relative z-10 lg:pl-64">
        {screen ? <TopBar screen={screen} onOpenMenu={() => setMenuOpen(true)} /> : null}
        <main className="relative mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          {children}
          <SequentialNav className="mt-10" />
        </main>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
