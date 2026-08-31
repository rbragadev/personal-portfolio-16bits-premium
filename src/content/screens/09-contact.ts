/* ---------------------------------------------------------------------------
   SCREEN 09 — Next Quest / Contact  (/contact)
   Answers "What are you looking for and how do I reach you?"
   Contact links themselves live in ../identity.ts
   --------------------------------------------------------------------------- */

import type { Localized } from '../locale';

export type ContactScreen = {
  screenNumber: string;
  screenLabel: string;
  headline: string;
  intro: string;
  challengesLabel: string;
  challenges: string[];
  connectLabel: string;
  ctaLabel: string;
  /** Nostalgic lower-right dialogue box. */
  dialogue: string[];
};

export const contactScreen: Localized<ContactScreen> = {
  en: {
    screenNumber: '09',
    screenLabel: 'NEXT QUEST',
    headline: 'THE NEXT QUEST\nIS WAITING...',
    intro:
      "I'm interested in meaningful engineering challenges where I can combine hands-on product development, architecture, technical leadership and applied AI.",
    challengesLabel: 'I CAN HELP A TEAM:',
    challenges: [
      'Turn complex product problems into executable technical plans',
      'Improve architecture without freezing delivery',
      'Ship across backend, frontend and mobile boundaries',
      'Strengthen engineering practices and technical ownership',
      'Explore practical AI and agent opportunities',
      'Build products with visible business and user impact',
    ],
    connectLabel: "LET'S CONNECT!",
    ctaLabel: "LET'S TALK",
    dialogue: ['THE NEXT QUEST', 'IS WAITING_'],
  },

  pt: {
    screenNumber: '09',
    screenLabel: 'PRÓXIMA MISSÃO',
    headline: 'A PRÓXIMA MISSÃO\nESTÁ ESPERANDO...',
    intro:
      'Procuro desafios de engenharia que valham a pena, onde eu possa combinar desenvolvimento de produto na prática, arquitetura, liderança técnica e IA aplicada.',
    challengesLabel: 'POSSO AJUDAR UM TIME A:',
    challenges: [
      'Transformar problemas complexos de produto em planos técnicos executáveis',
      'Melhorar a arquitetura sem congelar a entrega',
      'Entregar atravessando backend, frontend e mobile',
      'Fortalecer práticas de engenharia e senso de propriedade técnica',
      'Explorar oportunidades práticas de IA e agentes',
      'Construir produtos com impacto visível no negócio e no usuário',
    ],
    connectLabel: 'VAMOS CONVERSAR!',
    ctaLabel: 'FALAR COMIGO',
    dialogue: ['A PRÓXIMA MISSÃO', 'ESTÁ ESPERANDO_'],
  },
};
