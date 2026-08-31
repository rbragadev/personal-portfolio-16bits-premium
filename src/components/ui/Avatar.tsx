import { useState } from 'react';
import { avatar } from '../../config/assets';
import { useUi } from '../../content';
import { Icon } from './Icon';

type AvatarProps = { className?: string };

/**
 * Profile portrait in a gold pixel frame.
 *
 * Falls back to the icon treatment used on Stitch screens 04 and 08 whenever
 * no avatar is configured — or if the configured file fails to load, so a
 * missing asset degrades instead of leaving a broken image on every screen.
 *
 * We never ship one of Stitch's invented character portraits as Raphael. To
 * use a real photo, run `scripts/pixelize-avatar.py` and point `avatar` in
 * src/config/assets.ts at the result.
 */
export function Avatar({ className = 'size-24' }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const ui = useUi();
  const portrait = failed ? null : avatar;

  return (
    <div
      className={`relative shrink-0 overflow-hidden border-2 border-gold/70 bg-surface-low ${className}`}
    >
      {portrait ? (
        <img
          src={portrait.src}
          alt={ui.avatarAlt}
          onError={() => setFailed(true)}
          className="size-full object-cover"
          style={{
            objectPosition: portrait.focus,
            transform: portrait.zoom === 1 ? undefined : `scale(${portrait.zoom})`,
            transformOrigin: portrait.focus,
          }}
        />
      ) : (
        <span className="flex size-full items-center justify-center text-ink-dim">
          <Icon name="user" className="size-8" />
        </span>
      )}
    </div>
  );
}
