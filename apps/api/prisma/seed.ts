import { PrismaClient, UserRole, QueueStatus, CaseType, CaseStatus, AlertStatus, AlertType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando a população do banco de dados do NeuroAcolhe...");

  // Limpar tabelas existentes
  await prisma.auditLog.deleteMany({});
  await prisma.alert.deleteMany({});
  await prisma.supervisionNote.deleteMany({});
  await prisma.sessionNote.deleteMany({});
  await prisma.careCase.deleteMany({});
  await prisma.careQueue.deleteMany({});
  await prisma.consentRecord.deleteMany({});
  await prisma.intakeForm.deleteMany({});
  await prisma.accessibilityProfile.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.institution.deleteMany({});

  console.log("🧹 Banco de dados limpo com sucesso!");

  // 1. Criar Instituições
  const instEscola = await prisma.institution.create({
    data: {
      name: "Clínica-Escola de Psicologia Ânima",
      cnpj: "12345678000199",
      subdomain: "anima",
    },
  });

  const instPrivada = await prisma.institution.create({
    data: {
      name: "Clínica Horizonte Saúde Mental",
      cnpj: "98765432000188",
      subdomain: "horizonte",
    },
  });

  console.log("🏢 Instituições de teste criadas.");

  // Criptografar senha padrão
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash("neuroacolhe123", salt);

  // 2. Criar Usuários para a Clínica-Escola Ânima
  const adminAnima = await prisma.user.create({
    data: {
      name: "Ana Gestora Ânima",
      email: "admin.anima@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.INSTITUTION_ADMIN,
      institutionId: instEscola.id,
    },
  });

  const prof1Anima = await prisma.user.create({
    data: {
      name: "Thiago Psicólogo",
      email: "thiago.prof@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.PROFESSIONAL,
      institutionId: instEscola.id,
    },
  });

  const prof2Anima = await prisma.user.create({
    data: {
      name: "Mariana Residente",
      email: "mariana.prof@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.PROFESSIONAL,
      institutionId: instEscola.id,
    },
  });

  const supervisorAnima = await prisma.user.create({
    data: {
      name: "Dr. Carlos Supervisor",
      email: "carlos.supervisor@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.SUPERVISOR,
      institutionId: instEscola.id,
    },
  });

  // 3. Criar Usuários para a Clínica Horizonte
  const adminHorizonte = await prisma.user.create({
    data: {
      name: "Beatriz Gestora Horizonte",
      email: "admin.horizonte@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.INSTITUTION_ADMIN,
      institutionId: instPrivada.id,
    },
  });

  const profHorizonte = await prisma.user.create({
    data: {
      name: "Dr. Fernando Clínica",
      email: "fernando.prof@neuroacolhe.org",
      password: passwordHash,
      role: UserRole.PROFESSIONAL,
      institutionId: instPrivada.id,
    },
  });

  console.log("👥 Usuários administradores, profissionais e supervisores criados.");

  // 4. Criar Pacientes e Triagens (Clínica-Escola Ânima)
  const pacientesDataAnima = [
    {
      name: "Pedro Silveira",
      email: "pedro.silveira@email.com",
      phone: "11988887777",
      birthDate: new Date("1998-04-12"),
      status: QueueStatus.RECEIVED,
      reason: "Dificuldade grave de concentração, ansiedade antes de reuniões e sintomas depressivos leves.",
      availability: "Manhãs de segunda e quarta",
      neurodivergence: true,
      neuroDetails: "TDAH diagnosticado na infância",
      commPref: "Texto/E-mail",
      sensory: "Sensibilidade a ruídos altos e luzes fluorescentes piscantes",
    },
    {
      name: "Julia Costa",
      email: "julia.costa@email.com",
      phone: "11977776666",
      birthDate: new Date("2005-09-20"),
      status: QueueStatus.WAITING_CARE,
      reason: "Ansiedade generalizada e crises de pânico recorrentes em ambientes públicos.",
      availability: "Tardes de terça e quinta",
      neurodivergence: false,
      neuroDetails: "",
      commPref: "WhatsApp/Mensagem",
      sensory: "Nenhuma sensibilidade declarada",
    },
    {
      name: "Lucas de Souza",
      email: "lucas.souza@email.com",
      phone: "11966665555",
      birthDate: new Date("1990-12-05"),
      status: QueueStatus.IN_CARE,
      reason: "Sentimento de vazio, dificuldades em relacionamentos amorosos e estresse ocupacional.",
      availability: "Sábados pela manhã ou noites durante a semana",
      neurodivergence: true,
      neuroDetails: "Autodeclaração de traços de TEA (sem diagnóstico formal)",
      commPref: "Comunicação direta e literal, preferência por mensagens escritas claras",
      sensory: "Incômodo com barulhos de fundo constantes",
    },
    {
      name: "Clara Mendes",
      email: "clara.mendes@email.com",
      phone: "11955554444",
      birthDate: new Date("2011-06-15"),
      responsibleName: "Marcia Mendes (Mãe)",
      responsiblePhone: "11944443333",
      status: QueueStatus.SUPERVISION_PENDING,
      reason: "Problemas de socialização na escola e explosões de raiva frequentes.",
      availability: "Tardes de quarta e sexta",
      neurodivergence: false,
      neuroDetails: "",
      commPref: "Ligação para a mãe",
      sensory: "Prefere ambientes com iluminação suave",
    },
    {
      name: "Marcos Rocha",
      email: "marcos.rocha@email.com",
      phone: "11933332222",
      birthDate: new Date("1985-07-30"),
      status: QueueStatus.COMPLETED,
      reason: "Processamento de luto devido à perda do pai há um ano.",
      availability: "Qualquer horário comercial",
      neurodivergence: false,
      neuroDetails: "",
      commPref: "E-mail",
      sensory: "",
    },
  ];

  console.log("🏥 Criando pacientes e suas respectivas triagens...");

  for (const pData of pacientesDataAnima) {
    // Criar Paciente
    const patient = await prisma.patient.create({
      data: {
        name: pData.name,
        email: pData.email,
        phone: pData.phone,
        birthDate: pData.birthDate,
        responsibleName: pData.responsibleName,
        responsiblePhone: pData.responsiblePhone,
        status: pData.status,
        institutionId: instEscola.id,
      },
    });

    // Criar Perfil de Acessibilidade
    await prisma.accessibilityProfile.create({
      data: {
        patientId: patient.id,
        hasNeurodivergence: pData.neurodivergence,
        neurodivergenceDetails: pData.neuroDetails,
        communicationPreference: pData.commPref,
        sensorySensitivities: pData.sensory,
        needsAssistance: pData.neurodivergence,
        notes: pData.neurodivergence ? "Requer acolhimento calmo, sem interrupções bruscas." : "",
      },
    });

    // Criar Ficha de Triagem
    await prisma.intakeForm.create({
      data: {
        patientId: patient.id,
        reasonForSeeking: pData.reason,
        availability: pData.availability,
        hasEmergencyRisk: pData.name === "Julia Costa", // Exemplo de prioridade
        emergencyDetails: pData.name === "Julia Costa" ? "Ataques de pânico diários incapacitantes" : null,
      },
    });

    // Criar Registro de Consentimento LGPD
    await prisma.consentRecord.create({
      data: {
        patientId: patient.id,
        consentGiven: true,
        termVersion: "1.0",
        ipAddress: "192.168.1.50",
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      },
    });

    // Criar Fila de Cuidado
    await prisma.careQueue.create({
      data: {
        patientId: patient.id,
        institutionId: instEscola.id,
        status: pData.status,
        notes: `Paciente triado sob status inicial: ${pData.status}`,
      },
    });

    // 5. Se o paciente estiver em atendimento ou supervisão, criar caso clínico correspondente
    if (pData.status === QueueStatus.IN_CARE || pData.status === QueueStatus.SUPERVISION_PENDING) {
      const isPendingSupervision = pData.status === QueueStatus.SUPERVISION_PENDING;

      const careCase = await prisma.careCase.create({
        data: {
          patientId: patient.id,
          institutionId: instEscola.id,
          professionalId: prof1Anima.id,
          supervisorId: supervisorAnima.id,
          type: isPendingSupervision ? CaseType.SHORT_TERM : CaseType.LONG_TERM,
          status: CaseStatus.ACTIVE,
          startDate: new Date(),
        },
      });

      // Criar Evoluções de Sessão
      const note1 = await prisma.sessionNote.create({
        data: {
          caseId: careCase.id,
          patientId: patient.id,
          institutionId: instEscola.id,
          professionalId: prof1Anima.id,
          content: "Sessão inicial de acolhimento. Estabelecimento de vínculo terapêutico. O acolhido relatou suas principais queixas e objetivos para a terapia.",
          sessionDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Há 7 dias
          integrityHash: "sha256_dummy_hash_for_session_note_1_" + patient.id.substring(0, 8),
          isAbsent: false,
        },
      });

      const note2 = await prisma.sessionNote.create({
        data: {
          caseId: careCase.id,
          patientId: patient.id,
          institutionId: instEscola.id,
          professionalId: prof1Anima.id,
          content: "Segunda sessão. Discutidos gatilhos de ansiedade no ambiente social e estratégias preliminares de regulação emocional.",
          sessionDate: new Date(), // Hoje
          integrityHash: "sha256_dummy_hash_for_session_note_2_" + patient.id.substring(0, 8),
          isAbsent: false,
        },
      });

      // Se for supervisão pendente, adicionar nota de supervisão ligada à primeira sessão
      if (isPendingSupervision) {
        await prisma.supervisionNote.create({
          data: {
            caseId: careCase.id,
            sessionNoteId: note1.id,
            institutionId: instEscola.id,
            supervisorId: supervisorAnima.id,
            content: "Orientação clínica: Focar em técnicas cognitivo-comportamentais de enfrentamento gradual para a fobia social. Monitorar reações emocionais e intensidade dos episódios.",
          },
        });
      }
    }
  }

  // 6. Criar Alertas Fictícios
  // Alerta de paciente parado na fila
  const pedroPatient = await prisma.patient.findFirst({ where: { name: "Pedro Silveira" } });
  if (pedroPatient) {
    await prisma.alert.create({
      data: {
        type: AlertType.INACTIVE_QUEUE,
        status: AlertStatus.ACTIVE,
        message: "Paciente Pedro Silveira está sem movimentação na fila de triagem há mais de 15 dias.",
        institutionId: instEscola.id,
        patientId: pedroPatient.id,
      },
    });
  }

  // 7. Criar Registros de Auditoria (AuditLog)
  await prisma.auditLog.create({
    data: {
      userId: prof1Anima.id,
      institutionId: instEscola.id,
      action: "READ_CLINICAL_NOTE",
      resource: "SessionNote",
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      details: "Acesso de rotina para leitura de notas evolutivas antes do atendimento.",
    },
  });

  await prisma.auditLog.create({
    data: {
      userId: adminAnima.id,
      institutionId: instEscola.id,
      action: "EXPORT_DATA",
      resource: "Patient",
      ipAddress: "192.168.1.101",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      details: "Exportação de dados estatísticos demográficos para relatório institucional.",
    },
  });

  console.log("📊 Alertas e Logs de Auditoria gerados.");
  console.log("✅ Seed do NeuroAcolhe concluído com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
