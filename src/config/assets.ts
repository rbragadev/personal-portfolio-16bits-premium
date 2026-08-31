/* ---------------------------------------------------------------------------
   Central asset map.

   The Stitch-generated artwork is *screen mockup* art: each image has
   placeholder UI text baked into the pixels ("NEO-KYOTO PROTOCOL",
   "START GAME / LOAD SAVE / CREDITS", "Core Breach Protocol", "15,000 EXP",
   "© 2142 ARCADE SYSTEMS"). We therefore never show a whole image — each entry
   carries a `focus` (transform-origin) and `zoom` that frame only the clean
   scenery, plus a `scrim` that darkens it behind the real UI.

   Nudge `focus` / `zoom` here to re-frame a background; no component changes.
   --------------------------------------------------------------------------- */

export type FramedAsset = {
  src: string;
  alt: string;
  /** transform-origin — which point of the artwork stays in view. */
  focus: string;
  /** Scale factor used to crop away the baked-in placeholder text. */
  zoom: number;
  /** 0–1 darkening applied over the image so foreground text stays legible. */
  scrim: number;
};

export const backgrounds = {
  start: {
    src: '/assets/stitch/start-city.jpg',
    alt: 'Pixel-art night cityscape with neon signage and a distant mountain',
    focus: 'center 42%',
    zoom: 1.9,
    scrim: 0.36,
  },
  journey: {
    src: '/assets/stitch/journey-mountains.jpg',
    alt: 'Pixel-art mountain range at dusk with a distant lit city',
    focus: 'center 62%',
    zoom: 1.35,
    scrim: 0.66,
  },
  questDetails: {
    src: '/assets/stitch/quest-details-hall.jpg',
    alt: 'Pixel-art data hall with server racks and a glowing core',
    focus: 'right center',
    zoom: 1.5,
    scrim: 0.8,
  },
  contact: {
    src: '/assets/stitch/next-quest-sunset.png',
    alt: 'Pixel-art valley at sunset with a distant castle',
    focus: 'right 30%',
    zoom: 1.7,
    scrim: 0.35,
  },
} as const satisfies Record<string, FramedAsset>;

export const artwork = {
  /** Right-hand panel on Side Quests: the workshop desk. */
  sideQuestLab: {
    src: '/assets/stitch/side-quest-lab.png',
    alt: 'Pixel-art desk with monitors, plants and a city window at night',
    focus: 'right center',
    zoom: 2,
    scrim: 0.2,
  },
  /** Small panel art on Impact. */
  impactCore: {
    src: '/assets/stitch/impact-core.jpg',
    alt: 'Pixel-art circuit brain glowing inside a machine housing',
    focus: 'center 32%',
    zoom: 1.9,
    scrim: 0.3,
  },
} as const satisfies Record<string, FramedAsset>;

/* ---------------------------------------------------------------------------
   Avatar.

   Every character portrait Stitch generated is an invented persona with the
   name baked into the artwork ("Elara Vance / Master Code Weaver / LVL 45",
   "ARCHITECT: ELARA / LVL 99"). None of them are Raphael, so none ship as his
   profile by default — the sidebar renders a pixel HUD frame with an icon,
   exactly like Stitch screens 04 and 08.

   To use a real photo or avatar: drop the file in public/assets/stitch/ and
   set `avatar` to the object below instead of `null`.
   --------------------------------------------------------------------------- */

export const avatar: FramedAsset | null = null;

/** Ready to enable — the one Stitch portrait with no invented name in-frame. */
export const stitchAvatarPlaceholder: FramedAsset = {
  src: '/assets/stitch/avatar-engineer.jpg',
  alt: 'Pixel-art portrait of a developer at a desk',
  focus: '50% 41%',
  zoom: 2.4,
  scrim: 0,
};
