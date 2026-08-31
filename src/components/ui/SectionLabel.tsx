type SectionLabelProps = {
  children: string;
  className?: string;
  /** Renders as `[ LABEL ]`, the bracketed style from the design system. */
  bracketed?: boolean;
};

/** Small uppercase gold label used above panels and groups. */
export function SectionLabel({ children, className = '', bracketed }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-mono text-[10px] font-bold tracking-[0.2em] text-gold uppercase ${className}`}
    >
      {bracketed ? `[ ${children} ]` : children}
    </span>
  );
}
