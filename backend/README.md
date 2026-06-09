# NeuroAcolhe API - Backend

Este é o diretório do backend da plataforma NeuroAcolhe, desenvolvido em Node.js com Express e Prisma.

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js (v18+)
- Docker executando em segundo plano

### Passos para inicializar

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Configurar as Variáveis de Ambiente**:
   Crie um arquivo `.env` baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. **Subir o Banco de Dados PostgreSQL**:
   ```bash
   docker compose up -d db
   ```

4. **Gerar Client do Prisma & Migrações**:
   ```bash
   npx prisma migrate dev
   ```

5. **Popular o Banco com Seeds**:
   ```bash
   npm run prisma:seed
   ```

6. **Iniciar o Servidor em Modo Dev**:
   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3000/api`.
