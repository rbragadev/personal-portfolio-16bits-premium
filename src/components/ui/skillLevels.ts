import type { SkillLevel } from '../../types/portfolio';

/* How many segments light up per semantic level. The printed word lives in
   src/content/ui.ts so it can be translated; deliberately no percentages —
   the design wants a filled bar, the content policy forbids inventing
   numeric precision. */
export const LEVEL_SEGMENTS: Record<SkillLevel, number> = {
  core: 5,
  strong: 4,
  applied: 3,
  working: 2,
};

export const SEGMENT_TOTAL = 5;
