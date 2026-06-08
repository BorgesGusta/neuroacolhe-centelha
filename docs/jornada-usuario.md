# Jornada de Usuário — NeuroAcolhe

Este documento mapeia o fluxo ponta-a-ponta da jornada do usuário dentro da plataforma **NeuroAcolhe**, ilustrando a interação entre o paciente, o sistema, o gestor, o profissional de saúde e o supervisor clínico.

---

## Jornada 1: Triagem Digital Inclusiva e Entrada na Fila

```mermaid
sequenceDiagram
    actor Paciente
    participant Sistema as NeuroAcolhe (Frontend)
    participant API as API Backend
    participant Banco as Banco de Dados

    Paciente->>Sistema: Acessa link de Triagem Pública
    Sistema->>Paciente: Exibe formulário adaptado (Linguagem Simples)
    Paciente->>Sistema: Preenche dados básicos e perfil de acessibilidade (preferências de comunicação/sensoriais)
    Paciente->>Sistema: Aceita Termo de Consentimento LGPD
    Sistema->>API: Envia formulário + IP/User-Agent do consentimento
    API->>Banco: Salva Patient, IntakeForm, AccessibilityProfile e ConsentRecord
    API->>Banco: Adiciona paciente à CareQueue (Status: RECEIVED)
    API-->>Sistema: Confirmação de recebimento com ticket de acompanhamento
    Sistema-->>Paciente: Exibe tela de sucesso acessível
```

---

## Jornada 2: Gestão da Fila e Atribuição de Caso

```mermaid
sequenceDiagram
    actor Gestor as Gestor Institucional
    participant Sistema as Painel do Gestor
    participant API as API Backend
    participant Banco as Banco de Dados

    Gestor->>Sistema: Acessa a Fila de Cuidado (CareQueue)
    Sistema->>API: Requisita pacientes com status RECEIVED ou WAITING_CARE
    API->>Banco: Busca dados isolados da Instituição do Gestor
    API-->>Sistema: Retorna lista de fila inteligente
    Gestor->>Sistema: Analisa perfil e seleciona paciente
    Gestor->>Sistema: Atribui paciente a um Profissional (e opcionalmente a um Supervisor)
    Sistema->>API: Salva criação do CareCase (Status: ACTIVE) e atualiza CareQueue (Status: IN_CARE)
    API->>Banco: Grava CareCase, vincula chaves e registra transição
    API->>Banco: Grava AuditLog da operação de atribuição
    API-->>Sistema: Confirmação de caso ativo
    Sistema-->>Gestor: Atualiza visualização da fila
```

---

## Jornada 3: Atendimento e Evolução Clínica

```mermaid
sequenceDiagram
    actor Profissional as Profissional de Saúde
    participant Sistema as Painel do Profissional
    participant API as API Backend
    participant Banco as Banco de Dados

    Profissional->>Sistema: Visualiza seus Casos Ativos (CareCase)
    Profissional->>Sistema: Realiza a sessão clínica com o paciente
    Profissional->>Sistema: Abre formulário de evolução de sessão (SessionNote)
    Profissional->>Sistema: Digita o relato descritivo clínico e marca presença/falta
    Sistema->>API: Envia SessionNote
    API->>API: Gera Hash SHA-256 de integridade do texto do prontuário
    API->>Banco: Salva SessionNote e atualiza data do último atendimento
    API->>Banco: Grava AuditLog (WRITE_CLINICAL_NOTE)
    API-->>Sistema: Evolução salva com sucesso
    Sistema-->>Profissional: Exibe prontuário atualizado
```

---

## Jornada 4: Supervisão Clínica e Feedback

```mermaid
sequenceDiagram
    actor Supervisor
    participant Sistema as Painel do Supervisor
    participant API as API Backend
    participant Banco as Banco de Dados

    Supervisor->>Sistema: Acessa o painel de Casos da sua Equipe
    Sistema->>API: Requisita casos vinculados ao ID do Supervisor
    API->>Banco: Busca casos e prontuários relacionados
    API->>Banco: Grava AuditLog (READ_CLINICAL_NOTE - acesso ao prontuário)
    API-->>Sistema: Retorna histórico de evoluções
    Supervisor->>Sistema: Seleciona uma SessionNote específica
    Supervisor->>Sistema: Digita observações e orientações clínicas
    Sistema->>API: Envia SupervisionNote vinculada à SessionNote
    API->>Banco: Salva SupervisionNote e atualiza status de supervisão no CareCase
    API-->>Sistema: Confirmação de nota de supervisão registrada
    Sistema-->>Supervisor: Exibe feedback salvo
```
