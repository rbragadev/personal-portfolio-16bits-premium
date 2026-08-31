/* ---------------------------------------------------------------------------
   SCREEN 06 — Quest Details  (/quests/:questId)
   Answers "Show me proof — how do you think inside a real problem?"

   Add another case study by appending an object whose `id` matches an entry in
   05-quests.ts. The route, the link from the timeline and the "View details"
   affordance in the quest log all appear automatically.

   Company, role, dates and status are NOT repeated here — they are read from
   the matching Experience. Only the narrative lives in this file.
   --------------------------------------------------------------------------- */

import type { CaseStudy } from '../../types/portfolio';
import type { Localized } from '../locale';

export type QuestDetailScreen = {
  screenNumber: string;
  screenLabel: string;
  fileLabel: string;
  challengeLabel: string;
  contributionLabel: string;
  stackLabel: string;
  outcomeLabel: string;
  backLabel: string;
  caseStudies: CaseStudy[];
};

export const questDetailScreen: Localized<QuestDetailScreen> = {
  en: {
    screenNumber: '06',
    screenLabel: 'QUEST DETAILS',
    fileLabel: 'QUEST LOG FILE',
    challengeLabel: 'THE CHALLENGE',
    contributionLabel: 'CONTRIBUTION',
    stackLabel: 'EQUIPPED STACK',
    outcomeLabel: 'MISSION RESULT',
    backLabel: 'BACK TO QUEST LOG',
    caseStudies: [
      {
        id: 'r10',
        title: 'R10 Score',
        subtitle: 'Sports Data at Scale',
        challenge:
          'A large-scale sports data ecosystem where match data arrives constantly from external providers and has to stay consistent and fast under match-day traffic. The work runs the full width of the system: modelling the entities, exposing them through APIs, and building the serverless pipelines that feed them.',
        contributions: [
          'Endpoints and services for the Match entity — details, lineups, statistics, competitions',
          'Serverless Lambdas and data pipelines built with AWS CDK',
          'Integrations across SQS, Redis and MongoDB inside an Nx monorepo',
          'Reusable libraries for SQS/SNS messaging and structured logging',
          'Typed DTOs and mappers normalising complex Opta payloads',
          'Architecture discussions on efficiency, security and cloud cost',
        ],
        stack: ['TypeScript', 'Node.js', 'AWS Lambda', 'AWS CDK', 'SQS / SNS', 'Redis', 'MongoDB', 'Nx'],
        outcomes: [
          { label: 'SCOPE', value: 'Entity modelling → API → internal services' },
          { label: 'PRACTICE', value: 'SOLID · Clean Code · TDD' },
          {
            label: 'LEVERAGE',
            value: 'Shared libraries that shortened the path for every feature after them',
          },
        ],
      },
      {
        id: 'aws-consultancy',
        title: 'Starya AI',
        subtitle: 'Inference Architecture for AI Agents',
        challenge:
          'AI agents are cheap to prototype and expensive to run. Every call an agent makes is inference somebody pays for, and an architecture that ignores that scales the bill faster than it scales the product. Brought in as an AWS consultant by scope, I worked on the product itself and on the layer underneath it that decides how, when and where inference actually happens.',
        contributions: [
          'Developed a large share of the product features',
          'Architected the inference layer behind the AI agents',
          'Designed the AWS implementation around what the workload actually costs to run',
          'Advised on cloud architecture as a scope-based consultant rather than a full-time engineer',
        ],
        stack: ['AWS', 'AI Agents', 'LLM Inference', 'Cloud architecture', 'Cost optimisation'],
        outcomes: [
          { label: 'COST', value: 'Savings in the hundreds of thousands of reais' },
          { label: 'MY SCOPE', value: 'Product features · Inference architecture' },
          {
            label: 'ENGAGEMENT',
            value: 'Scope-based AWS consultancy, alongside a full-time role',
          },
        ],
      },
      {
        id: 'ford',
        title: 'Ford Motors Company',
        subtitle: 'Autonomous Blockchain in Embedded Systems',
        challenge:
          'A blockchain record is only as trustworthy as the person typing into it — which is exactly where a vehicle history breaks down. The research question was whether an embedded system could write to the chain by itself, producing a record that is reliable because no human hand is in the loop. Six years spanning the proof, the architecture, a 20-person team, and the pilot itself.',
        contributions: [
          'Proved the concept: autonomous blockchain writes from embedded systems, with no human validation step',
          'Led the engineering and architecture design of the research contract',
          'Ran initial design, requirements gathering and operational planning',
          'Coordinated 20 developers across three US squads and one Brazilian squad, at times acting as Scrum Master',
          'Defined tasks, testing and project management across the stages',
          'Built the pilot hands-on — frontend and smart contract',
        ],
        stack: ['Solidity', 'Smart Contracts', 'Blockchain', 'JavaScript', 'React'],
        outcomes: [
          { label: 'THE PROOF', value: 'A chain record written with no human in the loop' },
          { label: 'MY SCOPE', value: 'Concept · Architecture · Smart contract · Frontend' },
          { label: 'PURPOSE', value: 'Vehicle history a used-car buyer can trust' },
        ],
      },
      {
        id: 'b4a',
        title: 'Bfluence',
        subtitle: 'An AI Creator-Matching Platform, From Zero',
        challenge:
          'A platform starting from its initial concept: no backend, no documented rules, and an operations team doing by hand what software should have been doing. The job was to define the business rules, build the backend behind them from the first line, and automate the manual work out of existence.',
        contributions: [
          'Created the platform from absolute zero — the whole backend, with Node.js, NestJS, TypeScript and Prisma',
          'Gathered requirements, defined business rules and wrote the documentation',
          'Integrated external client services behind documented APIs',
          'Designed bots to monitor over 5,000 partners',
          'Built an administration backend giving customer support its own answers',
        ],
        stack: ['Node.js', 'NestJS', 'TypeScript', 'Prisma', 'SQL'],
        outcomes: [
          { label: 'COST', value: 'Over R$60,000 saved per month' },
          { label: 'SUPPORT LOAD', value: 'IT support tickets down 90%' },
          { label: 'TEAM', value: '5 employees freed for higher-value work' },
          { label: 'GROWTH', value: '5%+ monthly increase in the user base' },
        ],
      },
      {
        id: 'xvia',
        title: 'Gov.pi Cidadão',
        subtitle: 'Digital Government at State Scale',
        challenge:
          'Public services for the state of Piauí, scattered across separate agencies and reachable only through queues, trips and paperwork. The work was to put every one of them behind a single interface on mobile and web — and to leave a team able to keep building it after me.',
        contributions: [
          'Architected the app and built a large part of it, for Android and iOS',
          'Integrated the systems behind it, agency by agency',
          'Worked on the portal and the state service charter in React',
          'Owned development and configuration of the platform CI/CD',
          'Ran developer training on best practices, cybersecurity and mobile',
          'Gathered requirements with clients to keep the business rules evolving',
        ],
        stack: ['React', 'React Native', 'TypeScript', 'Node.js', 'CI/CD'],
        outcomes: [
          { label: 'MY SCOPE', value: 'Architecture · Mobile app · Systems integration' },
          { label: 'LEGACY', value: 'CI/CD and a trained team that kept building after me' },
          { label: 'STILL RUNNING', value: 'Launched as PiDigital, live today as Gov.pi Cidadão' },
        ],
      },
    ],
  },

  pt: {
    screenNumber: '06',
    screenLabel: 'DETALHES DA MISSÃO',
    fileLabel: 'DOSSIÊ DA MISSÃO',
    challengeLabel: 'O DESAFIO',
    contributionLabel: 'CONTRIBUIÇÃO',
    stackLabel: 'STACK EQUIPADA',
    outcomeLabel: 'RESULTADO DA MISSÃO',
    backLabel: 'VOLTAR AO DIÁRIO',
    caseStudies: [
      {
        id: 'r10',
        title: 'R10 Score',
        subtitle: 'Dados esportivos em escala',
        challenge:
          'Um ecossistema de dados esportivos em larga escala, onde os dados de partida chegam o tempo todo de provedores externos e precisam se manter consistentes e rápidos sob o tráfego de dia de jogo. O trabalho atravessa o sistema inteiro: modelar as entidades, expô-las por APIs e construir os pipelines serverless que as alimentam.',
        contributions: [
          'Endpoints e serviços da entidade Match — detalhes, escalações, estatísticas, competições',
          'Lambdas e pipelines de dados serverless construídos com AWS CDK',
          'Integrações com SQS, Redis e MongoDB dentro de um monorepo Nx',
          'Bibliotecas reutilizáveis de mensageria SQS/SNS e log estruturado',
          'DTOs e mappers tipados normalizando payloads complexos da Opta',
          'Discussões de arquitetura sobre eficiência, segurança e custo de nuvem',
        ],
        stack: ['TypeScript', 'Node.js', 'AWS Lambda', 'AWS CDK', 'SQS / SNS', 'Redis', 'MongoDB', 'Nx'],
        outcomes: [
          { label: 'ESCOPO', value: 'Modelagem de entidades → API → serviços internos' },
          { label: 'PRÁTICA', value: 'SOLID · Clean Code · TDD' },
          {
            label: 'ALAVANCAGEM',
            value: 'Bibliotecas compartilhadas que encurtaram o caminho de toda feature seguinte',
          },
        ],
      },
      {
        id: 'aws-consultancy',
        title: 'Starya AI',
        subtitle: 'Arquitetura de inferência para agentes de IA',
        challenge:
          'Agentes de IA são baratos de prototipar e caros de rodar. Cada chamada que um agente faz é inferência que alguém paga, e uma arquitetura que ignora isso escala a conta mais rápido do que escala o produto. Acionado como consultor AWS por escopo, atuei no produto em si e na camada por baixo dele que decide como, quando e onde a inferência de fato acontece.',
        contributions: [
          'Desenvolvi boa parte das features do produto',
          'Arquitetei a camada de inferência por trás dos agentes de IA',
          'Desenhei a implementação AWS em torno do que a carga de trabalho realmente custa para rodar',
          'Assessorei a arquitetura cloud como consultor por escopo, e não como engenheiro full-time',
        ],
        stack: ['AWS', 'Agentes de IA', 'Inferência de LLM', 'Arquitetura cloud', 'Otimização de custo'],
        outcomes: [
          { label: 'CUSTO', value: 'Economia na casa das centenas de milhares de reais' },
          { label: 'MEU ESCOPO', value: 'Features do produto · Arquitetura de inferência' },
          {
            label: 'VÍNCULO',
            value: 'Consultoria AWS por escopo, em paralelo a um cargo full-time',
          },
        ],
      },
      {
        id: 'ford',
        title: 'Ford Motors Company',
        subtitle: 'Blockchain autônoma em sistemas embarcados',
        challenge:
          'Um registro em blockchain só é tão confiável quanto a pessoa que digita nele — e é exatamente aí que um histórico veicular desmorona. A pergunta de pesquisa era se um sistema embarcado conseguiria escrever na cadeia sozinho, produzindo um registro confiável justamente porque não há mão humana no meio. Seis anos entre a prova de conceito, a arquitetura, um time de 20 pessoas e o piloto.',
        contributions: [
          'Provei o conceito: escrita autônoma na blockchain a partir de sistemas embarcados, sem etapa de validação humana',
          'Liderei a engenharia e o desenho da arquitetura do contrato de pesquisa',
          'Conduzi o desenho inicial, o levantamento de requisitos e o planejamento operacional',
          'Coordenei 20 desenvolvedores em três squads nos EUA e um no Brasil, atuando por vezes como Scrum Master',
          'Defini tarefas, testes e gestão do projeto ao longo das etapas',
          'Construí o piloto na mão — frontend e smart contract',
        ],
        stack: ['Solidity', 'Smart Contracts', 'Blockchain', 'JavaScript', 'React'],
        outcomes: [
          { label: 'A PROVA', value: 'Registro em cadeia escrito sem humano no meio' },
          { label: 'MEU ESCOPO', value: 'Conceito · Arquitetura · Smart contract · Frontend' },
          { label: 'PROPÓSITO', value: 'Histórico veicular em que o comprador pode confiar' },
        ],
      },
      {
        id: 'b4a',
        title: 'Bfluence',
        subtitle: 'Plataforma de matching de criadores com IA, do zero',
        challenge:
          'Uma plataforma partindo do conceito inicial: sem backend, sem regras documentadas e com um time de operação fazendo na mão o que o software deveria fazer. O trabalho era definir as regras de negócio, construir o backend por trás delas desde a primeira linha e automatizar o trabalho manual até ele deixar de existir.',
        contributions: [
          'Criei a plataforma do zero absoluto — todo o backend, com Node.js, NestJS, TypeScript e Prisma',
          'Levantei requisitos, defini regras de negócio e escrevi a documentação',
          'Integrei serviços externos de clientes por trás de APIs documentadas',
          'Desenhei bots para monitorar mais de 5.000 parceiros',
          'Construí um backend de administração que deu ao atendimento as próprias respostas',
        ],
        stack: ['Node.js', 'NestJS', 'TypeScript', 'Prisma', 'SQL'],
        outcomes: [
          { label: 'CUSTO', value: 'Mais de R$60.000 economizados por mês' },
          { label: 'CARGA DE SUPORTE', value: 'Chamados de TI reduzidos em 90%' },
          { label: 'TIME', value: '5 pessoas liberadas para trabalho de maior valor' },
          { label: 'CRESCIMENTO', value: '5%+ de aumento mensal na base de usuários' },
        ],
      },
      {
        id: 'xvia',
        title: 'Gov.pi Cidadão',
        subtitle: 'Governo digital em escala estadual',
        challenge:
          'Os serviços públicos do estado do Piauí, espalhados por órgãos separados e alcançáveis só por fila, deslocamento e papelada. O trabalho era colocar todos eles atrás de uma única interface, no mobile e na web — e deixar um time capaz de continuar construindo depois de mim.',
        contributions: [
          'Arquitetei o app e construí boa parte dele, para Android e iOS',
          'Integrei os sistemas por trás dele, órgão por órgão',
          'Atuei no portal e na carta de serviços do estado, em React',
          'Fui responsável pelo desenvolvimento e configuração do CI/CD da plataforma',
          'Conduzi treinamentos de desenvolvedores sobre boas práticas, cibersegurança e mobile',
          'Levantei requisitos com os clientes para manter as regras de negócio evoluindo',
        ],
        stack: ['React', 'React Native', 'TypeScript', 'Node.js', 'CI/CD'],
        outcomes: [
          { label: 'MEU ESCOPO', value: 'Arquitetura · App mobile · Integração de sistemas' },
          { label: 'LEGADO', value: 'CI/CD e um time treinado que seguiu construindo depois de mim' },
          { label: 'AINDA NO AR', value: 'Lançado como PiDigital, hoje é o Gov.pi Cidadão' },
        ],
      },
    ],
  },
};
