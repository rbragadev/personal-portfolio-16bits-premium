/* Single import surface for content. Pages read everything through the hooks
   so they never have to know which language is active. */

export { LanguageProvider } from './LanguageProvider';
export type { Content } from './LanguageProvider';
export { useContent, useLanguage, useUi } from './hooks';
export { LOCALES, localeNames } from './locale';
export type { Locale } from './locale';
export type { UiStrings } from './ui';
