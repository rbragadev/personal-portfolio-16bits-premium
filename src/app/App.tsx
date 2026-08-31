import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { ContactPage } from '../pages/ContactPage';
import { ImpactPage } from '../pages/ImpactPage';
import { JourneyPage } from '../pages/JourneyPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProfilePage } from '../pages/ProfilePage';
import { QuestDetailPage } from '../pages/QuestDetailPage';
import { QuestLogPage } from '../pages/QuestLogPage';
import { SideQuestsPage } from '../pages/SideQuestsPage';
import { SkillsPage } from '../pages/SkillsPage';
import { StartPage } from '../pages/StartPage';
import { screenForPath } from './navigation';
import { useContent, useUi } from '../content';

/** Reset scroll and update the document title on every screen change. */
function ScreenEffects() {
  const { pathname } = useLocation();
  const { identity } = useContent();
  const ui = useUi();

  useEffect(() => {
    window.scrollTo(0, 0);
    const screen = screenForPath(pathname);
    document.title = screen
      ? `${screen.number} ${ui.nav[screen.number].title} — ${identity.name}`
      : `${identity.name} — ${identity.title}`;
  }, [pathname, identity, ui]);

  return null;
}

export function App() {
  useKeyboardNavigation();

  return (
    <div className="cq-scanlines">
      <ScreenEffects />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/quests" element={<QuestLogPage />} />
        <Route path="/quests/:questId" element={<QuestDetailPage />} />
        <Route path="/side-quests" element={<SideQuestsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
