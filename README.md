# NeuroAcolhe Platform 🧩💙

> Uma plataforma SaaS multi-tenant e inclusiva para gestão de acolhimento psicológico, triagem acessível para neurodivergentes e acompanhamento clínico.

---

## 🚀 Sobre o Projeto

O **NeuroAcolhe** foi projetado para clínicas de psicologia, clínicas-escola e consultórios organizarem de forma eficiente e instrucional a jornada de atendimento clínico. A plataforma automatiza a fila de espera, gerencia os prontuários eletrônicos com auditoria total, facilita a supervisão clínica de profissionais em formação e prioriza a acessibilidade cognitiva e digital para pacientes neurodivergentes (TEA, TDAH, Dislexia, etc.).

### Recursos Principais
- **Multi-Tenant**: Hospedagem isolada e segura para múltiplas instituições.
- **Triagem Digital Inclusiva**: Formulário em etapas de fácil leitura com salvamento de progresso e adaptação de preferências sensoriais.
- **Painel de Acessibilidade**: Interface flexível com suporte a fontes adaptadas (OpenDyslexic) e controle de sobrecarga cognitiva.
- **Fila de Cuidado Inteligente**: Fluxo de transições de status com contagem de tempo e alertas de abandono programados.
- **Supervisão Clínica**: Workflow integrado entre alunos/profissionais e docentes para revisão de prontuários.
- **Segurança & LGPD**: Registro permanente de logs de auditoria para leitura de dados sensíveis e coleta padronizada de consentimento.

---

## 📦 Estrutura de Pastas (Monorepo)

O projeto adota uma arquitetura modular moderna:

```txt
neuroacolhe-platform/
  apps/
    api/         # API REST em Node.js, Express, Prisma e PostgreSQL (antigo Backend_Papse)
    web/         # Frontend SPA em React, TypeScript, Vite e TailwindCSS (antigo Frontend)
  docs/          # Documentação de arquitetura, visão de produto e auditorias
  README.md      # Este arquivo com as instruções de setup geral
```

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript**
- **Express.js** (API framework)
- **Prisma ORM** + **PostgreSQL**
- **Zod** (Validação de schemas)
- **Vitest** + **Supertest** (Testes e asserções)

### Frontend
- **React** + **TypeScript** + **Vite**
- **TailwindCSS** (Estilização responsiva)
- **React Router** (Roteamento de rotas)
- **React Hook Form** + **Zod** (Formulários inclusivos)

---

## ⚙️ Configuração Local

### Requisitos Mínimos
- Node.js (versão 18 ou superior)
- Docker e Docker Compose

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/exemplo/neuroacolhe-platform.git
   cd neuroacolhe-platform
   ```

2. Instale as dependências na pasta de cada app:
   - Para o Backend: `cd apps/api && npm install`
   - Para o Frontend: `cd apps/web && npm install`

3. Configure as variáveis de ambiente baseando-se nos arquivos `.env.example` localizados em `apps/api` e `apps/web`.

4. Suba o banco de dados via Docker:
   ```bash
   cd apps/api
   docker compose up -d
   ```

5. Execute as migrations do Prisma:
   ```bash
   npx prisma migrate dev
   ```

6. Popule o banco com dados de teste neutros:
   ```bash
   npm run prisma:seed
   ```

7. Execute o projeto em modo de desenvolvimento:
   - Backend: `npm run dev` (em `apps/api`)
   - Frontend: `npm run dev` (em `apps/web`)

---

## ⚖️ Licença e Governança
Este projeto é de propriedade intelectual proprietária do NeuroAcolhe. O processamento de dados do prontuário atende às resoluções vigentes do Conselho Federal de Psicologia (CFP) e da Lei Geral de Proteção de Dados (LGPD).
