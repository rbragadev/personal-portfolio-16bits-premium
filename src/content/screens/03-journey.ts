/* ---------------------------------------------------------------------------
   SCREEN 03 — Journey Overview  (/journey)
   Answers "How did you get here?" — the whole arc, not just the résumé.

   The timeline mixes two kinds of entry:
     · `milestone` — a personal turning point, written in full right here.
     · `quest`     — a professional role, pulling its data from 05-quests.ts
                     by `id` so dates and titles are never duplicated.

   Entries render top-to-bottom in this order: oldest first.
   --------------------------------------------------------------------------- */

import type { TimelineEntry } from '../../types/portfolio';
import type { Localized } from '../locale';

export type JourneyScreen = {
  screenNumber: string;
  screenLabel: string;
  title: string;
  intro: string;
  backToStartLabel: string;
  currentQuestLabel: string;
  firstQuestLabel: string;
  timeline: TimelineEntry[];
};

export const journeyScreen: Localized<JourneyScreen> = {
  en: {
    screenNumber: '03',
    screenLabel: 'JOURNEY OVERVIEW',
    title: 'THE JOURNEY SO FAR',
    intro:
      'It started with a magazine and a game engine, long before it was a job. Everything since has been the same loop: build something, break it, understand why, build it better.',
    backToStartLabel: 'BACK TO START',
    currentQuestLabel: 'CURRENT QUEST',
    firstQuestLabel: 'FIRST MAJOR QUEST',
    timeline: [
      {
        kind: 'milestone',
        id: 'rpg-maker',
        when: 'AGE 14',
        title: 'An RPG Maker magazine',
        description:
          'I found programming through an RPG Maker magazine. Making a game meant writing the logic behind it, and that is where I met C# — the first time code stopped being a mystery and became a tool.',
        icon: 'gamepad',
      },
      {
        kind: 'milestone',
        id: 'personal-projects',
        when: 'EARLY YEARS',
        title: 'Games and projects of my own',
        description:
          'Years of building things nobody asked for — games first, then anything I was curious about. Shipping small projects on my own is still how I learn a new stack today.',
        icon: 'code',
      },
      {
        kind: 'milestone',
        id: 'first-roles',
        when: 'FIRST ROLES',
        title: 'Getting paid to build',
        description:
          'The first professional development work, turning a hobby into a craft: real deadlines, real users, and the habit of writing code somebody else has to maintain.',
        icon: 'briefcase',
      },
      { kind: 'quest', id: 'ford' },
      {
        kind: 'milestone',
        id: 'degree',
        when: '2021–2024',
        title: 'B.Sc. Software Engineering',
        description:
          'Faculdade Pitágoras — formalising, mid-career, the foundations I had been using in production for years.',
        icon: 'school',
      },
      { kind: 'quest', id: 'b4a' },
      { kind: 'quest', id: 'xvia' },
      { kind: 'quest', id: 'willowtree' },
      { kind: 'quest', id: 'r10' },
      { kind: 'quest', id: 'alianca-divergente' },
      { kind: 'quest', id: 'aws-consultancy' },
      {
        kind: 'milestone',
        id: 'simteam',
        when: '2026',
        title: 'Founded SimTeam',
        description:
          'My own product, built with a small team: a multi-tenant SaaS of WhatsApp AI agents for small businesses, live since mid-2026 — agents that take real actions under per-action policies and human approvals.',
        icon: 'code',
      },
      { kind: 'quest', id: 'ux-group' },
    ],
  },

  pt: {
    screenNumber: '03',
    screenLabel: 'VISÃO DA JORNADA',
    title: 'A JORNADA ATÉ AQUI',
    intro:
      'Começou com uma revista e uma engine de jogos, muito antes de virar trabalho. Desde então é sempre o mesmo ciclo: construir, quebrar, entender por quê, construir melhor.',
    backToStartLabel: 'VOLTAR AO INÍCIO',
    currentQuestLabel: 'MISSÃO ATUAL',
    firstQuestLabel: 'PRIMEIRA GRANDE MISSÃO',
    timeline: [
      {
        kind: 'milestone',
        id: 'rpg-maker',
        when: '14 ANOS',
        title: 'Uma revista de RPG Maker',
        description:
          'Descobri programação por uma revista de RPG Maker. Fazer um jogo significava escrever a lógica por trás dele, e foi ali que conheci C# — a primeira vez que código deixou de ser mistério e virou ferramenta.',
        icon: 'gamepad',
      },
      {
        kind: 'milestone',
        id: 'personal-projects',
        when: 'PRIMEIROS ANOS',
        title: 'Jogos e projetos meus',
        description:
          'Anos construindo coisas que ninguém pediu — jogos primeiro, depois qualquer coisa que me deixasse curioso. Publicar projetos pequenos por conta própria ainda é como aprendo uma stack nova hoje.',
        icon: 'code',
      },
      {
        kind: 'milestone',
        id: 'first-roles',
        when: 'PRIMEIROS EMPREGOS',
        title: 'Ser pago para construir',
        description:
          'Os primeiros trabalhos profissionais de desenvolvimento, transformando hobby em ofício: prazos reais, usuários reais e o hábito de escrever código que outra pessoa vai manter.',
        icon: 'briefcase',
      },
      { kind: 'quest', id: 'ford' },
      {
        kind: 'milestone',
        id: 'degree',
        when: '2021–2024',
        title: 'Bacharelado em Engenharia de Software',
        description:
          'Faculdade Pitágoras — formalizando, no meio da carreira, os fundamentos que eu já usava em produção havia anos.',
        icon: 'school',
      },
      { kind: 'quest', id: 'b4a' },
      { kind: 'quest', id: 'xvia' },
      { kind: 'quest', id: 'willowtree' },
      { kind: 'quest', id: 'r10' },
      { kind: 'quest', id: 'alianca-divergente' },
      { kind: 'quest', id: 'aws-consultancy' },
      {
        kind: 'milestone',
        id: 'simteam',
        when: '2026',
        title: 'Fundei o SimTeam',
        description:
          'Meu próprio produto, construído com um time pequeno: um SaaS multi-tenant de agentes de IA no WhatsApp para pequenos negócios, no ar desde meados de 2026 — agentes que executam ações reais sob políticas por ação e aprovação humana.',
        icon: 'code',
      },
      { kind: 'quest', id: 'ux-group' },
    ],
  },
};
