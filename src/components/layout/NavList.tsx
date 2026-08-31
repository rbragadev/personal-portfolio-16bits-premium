import { NavLink } from 'react-router-dom';
import { menuScreens } from '../../app/navigation';
import { useUi } from '../../content';
import { Icon } from '../ui/Icon';
import type { IconGlyph } from '../ui/Icon';

type NavListProps = {
  /** Called after a link is followed — used to close the mobile drawer. */
  onNavigate?: () => void;
  size?: 'compact' | 'roomy';
};

/** The shared menu, rendered in both the desktop sidebar and mobile drawer. */
export function NavList({ onNavigate, size = 'compact' }: NavListProps) {
  const ui = useUi();

  return (
    <ul className="flex flex-col">
      {menuScreens.map((screen) => (
        <li key={screen.path}>
          <NavLink
            to={screen.path}
            end={screen.path === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                'cq-focusable relative flex items-center gap-3 font-mono tracking-[0.14em] uppercase transition-colors duration-200',
                size === 'roomy' ? 'min-h-12 px-5 text-sm' : 'min-h-11 px-6 text-xs',
                isActive
                  ? 'border-l-2 border-gold bg-linear-to-r from-purple/70 to-transparent text-ink'
                  : 'border-l-2 border-transparent text-ink-dim hover:bg-surface-low/60 hover:text-ink',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {/* Finger cursor on the active item, as in the design system. */}
                <Icon
                  name="chevron-right"
                  className={`absolute left-1 size-3 text-gold transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <Icon name={screen.icon as IconGlyph} className="size-4 shrink-0" />
                <span>{ui.nav[screen.number].label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
