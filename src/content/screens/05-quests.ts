/* ---------------------------------------------------------------------------
   SCREEN 05 — Quest Log  (/quests)
   Answers "Where have you done this, and what did you actually build?"

   MASTER career list. Screens 03 (Journey) and 06 (Quest Details) both read
   from it, so a date or a title is only ever edited here.

   Source of truth: Raphael's LinkedIn profile. Role titles, company names,
   dates and technologies stay in English in both locales — that is how they
   are written on a Brazilian CV. Only prose is translated.
   --------------------------------------------------------------------------- */

import type { Experience } from '../../types/portfolio';
import type { Localized } from '../locale';

export type QuestLogScreen = {
  screenNumber: string;
  screenLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  totalLabel: string;
  viewDetailsLabel: string;
  highlightsLabel: string;
  alsoKnownAs: string;
  experiences: Experience[];
};

export const questLogScreen: Localized<QuestLogScreen> = {
  en: {
    screenNumber: '05',
    screenLabel: 'QUEST LOG',
    eyebrow: 'MISSION LOG',
    title: 'QUEST HISTORY',
    intro:
      'A record of the engineering campaigns behind the timeline — what the product was, and what I actually built inside it.',
    totalLabel: 'TOTAL MISSIONS',
    viewDetailsLabel: 'VIEW DETAILS',
    highlightsLabel: 'WHAT I DID',
    alsoKnownAs: 'also listed as',

    /* Ordered by start date, newest first. */
    experiences: [
      {
        id: 'aws-consultancy',
        company: 'Elevata · Cloudary',
        role: 'AWS Consultant',
        engagement: 'Scope-based consultancy · not full-time',
        dates: '2025 – Present',
        years: '2025–Present',
        location: 'Remote',
        status: 'in-progress',
        summary:
          'AWS implementation consultancy, engaged by scope rather than full-time. This is where I work on Starya AI — building product features and architecting the inference layer behind its AI agents.',
        journeySummary:
          'AWS consultancy by scope. Inference architecture for the AI agents behind Starya AI.',
        highlights: [
          'Consult on AWS implementation, brought in by scope rather than as a full-time engineer',
          'Developed a large share of the features on Starya AI',
          'Architected the inference layer for the product\u2019s AI agents',
          'The inference architecture cut costs by hundreds of thousands of reais',
        ],
        tech: ['AWS', 'AI Agents', 'LLM Inference', 'Cloud architecture', 'Cost optimisation'],
      },
      {
        id: 'r10',
        company: 'R10 Score',
        role: 'Senior Software Engineer',
        dates: 'Mar 2025 – Present',
        years: '2025–Present',
        location: 'Belo Horizonte, BR',
        status: 'in-progress',
        summary:
          'Full-stack engineering inside a large-scale sports data ecosystem, from entity modelling through to APIs and internal services.',
        journeySummary:
          'Large-scale sports data. Match APIs, serverless pipelines and shared libraries on AWS.',
        highlights: [
          'Built endpoints and services for the Match entity — match details, lineups, statistics and competitions — holding up under high-demand traffic',
          'Designed serverless Lambdas and pipelines with AWS CDK, integrating SQS, Redis and MongoDB inside an Nx monorepo',
          'Wrote reusable libraries (SQS/SNS messaging, structured logger) on SOLID, Clean Code and TDD, speeding up every feature after them',
          'Created typed DTOs and mappers turning complex Opta payloads into robust internal structures',
          'Took part in architecture discussions on efficiency, security and cloud cost',
        ],
        tech: ['TypeScript', 'Node.js', 'AWS Lambda', 'AWS CDK', 'SQS / SNS', 'Redis', 'MongoDB', 'Nx'],
      },
      {
        id: 'willowtree',
        company: 'WillowTree',
        role: 'Senior FullStack Developer',
        dates: 'Jun 2024 – Jan 2025',
        years: '2024–2025',
        location: 'United States (remote)',
        status: 'complete',
        summary:
          'Scalable product delivery across frontend, backend and mobile with distributed teams in the United States and Brazil.',
        journeySummary:
          'Scalable product delivery across every layer, with teams split between the US and Brazil.',
        highlights: [
          'Developed and deployed scalable products across frontend, backend and mobile',
          'Worked across all layers of the product, keeping performance consistent between them',
          'Collaborated with teams in the USA and Brazil, keeping communication and delivery smooth across time zones',
        ],
        tech: ['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'HTML & CSS'],
      },
      {
        id: 'xvia',
        company: 'Xvia',
        alias: 'RW3 Tecnologia',
        role: 'Senior Software Engineer',
        dates: 'Apr 2023 – Aug 2026',
        years: '2023–2026',
        location: 'Estonia (remote)',
        status: 'complete',
        summary:
          'Digital government for the state of Piauí — architecture, mobile, frontend, backend and systems integration behind Gov.pi Cidadão.',
        journeySummary:
          'Digital government at state scale. Architected Gov.pi Cidadão, the app that now carries 400+ services.',
        highlights: [
          'Architected Gov.pi Cidadão (launched as PiDigital), built a large part of the app for Android and iOS, and integrated the systems behind it',
          'Worked on the Gov.pi Cidadão portal and the state service charter, pulling services from every agency into a single React platform',
          'Owned the development and configuration of the platform CI/CD',
          'Created and ran training sessions for developers on best practices, platform use, cybersecurity and mobile development',
          'Gathered requirements directly with clients to keep business rules and the platform evolving',
        ],
        tech: ['React', 'React Native', 'TypeScript', 'Node.js', 'CI/CD'],
      },
      {
        id: 'b4a',
        company: 'B4A',
        role: 'Senior Software Engineer',
        dates: 'Nov 2022 – Jun 2026',
        years: '2022–2026',
        location: 'São Paulo, BR',
        status: 'complete',
        summary:
          'Built Bfluence from absolute zero — the backend, the business rules and the automation of an AI creator-matching platform.',
        journeySummary:
          'Built Bfluence from zero: backend, business rules and automation that paid for itself.',
        highlights: [
          'Created Bfluence from absolute zero — the whole backend, with Node.js, NestJS, TypeScript and Prisma',
          'Owned requirement gathering, business-rule definition and documentation',
          'Integrated external client services and shipped documented APIs',
          'Designed bots monitoring 5,000+ partners, freeing 5 employees for other areas and saving over R$60,000 a month',
          'Built an administration backend that cut IT support tickets by 90% and gave customer support operational autonomy',
          'Automation work contributed to 5%+ monthly growth in the platform user base',
        ],
        tech: ['Node.js', 'NestJS', 'TypeScript', 'Prisma', 'SQL'],
      },
      {
        id: 'ford',
        company: 'Ford Motors Company',
        role: 'FullStack Developer / Blockchain Developer',
        dates: 'Feb 2017 – Feb 2023',
        years: '2017–2023',
        location: 'Brazil',
        status: 'complete',
        summary:
          'Six years of blockchain R&D proving that an embedded system can record trustworthy vehicle data autonomously — leading the architecture and a 20-person team.',
        journeySummary:
          'The first serious quest. Blockchain R&D for vehicle history, leading architecture and a team of 20.',
        highlights: [
          'Proved that blockchain can be written to autonomously from embedded systems, recording trustworthy data with no human in the loop',
          'Led the engineering and architecture design of the research contract, from initial design through requirements and operational planning',
          'Coordinated a team of 20 developers across the project stages, at times acting as Scrum Master',
          'Built the pilot project hands-on, on both the frontend and the smart contract',
          'Earned a Patent Achievement at Ford Motors Company',
        ],
        tech: ['Solidity', 'Smart Contracts', 'Blockchain', 'JavaScript', 'React'],
      },
    ],
  },

  pt: {
    screenNumber: '05',
    screenLabel: 'DIÁRIO DE MISSÕES',
    eyebrow: 'REGISTRO DE MISSÕES',
    title: 'HISTÓRICO DE MISSÕES',
    intro:
      'O registro das campanhas de engenharia por trás da linha do tempo — o que era o produto, e o que eu de fato construí dentro dele.',
    totalLabel: 'TOTAL DE MISSÕES',
    viewDetailsLabel: 'VER DETALHES',
    highlightsLabel: 'O QUE EU FIZ',
    alsoKnownAs: 'também listada como',

    experiences: [
      {
        id: 'aws-consultancy',
        company: 'Elevata · Cloudary',
        role: 'AWS Consultant',
        engagement: 'Consultoria por escopo · não é full-time',
        dates: '2025 – Atual',
        years: '2025–Atual',
        location: 'Remoto',
        status: 'in-progress',
        summary:
          'Consultoria de implementação AWS, contratada por escopo e não em regime full-time. É onde atuo no Starya AI — construindo features do produto e arquitetando a camada de inferência por trás dos seus agentes de IA.',
        journeySummary:
          'Consultoria AWS por escopo. Arquitetura de inferência para os agentes de IA do Starya AI.',
        highlights: [
          'Presto consultoria em implementação AWS, acionado por escopo e não como engenheiro full-time',
          'Desenvolvi boa parte das features do Starya AI',
          'Arquitetei a camada de inferência para os agentes de IA do produto',
          'A arquitetura de inferência reduziu custos na casa das centenas de milhares de reais',
        ],
        tech: ['AWS', 'Agentes de IA', 'Inferência de LLM', 'Arquitetura cloud', 'Otimização de custo'],
      },
      {
        id: 'r10',
        company: 'R10 Score',
        role: 'Senior Software Engineer',
        dates: 'Mar 2025 – Atual',
        years: '2025–Atual',
        location: 'Belo Horizonte, BR',
        status: 'in-progress',
        summary:
          'Engenharia full-stack dentro de um ecossistema de dados esportivos em larga escala, da modelagem das entidades até as APIs e os serviços internos.',
        journeySummary:
          'Dados esportivos em larga escala. APIs de partidas, pipelines serverless e bibliotecas compartilhadas na AWS.',
        highlights: [
          'Construí endpoints e serviços da entidade Match — detalhes de partida, escalações, estatísticas e competições — aguentando tráfego de alta demanda',
          'Desenhei Lambdas e pipelines serverless com AWS CDK, integrando SQS, Redis e MongoDB dentro de um monorepo Nx',
          'Escrevi bibliotecas reutilizáveis (mensageria SQS/SNS, logger estruturado) sobre SOLID, Clean Code e TDD, acelerando toda feature depois delas',
          'Criei DTOs e mappers tipados que transformam payloads complexos da Opta em estruturas internas robustas',
          'Participei das discussões de arquitetura sobre eficiência, segurança e custo de nuvem',
        ],
        tech: ['TypeScript', 'Node.js', 'AWS Lambda', 'AWS CDK', 'SQS / SNS', 'Redis', 'MongoDB', 'Nx'],
      },
      {
        id: 'willowtree',
        company: 'WillowTree',
        role: 'Senior FullStack Developer',
        dates: 'Jun 2024 – Jan 2025',
        years: '2024–2025',
        location: 'Estados Unidos (remoto)',
        status: 'complete',
        summary:
          'Entrega de produtos escaláveis em frontend, backend e mobile com times distribuídos entre Estados Unidos e Brasil.',
        journeySummary:
          'Entrega de produto escalável em todas as camadas, com times divididos entre EUA e Brasil.',
        highlights: [
          'Desenvolvi e publiquei produtos escaláveis em frontend, backend e mobile',
          'Atuei em todas as camadas do produto, mantendo a performance consistente entre elas',
          'Colaborei com times nos EUA e no Brasil, mantendo comunicação e entrega fluidas entre fusos',
        ],
        tech: ['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'HTML & CSS'],
      },
      {
        id: 'xvia',
        company: 'Xvia',
        alias: 'RW3 Tecnologia',
        role: 'Senior Software Engineer',
        dates: 'Abr 2023 – Ago 2026',
        years: '2023–2026',
        location: 'Estônia (remoto)',
        status: 'complete',
        summary:
          'Governo digital para o estado do Piauí — arquitetura, mobile, frontend, backend e integração dos sistemas por trás do Gov.pi Cidadão.',
        journeySummary:
          'Governo digital em escala estadual. Arquitetei o Gov.pi Cidadão, o app que hoje reúne 400+ serviços.',
        highlights: [
          'Arquitetei o Gov.pi Cidadão (lançado como PiDigital), construí boa parte do app para Android e iOS e integrei os sistemas por trás dele',
          'Atuei no portal Gov.pi Cidadão e na carta de serviços do estado, reunindo serviços de todos os órgãos em uma única plataforma React',
          'Fui responsável pelo desenvolvimento e pela configuração do CI/CD da plataforma',
          'Criei e conduzi treinamentos para desenvolvedores sobre boas práticas, uso da plataforma, cibersegurança e desenvolvimento mobile',
          'Levantei requisitos diretamente com os clientes para manter as regras de negócio e a plataforma evoluindo',
        ],
        tech: ['React', 'React Native', 'TypeScript', 'Node.js', 'CI/CD'],
      },
      {
        id: 'b4a',
        company: 'B4A',
        role: 'Senior Software Engineer',
        dates: 'Nov 2022 – Jun 2026',
        years: '2022–2026',
        location: 'São Paulo, BR',
        status: 'complete',
        summary:
          'Construí o Bfluence do zero absoluto — o backend, as regras de negócio e a automação de uma plataforma de matching de criadores com IA.',
        journeySummary:
          'Bfluence do zero: backend, regras de negócio e automação que se pagou sozinha.',
        highlights: [
          'Criei o Bfluence do zero absoluto — todo o backend, com Node.js, NestJS, TypeScript e Prisma',
          'Fui responsável pelo levantamento de requisitos, definição das regras de negócio e documentação',
          'Integrei serviços externos de clientes e entreguei APIs documentadas',
          'Desenhei bots que monitoram mais de 5.000 parceiros, liberando 5 funcionários para outras áreas e economizando mais de R$60.000 por mês',
          'Construí um backend de administração que reduziu em 90% os chamados de suporte de TI e deu autonomia operacional ao atendimento',
          'A automação contribuiu para um crescimento de 5%+ ao mês na base de usuários da plataforma',
        ],
        tech: ['Node.js', 'NestJS', 'TypeScript', 'Prisma', 'SQL'],
      },
      {
        id: 'ford',
        company: 'Ford Motors Company',
        role: 'FullStack Developer / Blockchain Developer',
        dates: 'Fev 2017 – Fev 2023',
        years: '2017–2023',
        location: 'Brasil',
        status: 'complete',
        summary:
          'Seis anos de P&D em blockchain provando que um sistema embarcado pode registrar dados veiculares confiáveis de forma autônoma — liderando a arquitetura e um time de 20 pessoas.',
        journeySummary:
          'A primeira missão séria. P&D em blockchain para histórico veicular, liderando arquitetura e um time de 20.',
        highlights: [
          'Provei que a blockchain pode ser escrita de forma autônoma a partir de sistemas embarcados, registrando dados confiáveis sem humano no meio do caminho',
          'Liderei a engenharia e o desenho da arquitetura do contrato de pesquisa, do desenho inicial ao levantamento de requisitos e planejamento operacional',
          'Coordenei um time de 20 desenvolvedores ao longo das etapas do projeto, atuando por vezes como Scrum Master',
          'Construí o projeto piloto na mão, tanto no frontend quanto no smart contract',
          'Conquistei uma patente na Ford Motors Company',
        ],
        tech: ['Solidity', 'Smart Contracts', 'Blockchain', 'JavaScript', 'React'],
      },
    ],
  },
};
