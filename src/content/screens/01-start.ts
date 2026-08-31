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
    subtitle: 'FULLSTACK · BLOCKCHAIN · MOBILE',
    tagline: 'I turn complex ideas into digital products,\nsystems and scalable solutions.',
    disciplines: 'React · React Native · Node · NestJS · Solidity · AWS',
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
    subtitle: 'FULLSTACK · BLOCKCHAIN · MOBILE',
    tagline: 'Transformo ideias complexas em produtos digitais,\nsistemas e soluções que escalam.',
    disciplines: 'React · React Native · Node · NestJS · Solidity · AWS',
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
