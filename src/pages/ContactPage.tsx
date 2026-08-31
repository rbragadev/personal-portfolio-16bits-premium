import { GameShell } from '../components/layout/GameShell';
import { FramedArt } from '../components/ui/FramedArt';
import { HudPanel } from '../components/ui/HudPanel';
import { Icon } from '../components/ui/Icon';
import { PixelAnchor } from '../components/ui/PixelButton';
import { backgrounds } from '../config/assets';
import { useContent } from '../content';

/** Screen 09 — what's next, and how to reach him. */
export function ContactPage() {
  const { contactLinks, contactScreen } = useContent();
  const primaryLink = contactLinks.find((link) => link.icon === 'mail') ?? contactLinks[0];

  return (
    <GameShell cinematic background={<FramedArt asset={backgrounds.contact} vignette />}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 py-10 sm:px-8 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="cq-enter font-display text-[clamp(1.9rem,6vw,3.25rem)] leading-tight whitespace-pre-line text-gold cq-pixel-text--gold">
            {contactScreen.headline}
          </h2>

          <p
            className="cq-enter mt-5 max-w-xl text-sm leading-relaxed text-ink sm:text-base"
            style={{ '--cq-delay': '80ms' }}
          >
            {contactScreen.intro}
          </p>

          {/* ---- Challenges ---- */}
          <HudPanel
            label={contactScreen.challengesLabel}
            className="cq-enter mt-8 p-5 pt-7 backdrop-blur-sm"
            style={{ '--cq-delay': '140ms' }}
          >
            <ul className="space-y-2.5">
              {contactScreen.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-sm text-ink">
                  <Icon name="check" className="mt-1 size-3.5 shrink-0 text-gold" />
                  {challenge}
                </li>
              ))}
            </ul>
          </HudPanel>

          {/* ---- Contact ---- */}
          <HudPanel
            label={contactScreen.connectLabel}
            className="cq-enter mt-6 p-5 pt-7 backdrop-blur-sm"
            style={{ '--cq-delay': '200ms' }}
          >
            <ul className="space-y-1">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className="cq-focusable group flex min-h-11 items-center gap-3 font-mono text-[13px] text-ink transition-colors hover:text-gold"
                  >
                    <Icon name={link.icon} className="size-4 shrink-0 text-gold" />
                    <span className="truncate group-hover:underline">{link.display}</span>
                  </a>
                </li>
              ))}
            </ul>

            <PixelAnchor href={primaryLink.href} className="mt-5 w-full sm:w-auto">
              {contactScreen.ctaLabel}
              <Icon name="chevron-right" className="size-3" />
            </PixelAnchor>
          </HudPanel>
        </div>
      </div>

      {/* ---- Nostalgic dialogue box, lower right ---- */}
      <div className="pointer-events-none relative z-10 mx-auto mb-8 w-full max-w-[1440px] px-4 sm:px-8 lg:absolute lg:right-10 lg:bottom-10 lg:mx-0 lg:mb-0 lg:w-80 lg:px-0">
        <HudPanel corners variant="raised" className="p-5 backdrop-blur-sm">
          <p className="font-display text-lg leading-tight text-ink">
            {contactScreen.dialogue[0]}
          </p>
          <p className="font-display text-lg leading-tight text-gold">
            {contactScreen.dialogue[1]}
          </p>
          <Icon name="chevron-down" className="cq-float mt-3 ml-auto size-4 text-gold" />
        </HudPanel>
      </div>
    </GameShell>
  );
}
