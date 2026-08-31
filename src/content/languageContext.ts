import { createContext } from 'react';
import type { Content } from './LanguageProvider';
import type { Locale } from './locale';
import type { UiStrings } from './ui';

export type LanguageValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
  ui: UiStrings;
};

/* Lives apart from the provider component so the hooks module and the
   provider module can both import it without breaking Fast Refresh. */
export const LanguageContext = createContext<LanguageValue | null>(null);
