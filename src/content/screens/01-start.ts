/* ---------------------------------------------------------------------------
   SCREEN 01 — Start Screen  (/)
   A recruiter must know who Raphael is in under five seconds.
   --------------------------------------------------------------------------- */

import type { Localized } from '../locale';

export type StartScreen = {
  screenNumber: string;
  screenLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  /** Optional supporting line under the tagline. Set to '' to hide. */
  disciplines: string;
  ctaLabel: string;
  hud: {
    levelLabel: string;
    level: string;
    expLabel: string;
    /** Filled segments out of `expTotal`, purely decorative. */
    expFilled: number;
    expTotal: number;
    hpLabel: string;
    hearts: number;
    locationLabel: string;
  };
};

export const startScreen: Localized<StartScreen> = {
  en: {
    screenNumber: '01',
    screenLabel: 'START SCREEN',
    title: 'SENIOR SOFTWARE ENGINEER',
    subtitle: 'FULLSTACK · AI AGENTS · BLOCKCHAIN',
    tagline: 'I turn complex ideas into digital products,\nsystems and scalable solutions.',
    disciplines: 'TypeScript · Node · NestJS · React · React Native · AI Agents · AWS',
    ctaLabel: 'PRESS START',
    hud: {
      levelLabel: 'LVL',
      level: '12+',
      expLabel: 'EXP',
      expFilled: 5,
      expTotal: 6,
      hpLabel: 'HP',
      hearts: 3,
      locationLabel: 'LOCATION:',
    },
  },
  pt: {
    screenNumber: '01',
    screenLabel: 'TELA INICIAL',
    title: 'ENGENHEIRO DE SOFTWARE SÊNIOR',
    subtitle: 'FULLSTACK · AI AGENTS · BLOCKCHAIN',
    tagline: 'Transformo ideias complexas em produtos digitais,\nsistemas e soluções que escalam.',
    disciplines: 'TypeScript · Node · NestJS · React · React Native · AI Agents · AWS',
    ctaLabel: 'PRESS START',
    hud: {
      levelLabel: 'LVL',
      level: '12+',
      expLabel: 'EXP',
      expFilled: 5,
      expTotal: 6,
      hpLabel: 'HP',
      hearts: 3,
      locationLabel: 'LOCALIZAÇÃO:',
    },
  },
};
