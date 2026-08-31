# Career Quest — Implementation Specification

**Owner:** Raphael Braga  
**Project type:** Static interactive career portfolio  
**Reference:** Stitch export `stitch_premium_16_bit_career_portfolio.zip`  
**Status:** Ready for implementation  
**Primary goal:** Give this document + the Stitch export to Claude Code and have it build the complete project.

---

## 1. Product summary

Career Quest is a responsive, interactive professional portfolio inspired by premium 16-bit / JRPG interfaces. It should feel like a polished career presentation that happens to use the visual language of a videogame — not like a game that happens to contain a résumé.

The portfolio must answer three questions clearly for a recruiter, engineering manager, CTO, founder, product leader, or future teammate:

1. **Who is Raphael?**
2. **What can Raphael do?**
3. **How can Raphael help this team/company?**

The Stitch screens are the **visual source of truth**. Their look, spacing, dark palette, HUD panels, typography, scanlines, gold/purple accents, left-side navigation, and overall composition should be preserved as closely as possible.

The final implementation must be simple:

- no backend;
- no database;
- no authentication;
- no CMS;
- no game engine;
- no canvas/WebGL requirement;
- no unnecessary state management library;
- no complex animation library unless absolutely necessary;
- static deploy;
- responsive;
- keyboard and click/touch navigation;
- content editable from one small set of data files.

---

# 2. Technical decision

## 2.1 Stack

Use:

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- plain CSS animations/transitions for motion
- Google Fonts currently used by Stitch:
  - Space Grotesk
  - JetBrains Mono
- Material Symbols only if it improves fidelity with the Stitch screens

Do **not** add:

- Next.js;
- Redux/Zustand;
- backend services;
- Firebase/Supabase;
- Framer Motion unless CSS proves insufficient;
- Phaser or any game engine;
- Three.js;
- UI component frameworks such as MUI/Ant Design/Chakra;
- CMS;
- analytics in the first version.

### Why React instead of plain HTML

The project has nine screens, shared HUD/navigation, repeated panels, reusable skill/quest components, and data that should be editable without touching markup. React is enough structure without adding meaningful complexity.

---

# 3. Source-of-truth hierarchy

Claude must follow this order when there is a conflict:

1. **This implementation spec** — behavior, content rules, architecture, responsive behavior.
2. **Each Stitch `screen.png`** — visual fidelity and composition.
3. **Each Stitch `code.html`** — useful layout/styles/reference implementation.
4. **`DESIGN.md` from Stitch** — design tokens and visual principles.
5. Existing text inside Stitch HTML — only when it has been validated in this document.

Important: the HTML exported by Stitch is a design artifact, **not production code to paste blindly**.

---

# 4. Required project input

The implementation agent will receive the Stitch export with this structure:

```text
stitch_premium_16_bit_career_portfolio/
├── ethereal_engine_portfolio/
│   └── DESIGN.md
├── 01_start_screen/
│   ├── code.html
│   └── screen.png
├── 02_player_profile/
│   ├── code.html
│   └── screen.png
├── 03_journey_overview/
│   ├── code.html
│   └── screen.png
├── 04_skills_abilities/
│   ├── code.html
│   └── screen.png
├── 05_quest_log/
│   ├── code.html
│   └── screen.png
├── 06_quest_details/
│   ├── code.html
│   └── screen.png
├── 07_side_quests/
│   ├── code.html
│   └── screen.png
├── 08_stats/
│   ├── code.html
│   └── screen.png
└── 09_next_quest/
    ├── code.html
    └── screen.png
```

Claude must inspect **all nine `screen.png` and all nine `code.html` files before implementation**.

---

# 5. Product narrative and information architecture

The order must feel intentional. The user should be able to view it sequentially like a presentation, but also jump directly through the menu.

## Narrative

```text
01 Start
   ↓
02 Who I Am
   ↓
03 Where I Came From
   ↓
04 What I Can Do
   ↓
05 Where I Applied It
   ↓
06 Proof / Featured Case
   ↓
07 What I Build on My Own
   ↓
08 How I Can Help You
   ↓
09 What I Want Next / Contact
```

This sequence is more important than the game metaphor.

---

# 6. Routes

Use clean routes.

```text
/                   → 01 Start Screen
/profile            → 02 Player Profile
/journey            → 03 Journey Overview
/skills             → 04 Skills & Abilities
/quests             → 05 Quest Log
/quests/:questId    → 06 Quest Details
/side-quests        → 07 Side Quests
/impact              → 08 How I Can Help / Impact
/contact             → 09 Next Quest
```

Use `BrowserRouter`.

For Vercel deployment, add a rewrite so deep links return `index.html`.

Example `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

# 7. Global navigation

## 7.1 Sequential navigation

All screens must support:

- Previous
- Next
- menu
- keyboard left/right arrows
- Enter on Start Screen
- Escape closes drawer/modal

Do not hijack keys while the user is focused on an input/link/button where this would be surprising.

## 7.2 Menu

Desktop screens 02–08 should preserve the Stitch left navigation concept:

```text
START
JOURNEY
SKILLS
QUESTS
SIDE QUESTS (can be represented under Quests or as its own item)
IMPACT / STATS
CONNECT
```

Recommended final menu labels:

```text
Start
Profile
Journey
Skills
Quests
Side Quests
Impact
Connect
```

The selected item must be obvious using the existing purple active state.

## 7.3 Mobile navigation

Do not squeeze the desktop sidebar onto mobile.

For widths below `768px`:

- hide persistent sidebar;
- show compact top bar with screen number/title + Menu;
- Menu opens a full-width or near-full-width drawer;
- show a small previous/next navigator at the bottom;
- page content becomes naturally scrollable vertically.

---

# 8. Shared visual system

Use the Stitch `DESIGN.md` as visual reference.

## 8.1 Core colors

Create CSS variables rather than scattering values through components.

```css
:root {
  --cq-bg: #081425;
  --cq-surface-lowest: #040e1f;
  --cq-surface-low: #111c2d;
  --cq-surface: #152031;
  --cq-surface-high: #1f2a3c;
  --cq-surface-highest: #2a3548;

  --cq-text: #d8e3fb;
  --cq-text-muted: #d0c6ab;
  --cq-outline: #999077;
  --cq-outline-muted: #4d4732;

  --cq-gold: #ffd700;
  --cq-gold-soft: #e9c400;
  --cq-purple: #7701d0;
  --cq-purple-soft: #dcb8ff;
  --cq-success: #10b981;
  --cq-error: #ef4444;
}
```

Tailwind tokens can map to these variables.

## 8.2 Typography

- Headlines: `Space Grotesk`
- Labels/body: `JetBrains Mono`

Do not introduce a low-legibility pixel font for body text.

The 16-bit character comes from:

- panel shapes;
- borders;
- icons;
- segmented bars;
- backgrounds;
- text shadows;
- interaction style;
- small labels.

## 8.3 Shared effects

Implement once:

- `scanlines`
- `chiseled-panel`
- `pixel-text-shadow`
- `ethereal-glow`
- segmented experience/stat bars
- gold outlined primary button
- purple selected menu state
- corner decorations if present in the reference

Do not recreate these styles separately in each page.

## 8.4 Maximum content width

Desktop shell:

```text
max-width: 1440px
margin-inline: auto
```

The app should still fill smaller widths gracefully.

---

# 9. Asset strategy

The Stitch HTML currently references externally hosted generated imagery.

For production:

1. Locate every background/avatar/image URL used in the Stitch `code.html` files.
2. Prefer downloading/copying those assets into the project if technically available and appropriate.
3. Store them in:

```text
public/assets/stitch/
```

4. Reference local asset paths from a central asset map.

Example:

```ts
export const assets = {
  startBackground: '/assets/stitch/start-background.webp',
  profileAvatar: '/assets/stitch/profile-avatar.webp',
  journeyBackground: '/assets/stitch/journey-background.webp',
  sideQuestLab: '/assets/stitch/side-quest-lab.webp',
  nextQuestBackground: '/assets/stitch/next-quest-background.webp',
} as const;
```

Do not use the Stitch `screen.png` itself as the final page background. `screen.png` is a visual comparison target, not production UI.

If a remote Stitch-generated asset cannot be retrieved, use the existing remote URL temporarily behind `assets.ts` and add a TODO. Do not redesign the screen just because the asset migration failed.

---

# 10. Content architecture — critical requirement

All résumé/project content must live outside page components.

Use:

```text
src/content/portfolio.en.ts
```

Do not hard-code career details inside JSX.

Recommended model:

```ts
export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  status: 'current' | 'complete';
  shortSummary: string;
  highlights: string[];
  tech: string[];
  caseStudy?: CaseStudy;
};

export type SideProject = {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  tech: string[];
  status?: string;
  href?: string;
};
```

The objective is that changing a job title, a metric, a technology, or a project requires editing data, not UI components.

---

# 11. Content truth policy

This is a professional portfolio. **Never invent metrics, technologies, scale numbers, outcomes, team sizes, or responsibilities.**

Anything that cannot be supported by Raphael's résumé or explicitly supplied project information must be omitted or written qualitatively.

## 11.1 Known Stitch placeholders that must NOT ship as facts

The current Stitch output contains examples/placeholders that are not validated and must be removed or replaced unless Raphael explicitly confirms them:

- “millions of concurrent users” at R10;
- legacy monolith database bottleneck narrative at R10;
- AWS Kinesis as an R10 implementation detail;
- DynamoDB as an R10 implementation detail;
- Terraform as an R10 implementation detail;
- `99.99% uptime`;
- `40% latency reduction`;
- `50+ projects delivered`;
- Python in the profile tech summary;
- Go unless explicitly confirmed;
- Redis unless explicitly confirmed;
- Kubernetes unless explicitly confirmed;
- arbitrary numeric skill percentages such as 95%, 90%, 85%, etc.;
- Ford text saying “Promoted to Tech Lead after 6 months” — this belongs to R10 in the résumé, not Ford;
- any company summary that does not match the actual role.

## 11.2 Allowed gamification

Subjective visual ranks such as `S-RANK`, `CURRENT QUEST`, `QUEST COMPLETE`, `LVL 12+` can remain as **presentation metaphor**, as long as they are not presented as external certifications.

---

# 12. Core professional positioning

Use this as the initial portfolio positioning. Keep it in the content data so it can be edited later.

## Short title

**Software Engineer · Tech Lead · Product Builder**

## Short positioning statement

**I turn complex product and engineering problems into working, scalable digital products — across backend, frontend, mobile, cloud, architecture and applied AI.**

## Who I am

Suggested copy:

> Senior software engineer and technical leader with 12+ years of experience building digital products across multiple domains and international teams. I work across the full product lifecycle, from understanding the problem and shaping the architecture to implementation, delivery, technical leadership and evolution.

## What I do well

- full-stack product engineering;
- backend and API architecture;
- frontend and mobile product development;
- technical leadership and mentoring;
- system design and scalability;
- cloud and observability-aware engineering;
- applied AI / AI-agent product exploration;
- connecting product decisions with engineering execution.

## How I help a team

Suggested copy:

> I help teams reduce ambiguity, make sound technical decisions, turn product requirements into maintainable architecture, ship across multiple layers of the stack, and raise engineering quality without losing delivery speed.

This message must become explicit by screen 08, not merely inferred from the career history.

---

# 13. Screen-by-screen implementation

---

## 13.1 Screen 01 — Start Screen

### Route

`/`

### Purpose

Answer in under five seconds:

- who this person is;
- what type of professional he is;
- why the visitor should continue.

### Visual source

- `01_start_screen/screen.png`
- `01_start_screen/code.html`

### Keep from Stitch

- cinematic Neo-Kyoto style background;
- screen number `01`;
- `START SCREEN` label;
- central name/title;
- PRESS START button;
- lower-left LVL / EXP / HP visual;
- scanline treatment;
- premium dark/gold 16-bit mood.

### Final content

```text
RAPHAEL BRAGA

SOFTWARE ENGINEER
TECH LEAD · PRODUCT BUILDER

I turn complex ideas into digital products,
systems and scalable solutions.

PRESS START

LVL 12+
LOCATION: BELO HORIZONTE, BR
```

Optional smaller line:

```text
Backend · Frontend · Mobile · Cloud · Architecture · AI
```

### Interaction

- Click `PRESS START` → `/profile`
- Press `Enter` → `/profile`
- subtle button blink/pulse only;
- no long intro animation;
- no forced wait.

### Mobile

- retain cinematic background;
- center headline;
- move level/status HUD below CTA;
- ensure CTA remains visible before excessive scroll;
- do not reduce text below readable size.

### Acceptance

A recruiter should know Raphael's seniority/positioning without clicking.

---

## 13.2 Screen 02 — Player Profile

### Route

`/profile`

### Purpose

Answer **“Who are you?”**

### Visual source

- `02_player_profile/screen.png`
- `02_player_profile/code.html`

### Keep from Stitch

- persistent left sidebar desktop;
- profile HUD card/avatar;
- class/role/experience block;
- attribute bars;
- `MAIN QUEST` copy area;
- tech summary at bottom.

### Content

```text
PLAYER PROFILE

RAPHAEL BRAGA

CLASS
SOFTWARE ENGINEER

ROLES
TECH LEAD · ARCHITECTURE · PRODUCT ENGINEERING

EXP
12+ YEARS

MAIN QUEST
Building useful products and helping teams make better technical decisions.
```

### Attribute model

Do not display arbitrary percentages.

Prefer segmented visual bars with semantic labels stored in data:

```text
ENGINEERING       CORE
ARCHITECTURE      STRONG
LEADERSHIP        STRONG
PRODUCT           STRONG
AI / AGENTS       APPLIED
CLOUD             STRONG
```

The bars may still visually have different fill lengths for the game aesthetic, but do not print fake numerical precision such as `95%`.

### Tech summary

Only list technologies Raphael is comfortable discussing in an interview.

Initial safe set from résumé/current work:

```text
TypeScript
JavaScript
React
React Native
Node.js
NestJS
PostgreSQL
Docker
AWS
GCP
Azure
Solidity
Rust
```

AI/agents can appear as a capability category based on current product work, but avoid presenting every experimental framework as deep expertise.

### Mobile

- sidebar becomes drawer;
- avatar/profile panel at top;
- status + attributes stack vertically;
- tech list wraps naturally;
- no horizontal overflow.

---

## 13.3 Screen 03 — Journey Overview

### Route

`/journey`

### Purpose

Answer **“How did you get here?”** without reproducing a résumé wall.

### Visual source

- `03_journey_overview/screen.png`
- `03_journey_overview/code.html`

### Keep from Stitch

- connected career cards;
- ordered campaign feeling;
- alternating path on desktop;
- current quest highlighting;
- mountain/landscape atmosphere;
- left navigation.

### Required order

```text
01 Direcional
02 Ford
03 B4A
04 Xvia
05 WillowTree / Randstad
06 R10 — Current Quest
```

### Corrected short summaries

**Direcional — Software Developer**  
`2014–2017`

> Early software engineering foundation, translating business processes into technical solutions and working across delivery phases.

**Ford — FullStack Developer / Blockchain Researcher**  
`2017–2023`

> Global engineering and blockchain R&D, including full-stack and smart-contract work and leadership in a team of around 20 people.

**B4A — Senior FullStack Developer**  
`2021–2023`

> Backend/product engineering, requirement discovery, AI-assisted data analysis, and technical leadership around a product later valued above US$5M.

**Xvia — Senior FullStack Developer**  
`2023–Present`

> Client product delivery across backend, frontend and mobile, including blockchain-related solutions, cloud deployment and scalable digital products.

**WillowTree / Randstad — Senior FullStack Developer**  
`2024–2025`

> Scalable product delivery across frontend, backend and mobile with distributed teams in Brazil and the United States.

**R10 — Senior FullStack Developer → Tech Lead**  
`2025–Present`

> Large-scale sports-data product engineering, technical leadership, architecture, reliability, observability and cloud-cost decisions.

### Interaction

- cards can be clickable;
- clicking an experience should navigate to `/quests/:id` if a case study exists;
- otherwise navigate to `/quests` and highlight the item or open a lightweight detail panel.

### Mobile

The desktop alternating path must become a **single vertical ordered timeline/stepper**.

Do not keep zig-zag absolute positioning on mobile.

---

## 13.4 Screen 04 — Skills & Abilities

### Route

`/skills`

### Purpose

Answer **“What can you actually do?”**

### Visual source

- `04_skills_abilities/screen.png`
- `04_skills_abilities/code.html`

### Keep from Stitch

- terminal-like skill panels;
- categories;
- small segmented indicators;
- tech tags;
- system-status presentation style.

### Recommended categories

#### PRODUCT ENGINEERING

```text
TypeScript
JavaScript
React
React Native
Node.js
NestJS
```

#### ARCHITECTURE & DATA

```text
APIs
System Design
Distributed Systems
PostgreSQL
Multi-layer product architecture
```

Only include `Microservices`, Redis, etc. if Raphael explicitly wants those shown and can support them.

#### CLOUD & DELIVERY

```text
AWS
GCP
Azure
Docker
CI/CD
Observability-aware engineering
```

#### AI & EMERGING TECH

```text
Applied AI
AI Agents
LLM orchestration concepts
RAG concepts / implementation where applicable
Solidity
Rust
Blockchain / Smart Contracts
```

### Important content rule

The page must prioritize **capabilities**, not produce a giant logo wall.

### Interaction

Desktop can keep all categories visible if they fit.

Mobile can use:

- stacked panels; or
- accessible accordion per category.

Default should still show meaningful content without requiring many taps.

---

## 13.5 Screen 05 — Quest Log

### Route

`/quests`

### Purpose

Answer **“Where have you done this?”**

### Visual source

- `05_quest_log/screen.png`
- `05_quest_log/code.html`

### Keep from Stitch

- mission list;
- status tags;
- dates;
- compact summaries;
- highlighted selected quest;
- desktop sidebar.

### Remove / correct

Do not show:

```text
SUCCESS RATE: 100%
```

unless clearly presented as playful decoration rather than a factual KPI. Safer default: remove it.

`TOTAL MISSIONS: 06` may remain because there are exactly six displayed major experiences.

### Correct entries

#### R10

```text
Role: Senior FullStack Developer → Tech Lead
Dates: Mar 2025 – Present
Status: IN PROGRESS
Summary: Technical leadership and engineering for a large-scale sports data platform, with focus on architecture, scalability, reliability, observability and cloud efficiency.
```

#### Xvia

```text
Role: Senior FullStack Developer
Dates: Apr 2023 – Present
Status: IN PROGRESS
Summary: Backend, frontend and mobile product delivery, including blockchain-related features and cloud-based deployment.
```

#### WillowTree / Randstad

```text
Role: Senior FullStack Developer
Dates: Jun 2024 – Jan 2025
Status: COMPLETE
Summary: Scalable frontend, backend and mobile product development with teams in Brazil and the United States.
```

#### B4A

```text
Role: Senior FullStack Developer
Dates: Nov 2021 – Nov 2023
Status: COMPLETE
Summary: Backend engineering, requirements, AI-assisted data analysis and technical leadership on a high-value product.
```

#### Ford

```text
Role: FullStack Developer / Blockchain Researcher
Dates: Feb 2017 – Feb 2023
Status: COMPLETE
Summary: Full-stack and blockchain R&D, smart contracts and technical leadership in a global engineering environment.
```

#### Direcional

```text
Role: Software Developer
Dates: Apr 2014 – Feb 2017
Status: COMPLETE
Summary: Software development and SAP-related solutions translating business processes into technical implementation.
```

### Interaction

- click/tap a mission;
- if it has case-study detail, navigate to `/quests/:questId`;
- for now, at least `R10` and `B4A` should be modeled as possible featured case studies even if only R10 receives a dedicated visual in MVP;
- keyboard Up/Down can change selected quest on desktop if simple to implement; not mandatory for MVP.

---

## 13.6 Screen 06 — Quest Details

### Route

`/quests/r10` initially

The component must be generic so future cases can be added using data only:

```text
/quests/b4a
/quests/ford
...
```

### Purpose

Answer **“Show me proof. How do you think and contribute inside a real problem?”**

### Visual source

- `06_quest_details/screen.png`
- `06_quest_details/code.html`

### Important visual correction

The current Stitch header incorrectly displays `01 START SCREEN` in this screen. In production it must display:

```text
06 QUEST DETAILS
```

or the shared screen indicator.

### Final R10 content

Do not ship the invented infrastructure/metrics currently present in Stitch.

Use a qualitative, defensible case until real numbers/details are supplied.

#### Header

```text
PROJECT R10
TECHNICAL LEADERSHIP & PRODUCT ENGINEERING

Company: R10
Role: Tech Lead
Status: Current Quest
```

#### Context / Challenge

Suggested copy:

> Working on a large-scale sports data platform where performance, reliability and scalability matter directly to the product experience. The role combines hands-on full-stack engineering with technical leadership and architectural decision-making.

#### Contribution

```text
- Technical direction and architecture decisions
- Backend/full-stack implementation
- Engineering quality and best practices
- Scalability and reliability improvements
- Observability and cloud-cost awareness
- Team guidance and delivery support
```

#### Stack

Only list confirmed relevant technologies from the résumé/current role:

```text
TypeScript
Node.js
NestJS
React
React Native
AWS
Docker
```

Remove Kinesis, DynamoDB and Terraform unless Raphael explicitly confirms them for this case.

#### Result

Do not fabricate numeric result cards.

Replace the current `99.99% / 40%` panel with evidence categories such as:

```text
ROLE EVOLUTION
Senior Engineer → Tech Lead

FOCUS
Scale · Reliability · Architecture

IMPACT
Better technical direction, engineering quality and product delivery
```

The role promotion after six months can be highlighted if Raphael confirms the exact timing from the résumé.

### Mobile

- stack sections vertically;
- stack panel becomes horizontal wrapping tags;
- no tiny 2-column content;
- breadcrumbs may wrap.

---

## 13.7 Screen 07 — Side Quests

### Route

`/side-quests`

### Purpose

Answer **“What do you build when nobody is simply assigning you a ticket?”**

This screen is important to communicate product curiosity, initiative and builder mindset.

### Visual source

- `07_side_quests/screen.png`
- `07_side_quests/code.html`

### Keep from Stitch

- left list of side quests;
- selected card/detail area;
- lab/desk pixel-art visual;
- terminal footer/copy;
- purple selection state.

### Initial projects

#### Ninho

```text
Subtitle: Family Safety Platform
Summary: Mobile family-safety product focused on parent/child experiences, device pairing, location, alerts and safety flows.
Tech: React Native / Expo · NestJS · PostgreSQL · Real-time product flows
```

#### AI Agent Platform

```text
Subtitle: Enterprise AI Infrastructure
Summary: Multi-tenant platform concept for configuring, governing, deploying and observing AI agents for different clients and use cases.
Tech: TypeScript · NestJS · Mastra · AI Agents · RAG / Tools / Governance concepts
```

#### Pulso

```text
Subtitle: Research Intelligence Platform
Summary: Product concept for research/fieldwork workflows, turning survey and citizen data into useful intelligence and explainable outputs.
Tech: Product Design · Data · AI · Research workflows
```

#### Commerce Systems

```text
Subtitle: E-commerce & Integrations
Summary: Product and integration work around Shopify, ERP/Bling, customer portals, subscriptions and operational automation.
Tech: Shopify · APIs · Integrations · E-commerce workflows
```

### Data sensitivity

Do not publish private customer information, credentials, internal architecture secrets or proprietary employer code.

The side-project copy should describe product purpose and capability, not confidential implementation details.

### Interaction

- clicking each item selects it in-place;
- right panel updates content/image;
- direct links may be added later through data;
- do not open dead links.

### Mobile

Use stacked cards or selector + detail card. Do not require horizontal list scrolling to understand the projects.

---

## 13.8 Screen 08 — Impact / How I Can Help

### Route

`/impact`

### Important change from Stitch

The Stitch screen is named `STATS`, but the final product needs this screen to directly answer the user's key question:

**“How can I help your team?”**

Keep the **visual design of screen 08**, but change its information architecture.

Recommended display title:

```text
08 IMPACT & HOW I HELP
```

The sidebar item can be `IMPACT`.

### Purpose

Translate career/skills into employer value.

### Visual source

- `08_stats/screen.png`
- `08_stats/code.html`

### Keep from Stitch

- stat/dashboard visual language;
- large highlighted cards;
- attribute panel structure;
- mission/objective panel;
- progress/level aesthetic.

### Replace fake/weak stats with grounded proof + value

#### Card 1 — Experience

```text
12+ YEARS
SOFTWARE ENGINEERING

Across product engineering, full-stack development, architecture and technical leadership.
```

#### Card 2 — Leadership

```text
TEAM LEADERSHIP

Experience leading and mentoring engineers, including leadership in a team of around 20 people and current Tech Lead responsibilities.
```

#### Card 3 — Product Impact

```text
PRODUCT IMPACT

Backend and requirements work on a product later valued above US$5M, plus hands-on delivery across multiple product domains.
```

#### Card 4 — How I help

Create four compact value attributes:

```text
01 CLARITY
Turn ambiguous requirements into technical direction.

02 ARCHITECTURE
Design maintainable solutions without unnecessary complexity.

03 DELIVERY
Work hands-on across backend, frontend, mobile and cloud.

04 TEAM LEVERAGE
Mentor, unblock and help teams raise engineering quality.
```

#### Main objective panel

```text
MAIN OBJECTIVE

Build products that solve real problems, help teams make better technical decisions, and connect engineering quality with business/product outcomes.
```

#### AI value line

Add a smaller supporting line, not necessarily a giant card:

```text
APPLIED AI
Help evaluate where AI/agents can create real product or operational leverage instead of adding technology for its own sake.
```

### Why this screen matters

By the end of this page, a recruiter should be able to answer:

> “What would Raphael change or improve if we hired him?”

### Mobile

Stack the value cards in one column. Keep one or two high-level proof points above the fold, then the how-I-help sections.

---

## 13.9 Screen 09 — Next Quest / Contact

### Route

`/contact`

### Purpose

Answer **“What are you looking for and how do I contact you?”**

### Visual source

- `09_next_quest/screen.png`
- `09_next_quest/code.html`

### Keep from Stitch

- sunset / next-adventure background;
- cinematic final slide;
- left content panel;
- challenge list;
- contact panel;
- `THE NEXT QUEST IS WAITING...` motif.

### Suggested content

```text
THE NEXT QUEST IS WAITING...

I'm interested in meaningful engineering challenges where I can combine hands-on product development, architecture, technical leadership and applied AI.

I can be especially useful when a team needs to:

- turn complex product problems into executable technical plans;
- improve architecture without freezing delivery;
- ship across backend, frontend or mobile boundaries;
- strengthen engineering practices and technical ownership;
- explore practical AI/agent opportunities;
- build products with visible business/user impact.
```

### Contact

Use real clickable links:

```text
LinkedIn
https://www.linkedin.com/in/rbragadev

Portfolio
https://raphael-braga-main-porfolio.vercel.app

Email
raffael.info@gmail.com
```

Use `mailto:` for email and normal HTTPS links for external pages.

### CTA

Recommended:

```text
LET'S TALK
```

The nostalgic lower-right panel can still say:

```text
THE NEXT QUEST
IS WAITING...
```

### Mobile

Ensure contact links are easily tappable and not buried in tiny text.

---

# 14. Shared components

Recommended component structure:

```text
src/
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   └── navigation.ts
│
├── components/
│   ├── layout/
│   │   ├── GameShell.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── SequentialNav.tsx
│   │   └── ScreenFrame.tsx
│   │
│   ├── ui/
│   │   ├── HudPanel.tsx
│   │   ├── PixelButton.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── SegmentedBar.tsx
│   │   ├── TechTag.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── GameCursor.tsx
│   │   └── ScreenNumber.tsx
│   │
│   └── portfolio/
│       ├── ExperienceCard.tsx
│       ├── SkillGroup.tsx
│       ├── SideQuestSelector.tsx
│       └── ImpactCard.tsx
│
├── pages/
│   ├── StartPage.tsx
│   ├── ProfilePage.tsx
│   ├── JourneyPage.tsx
│   ├── SkillsPage.tsx
│   ├── QuestLogPage.tsx
│   ├── QuestDetailPage.tsx
│   ├── SideQuestsPage.tsx
│   ├── ImpactPage.tsx
│   └── ContactPage.tsx
│
├── content/
│   └── portfolio.en.ts
│
├── config/
│   └── assets.ts
│
├── styles/
│   ├── globals.css
│   ├── effects.css
│   └── tokens.css
│
└── types/
    └── portfolio.ts
```

Do not over-componentize tiny one-off spans.

---

# 15. Data design

Example `portfolio.en.ts` shape:

```ts
export const portfolio = {
  identity: {
    name: 'Raphael Braga',
    title: 'Software Engineer · Tech Lead · Product Builder',
    location: 'Belo Horizonte, Brazil',
    yearsExperience: '12+',
    positioning:
      'I turn complex product and engineering problems into working, scalable digital products.',
  },

  contact: {
    linkedin: 'https://www.linkedin.com/in/rbragadev',
    portfolio: 'https://raphael-braga-main-porfolio.vercel.app',
    email: 'raffael.info@gmail.com',
  },

  experiences: [],
  skillGroups: [],
  sideProjects: [],
  impact: [],
} as const;
```

If content changes, this file should be the first place to edit.

---

# 16. Animation rules

Animation should improve feel without making the portfolio slow or gimmicky.

## Allowed / recommended

- `PRESS START` blink/pulse;
- subtle selected-menu cursor movement;
- page enter fade + 4–8px translation;
- segmented bars filling on first entrance;
- subtle purple/gold border glow on hover/focus;
- background gradient movement only if very cheap;
- blinking terminal underscore in side-quest terminal;
- small stagger of 50–80ms between major cards if desired.

## Avoid

- long loading screens;
- fake boot sequence longer than ~500ms;
- mandatory audio;
- autoplay music;
- particle systems;
- physics;
- canvas animation;
- 3D;
- excessive parallax;
- transitions longer than ~250ms for navigation;
- hiding information behind animations.

## Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable non-essential motion.

---

# 17. Responsive specification

## Breakpoints

Use Tailwind defaults or equivalent:

```text
mobile: < 768px
md/tablet: 768–1199px
desktop: >= 1200px
```

## Desktop

- preserve Stitch compositions closely;
- sidebar visible on screens 02–08;
- multi-column panels allowed;
- max width 1440px;
- cinematic pages can use near-full viewport height.

## Tablet

- sidebar may remain narrow if it still works;
- otherwise switch to drawer;
- reduce large gutters;
- 3-column grids become 2-column;
- maintain readable body text.

## Mobile

Principle: **responsive adaptation, not scaled-down desktop screenshot.**

- sidebar → drawer;
- multi-column → single column;
- journey → vertical path;
- skills → stacked groups;
- quest detail → stacked content + wrapped stack tags;
- impact cards → one column;
- backgrounds remain decorative and must not reduce contrast;
- body text minimum around 14–16px depending on role;
- interactive targets minimum ~44px;
- no horizontal document scroll.

---

# 18. Accessibility

Even with game aesthetics:

- semantic headings;
- `<nav>` for menus;
- `<main>` for page content;
- `<button>` for actions, not clickable divs;
- visible focus states using gold/purple styling;
- alt text for meaningful images;
- decorative pixel-art backgrounds can use empty alt/background CSS;
- sufficient text/background contrast;
- keyboard navigation;
- reduced-motion support;
- external links should be clearly focusable.

Do not make the scanline effect strong enough to harm readability.

---

# 19. SEO and metadata

Static site should include:

```text
<title>Raphael Braga — Software Engineer · Tech Lead · Product Builder</title>
<meta name="description" content="Interactive career portfolio of Raphael Braga, senior software engineer and technical leader focused on product engineering, architecture, full-stack development and applied AI." />
```

Add OpenGraph basics.

Create a simple favicon matching the gold/purple pixel/HUD identity.

No complex SEO framework required.

---

# 20. Performance

Targets:

- lazy-load non-critical large imagery;
- preload first screen background if needed;
- convert large raster backgrounds to WebP/AVIF when it does not visibly degrade the pixel-art aesthetic;
- do not ship nine full `screen.png` references as production assets unless used only in development comparison;
- avoid huge icon packages;
- no heavy runtime animation package by default.

---

# 21. Development-only visual reference

Create a development folder that is not necessarily shipped to production:

```text
reference/
├── 01-start.png
├── 02-profile.png
...
└── 09-next.png
```

This can simply copy or point developers to the Stitch `screen.png` files.

The goal is manual side-by-side comparison during implementation.

Do not embed these screenshots in the final user experience.

---

# 22. Implementation phases

## Phase 0 — Inspect and normalize

- inspect all Stitch files;
- identify repeated layout/style patterns;
- inventory external images;
- create design tokens;
- identify incorrect placeholder content;
- do not code pages before completing this inspection.

### Done when

There is a clear asset list, page list, navigation map and token set.

---

## Phase 1 — Foundation

Create Vite React TypeScript project.

Add:

- Tailwind;
- React Router;
- fonts;
- global CSS reset;
- token variables;
- shared effects;
- route config;
- content file;
- asset config.

Create shared components:

- `GameShell`
- `HudPanel`
- `TopBar`
- `Sidebar`
- `MobileMenu`
- `SequentialNav`

### Done when

All routes render placeholder content inside the correct shell on desktop and mobile.

---

## Phase 2 — Screen 01 + global navigation

Implement Start Screen to high fidelity.

Add:

- Enter/Start behavior;
- previous/next route model;
- keyboard navigation;
- menu/drawer behavior.

### Done when

A user can navigate through all nine routes without broken state.

---

## Phase 3 — Screens 02–04

Implement:

- Player Profile;
- Journey Overview;
- Skills & Abilities.

Prioritize responsive transformation early, not after desktop is finished.

### Done when

The first half already answers:

- who Raphael is;
- career progression;
- what he can do.

---

## Phase 4 — Screens 05–06

Implement:

- Quest Log;
- data-driven Quest Detail.

Use corrected content from this document.

### Done when

R10 case is credible and contains no invented infrastructure or metrics.

---

## Phase 5 — Screens 07–09

Implement:

- Side Quests;
- Impact / How I Help;
- Next Quest / Contact.

### Done when

The final three screens clearly answer:

- initiative/builder mindset;
- how Raphael helps a team;
- what he is looking for;
- how to contact him.

---

## Phase 6 — Polish

- animation;
- reduced motion;
- responsive audit;
- keyboard audit;
- link audit;
- content audit;
- image optimization;
- metadata;
- favicon;
- remove temporary/debug content.

---

## Phase 7 — Deploy

Preferred:

- Vercel static deployment.

Build commands:

```bash
npm install
npm run build
npm run preview
```

Vercel:

```text
Framework preset: Vite
Build command: npm run build
Output: dist
```

Add SPA rewrite described earlier.

---

# 23. Quality checks / acceptance criteria

## Content

- [ ] Screen 01 answers who Raphael is in <5 seconds.
- [ ] Screen 02 explains role/seniority/profile.
- [ ] Screen 03 has a clear chronological order.
- [ ] Screen 04 makes capabilities scannable.
- [ ] Screen 05 uses accurate career entries.
- [ ] Screen 06 has no invented metrics or technologies.
- [ ] Screen 07 shows builder/product initiative.
- [ ] Screen 08 explicitly says how Raphael helps a team/company.
- [ ] Screen 09 clearly communicates desired next challenge and contact.

## Design

- [ ] Matches Stitch palette and premium 16-bit visual identity.
- [ ] Uses `screen.png` as visual target.
- [ ] Reuses shared HUD components.
- [ ] Scanlines are subtle.
- [ ] Active selection uses purple.
- [ ] Primary/achievement emphasis uses gold.
- [ ] Does not look like a generic résumé template.

## Navigation

- [ ] All nine routes accessible from menu.
- [ ] Next/Previous works in sequential order.
- [ ] Start button works.
- [ ] Browser back/forward works.
- [ ] Deep links work after deploy.
- [ ] Mobile menu works.

## Responsive

Test at minimum:

```text
375 × 812
390 × 844
768 × 1024
1024 × 768
1440 × 900
1600 × 1000+
```

- [ ] No horizontal page scroll.
- [ ] No clipped text.
- [ ] Mobile journey is vertical.
- [ ] Sidebar does not consume unusable mobile width.
- [ ] Touch targets remain usable.

## Maintainability

- [ ] Career copy is not hard-coded throughout pages.
- [ ] Contact links live in central content/config.
- [ ] Assets live in central asset config.
- [ ] Repeated visual patterns use components.
- [ ] Adding another case study should require mostly data + one route/data entry, not duplicated markup.

---

# 24. Non-goals for MVP

Do not implement now:

- backend;
- admin panel;
- CMS;
- editable portfolio interface;
- login;
- contact form backend;
- visitor accounts;
- achievements system;
- real EXP calculations;
- game mechanics;
- audio system;
- multiplayer;
- blog;
- analytics dashboard;
- database;
- complex internationalization framework.

---

# 25. Optional improvements after MVP

Only after the core portfolio is complete:

1. Portuguese/English language switch using two static content files.
2. Download résumé button.
3. Additional data-driven quest-detail pages.
4. Very subtle optional UI sound toggle.
5. Custom domain.
6. Analytics.
7. Print/PDF presentation mode.
8. Dedicated recruiter “5-minute mode” that advances linearly through only the essential screens.

None of these should block MVP.

---

# 26. Definition of done

The project is complete when:

- it visually follows the Stitch reference closely;
- all nine screens are real responsive React UI, not screenshots;
- it works as both a sequential presentation and a navigable portfolio;
- it contains no backend;
- it contains no fabricated professional facts;
- it is easy to edit through central content files;
- it is deployable as a static Vite app;
- it clearly answers **who Raphael is, what he can do, what evidence supports it, and how he can help a future team**.

---

# 27. Final implementation principle

When making a trade-off, use this order:

```text
Truth of professional content
        ↓
Clarity for recruiter/team
        ↓
Navigation/usability
        ↓
Visual fidelity to Stitch
        ↓
Game-like decoration
```

The 16-bit presentation is the differentiator. The professional story is the product.
