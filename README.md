# Career Quest — Raphael Braga

An interactive, responsive career portfolio built in the visual language of a
premium 16-bit JRPG interface. Nine screens that work both as a sequential
click-through presentation and as a normal navigable site.

Static site. No backend, no database, no CMS, no game engine.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · React Router · plain CSS animation.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc
npm run lint       # oxlint
npm run build      # tsc -b && vite build  -> dist/
npm run preview    # serve the production build
```

## Deploy (Vercel)

```text
Framework preset : Vite
Build command    : npm run build
Output directory : dist
```

`vercel.json` already contains the SPA rewrite so deep links such as
`/quests/r10` resolve after a hard refresh.

## Screens

| # | Route | Screen | Answers |
|---|---|---|---|
| 01 | `/` | Start | Who is this? |
| 02 | `/profile` | Player Profile | Who are you? |
| 03 | `/journey` | Journey Overview | How did you get here? (timeline, from age 14) |
| 04 | `/skills` | Skills & Abilities | What can you do? |
| 05 | `/quests` | Quest Log | Where did you do it? |
| 06 | `/quests/:questId` | Quest Details | Show me proof |
| 07 | `/side-quests` | Side Quests | What do you build unprompted? |
| 08 | `/impact` | Impact & How I Help | How can you help my team? |
| 09 | `/contact` | Next Quest | What's next, and how do I reach you? |

Navigation: sidebar (desktop) / drawer (below 1024px), Previous–Next pager,
Left/Right arrow keys, Enter on the start screen, Escape to close the drawer.

Screen 06 is a **drill-down**, not a step: you reach it by clicking a quest.
Paging therefore skips it — Quests goes forward to Side Quests, and from a
quest detail Previous returns to the Quest Log while Next continues to Side
Quests. Marked with `drilldown: true` in `src/app/navigation.ts`.

## Languages

The site ships in **English and Portuguese**, switched by the EN/PT control in
the sidebar (desktop), the top bar (mobile) and the corner of the start screen.

- First visit follows the browser: a `pt-*` `navigator.language` lands in
  Portuguese, anything else in English.
- The choice is remembered in `localStorage` under `cq-locale`, and every read
  and write is wrapped in `try/catch` so private browsing cannot break the page.
- `<html lang>` is updated on every switch, so screen readers and browser
  translation behave correctly.

Company names, role titles, product names and technologies stay in English in
both locales — that is how they are written on a Brazilian CV. Only prose,
labels and dates are translated.

## Editing the content

**All career content lives in `src/content/` — one file per screen.** Nothing
professional is hard-coded in a component.

Every content file exports **both languages side by side**:

```ts
export const startScreen: Localized<StartScreen> = {
  en: { title: 'SENIOR SOFTWARE ENGINEER', … },
  pt: { title: 'ENGENHEIRO DE SOFTWARE SÊNIOR', … },
};
```

The two translations of the same string sit next to each other, so they cannot
silently drift — and `Localized<T>` makes a missing translation a **compile
error**, not a runtime fallback to English.

Pages never see the raw bundles. They read `useContent()` and `useUi()`, which
return the active language already resolved:

```tsx
const { identity, questLogScreen } = useContent();
const ui = useUi();
```

```text
src/content/
├── locale.ts                Locale, Localized<T>, locale names
├── ui.ts                    menu labels, button text, status words,
│                            skill-level words, aria-labels
├── LanguageProvider.tsx     detection, persistence, <html lang>
├── hooks.ts                 useContent / useUi / useLanguage
├── identity.ts              name, title, location, contact links,
│                            languages, certifications, education, award
├── contributions.ts         ← signature contributions (cross-screen)
├── index.ts                 single import surface
└── screens/
    ├── 01-start.ts          headline, tagline, status HUD
    ├── 02-profile.ts        class, specialities, attributes, tech summary
    ├── 03-journey.ts        the timeline: personal milestones + quest refs
    ├── 04-skills.ts         skill groups and their items
    ├── 05-quests.ts         ← the master career list (also feeds screens 03 & 06)
    ├── 06-quest-details.ts  case-study narratives (id must match a quest)
    ├── 07-side-quests.ts    personal projects
    ├── 08-impact.ts         proof cards, proof points, value attributes
    └── 09-contact.ts        what I'm looking for
```

### Signature contributions

`contributions.ts` holds the handful of flagship pieces of work. Each one is
rendered in three places from this single source:

- the **Signature Contributions** section on screen 08,
- a gold strip inside its own quest on screen 05,
- a facts-and-recognition panel on its case study, screen 06.

A contribution keeps three things deliberately separate, and the card renders
them differently so the distinction survives:

| Field | Whose claim | Rendered as |
|---|---|---|
| `role` | Raphael's own contribution, first person | purple-barred "MY PART" |
| `facts` | the **product's** public figures | "IN NUMBERS" list |
| `recognition` | third-party only, never self-awarded | gold "RECOGNITION" note |

`questId` binds a contribution to a quest; `null` marks personal work and links
to Side Quests instead.

### The journey timeline (screen 03)

`03-journey.ts` exports one ordered `timeline` array, oldest entry first, mixing
two kinds of item:

- `{ kind: 'milestone', … }` — a personal turning point (the RPG Maker magazine,
  the years of side projects, the degree). Written in full, right there.
- `{ kind: 'quest', id: 'ford' }` — a professional role. Only the id lives here;
  company, role, dates, location and status are read from `05-quests.ts`, so
  they are never duplicated.

Reorder the array and the timeline reorders. Add a milestone anywhere and it
renders with a diamond marker instead of a quest card.

Common edits:

- **Change a job title or date** → `05-quests.ts` only. Screens 03, 05 and 06
  all read it from there.
- **Change what a role delivered** → the `highlights` array on that quest. This
  is what the quest log prints under "WHAT I DID".
- **Add a technology** → one line in the right group in `04-skills.ts`.
- **Add a new case study page** → append an object to `caseStudies` in
  `06-quest-details.ts` whose `id` matches a quest. The route, the link from the
  timeline and the "View details" affordance all appear automatically. A quest
  with no case study simply renders no link — never a dead one.
- **Add a personal milestone** → one object in the `timeline` array.
- **Rename a menu item** → `src/content/ui.ts`, under `nav`, keyed by screen
  number. `src/app/navigation.ts` is structural only (paths, icons, order), so
  routing and translation never fight each other.
- **Reorder the screens** → `src/app/navigation.ts`. That one list drives the
  sidebar, drawer, screen numbers and Previous/Next.

### Skill levels, not percentages

Proficiency uses semantic levels (`core`, `strong`, `applied`, `working`) that
render as filled bar segments. This is deliberate: the design wants a filled
bar, and inventing numeric precision like "95%" would not be defensible in an
interview. How many segments each level fills lives in
`src/components/ui/skillLevels.ts`; the word printed beside the bar lives in
`src/content/ui.ts` so it can be translated.

## Assets

Production imagery lives in `public/assets/stitch/` and is mapped in
`src/config/assets.ts`.

The Stitch artwork is *screen mockup* art — each source image has placeholder UI
text baked into the pixels (`NEO-KYOTO PROTOCOL`, `START GAME / LOAD SAVE /
CREDITS`, `Core Breach Protocol`, `15,000 EXP`, `© 2142 ARCADE SYSTEMS`). So no
image is ever shown whole. Each entry in `assets.ts` carries a `focus`,
a `zoom` and a `scrim` that frame only the clean scenery and darken it behind
the UI. To re-frame a background, change those three numbers — no component
edits needed.

### Avatar

`avatar` in `src/config/assets.ts` is `null` by default, so the sidebar and
profile card render a pixel HUD frame with an icon (matching Stitch screens 04
and 08). Every character portrait Stitch generated is an invented persona with
the name baked into the artwork — "Elara Vance / Master Code Weaver / LVL 45",
"ARCHITECT: ELARA / LVL 99" — so none of them ship as Raphael.

`public/assets/stitch/avatar.png` is a pixel-art portrait of Raphael, prepared
from his own artwork. Two scripts cover the two starting points (both need
Pillow):

**Already pixel art** — `scripts/prepare-avatar.py`. Swaps the source's tan
background for the project surface colour, crops to head-and-shoulders, writes
192px (1:1 device pixels at the 96 CSS px the sidebar renders):

```bash
python3 scripts/prepare-avatar.py ~/portrait.png --crop 0.47,0.36,0.70
```

The background swap is a *gradient-following* flood fill, not a colour match:
the blazer and the background are only ~12 apart in RGB, so any tolerance keyed
to the background colour eats the jacket. Spreading only between similar
neighbours follows the soft halo instead and stops at the dark contour the art
already has. `--protect cx,cy,rx,ry` guards the shirt, which is bright and
desaturated enough to read as background once the fill reaches the collar.

**A plain photograph** — `scripts/pixelize-avatar.py`. Squares the crop around
the face, downsamples, grades shadows toward navy and highlights toward warm
gold, then reduces the palette. Mid-tones are left alone, so skin keeps its own
colour; a flat duotone over a face reads as a filter, not as pixel art.

Set `avatar` in `src/config/assets.ts` back to `null` for the icon treatment
from Stitch screens 04 and 08. If the file is ever missing, `Avatar` falls back
to that icon rather than leaving a broken image on every screen.

None of Stitch's generated portraits ship: every one is an invented persona
with a fabricated name baked into the artwork.

## Design tokens

`src/styles/tokens.css` holds every colour, font and spacing value.
`src/styles/globals.css` maps them onto Tailwind utilities (`bg-surface`,
`text-gold`, …). `src/styles/effects.css` defines the shared 16-bit effects —
scanlines, chiselled panels, corner rivets, pixel text shadow, glow, entrance
and bar-fill animations — each defined once and reused.

All motion is disabled under `prefers-reduced-motion: reduce`.

## Development reference

`reference/` contains the nine Stitch screenshots for manual side-by-side
comparison. It is outside `public/`, so it is never shipped in the build.

## Content provenance

Career facts come from Raphael's LinkedIn profile, except the Elevata ·
Cloudary AWS consultancy, which is not on LinkedIn yet and came from Raphael
directly — as did the personal milestones on the timeline. Nothing on the site
is inferred: if a metric is printed, it traces to a specific quest in
`05-quests.ts`.

Roles contracted differently from a standard full-time job carry an
`engagement` badge (e.g. *scope-based consultancy · not full-time*), so
overlapping date ranges read honestly rather than looking like a conflict.

## Source documents

- `CAREER_QUEST_IMPLEMENTATION_SPEC.md` — the full product/implementation spec.
- `CLAUDE_EXECUTION_PROMPT.md` — the brief this build followed.
