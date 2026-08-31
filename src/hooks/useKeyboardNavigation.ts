import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { neighboursOf } from '../app/navigation';

/** Elements where arrow keys and Enter already mean something to the user. */
const INTERACTIVE = new Set(['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A']);

const isTypingContext = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return INTERACTIVE.has(target.tagName) || target.isContentEditable;
};

/** Left/Right arrows page through the nine screens. */
export function useKeyboardNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingContext(event.target)) return;

      const { previous, next } = neighboursOf(pathname);

      if (event.key === 'ArrowRight' && next) {
        event.preventDefault();
        navigate(next.path);
      }

      if (event.key === 'ArrowLeft' && previous) {
        event.preventDefault();
        navigate(previous.path);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [navigate, pathname]);
}
