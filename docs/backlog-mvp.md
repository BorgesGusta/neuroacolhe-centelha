# Backlog do MVP — NeuroAcolhe

Este backlog lista os requisitos e histórias de usuário mapeados para a entrega do MVP do **NeuroAcolhe**, estruturados por módulos funcionais.

---

## 1. Módulo de Autenticação e Multi-Tenancy (Tenant & Auth)
*   **[ ] Cadastro de Instituições:**
    *   Como administrador da plataforma, quero cadastrar uma instituição (clínica ou universidade) com nome, CNPJ, subdomínio e status ativo.
*   **[ ] Autenticação de Usuários:**
    *   Como usuário da clínica (Gestor, Profissional ou Supervisor), quero realizar login na plataforma informando e-mail e senha para acessar minhas funcionalidades.
*   **[ ] Isolamento de Dados (Tenant Isolation):**
    *   Como gestor de segurança, quero que todas as requisições à API e banco filtrem os dados pela instituição (`institutionId`) obtida do token JWT, impedindo vazamento de dados inter-clínicas.
*   **[ ] Perfis de Acesso (RBAC):**
    *   Como administrador da clínica, quero que as rotas e interfaces restrinjam o acesso de acordo com o perfil do usuário (`UserRole`): Gestor Institucional, Profissional ou Supervisor.

## 2. Módulo de Acolhimento e Acessibilidade (Patients & Intake)
*   **[ ] Triagem Inclusiva (IntakeForm):**
    *   Como paciente em busca de atendimento, quero preencher uma ficha de triagem pública simples em etapas, indicando o motivo da busca, disponibilidade e urgência de forma acessível.
*   **[ ] Perfil de Acessibilidade (AccessibilityProfile):**
    *   Como paciente neurodivergente, quero sinalizar minhas preferências de comunicação e sensibilidades sensoriais na triagem para que a clínica se prepare para me receber.
*   **[ ] Registro Legal de Consentimento (ConsentRecord):**
    *   Como encarregado da LGPD, quero que o sistema registre de forma imutável o IP, data/hora, navegador e a versão do termo legal aceito pelo paciente durante a triagem.

## 3. Módulo de Gestão de Fila (CareQueue)
*   **[ ] Visualização da Fila Lógica:**
    *   Como gestor, quero visualizar a fila inteligente de pacientes dividida pelos estados (Recebido, Em Análise, Aguardando Atendimento, Em Acompanhamento, Finalizado, Arquivado).
*   **[ ] Transição de Status e Observações:**
    *   Como gestor ou profissional avaliador, quero mover o paciente de status na fila, registrando observações clínicas sobre a tomada de decisão.

## 4. Módulo de Casos Clínicos (CareCase)
*   **[ ] Atribuição de Profissional e Supervisor:**
    *   Como gestor, quero criar um caso clínico vinculando um paciente da fila a um profissional (aluno/psicólogo) e a um supervisor clínico, especificando a modalidade (curta ou longa duração).
*   **[ ] Histórico de Movimentações:**
    *   Como supervisor, quero ver o histórico de quando o caso foi iniciado, pausado, retomado ou arquivado.

## 5. Módulo de Evolução e Prontuário (SessionNote)
*   **[ ] Registro de Evolução (Evoluções Clínicas):**
    *   Como profissional responsável pelo caso, quero descrever a evolução clínica de cada sessão realizada e registrar se o paciente compareceu ou faltou.
*   **[ ] Garantia de Integridade de Prontuário:**
    *   Como responsável técnico, quero que o sistema gere e salve um hash criptográfico (SHA-256) do texto da evolução no momento da criação, assegurando que o prontuário não foi alterado de forma retroativa.

## 6. Módulo de Supervisão Clínica (SupervisionNote)
*   **[ ] Painel de Casos da Equipe:**
    *   Como supervisor clínico, quero visualizar todos os casos sob minha responsabilidade agrupados pelos profissionais sob minha tutoria.
*   **[ ] Registro de Nota de Orientação:**
    *   Como supervisor, quero registrar feedbacks e orientações de conduta clínica diretamente vinculados a sessões específicas registradas pelo profissional.

## 7. Módulo de Alertas e Auditoria (Alerts & Audit)
*   **[ ] Geração de Alertas Automáticos:**
    *   Como gestor, quero que o sistema emita alertas visuais para casos com:
        *   Faltas recorrentes consecutivas registradas nas evoluções.
        *   Casos em fila de espera sem atualização por muito tempo.
        *   Casos em atendimento ativo sem novas evoluções registradas nas últimas semanas.
*   **[ ] Registro de Logs de Auditoria (AuditLog):**
    *   Como encarregado da LGPD, quero que qualquer leitura de dados clínicos de prontuários (`READ_CLINICAL_NOTE`) ou exclusão de dados registre de forma irreversível o usuário que realizou a ação, o recurso acessado, data/hora e o endereço IP.

## 8. Módulo de Dashboard
*   **[ ] Métricas Gerenciais:**
    *   Como gestor, quero visualizar gráficos básicos com tempo médio de pacientes em fila de espera, taxa de faltas por período e quantidade de casos em supervisão ativa.
