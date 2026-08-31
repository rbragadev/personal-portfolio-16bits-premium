/* ---------------------------------------------------------------------------
   SCREEN 08 — Impact & How I Help  (/impact)
   Answers "How can I help your team?"

   Every number on this screen traces back to a specific quest in 05-quests.ts.
   Nothing decorative is presented as a metric.
   --------------------------------------------------------------------------- */

import type { ImpactCard, ValueAttribute } from '../../types/portfolio';
import type { Localized } from '../locale';

export type ImpactScreen = {
  screenNumber: string;
  screenLabel: string;
  title: string;
  eyebrow: string;
  mainObjectiveLabel: string;
  mainObjective: string;
  howIHelpLabel: string;
  impactCards: ImpactCard[];
  valueAttributes: ValueAttribute[];
};

export const impactScreen: Localized<ImpactScreen> = {
  en: {
    screenNumber: '08',
    screenLabel: 'IMPACT & HOW I HELP',
    title: 'IMPACT & HOW I HELP',
    eyebrow: '[ WHAT I BRING TO A TEAM ]',
    mainObjectiveLabel: 'MAIN OBJECTIVE',
    mainObjective:
      'Build products that solve real problems, help teams make better technical decisions, and connect engineering quality with business and product outcomes.',
    howIHelpLabel: 'HOW I HELP',
    impactCards: [
      {
        label: 'EXPERIENCE',
        value: '12+ YEARS',
        caption:
          'Full-stack product engineering, mobile, blockchain R&D and AWS consultancy — across digital government, sports data, commerce, AI and automotive.',
      },
      {
        label: 'TEAM LEADERSHIP',
        value: '20 ACROSS 4 SQUADS',
        caption:
          'Coordinated 20 developers at Ford — three squads in the United States, one in Brazil — through six years of R&D, at times as Scrum Master, and later ran developer training on best practices, cybersecurity and mobile.',
      },
      {
        label: 'MEASURED IMPACT',
        value: 'R$60K / MONTH',
        caption:
          'Automation I designed at B4A saved over R$60,000 monthly, cut IT support tickets by 90% and freed five people for higher-value work.',
      },
    ],
    valueAttributes: [
      {
        index: '01',
        title: 'CLARITY',
        description:
          'Turn ambiguous requirements into technical direction — I gather them with the client myself.',
      },
      {
        index: '02',
        title: 'ARCHITECTURE',
        description: 'Design maintainable solutions without unnecessary complexity.',
      },
      {
        index: '03',
        title: 'DELIVERY',
        description: 'Work hands-on across backend, frontend, mobile, cloud and smart contracts.',
      },
      {
        index: '04',
        title: 'TEAM LEVERAGE',
        description:
          'Mentor, train and unblock — shared libraries and documentation that outlive my time on a project.',
      },
    ],
  },

  pt: {
    screenNumber: '08',
    screenLabel: 'IMPACTO E COMO AJUDO',
    title: 'IMPACTO E COMO AJUDO',
    eyebrow: '[ O QUE EU TRAGO PARA UM TIME ]',
    mainObjectiveLabel: 'OBJETIVO PRINCIPAL',
    mainObjective:
      'Construir produtos que resolvem problemas reais, ajudar times a tomar decisões técnicas melhores e conectar qualidade de engenharia com resultado de negócio e de produto.',
    howIHelpLabel: 'COMO EU AJUDO',
    impactCards: [
      {
        label: 'EXPERIÊNCIA',
        value: '12+ ANOS',
        caption:
          'Engenharia de produto full-stack, mobile, P&D em blockchain e consultoria AWS — passando por governo digital, dados esportivos, comércio, IA e automotivo.',
      },
      {
        label: 'LIDERANÇA DE TIME',
        value: '20 EM 4 SQUADS',
        caption:
          'Coordenei 20 desenvolvedores na Ford — três squads nos Estados Unidos, um no Brasil — ao longo de seis anos de P&D, por vezes como Scrum Master, e depois conduzi treinamentos sobre boas práticas, cibersegurança e mobile.',
      },
      {
        label: 'IMPACTO MENSURADO',
        value: 'R$60K / MÊS',
        caption:
          'A automação que desenhei na B4A economizou mais de R$60.000 por mês, reduziu em 90% os chamados de suporte de TI e liberou cinco pessoas para trabalho de maior valor.',
      },
    ],
    valueAttributes: [
      {
        index: '01',
        title: 'CLAREZA',
        description:
          'Transformar requisitos ambíguos em direção técnica — eu mesmo levanto isso com o cliente.',
      },
      {
        index: '02',
        title: 'ARQUITETURA',
        description: 'Desenhar soluções sustentáveis sem complexidade desnecessária.',
      },
      {
        index: '03',
        title: 'ENTREGA',
        description: 'Trabalhar na mão em backend, frontend, mobile, cloud e smart contracts.',
      },
      {
        index: '04',
        title: 'ALAVANCAGEM DO TIME',
        description:
          'Mentorar, treinar e desbloquear — bibliotecas compartilhadas e documentação que sobrevivem à minha passagem pelo projeto.',
      },
    ],
  },
};
