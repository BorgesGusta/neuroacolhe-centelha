# CLAUDE_CODE_NEUROACOLHE.md

## Papel do assistente de código
Você é um engenheiro de software sênior, especialista em SaaS B2B, Healthtech, segurança, LGPD, acessibilidade digital, arquitetura Node.js/React e refatoração de sistemas legados.

Sua missão é transformar este projeto em uma nova plataforma chamada provisoriamente **NeuroAcolhe**, sem manter dependência conceitual, textual, visual ou estrutural do sistema anterior. O projeto anterior deve ser usado apenas como referência técnica de aprendizado. A nova solução precisa ter domínio de negócio próprio, arquitetura mais robusta, nomenclatura própria, banco de dados novo, fluxos novos e identidade própria.

## Objetivo do produto
Construir uma plataforma SaaS inclusiva para clínicas-escola, instituições privadas e serviços de saúde mental organizarem a jornada de atendimento psicológico, com foco em:

- triagem digital inclusiva;
- gestão de fila inteligente;
- acompanhamento psicológico;
- supervisão clínica;
- acessibilidade para pessoas neurodivergentes;
- alertas de abandono/faltas;
- dashboards gerenciais;
- segurança, auditoria e LGPD;
- arquitetura preparada para multi-instituição/multi-tenant.

A plataforma NÃO deve realizar diagnóstico psicológico automatizado. Qualquer classificação ou sugestão deve ser apresentada como apoio administrativo/organizacional, sempre sujeita à validação de profissional habilitado.

## Diretriz de descaracterização
Remover ou substituir qualquer referência direta ou indireta ao projeto anterior, incluindo:

- nomes como PAPSE, Backend_Papse, bolsista, colaborador, protocolo, regular, lista regular, lista de espera com a mesma lógica original;
- menções à UNIFESSPA como regra de negócio;
- campos acadêmicos como curso/matrícula como centro do produto;
- termos e fluxos iguais ao artigo original;
- textos de consentimento, README, títulos de página e mensagens internas herdadas;
- estrutura de banco idêntica ao projeto anterior;
- telas com layout, nomenclatura e jornada iguais ao projeto anterior.

Novo domínio recomendado:

- Institution
- User
- Patient
- IntakeForm
- CareCase
- CareQueue
- SessionNote
- SupervisionNote
- AccessibilityProfile
- Alert
- ConsentRecord
- AuditLog

## Stack recomendada
Backend:
- Node.js + TypeScript
- Express ou Fastify
- Prisma ORM
- PostgreSQL
- Zod para validação
- JWT com refresh token
- bcrypt para senha
- Helmet, CORS restrito e rate limit
- Vitest/Jest + Supertest para testes

Frontend:
- React + TypeScript + Vite
- React Router
- TailwindCSS
- React Hook Form + Zod
- Axios
- Testes com Vitest + Testing Library

Infra:
- Docker Compose com PostgreSQL
- variáveis de ambiente por `.env.example`
- GitHub Actions para build/test/lint

## Arquitetura alvo sugerida
Usar monorepo:

```txt
neuroacolhe-platform/
  apps/
    api/
    web/
  packages/
    database/
    shared/
  docs/
  README.md
  CLAUDE_CODE_NEUROACOLHE.md
```

Se a migração imediata para monorepo for grande demais, manter temporariamente:

```txt
api/
web/
docs/
```

## Módulos do MVP
O MVP deve conter:

1. Autenticação e perfis
   - admin da plataforma
   - gestor institucional
   - profissional
   - supervisor

2. Instituições
   - cadastro de instituição/clínica
   - isolamento de dados por instituição

3. Pacientes
   - cadastro básico
   - contato
   - responsável, quando aplicável
   - status geral do paciente

4. Triagem digital inclusiva
   - formulário em etapas
   - linguagem simples
   - necessidades de acessibilidade
   - motivo da busca por atendimento
   - disponibilidade
   - consentimento LGPD

5. Perfil de acessibilidade/neurodivergência
   - TEA, TDAH, dislexia ou outras necessidades autodeclaradas, quando o paciente desejar informar
   - preferências de comunicação
   - sensibilidade sensorial
   - necessidade de apoio no preenchimento
   - observações para acolhimento

6. Fila de cuidado
   - recebido
   - em análise
   - aguardando atendimento
   - em acompanhamento
   - supervisão pendente
   - encaminhado
   - finalizado
   - arquivado

7. Caso de acompanhamento
   - vínculo paciente-profissional
   - status
   - prioridade administrativa validada por profissional
   - histórico de movimentações

8. Evolução de sessão
   - registro com data/hora
   - autor do registro
   - vínculo ao caso
   - trilha de auditoria

9. Supervisão clínica
   - supervisor vê casos vinculados à equipe/instituição
   - registro de orientação de supervisão
   - pendências de supervisão

10. Alertas
   - paciente muito tempo parado na fila
   - faltas recorrentes
   - caso sem evolução recente
   - supervisão pendente
   - retorno não confirmado

11. Dashboard básico
   - pacientes por status
   - tempo médio em fila
   - faltas
   - abandonos
   - casos em supervisão
   - demandas por período

## Regras de segurança obrigatórias
- Todas as rotas sensíveis devem exigir autenticação.
- Todas as operações devem respeitar o tenant/instituição do usuário.
- Implementar RBAC por perfil.
- Usar validação com Zod em todas as entradas.
- Restringir CORS por variável de ambiente.
- Usar Helmet.
- Aplicar rate limit em login, cadastro público e triagem pública.
- Registrar AuditLog em operações sensíveis.
- Nunca retornar senha/hash em respostas.
- Não versionar `.env` real.
- Não versionar cliente Prisma gerado manualmente.
- Criar `.env.example`.

## Tarefas iniciais para executar

### Tarefa 1 — Auditoria do projeto atual
Faça um relatório em `docs/auditoria-legado.md` contendo:
- referências ao projeto anterior;
- nomes, entidades, rotas e telas que precisam ser removidos;
- riscos de semelhança conceitual;
- riscos de segurança;
- riscos de LGPD;
- plano de refatoração em etapas.

### Tarefa 2 — Criar nova documentação do produto
Criar:
- `docs/visao-produto.md`
- `docs/personas.md`
- `docs/jornada-usuario.md`
- `docs/backlog-mvp.md`

### Tarefa 3 — Redesenhar banco de dados
Criar novo `schema.prisma` com as entidades:
- Institution
- User
- Patient
- IntakeForm
- AccessibilityProfile
- CareCase
- SessionNote
- SupervisionNote
- Alert
- ConsentRecord
- AuditLog

Não reaproveitar nomes antigos como Colaborador, Protocolo, Regular, ListaRegular, ListaEspera, RelatorioEvolutivo.

### Tarefa 4 — Reorganizar backend
Criar módulos:
- auth
- institutions
- users
- patients
- intake
- care-cases
- session-notes
- supervision
- alerts
- dashboard
- audit

Cada módulo deve ter:
- routes
- controller
- service
- schema/validator
- tests

### Tarefa 5 — Criar testes
Adicionar testes para:
- login
- criação de instituição
- criação de paciente
- envio de triagem
- criação de caso
- bloqueio de acesso entre instituições
- permissão por perfil
- criação de evolução
- criação de supervisão
- alertas básicos

### Tarefa 6 — Redesenhar frontend
Remover toda referência ao projeto anterior e criar telas novas:
- login
- painel do gestor
- triagem pública inclusiva
- fila de cuidado
- perfil do paciente
- caso de acompanhamento
- evolução de sessão
- supervisão clínica
- dashboard
- configurações da instituição

### Tarefa 7 — Criar seed nova
Criar dados fictícios próprios:
- 1 instituição clínica-escola
- 1 instituição privada
- usuários por perfil
- pacientes fictícios
- triagens fictícias
- casos fictícios
- alertas fictícios

Não usar nomes, cursos, textos ou registros do projeto anterior.

## Critérios de aceite
A tarefa só deve ser considerada concluída quando:

- não houver mais referência a PAPSE no código, frontend, backend, README, banco, seed ou telas;
- o backend subir localmente;
- o frontend subir localmente;
- o build passar;
- testes principais passarem;
- houver `.env.example`;
- houver README novo explicando o NeuroAcolhe;
- o fluxo principal funcionar: triagem → fila → caso → evolução → supervisão → dashboard;
- a autenticação e o isolamento por instituição estiverem implementados;
- houver documentação clara em `/docs`.

## Comandos úteis esperados
Depois das alterações, os comandos devem funcionar:

```bash
npm install
npm run dev
npm run build
npm run test
npm run lint
```

Se for monorepo com workspaces:

```bash
npm install
npm run dev --workspace apps/api
npm run dev --workspace apps/web
npm run build
npm run test
npm run lint
```

## Prompt de execução para o agente
Antes de começar a codar, leia este arquivo inteiro, leia o README atual, analise a estrutura de pastas, analise o Prisma schema, rotas, controllers, services e telas. Depois crie um plano em etapas, confirme quais arquivos serão alterados e só então comece pela auditoria e documentação. Não faça mudanças cosméticas superficiais. O objetivo é criar uma nova plataforma com domínio próprio e produto original.
