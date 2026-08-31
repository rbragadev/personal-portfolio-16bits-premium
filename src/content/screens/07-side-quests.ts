/* ---------------------------------------------------------------------------
   SCREEN 07 — Side Quests  (/side-quests)
   Answers "What do you build when nobody is assigning you a ticket?"

   Describes product purpose and capability only — no customer data, no
   credentials, no proprietary employer detail. Add `href` only when a link
   is real and live; a missing href renders no link rather than a dead one.
   --------------------------------------------------------------------------- */

import type { SideProject } from '../../types/portfolio';
import type { Localized } from '../locale';

export type SideQuestsScreen = {
  screenNumber: string;
  screenLabel: string;
  title: string;
  terminalLine: string;
  statusLabel: string;
  statusValue: string;
  sideProjects: SideProject[];
};

export const sideQuestsScreen: Localized<SideQuestsScreen> = {
  en: {
    screenNumber: '07',
    screenLabel: 'SIDE QUESTS',
    title: 'SIDE QUESTS',
    terminalLine: 'Building in public. Exploring ideas. Creating solutions that matter.',
    statusLabel: 'SYS.OP',
    statusValue: 'ACTIVE',
    sideProjects: [
      {
        id: 'ninho',
        name: 'NINHO',
        subtitle: 'Family Safety Platform',
        summary:
          'Mobile family-safety product focused on parent and child experiences, device pairing, location, alerts and safety flows.',
        tech: ['React Native / Expo', 'NestJS', 'PostgreSQL', 'Real-time product flows'],
      },
      {
        id: 'ai-agent-platform',
        name: 'AI AGENT PLATFORM',
        subtitle: 'Enterprise AI Infrastructure',
        summary:
          'Multi-tenant platform concept for configuring, governing, deploying and observing AI agents for different clients and use cases.',
        tech: ['TypeScript', 'NestJS', 'Mastra', 'AI Agents', 'RAG / Tools / Governance'],
      },
      {
        id: 'feature-flags',
        name: 'FEATURE FLAGS',
        subtitle: 'Release Control Platform',
        summary:
          'A platform for putting releases behind flags — shipping code to production before it is switched on, rolling a feature out gradually, and turning it off again without a deploy.',
        tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL'],
      },
      {
        id: 'pulso',
        name: 'PULSO',
        subtitle: 'Research Intelligence Platform',
        summary:
          'Product concept for research and fieldwork workflows, turning survey and citizen data into useful intelligence and explainable outputs.',
        tech: ['Product Design', 'Data', 'AI', 'Research workflows'],
      },
      {
        id: 'commerce-systems',
        name: 'ECOMMERCE SYSTEMS',
        subtitle: 'E-commerce & Integrations',
        summary:
          'Product and integration work around Shopify, ERP/Bling, customer portals, subscriptions and operational automation.',
        tech: ['Shopify', 'APIs', 'Integrations', 'E-commerce workflows'],
      },
    ],
  },

  pt: {
    screenNumber: '07',
    screenLabel: 'MISSÕES PARALELAS',
    title: 'MISSÕES PARALELAS',
    terminalLine: 'Construindo em público. Explorando ideias. Criando soluções que importam.',
    statusLabel: 'SYS.OP',
    statusValue: 'ATIVO',
    sideProjects: [
      {
        id: 'ninho',
        name: 'NINHO',
        subtitle: 'Plataforma de segurança familiar',
        summary:
          'Produto mobile de segurança familiar focado nas experiências de pais e filhos: pareamento de dispositivos, localização, alertas e fluxos de segurança.',
        tech: ['React Native / Expo', 'NestJS', 'PostgreSQL', 'Fluxos em tempo real'],
      },
      {
        id: 'ai-agent-platform',
        name: 'AI AGENT PLATFORM',
        subtitle: 'Infraestrutura de IA corporativa',
        summary:
          'Conceito de plataforma multi-tenant para configurar, governar, implantar e observar agentes de IA para diferentes clientes e casos de uso.',
        tech: ['TypeScript', 'NestJS', 'Mastra', 'Agentes de IA', 'RAG / Tools / Governança'],
      },
      {
        id: 'feature-flags',
        name: 'FEATURE FLAGS',
        subtitle: 'Plataforma de controle de release',
        summary:
          'Plataforma para colocar releases atrás de flags — subir código para produção antes de ligá-lo, liberar uma feature gradualmente e desligá-la de novo sem deploy.',
        tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL'],
      },
      {
        id: 'pulso',
        name: 'PULSO',
        subtitle: 'Plataforma de inteligência em pesquisa',
        summary:
          'Conceito de produto para fluxos de pesquisa e trabalho de campo, transformando dados de survey e do cidadão em inteligência útil e explicável.',
        tech: ['Design de produto', 'Dados', 'IA', 'Fluxos de pesquisa'],
      },
      {
        id: 'commerce-systems',
        name: 'ECOMMERCE SYSTEMS',
        subtitle: 'E-commerce e integrações',
        summary:
          'Trabalho de produto e integração em torno de Shopify, ERP/Bling, portais de cliente, assinaturas e automação operacional.',
        tech: ['Shopify', 'APIs', 'Integrações', 'Fluxos de e-commerce'],
      },
    ],
  },
};
