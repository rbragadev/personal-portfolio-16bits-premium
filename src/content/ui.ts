/* ---------------------------------------------------------------------------
   Interface strings — everything the chrome says that is not screen content:
   menu labels, button text, status words, aria-labels.

   Screen labels are keyed by screen number so src/app/navigation.ts can stay
   purely structural (paths, icons, order).
   --------------------------------------------------------------------------- */

import type { Localized } from './locale';
import type { SkillLevel } from '../types/portfolio';

export type NavEntry = { label: string; title: string };

export type UiStrings = {
  nav: Record<string, NavEntry>;
  menu: {
    open: string;
    close: string;
    screens: string;
    sequential: string;
    pressStart: string;
    language: string;
  };
  questStatus: { 'in-progress': string; complete: string };
  /** Word printed beside a segmented proficiency bar. */
  skillLevels: Record<SkillLevel, string>;
  actions: {
    openCase: string;
    viewInQuestLog: string;
    fullQuestLog: string;
    seeSideQuests: string;
    openProject: string;
    backToQuestLog: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
  };
  questNotFound: { title: string; body: string };
  techStack: string;
  avatarAlt: string;
};

export const ui: Localized<UiStrings> = {
  en: {
    nav: {
      '01': { label: 'Start', title: 'START SCREEN' },
      '02': { label: 'Profile', title: 'PLAYER PROFILE' },
      '03': { label: 'Journey', title: 'JOURNEY OVERVIEW' },
      '04': { label: 'Skills', title: 'SKILLS & ABILITIES' },
      '05': { label: 'Quests', title: 'QUEST LOG' },
      '06': { label: 'Quest Details', title: 'QUEST DETAILS' },
      '07': { label: 'Side Quests', title: 'SIDE QUESTS' },
      '08': { label: 'Impact', title: 'IMPACT & HOW I HELP' },
      '09': { label: 'Connect', title: 'NEXT QUEST' },
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
      screens: 'Screens',
      sequential: 'Sequential navigation',
      pressStart: 'Press Start',
      language: 'Language',
    },
    questStatus: { 'in-progress': 'In Progress', complete: 'Complete' },
    skillLevels: { core: 'CORE', strong: 'STRONG', applied: 'APPLIED', working: 'WORKING' },
    actions: {
      openCase: 'Open case file',
      viewInQuestLog: 'View in quest log',
      fullQuestLog: 'Full quest log',
      seeSideQuests: 'See side quests',
      openProject: 'Open project',
      backToQuestLog: 'Back to quest log',
    },
    notFound: {
      code: 'Error 404',
      title: 'THIS PATH IS UNCHARTED',
      body: 'There is no screen at this address. Return to the start and pick a quest.',
    },
    questNotFound: {
      title: 'QUEST NOT FOUND',
      body: 'No case study is recorded for this quest yet.',
    },
    techStack: 'TECH STACK',
    avatarAlt: 'Pixel-art portrait of Raphael Braga',
  },

  pt: {
    nav: {
      '01': { label: 'Início', title: 'TELA INICIAL' },
      '02': { label: 'Perfil', title: 'PERFIL DO JOGADOR' },
      '03': { label: 'Jornada', title: 'VISÃO DA JORNADA' },
      '04': { label: 'Habilidades', title: 'HABILIDADES' },
      '05': { label: 'Missões', title: 'DIÁRIO DE MISSÕES' },
      '06': { label: 'Detalhes', title: 'DETALHES DA MISSÃO' },
      '07': { label: 'Projetos', title: 'MISSÕES PARALELAS' },
      '08': { label: 'Impacto', title: 'IMPACTO E COMO AJUDO' },
      '09': { label: 'Contato', title: 'PRÓXIMA MISSÃO' },
    },
    menu: {
      open: 'Abrir menu',
      close: 'Fechar menu',
      screens: 'Telas',
      sequential: 'Navegação sequencial',
      pressStart: 'Press Start',
      language: 'Idioma',
    },
    questStatus: { 'in-progress': 'Em andamento', complete: 'Concluída' },
    skillLevels: { core: 'BASE', strong: 'FORTE', applied: 'APLICADO', working: 'EM EVOLUÇÃO' },
    actions: {
      openCase: 'Abrir dossiê',
      viewInQuestLog: 'Ver no diário',
      fullQuestLog: 'Diário completo',
      seeSideQuests: 'Ver projetos',
      openProject: 'Abrir projeto',
      backToQuestLog: 'Voltar ao diário',
    },
    notFound: {
      code: 'Erro 404',
      title: 'ESTE CAMINHO NÃO EXISTE NO MAPA',
      body: 'Não há tela neste endereço. Volte ao início e escolha uma missão.',
    },
    questNotFound: {
      title: 'MISSÃO NÃO ENCONTRADA',
      body: 'Ainda não há um dossiê registrado para esta missão.',
    },
    techStack: 'STACK',
    avatarAlt: 'Retrato em pixel art de Raphael Braga',
  },
};
