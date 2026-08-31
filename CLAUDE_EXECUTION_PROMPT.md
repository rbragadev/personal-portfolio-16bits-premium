# Prompt de execução para Claude Code

Quero que você implemente integralmente o projeto **Career Quest** usando como fonte de verdade:

1. `CAREER_QUEST_IMPLEMENTATION_SPEC.md`
2. o ZIP/export do Stitch `stitch_premium_16_bit_career_portfolio`
3. dentro do Stitch, cada `screen.png` como referência visual e cada `code.html` como referência de layout/estilos.

## Objetivo

Construir um portfólio profissional interativo e responsivo em **Vite + React + TypeScript + Tailwind**, sem backend, que preserve com alta fidelidade o design 16-bit premium criado no Stitch e funcione como uma apresentação sequencial clicável e também como um site navegável.

O site precisa responder claramente:

- quem é Raphael Braga;
- o que ele sabe fazer;
- onde ele aplicou essas capacidades;
- como ele pode ajudar um time/empresa;
- qual tipo de desafio procura agora.

## Regras obrigatórias

- Leia a spec inteira antes de começar.
- Inspecione todos os 9 `screen.png`, todos os 9 `code.html` e o `DESIGN.md` antes de escrever a implementação final.
- Não copie cegamente os HTMLs gerados pelo Stitch; converta padrões repetidos em componentes React reutilizáveis.
- `screen.png` é alvo visual, não deve virar background da página inteira.
- Preserve paleta, HUD, bordas, tipografia, scanlines, gold/purple accents e composição geral.
- Não invente tecnologias, números, resultados ou responsabilidades profissionais.
- Corrija os placeholders/dados inconsistentes identificados na spec.
- Todo conteúdo profissional deve ficar centralizado em `src/content/portfolio.en.ts` ou estrutura equivalente.
- Todo asset deve ficar centralizado/localizado conforme a spec.
- Sem backend, banco, autenticação, CMS ou game engine.
- Sem Redux/Zustand.
- Use animações CSS leves; não adicione Framer Motion sem necessidade real.
- Faça responsividade durante a implementação, não como correção no final.
- Desktop deve se aproximar bastante do Stitch; mobile deve adaptar a composição, não apenas encolher o desktop.
- Preserve browser back/forward e deep links.

## Forma de trabalho

Execute por fases conforme a spec.

Antes de cada fase:

1. diga resumidamente o que vai implementar;
2. implemente;
3. rode lint/typecheck/build;
4. corrija erros;
5. valide visual e responsividade;
6. só então avance.

Não faça commits ou push a menos que eu peça explicitamente.

## Entrega esperada

Ao final quero:

- projeto executando localmente;
- todas as 9 telas implementadas;
- navegação sequencial + menu;
- responsividade completa;
- conteúdo separado da UI;
- assets organizados;
- README com comandos de desenvolvimento e deploy;
- build sem erros;
- lista curta de qualquer conteúdo/asset que ainda dependa de confirmação minha.

Comece pela inspeção do material do Stitch e pela Fase 0 da spec. Não altere a direção visual sem necessidade.
