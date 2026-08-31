/* ---------------------------------------------------------------------------
   Shape of every piece of editable content.
   Each screen has its own file under src/content/screens/ that satisfies these.
   --------------------------------------------------------------------------- */

/** A visual proficiency step. No fake percentages — semantic labels only. */
export type SkillLevel = 'core' | 'strong' | 'working' | 'applied';

export type Attribute = {
  label: string;
  /** Shown next to the bar, e.g. "CORE", "STRONG". */
  level: SkillLevel;
};

export type QuestStatus = 'in-progress' | 'complete';

export type Experience = {
  /** URL segment, e.g. "ford" -> /quests/ford */
  id: string;
  company: string;
  /** Other name the same company is listed under, e.g. on LinkedIn. */
  alias?: string;
  role: string;
  /**
   * How the work is contracted, when it is not a standard full-time role.
   * Printed as a badge so overlapping date ranges read honestly.
   */
  engagement?: string;
  /** Display range, e.g. "Feb 2017 – Feb 2023" */
  dates: string;
  /** Short range for the timeline, e.g. "2017–2023" */
  years: string;
  /** e.g. "Brazil", "United States", "Estonia (remote)" */
  location: string;
  status: QuestStatus;
  /** One or two sentences. Used in the quest log header. */
  summary: string;
  /** Shorter line used on the journey timeline. */
  journeySummary: string;
  /** What was actually built or done. The substance of the quest log. */
  highlights: string[];
  tech: string[];
};

export type CaseStudy = {
  /** Must match an Experience id. */
  id: string;
  title: string;
  subtitle: string;
  /** Qualitative context. */
  challenge: string;
  contributions: string[];
  stack: string[];
  /** Evidence categories shown in the MISSION RESULT panel. */
  outcomes: { label: string; value: string }[];
};

export type SideProject = {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  tech: string[];
  /** Optional live link. Omit rather than shipping a dead link. */
  href?: string;
};

export type SkillGroup = {
  id: string;
  /** Bracketed panel label, e.g. "PRODUCT ENGINEERING" */
  label: string;
  /** Rendered as segmented bars when `level` is present, else as tags. */
  items: { name: string; level?: SkillLevel }[];
};

export type ImpactCard = {
  label: string;
  value: string;
  caption: string;
};

export type ValueAttribute = {
  /** Two-digit ordinal, e.g. "01" */
  index: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  /** Text shown to the reader. */
  display: string;
  href: string;
  icon: 'link' | 'globe' | 'mail';
};

/* ---------------------------------------------------------------------------
   Journey timeline (screen 03)

   The timeline mixes two kinds of entry: personal milestones that explain how
   Raphael got into software, and professional quests that pull their data from
   the master career list in 05-quests.ts.
   --------------------------------------------------------------------------- */

export type TimelineIcon = 'gamepad' | 'code' | 'briefcase' | 'school' | 'award' | 'medal';

export type Milestone = {
  kind: 'milestone';
  id: string;
  /** Left-gutter marker: a year range, or "AGE 14" when no year is claimed. */
  when: string;
  title: string;
  description: string;
  icon: TimelineIcon;
};

export type QuestEntry = {
  kind: 'quest';
  /** Must match an Experience id in 05-quests.ts. */
  id: string;
};

export type TimelineEntry = Milestone | QuestEntry;

export type ContributionLink = { label: string; href: string };

export type Contribution = {
  id: string;
  name: string;
  /** Matching Experience id, or null for personal work. */
  questId: string | null;
  /** Where it happened, e.g. "Xvia · Government of Piauí". */
  context: string;
  /** What Raphael did. First person. */
  role: string;
  summary: string;
  /** Public, checkable figures belonging to the product. */
  facts: string[];
  /** Third-party recognition only. */
  recognition?: string;
  links?: ContributionLink[];
};
