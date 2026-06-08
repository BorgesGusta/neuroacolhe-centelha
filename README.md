# PAPSE - Programa de Acompanhamento Psicológico Estudantil (React Version)

Reconstrução completa do sistema PAPSE em React, mantendo 100% da funcionalidade e aparência visual do projeto original.

## 🚀 Tecnologias Utilizadas

- **React** 18.3+ - Biblioteca principal
- **React Router Dom V7** - Roteamento e navegação
- **React Hook Form** - Gerenciamento e validação de formulários
- **Axios** - Cliente HTTP para comunicação com API
- **Vite** - Build tool e desenvolvimento
- **CSS Modules** - Estilização com escopo de componente

## 📦 Instalação

```bash
# Clonar o repositório
cd https://github.com/BrunoSSilva9/backend-papse.git

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🗂️ Estrutura do Projeto

```
react-papse/
├── public/
│   └── assets/
│       └── images/           # Imagens e SVGs do projeto original
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx            # Cabeçalho com navegação
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.jsx            # Rodapé
│   │   │   ├── Footer.module.css
│   │   │   ├── Layout.jsx            # Layout wrapper
│   │   │   └── Layout.module.css
│   │   └── shared/
│   │       ├── PatientCard.jsx       # Card de paciente reutilizável
│   │       └── PatientCard.module.css
│   ├── contexts/
│   │   └── AuthContext.jsx           # Contexto de autenticação
│   ├── pages/
│   │   ├── Home.jsx                  # Página principal
│   │   ├── Home.module.css
│   │   ├── About.jsx                 # Sobre o PAPSE
│   │   ├── About.module.css
│   │   ├── Form.jsx                  # Formulário de inscrição
│   │   ├── Form.module.css
│   │   ├── Login.jsx                 # Login admin/bolsista
│   │   ├── Login.module.css
│   │   ├── AdminDashboard.jsx        # Dashboard administrativo
│   │   ├── AdminDashboard.module.css
│   │   ├── Bolsista.jsx              # Dashboard bolsista
│   │   ├── Bolsista.module.css
│   │   ├── PatientList.jsx           # Lista de pacientes (reutilizável)
│   │   ├── PatientList.module.css
│   │   └── Report.jsx                # Relatório de encerramentos
│   ├── services/
│   │   └── api.js                    # Serviço de API com Axios
│   ├── styles/
│   │   └── globals.css               # Estilos globais e variáveis CSS
│   ├── App.jsx                       # Componente principal com rotas
│   └── main.jsx                      # Ponto de entrada da aplicação
├── index.html                        # HTML principal
├── package.json                      # Dependências e scripts
└── README.md                         # Este arquivo
```

## 🎨 Decisões de Estilização

### Por que CSS Modules?

Optamos por **CSS Modules** em vez de Tailwind ou Styled Components pelos seguintes motivos:

1. **Fidelidade Visual Perfeita**: Tradução direta do CSS original sem necessidade de reescrever com utilities do Tailwind
2. **Escopo Automático**: Prevenção de conflitos de classes sem overhead de runtime
3. **Manutenibilidade**: Organização clara com um arquivo CSS por componente
4. **Performance**: CSS estático sem overhead de CSS-in-JS

### Variáveis CSS Globais

Definidas em `src/styles/globals.css`:

```css
--primary-blue: #5773D3
--primary-dark-blue: #23397e
--primary-orange: #FE7547
--light-cream: #FFF3E3
--dark-text: #333
--light-text: #fff
--border-color: #e0e0e0
```

## 🧩 Arquitetura de Componentes

### Componentes de Layout

- **Layout**: Wrapper principal usando prop `children` para composição
- **Header**: Navegação com links ativos (usando `useLocation`) e menu dropdown
- **Footer**: Informações institucionais

### Páginas Principais

1. **Home** (`/`): Landing page com CTA para formulário
2. **About** (`/sobre`): Informações sobre o PAPSE
3. **Form** (`/formulario`): Formulário de inscrição com React Hook Form
4. **Login** (`/login`): Autenticação para admin/bolsista

### Páginas Protegidas (Requerem Autenticação)

5. **AdminDashboard** (`/admin`): Dashboard com contadores dinâmicos
6. **Bolsista** (`/bolsista`): Dashboard para bolsistas
7. **PatientList**: Componente reutilizável para 4 páginas diferentes:
   - Lista de Espera (`/lista-espera`)
   - Lista de Espera Regulares (`/lista-espera-regulares`)
   - Atendimentos Protocolo (`/atendimentos-protocolo`)
   - Atendimentos Regulares (`/atendimento-regulares`)
8. **Report** (`/relatorio`): Relatórios de inscrições encerradas

## 🔧 Funcionalidades Implementadas

### React Hooks Utilizados

- **useState**: Gerenciamento de estado local (dropdowns, modals, carregamento)
- **useEffect**: Side effects (fetch de dados, event listeners, cleanup)
- **useContext**: Autenticação global via `AuthContext`
- **useRef**: Referências DOM (dropdown outside click detection)
- **useNavigate**: Navegação programática
- **useLocation**: Detecção de rota ativa
- **useForm** (React Hook Form): Gerenciamento de formulários

### Validações de Formulário

- Email: Formato válido usando regex
- Telefone: Apenas números
- Matrícula: Apenas números
- Data de Nascimento: Não pode ser no futuro
- Campos obrigatórios: Nome, email, telefone, curso, data, matrícula

### Gerenciamento de Estado de Pacientes

Fluxo de status:
```
lista_de_espera → atendimento_protocolo → espera_regulares → atendimento_regular → encerrado
```

### API Integration

Todas as chamadas à API através do serviço `api.js`:

- `fetchInscricoes(status)`: Buscar inscrições por status
- `createInscricao(data)`: Criar nova inscrição
- `updateInscricao(id, data)`: Atualizar status de paciente

## 🌐 Rotas

### Públicas
- `/` - Home
- `/sobre` - About
- `/formulario` - Form
- `/login` - Login

### Protegidas (Requerem Autenticação)
- `/admin` - Admin Dashboard
- `/bolsista` - Bolsista Dashboard
- `/lista-espera` - Lista de Espera
- `/lista-espera-regulares` - Lista de Espera Regulares
- `/atendimentos-protocolo` - Atendimentos Protocolo
- `/atendimento-regulares` - Atendimentos Regulares
- `/relatorio` - Relatório

## 🚦 Como Executar

### 1. Iniciar Backend (JSON Server)

```bash
cd /Backend_Papse
Docker compose up -d
```

### 2. Iniciar Frontend React

```bash
cd /Front-react-papse
npm run dev
```

Acesse: `http://localhost:5173`

## 🧪 Testes Sugeridos

1. **Teste de Formulário**:
   - Preencher formulário de inscrição
   - Verificar validações
   - Confirmar criação no db.json

2. **Teste de Autenticação**:
   - Login com email contendo "admin" → redireciona para `/admin`
   - Login com outro email → redireciona para `/bolsista`

3. **Teste de Gerenciamento de Pacientes**:
   - Visualizar listas
   - Expandir cards
   - Encaminhar paciente para próximo status
   - Encerrar inscrição

4. **Teste de Navegação**:
   - Testar todos os links do header
   - Testar navegação do dashboard
   - Verificar links ativos (highlight correto)

5. **Teste Responsivo**:
   - Breakpoints: 768px, 992px, 1200px
   - Menu hamburger em mobile
   - Layout adaptativo

## 📝 Props e Children

### Uso de Props

- **Layout**: `children`, `showFooter`, `headerVariant`
- **PatientCard**: `patient`, `index`, `onEncaminhar`, `onEncerrar`, `showPosition`
- **PatientList**: `status`, `title`, `nextStatus`, `canEncerrar`

### Composição com Children

```jsx
<Layout>
  <div className={styles.content}>
    {/* Conteúdo da página */}
  </div>
</Layout>
```

## 🎯 Diferenças do Original

Todas as funcionalidades foram preservadas. As únicas mudanças foram:

1. **Arquitetura**: De HTML/CSS/JS vanilla para React com componentes
2. **Roteamento**: De páginas HTML separadas para SPA com React Router
3. **Formulários**: De JavaScript vanilla para React Hook Form
4. **Estilização**: De CSS global para CSS Modules
5. **Estado**: De variáveis JavaScript para hooks React (useState, useContext)

## 📚 Dependências

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.0.0",
    "react-hook-form": "^7.49.0",
    "axios": "^1.6.0"
  }
}
```

## 👥 Créditos

Projeto original desenvolvido pelo FAPSI em conjunto com a FACSI da Universidade Federal do Sul e Sudeste do Pará.

Reconstrução em React: 2025

## 📄 Licença

Este projeto é de propriedade da UNIFESSPA.
