/* ---------------------------------------------------------------------------
   SCREEN 02 — Player Profile  (/profile)
   Answers "Who are you?"
   Credentials (languages, certifications, education, award) live in
   ../identity.ts so the profile and contact screens stay in sync.
   --------------------------------------------------------------------------- */

import type { Attribute } from '../../types/portfolio';
import type { Localized } from '../locale';

export type ProfileScreen = {
  screenNumber: string;
  screenLabel: string;
  classLabel: string;
  className: string;
  rolesLabel: string;
  roles: string[];
  expLabel: string;
  expValue: string;
  expUnit: string;
  /** Decorative fill for the EXP bar (0–1). */
  expProgress: number;
  mainQuestLabel: string;
  mainQuest: string;
  bio: string;
  attributesLabel: string;
  recordsLabel: string;
  languagesLabel: string;
  certificationsLabel: string;
  educationLabel: string;
  awardLabel: string;
  /* Semantic levels only — the bars vary in length for the game aesthetic, but
     we never print fake numeric precision like "95%". */
  attributes: Attribute[];
};

/* Only technologies Raphael is comfortable discussing in an interview.
   Identical in both languages, so declared once. */
export const techSummary: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'NestJS',
  'Prisma',
  'SQL',
  'MongoDB',
  'Redis',
  'Solidity',
  'Rust',
  'Docker',
  'AWS',
  'GCP',
];

export const profileScreen: Localized<ProfileScreen> = {
  en: {
    screenNumber: '02',
    screenLabel: 'PLAYER PROFILE',
    classLabel: 'CLASS',
    className: 'SENIOR SOFTWARE ENGINEER',
    rolesLabel: 'SPECIALITIES',
    roles: ['FULLSTACK', 'BLOCKCHAIN', 'MOBILE'],
    expLabel: 'EXP',
    expValue: '12+',
    expUnit: 'YEARS',
    expProgress: 0.85,
    mainQuestLabel: 'MAIN QUEST',
    mainQuest:
      'Building useful products and helping teams make better technical decisions.',
    bio:
      'Senior software engineer specialising in full-stack development, mobile applications and blockchain. Deepest in React, React Native, Node.js, NestJS and Solidity, backed by databases, CI/CD, Docker, AWS and Google Cloud. I have worked across digital government, sports data, the beauty industry and automotive R&D — the common thread is turning a fuzzy business problem into a system somebody can rely on.',
    attributesLabel: 'ATTRIBUTES',
    recordsLabel: 'RECORDS',
    languagesLabel: 'LANGUAGES',
    certificationsLabel: 'CERTIFICATIONS',
    educationLabel: 'EDUCATION',
    awardLabel: 'HONOURS',
    attributes: [
      { label: 'FULLSTACK', level: 'core' },
      { label: 'MOBILE', level: 'core' },
      { label: 'BLOCKCHAIN', level: 'strong' },
      { label: 'ARCHITECTURE', level: 'strong' },
      { label: 'CLOUD & DEVOPS', level: 'strong' },
      { label: 'LEADERSHIP', level: 'strong' },
    ],
  },
  pt: {
    screenNumber: '02',
    screenLabel: 'PERFIL DO JOGADOR',
    classLabel: 'CLASSE',
    className: 'ENGENHEIRO DE SOFTWARE SÊNIOR',
    rolesLabel: 'ESPECIALIDADES',
    roles: ['FULLSTACK', 'BLOCKCHAIN', 'MOBILE'],
    expLabel: 'EXP',
    expValue: '12+',
    expUnit: 'ANOS',
    expProgress: 0.85,
    mainQuestLabel: 'MISSÃO PRINCIPAL',
    mainQuest:
      'Construir produtos úteis e ajudar times a tomar decisões técnicas melhores.',
    bio:
      'Engenheiro de software sênior especializado em desenvolvimento full-stack, aplicações mobile e blockchain. Mais profundo em React, React Native, Node.js, NestJS e Solidity, apoiado por bancos de dados, CI/CD, Docker, AWS e Google Cloud. Já trabalhei com governo digital, dados esportivos, indústria da beleza e P&D automotivo — o fio condutor é transformar um problema de negócio mal definido em um sistema em que dá para confiar.',
    attributesLabel: 'ATRIBUTOS',
    recordsLabel: 'REGISTROS',
    languagesLabel: 'IDIOMAS',
    certificationsLabel: 'CERTIFICAÇÕES',
    educationLabel: 'FORMAÇÃO',
    awardLabel: 'HONRARIAS',
    attributes: [
      { label: 'FULLSTACK', level: 'core' },
      { label: 'MOBILE', level: 'core' },
      { label: 'BLOCKCHAIN', level: 'strong' },
      { label: 'ARQUITETURA', level: 'strong' },
      { label: 'CLOUD & DEVOPS', level: 'strong' },
      { label: 'LIDERANÇA', level: 'strong' },
    ],
  },
};
