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
        id: 'simteam',
        name: 'SIMTEAM',
        subtitle: 'AI agents for small businesses · Live product',
        summary:
          'My own SaaS, built with a small team: multi-tenant WhatsApp AI agents that serve small businesses’ customers — booking, rescheduling and cancelling appointments, a finance agent, and a handoff to a human when needed. Every action an agent can take is declared in code and checked by a per-action policy, with human approval for sensitive actions and a full audit trail.',
        tech: ['TypeScript', 'NestJS', 'Mastra', 'AI Agents', 'WhatsApp', 'RAG / Tools / Governance'],
        href: 'https://simteam.web.app/',
      },
      {
        id: 'lictor',
        name: 'LICTOR',
        subtitle: 'Open-source authorization for AI agents',
        summary:
          'An authorization kernel that sits between AI agents and real-world side effects — payments, merges, deletions, emails — and decides, action by action, what an agent is allowed to do. Currently in the architecture phase: ADRs, roadmap and technical docs.',
        tech: ['Rust', 'Cedar', 'MCP', 'TypeScript'],
      },
      {
        id: 'skillforge',
        name: 'SKILLFORGE',
        subtitle: 'Claude Code skills for engineering',
        summary:
          'A personal, versioned collection of Claude Code skills for repeatable engineering workflows. The first one, gcp-audit, is a read-only Google Cloud infrastructure and FinOps inventory that generates HTML reports, Markdown summaries and JSON snapshots.',
        tech: ['Claude Code', 'Agent skills', 'GCP', 'FinOps'],
        href: 'https://github.com/rbragadev/skillforge',
      },
      {
        id: 'ninho',
        name: 'NINHO',
        subtitle: 'Family Safety Platform',
        summary:
          'Mobile family-safety product focused on parent and child experiences, device pairing, location, alerts and safety flows.',
        tech: ['React Native / Expo', 'NestJS', 'PostgreSQL', 'Real-time product flows'],
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
        id: 'simteam',
        name: 'SIMTEAM',
        subtitle: 'Agentes de IA para pequenos negócios · Produto no ar',
        summary:
          'Meu próprio SaaS, construído com um time pequeno: agentes de IA multi-tenant no WhatsApp que atendem os clientes de pequenos negócios — marcam, remarcam e cancelam horários, um agente financeiro e transferência para um humano quando precisa. Toda ação que um agente pode executar é declarada em código e checada por uma política por ação, com aprovação humana para ações sensíveis e trilha de auditoria completa.',
        tech: ['TypeScript', 'NestJS', 'Mastra', 'Agentes de IA', 'WhatsApp', 'RAG / Tools / Governança'],
        href: 'https://simteam.web.app/',
      },
      {
        id: 'lictor',
        name: 'LICTOR',
        subtitle: 'Autorização open source para agentes de IA',
        summary:
          'Um kernel de autorização entre agentes de IA e efeitos no mundo real — pagamentos, merges, exclusões, e-mails — que decide, ação por ação, o que um agente pode fazer. Em fase de arquitetura: ADRs, roadmap e documentação técnica.',
        tech: ['Rust', 'Cedar', 'MCP', 'TypeScript'],
      },
      {
        id: 'skillforge',
        name: 'SKILLFORGE',
        subtitle: 'Skills de Claude Code para engenharia',
        summary:
          'Uma coleção pessoal e versionada de skills do Claude Code para fluxos de engenharia repetíveis. A primeira, gcp-audit, faz um inventário somente leitura de infraestrutura e FinOps no Google Cloud e gera relatórios em HTML, resumos em Markdown e snapshots em JSON.',
        tech: ['Claude Code', 'Agent skills', 'GCP', 'FinOps'],
        href: 'https://github.com/rbragadev/skillforge',
      },
      {
        id: 'ninho',
        name: 'NINHO',
        subtitle: 'Plataforma de segurança familiar',
        summary:
          'Produto mobile de segurança familiar focado nas experiências de pais e filhos: pareamento de dispositivos, localização, alertas e fluxos de segurança.',
        tech: ['React Native / Expo', 'NestJS', 'PostgreSQL', 'Fluxos em tempo real'],
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
