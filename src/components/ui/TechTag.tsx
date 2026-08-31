/** Bracketed tech chip: `[ React ]`. Square corners, never a pill. */
export function TechTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center border border-outline-muted bg-surface-lowest px-2 py-1 font-mono text-[11px] whitespace-nowrap text-ink-muted transition-colors hover:border-gold/60 hover:text-gold">
      [&nbsp;{children}&nbsp;]
    </span>
  );
}
