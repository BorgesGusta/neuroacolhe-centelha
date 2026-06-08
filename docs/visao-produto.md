# Visão de Produto — NeuroAcolhe

O **NeuroAcolhe** é uma plataforma SaaS B2B inclusiva projetada para clínicas-escola, instituições privadas e serviços de saúde mental. Seu objetivo é estruturar, organizar e auditar toda a jornada de acolhimento e atendimento psicológico, com forte ênfase em acessibilidade digital, segurança e conformidade com a LGPD.

---

## 1. O Problema
Muitas clínicas-escola de psicologia e clínicas privadas lidam com processos manuais ou sistemas legados ineficientes para gerenciar suas filas de espera e prontuários. Isso resulta em:
* **Falta de acessibilidade:** Formulários de triagem públicos que são excludentes ou difíceis de preencher para pessoas neurodivergentes (como pessoas com autismo, TDAH ou dislexia).
* **Vulnerabilidade de dados:** Falta de trilhas de auditoria em prontuários clínicos, expondo dados de saúde altamente sensíveis a acessos indevidos.
* **Evasão silenciosa:** Falta de mecanismos automatizados para alertar quando um paciente em fila de espera ou em atendimento ativo deixa de comparecer ou deixa de progredir.
* **Complexidade na supervisão:** Dificuldade para que docentes e supervisores acompanhem os relatórios e orientem os profissionais ou discentes em formação de forma integrada.

---

## 2. A Solução (NeuroAcolhe)
Uma plataforma moderna, segura e multi-tenant que unifica o fluxo de acolhimento desde a triagem inicial até o encerramento do caso, oferecendo:
1. **Triagem Digital Inclusiva:** Formulários acessíveis, com suporte a preferências de comunicação, descrição simplificada de dores e perfis sensoriais.
2. **Gestão Inteligente de Fila (CareQueue):** Fluxos lógicos de estados (Recebido, Em Análise, Aguardando Atendimento, Em Acompanhamento, Supervisionando, Concluído) substituindo listas rígidas e estáticas.
3. **Casos Clínicos Estruturados (CareCase):** Vínculo parametrizado entre pacientes, profissionais e supervisores, definindo o tipo de acolhimento (curto prazo/protocolo ou longo prazo/regular).
4. **Supervisão Clínica Integrada:** Canal dedicado para que supervisores leiam as evoluções clínicas (`SessionNote`) e emitam pareceres e orientações (`SupervisionNote`).
5. **Alertas Inteligentes (Alerts):** Monitoramento de inatividade na fila, sequências de faltas em sessões e casos ativos sem evoluções clínicas registradas.
6. **Segurança e Conformidade LGPD (AuditLog & ConsentRecord):** Assinatura de prontuários com hash de integridade, termo digital de consentimento detalhado (com IP, versão e User-Agent) e logs imutáveis de todas as leituras e escritas de dados clínicos.

---

## 3. Proposta de Valor
* **Para Gestores Institucionais:** Centralização, gestão de capacidade clínica, segurança jurídica contra vazamentos de dados (LGPD) e relatórios gerenciais claros de tempo de fila e abandono.
* **Para Profissionais e Discentes:** Ferramenta ágil para evolução de prontuários, visibilidade rápida das orientações de seus supervisores e alertas de faltas de seus pacientes.
* **Para Supervisores:** Acompanhamento assíncrono e centralizado de toda a sua equipe de profissionais e aprovação/orientação rápida dos casos sob sua responsabilidade.
* **Para Pacientes/Acolhidos:** Uma porta de entrada acolhedora, com triagem que respeita suas características de acessibilidade e garante total controle e transparência sobre seus dados pessoais e de saúde.
