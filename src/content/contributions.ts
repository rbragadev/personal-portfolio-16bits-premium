/* ---------------------------------------------------------------------------
   SIGNATURE CONTRIBUTIONS

   The handful of things worth pointing at first: what the product is, what
   Raphael specifically did inside it, and what can be checked from outside.

   Cross-cutting on purpose — the Impact screen (08) lists them all, and each
   one also surfaces inside its own quest on screens 05 and 06 via `questId`.
   Set `questId: null` for personal work, which links to Side Quests instead.

   RULES
   · `role` is Raphael's own contribution, first person, specific.
   · `facts` are checkable figures about the product or the engagement.
   · `recognition` is third-party only — never Raphael's own claim. That split,
     self-reported vs. vouched-for, is the one that matters.
   --------------------------------------------------------------------------- */

import type { Contribution } from '../types/portfolio';
import type { Localized } from './locale';

const G1_ARTICLE =
  'https://g1.globo.com/pi/piaui/especial-publicitario/governo-do-piaui-aqui-tem-trabalho-aqui-tem-futuro/noticia/2025/12/10/com-mais-de-26-milhoes-de-acessos-govpi-cidadao-traz-servicos-de-todos-os-orgaos.ghtml';

export type ContributionsSection = {
  label: string;
  intro: string;
  roleLabel: string;
  factsLabel: string;
  recognitionLabel: string;
  contributions: Contribution[];
};

export const contributionsSection: Localized<ContributionsSection> = {
  en: {
    label: 'SIGNATURE CONTRIBUTIONS',
    intro:
      'Five things I would point at first — what the product was, and the part of it that is mine.',
    roleLabel: 'MY PART',
    factsLabel: 'IN NUMBERS',
    recognitionLabel: 'RECOGNITION',
    contributions: [
      {
        id: 'starya',
        name: 'Starya AI',
        questId: 'aws-consultancy',
        context: 'Elevata · Cloudary · AWS consultancy',
        role: 'I developed a large share of the features and architected the inference layer behind the product’s AI agents.',
        summary:
          'AI agents are cheap to prototype and expensive to run — every call an agent makes is inference somebody pays for. Alongside building product features, I designed the layer that decides how, when and where that inference happens, so the architecture scales with the product instead of with the bill.',
        facts: ['Inference architecture that cut costs by hundreds of thousands of reais'],
      },
      {
        id: 'govpi',
        name: 'Gov.pi Cidadão',
        questId: 'xvia',
        context: 'Xvia · Government of Piauí',
        role: 'I architected the app, built a large part of it, and integrated the systems behind it.',
        summary:
          'The state of Piauí’s citizen app: one place to reach public services that used to live behind separate agencies, queues and trips to a counter. Shipped as an Android and iOS app plus a web portal, and originally launched under the name PiDigital.',
        facts: [
          '26M+ accesses and services rendered',
          '1.35M+ registered users',
          '400+ digital services in one interface',
          'Services from every state agency, on Android, iOS and web',
        ],
        recognition:
          'Piauí was named the Brazilian state that grew the most in digital transformation by Abep-Tic, the association of state IT bodies — with Gov.pi Cidadão as the programme’s flagship platform.',
        links: [{ label: 'G1 — “Com mais de 26 milhões de acessos”', href: G1_ARTICLE }],
      },
      {
        id: 'bfluence',
        name: 'Bfluence',
        questId: 'b4a',
        context: 'B4A · São Paulo',
        role: 'I created it from absolute zero — the backend, the business rules and the automation underneath it.',
        summary:
          'An AI matching platform pairing beauty brands with creators on what a creator actually is — skin tone, hair type, routine, speciality — rather than follower count. I built the platform from its first line, defining the rules alongside the product before there was anything to run them on.',
        facts: [
          '25,000+ creators in the platform database',
          '500+ brands using it',
          'Matching across 100+ creator attributes',
        ],
        links: [{ label: 'bfluence.ai', href: 'https://bfluence.ai/' }],
      },
      {
        id: 'ford-embedded-blockchain',
        name: 'Autonomous blockchain in embedded systems',
        questId: 'ford',
        context: 'Ford Motors Company · R&D',
        role: 'I proved the concept, led the architecture, and built the pilot’s smart contract and frontend.',
        summary:
          'Blockchain records normally depend on a person to enter and vouch for the data — which is exactly where trust breaks down. I proved an embedded system can write to the chain autonomously, producing a vehicle history that is trustworthy because no human hand is in the loop.',
        facts: [
          'Six years of R&D, from first design to working pilot',
          'A team of 20 developers coordinated through the project',
        ],
        recognition: 'Patent Achievement at Ford Motors Company.',
      },
      {
        id: 'feature-flags',
        name: 'Feature flags platform',
        questId: null,
        context: 'Personal project',
        role: 'Designed and built it end to end, on my own time.',
        summary:
          'A platform for putting releases behind flags — shipping code to production before it is switched on, rolling a feature out gradually and turning it off without a deploy.',
        facts: [],
      },
    ],
  },

  pt: {
    label: 'CONTRIBUIÇÕES DE DESTAQUE',
    intro:
      'Cinco coisas que eu mostraria primeiro — o que era o produto, e a parte dele que é minha.',
    roleLabel: 'MINHA PARTE',
    factsLabel: 'EM NÚMEROS',
    recognitionLabel: 'RECONHECIMENTO',
    contributions: [
      {
        id: 'starya',
        name: 'Starya AI',
        questId: 'aws-consultancy',
        context: 'Elevata · Cloudary · consultoria AWS',
        role: 'Desenvolvi boa parte das features e arquitetei a camada de inferência por trás dos agentes de IA do produto.',
        summary:
          'Agentes de IA são baratos de prototipar e caros de rodar — cada chamada que um agente faz é inferência que alguém paga. Além de construir features do produto, desenhei a camada que decide como, quando e onde essa inferência acontece, para a arquitetura escalar junto com o produto e não junto com a conta.',
        facts: ['Arquitetura de inferência que reduziu custos na casa das centenas de milhares de reais'],
      },
      {
        id: 'govpi',
        name: 'Gov.pi Cidadão',
        questId: 'xvia',
        context: 'Xvia · Governo do Piauí',
        role: 'Arquitetei o app, construí boa parte dele e integrei os sistemas por trás.',
        summary:
          'O app do cidadão do estado do Piauí: um lugar só para alcançar serviços públicos que antes viviam atrás de órgãos separados, filas e deslocamento até um balcão. Entregue como app Android e iOS mais um portal web, e lançado originalmente com o nome PiDigital.',
        facts: [
          '26M+ acessos e serviços prestados',
          '1,35M+ usuários cadastrados',
          '400+ serviços digitais em uma única interface',
          'Serviços de todos os órgãos do estado, em Android, iOS e web',
        ],
        recognition:
          'O Piauí foi apontado como o estado brasileiro que mais cresceu em transformação digital pela Abep-Tic, associação das entidades estaduais de TI — com o Gov.pi Cidadão como plataforma-carro-chefe do programa.',
        links: [{ label: 'G1 — “Com mais de 26 milhões de acessos”', href: G1_ARTICLE }],
      },
      {
        id: 'bfluence',
        name: 'Bfluence',
        questId: 'b4a',
        context: 'B4A · São Paulo',
        role: 'Criei do zero absoluto — o backend, as regras de negócio e a automação por baixo.',
        summary:
          'Uma plataforma de matching com IA que conecta marcas de beleza a criadores pelo que o criador realmente é — tom de pele, tipo de cabelo, rotina, especialidade — e não por número de seguidores. Construí a plataforma desde a primeira linha, definindo as regras junto com o produto antes de existir qualquer coisa para rodá-las.',
        facts: [
          '25.000+ criadores na base da plataforma',
          '500+ marcas usando',
          'Matching por mais de 100 atributos de criador',
        ],
        links: [{ label: 'bfluence.ai', href: 'https://bfluence.ai/' }],
      },
      {
        id: 'ford-embedded-blockchain',
        name: 'Blockchain autônoma em sistemas embarcados',
        questId: 'ford',
        context: 'Ford Motors Company · P&D',
        role: 'Provei o conceito, liderei a arquitetura e construí o smart contract e o frontend do piloto.',
        summary:
          'Registros em blockchain normalmente dependem de uma pessoa para inserir e atestar o dado — e é exatamente aí que a confiança quebra. Provei que um sistema embarcado consegue escrever na cadeia de forma autônoma, produzindo um histórico veicular confiável justamente porque não há mão humana no meio.',
        facts: [
          'Seis anos de P&D, do primeiro desenho ao piloto funcionando',
          'Um time de 20 desenvolvedores coordenado ao longo do projeto',
        ],
        recognition: 'Patente conquistada na Ford Motors Company.',
      },
      {
        id: 'feature-flags',
        name: 'Plataforma de feature flags',
        questId: null,
        context: 'Projeto pessoal',
        role: 'Desenhei e construí de ponta a ponta, no meu tempo.',
        summary:
          'Plataforma para colocar releases atrás de flags — subir código para produção antes de ligá-lo, liberar uma feature gradualmente e desligá-la sem deploy.',
        facts: [],
      },
    ],
  },
};
