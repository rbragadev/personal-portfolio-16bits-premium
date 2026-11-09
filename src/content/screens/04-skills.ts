/* ---------------------------------------------------------------------------
   SCREEN 04 — Skills & Abilities  (/skills)
   Answers "What can you actually do?" — capabilities, not a logo wall.

   Add a technology by adding one line to the relevant group's `items`.
   `level` renders segmented bars; omit it and the item renders as a [ tag ].
   Everything here is backed by the LinkedIn profile or the quest log.
   --------------------------------------------------------------------------- */

import type { SkillGroup } from '../../types/portfolio';
import type { Localized } from '../locale';

export type SkillsScreen = {
  screenNumber: string;
  screenLabel: string;
  title: string;
  statusLabel: string;
  statusValue: string;
  skillGroups: SkillGroup[];
};

/* Technology names are identical in both locales; only group labels and the
   few descriptive items differ. */
const productEngineering: SkillGroup['items'] = [
  { name: 'TypeScript', level: 'core' },
  { name: 'JavaScript', level: 'core' },
  { name: 'React', level: 'core' },
  { name: 'React Native', level: 'core' },
  { name: 'Node.js', level: 'core' },
  { name: 'NestJS', level: 'core' },
  { name: 'Next.js', level: 'strong' },
  { name: 'Angular', level: 'working' },
];

const blockchain: SkillGroup['items'] = [
  { name: 'Solidity', level: 'core' },
  { name: 'Smart Contracts', level: 'strong' },
  { name: 'Rust', level: 'working' },
  { name: 'Go', level: 'working' },
  { name: 'Hyperledger Fabric', level: 'working' },
];

const cloud: SkillGroup['items'] = [
  { name: 'AWS' },
  { name: 'AWS Lambda' },
  { name: 'AWS CDK' },
  { name: 'ECS' },
  { name: 'GCP' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'CI/CD' },
  { name: 'Datadog' },
  { name: 'Feature flags' },
];

export const skillsScreen: Localized<SkillsScreen> = {
  en: {
    screenNumber: '04',
    screenLabel: 'SKILLS & ABILITIES',
    title: 'SKILLS & ABILITIES',
    statusLabel: 'SYS_STATUS',
    statusValue: 'ONLINE',
    skillGroups: [
      { id: 'product-engineering', label: 'PRODUCT ENGINEERING', items: productEngineering },
      { id: 'blockchain', label: 'BLOCKCHAIN', items: blockchain },
      {
        id: 'architecture-data',
        label: 'ARCHITECTURE & DATA',
        items: [
          { name: 'API design' },
          { name: 'System Design' },
          { name: 'SOLID / Clean Code / TDD' },
          { name: 'SQL' },
          { name: 'PostgreSQL' },
          { name: 'Prisma' },
          { name: 'MongoDB' },
          { name: 'Redis' },
          { name: 'SQS / SNS messaging' },
          { name: 'Nx monorepo' },
        ],
      },
      { id: 'cloud-delivery', label: 'CLOUD & DELIVERY', items: cloud },
      {
        id: 'ai-emerging',
        label: 'AI & EMERGING TECH',
        items: [
          { name: 'Applied AI' },
          { name: 'AI Agents' },
          { name: 'LLM orchestration' },
          { name: 'Inference architecture' },
          { name: 'Inference cost optimisation' },
          { name: 'RAG' },
          { name: 'MCP (Model Context Protocol)' },
          { name: 'Claude Code' },
        ],
      },
      {
        id: 'ways-of-working',
        label: 'WAYS OF WORKING',
        items: [
          { name: 'Requirement gathering' },
          { name: 'Mentoring & training' },
          { name: 'Scrum' },
          { name: 'Technical documentation' },
          { name: 'Distributed teams' },
        ],
      },
    ],
  },

  pt: {
    screenNumber: '04',
    screenLabel: 'HABILIDADES',
    title: 'HABILIDADES',
    statusLabel: 'SYS_STATUS',
    statusValue: 'ONLINE',
    skillGroups: [
      { id: 'product-engineering', label: 'ENGENHARIA DE PRODUTO', items: productEngineering },
      { id: 'blockchain', label: 'BLOCKCHAIN', items: blockchain },
      {
        id: 'architecture-data',
        label: 'ARQUITETURA E DADOS',
        items: [
          { name: 'Design de APIs' },
          { name: 'System Design' },
          { name: 'SOLID / Clean Code / TDD' },
          { name: 'SQL' },
          { name: 'PostgreSQL' },
          { name: 'Prisma' },
          { name: 'MongoDB' },
          { name: 'Redis' },
          { name: 'Mensageria SQS / SNS' },
          { name: 'Monorepo Nx' },
        ],
      },
      { id: 'cloud-delivery', label: 'CLOUD E ENTREGA', items: cloud },
      {
        id: 'ai-emerging',
        label: 'IA E TECNOLOGIAS EMERGENTES',
        items: [
          { name: 'IA aplicada' },
          { name: 'Agentes de IA' },
          { name: 'Orquestração de LLMs' },
          { name: 'Arquitetura de inferência' },
          { name: 'Otimização de custo de inferência' },
          { name: 'RAG' },
          { name: 'MCP (Model Context Protocol)' },
          { name: 'Claude Code' },
        ],
      },
      {
        id: 'ways-of-working',
        label: 'FORMA DE TRABALHAR',
        items: [
          { name: 'Levantamento de requisitos' },
          { name: 'Mentoria e treinamento' },
          { name: 'Scrum' },
          { name: 'Documentação técnica' },
          { name: 'Times distribuídos' },
        ],
      },
    ],
  },
};
