import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  CaseStudy,
  ContactLink,
  Contribution,
  Experience,
} from '../types/portfolio';
import { LanguageContext } from './languageContext';
import type { LanguageValue } from './languageContext';
import { DEFAULT_LOCALE, isLocale, localeNames } from './locale';
import type { Locale, Localized } from './locale';
import { ui } from './ui';
import { contributionsSection } from './contributions';
import type { ContributionsSection } from './contributions';
import { contactLinks, credentials, identity } from './identity';
import type { Credentials, Identity } from './identity';
import { startScreen } from './screens/01-start';
import type { StartScreen } from './screens/01-start';
import { profileScreen, techSummary } from './screens/02-profile';
import type { ProfileScreen } from './screens/02-profile';
import { journeyScreen } from './screens/03-journey';
import type { JourneyScreen } from './screens/03-journey';
import { skillsScreen } from './screens/04-skills';
import type { SkillsScreen } from './screens/04-skills';
import { questLogScreen } from './screens/05-quests';
import type { QuestLogScreen } from './screens/05-quests';
import { questDetailScreen } from './screens/06-quest-details';
import type { QuestDetailScreen } from './screens/06-quest-details';
import { sideQuestsScreen } from './screens/07-side-quests';
import type { SideQuestsScreen } from './screens/07-side-quests';
import { impactScreen } from './screens/08-impact';
import type { ImpactScreen } from './screens/08-impact';
import { contactScreen } from './screens/09-contact';
import type { ContactScreen } from './screens/09-contact';

const STORAGE_KEY = 'cq-locale';

export type Content = {
  identity: Identity;
  credentials: Credentials;
  contactLinks: ContactLink[];
  techSummary: string[];
  startScreen: StartScreen;
  profileScreen: ProfileScreen;
  journeyScreen: JourneyScreen;
  skillsScreen: SkillsScreen;
  questLogScreen: QuestLogScreen;
  questDetailScreen: QuestDetailScreen;
  sideQuestsScreen: SideQuestsScreen;
  impactScreen: ImpactScreen;
  contactScreen: ContactScreen;
  contributionsSection: ContributionsSection;
  /** Lookups over the resolved locale's data. */
  findExperience: (id: string) => Experience | undefined;
  findCaseStudy: (id: string) => CaseStudy | undefined;
  findContributionForQuest: (questId: string) => Contribution | undefined;
};

const pick = <T,>(bundle: Localized<T>, locale: Locale): T => bundle[locale];

const buildContent = (locale: Locale): Content => {
  const questLog = pick(questLogScreen, locale);
  const questDetail = pick(questDetailScreen, locale);
  const contributions = pick(contributionsSection, locale);

  return {
    identity: pick(identity, locale),
    credentials: pick(credentials, locale),
    contactLinks,
    techSummary,
    startScreen: pick(startScreen, locale),
    profileScreen: pick(profileScreen, locale),
    journeyScreen: pick(journeyScreen, locale),
    skillsScreen: pick(skillsScreen, locale),
    questLogScreen: questLog,
    questDetailScreen: questDetail,
    sideQuestsScreen: pick(sideQuestsScreen, locale),
    impactScreen: pick(impactScreen, locale),
    contactScreen: pick(contactScreen, locale),
    contributionsSection: contributions,
    findExperience: (id) => questLog.experiences.find((entry) => entry.id === id),
    findCaseStudy: (id) => questDetail.caseStudies.find((entry) => entry.id === id),
    findContributionForQuest: (questId) =>
      contributions.contributions.find((entry) => entry.questId === questId),
  };
};

/** Stored choice first, then the browser's language, then English. */
const detectLocale = (): Locale => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Private browsing or blocked site data — fall through to detection.
  }

  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('pt')) {
    return 'pt';
  }
  return DEFAULT_LOCALE;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  // Keep <html lang> honest — screen readers and translation tools rely on it.
  useEffect(() => {
    document.documentElement.lang = localeNames[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not being able to remember the choice is not worth breaking the page.
    }
  }, []);

  const value = useMemo<LanguageValue>(
    () => ({ locale, setLocale, content: buildContent(locale), ui: ui[locale] }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
