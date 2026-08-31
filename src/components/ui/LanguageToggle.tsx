import { LOCALES, localeNames, useLanguage, useUi } from '../../content';

/**
 * PT / EN switch.
 *
 * A two-option segmented control rather than a dropdown: with only two
 * languages, the alternative should be visible without a click.
 */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const ui = useUi();

  return (
    <div
      className={`flex shrink-0 border border-outline-muted ${className}`}
      role="group"
      aria-label={ui.menu.language}
    >
      {LOCALES.map((option) => {
        const isActive = option === locale;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={isActive}
            title={localeNames[option].label}
            className={`cq-focusable min-h-9 px-2.5 font-mono text-[10px] font-bold tracking-[0.14em] transition-colors ${
              isActive
                ? 'bg-gold/15 text-gold'
                : 'text-ink-dim hover:bg-surface-low hover:text-ink'
            }`}
          >
            {localeNames[option].short}
          </button>
        );
      })}
    </div>
  );
}
