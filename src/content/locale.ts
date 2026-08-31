/* ---------------------------------------------------------------------------
   Localisation primitives.

   Every content file exports `{ en, pt }` side by side, so the two languages
   of the same string sit next to each other and cannot silently drift — the
   `Localized<T>` type makes a missing translation a compile error.
   --------------------------------------------------------------------------- */

export const LOCALES = ['en', 'pt'] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T> = Record<Locale, T>;

export const DEFAULT_LOCALE: Locale = 'en';

export const localeNames: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR' },
};

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
