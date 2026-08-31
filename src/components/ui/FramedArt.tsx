import type { FramedAsset } from '../../config/assets';

type FramedArtProps = {
  asset: FramedAsset;
  className?: string;
  /** Override the asset's default scrim, e.g. a lighter one inside a panel. */
  scrim?: number;
  /** Adds a bottom-up gradient so text sitting low stays readable. */
  vignette?: boolean;
};

/**
 * Renders a Stitch artwork zoomed to its clean region.
 *
 * The source images are screen mockups with placeholder UI text baked in, so
 * `zoom` + `focus` (from src/config/assets.ts) crop that text out of frame and
 * `scrim` darkens what remains. Decorative only — hidden from assistive tech.
 */
export function FramedArt({ asset, className = '', scrim, vignette }: FramedArtProps) {
  const darkness = scrim ?? asset.scrim;
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="cq-pixelated absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${asset.src}')`,
          backgroundPosition: asset.focus,
          transform: `scale(${asset.zoom})`,
          transformOrigin: asset.focus,
        }}
      />
      {darkness > 0 ? (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(8, 20, 37, ${darkness})` }}
        />
      ) : null}
      {vignette ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--cq-bg) 0%, rgba(8,20,37,0.55) 35%, rgba(8,20,37,0) 70%)',
          }}
        />
      ) : null}
    </div>
  );
}
