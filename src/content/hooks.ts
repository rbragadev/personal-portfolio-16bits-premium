import { useContext } from 'react';
import { LanguageContext } from './languageContext';
import type { LanguageValue } from './languageContext';
import type { Content } from './LanguageProvider';
import type { UiStrings } from './ui';

const useLanguageContext = (): LanguageValue => {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return value;
};

/** The current locale and the setter behind the toggle. */
export function useLanguage() {
  const { locale, setLocale } = useLanguageContext();
  return { locale, setLocale };
}

/** All screen content, already resolved to the active language. */
export function useContent(): Content {
  return useLanguageContext().content;
}

/** Interface strings (menu labels, status words, button text). */
export function useUi(): UiStrings {
  return useLanguageContext().ui;
}
