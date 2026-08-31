/* ---------------------------------------------------------------------------
   WHO — shared identity, credentials and contact.
   Used by the sidebar, start screen, profile and contact screens.
   Source of truth: Raphael's LinkedIn profile.
   --------------------------------------------------------------------------- */

import type { ContactLink } from '../types/portfolio';
import type { Localized } from './locale';

/* Name, links and location are the same in both languages — declared once. */
export const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/rbragadev',
    href: 'https://www.linkedin.com/in/rbragadev',
    icon: 'link',
  },
  {
    label: 'Portfolio',
    display: 'raphael-braga-main-porfolio.vercel.app',
    href: 'https://raphael-braga-main-porfolio.vercel.app',
    icon: 'globe',
  },
  {
    label: 'Email',
    display: 'raffael.info@gmail.com',
    href: 'mailto:raffael.info@gmail.com',
    icon: 'mail',
  },
];

export type Identity = {
  name: string;
  nameLines: string[];
  title: string;
  roles: string[];
  /** Presentation metaphor, per the design system — not a claimed title. */
  rank: string;
  level: string;
  location: string;
  positioning: string;
};

export const identity: Localized<Identity> = {
  en: {
    name: 'Raphael Braga',
    nameLines: ['RAPHAEL', 'BRAGA'],
    title: 'Senior Software Engineer',
    roles: ['FullStack', 'Blockchain', 'Mobile'],
    rank: 'LVL 12+ ENGINEER',
    level: '12+',
    location: 'Belo Horizonte, BR',
    positioning:
      'I turn complex product and engineering problems into working, scalable digital products — across backend, frontend, mobile, cloud, blockchain and architecture.',
  },
  pt: {
    name: 'Raphael Braga',
    nameLines: ['RAPHAEL', 'BRAGA'],
    title: 'Engenheiro de Software Sênior',
    roles: ['FullStack', 'Blockchain', 'Mobile'],
    rank: 'LVL 12+ ENGENHEIRO',
    level: '12+',
    location: 'Belo Horizonte, BR',
    positioning:
      'Transformo problemas complexos de produto e engenharia em produtos digitais que funcionam e escalam — backend, frontend, mobile, cloud, blockchain e arquitetura.',
  },
};

export type Credentials = {
  languages: { name: string; level: string }[];
  certifications: string[];
  education: { school: string; course: string; dates: string }[];
  award: { title: string; issuer: string };
};

export const credentials: Localized<Credentials> = {
  en: {
    languages: [
      { name: 'Portuguese', level: 'Native / Bilingual' },
      { name: 'English', level: 'Native / Bilingual' },
    ],
    certifications: [
      'Blockchain Development',
      'TypeScript',
      'JavaScript Developer',
      'React Native',
      'Firebase',
    ],
    education: [
      {
        school: 'Faculdade Pitágoras',
        course: 'B.Sc. Software Engineering',
        dates: '2021 – 2024',
      },
    ],
    award: { title: 'Patent Achievement', issuer: 'Ford Motors Company' },
  },
  pt: {
    languages: [
      { name: 'Português', level: 'Nativo / Bilíngue' },
      { name: 'Inglês', level: 'Nativo / Bilíngue' },
    ],
    certifications: [
      'Desenvolvimento Blockchain',
      'TypeScript',
      'JavaScript Developer',
      'React Native',
      'Firebase',
    ],
    education: [
      {
        school: 'Faculdade Pitágoras',
        course: 'Bacharelado em Engenharia de Software',
        dates: '2021 – 2024',
      },
    ],
    award: { title: 'Patente conquistada', issuer: 'Ford Motors Company' },
  },
};
