// frontend/src/data/mockData.ts

export interface Institution {
  id: string;
  name: string;
  cnpj: string;
  subdomain: string;
  active: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'PROFESSIONAL' | 'SUPERVISOR';
  active: boolean;
  institutionId: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  responsibleName?: string;
  responsiblePhone?: string;
  status: 'RECEIVED' | 'IN_ANALYSIS' | 'WAITING_CARE' | 'IN_CARE' | 'COMPLETED' | 'ARCHIVED';
  createdAt: string;
  reasonForSeeking: string;
  availability: string;
  hasNeurodivergence: boolean;
  neurodivergenceDetails?: string;
  communicationPreference: string;
  sensorySensitivities?: string;
  needsAssistance: boolean;
  notes?: string;
  institutionId: string;

  // Priorização e Triagem Inteligente
  rotina?: number;
  concentracao?: number;
  sono?: number;
  sobrecarga?: number;
  apoio?: number;
  urgencia?: number;
  priorityScore?: number;
  priorityLevel?: 'LOW' | 'MODERATE' | 'HIGH' | 'FAST_REVIEW';
  priorityReasons?: string[];
  priorityReviewedAt?: string;
  priorityReviewedBy?: string;
  priorityReviewStatus?: 'PENDING' | 'VALIDATED' | 'REVISED';

  // Aura / Check-in
  currentAuraState?: 'SERENE' | 'LIGHT' | 'NEUTRAL' | 'LOW_ENERGY' | 'ATTENTION';
  lastCheckInAt?: string;
}

export interface CareCase {
  id: string;
  patientId: string;
  patientName: string;
  professionalId: string;
  professionalName: string;
  supervisorId?: string;
  supervisorName?: string;
  type: 'SHORT_TERM' | 'LONG_TERM';
  status: 'ACTIVE' | 'SUSPENDED' | 'COMPLETED' | 'ARCHIVED';
  startDate: string;
  endDate?: string;
  institutionId: string;
}

export interface SessionNote {
  id: string;
  caseId: string;
  patientId: string;
  professionalId: string;
  professionalName: string;
  content: string;
  sessionDate: string;
  integrityHash: string;
  isAbsent: boolean;
  createdAt: string;
  institutionId: string;
}

export interface SupervisionNote {
  id: string;
  caseId: string;
  sessionNoteId?: string;
  supervisorId: string;
  supervisorName: string;
  content: string;
  createdAt: string;
  institutionId: string;
}

export interface Alert {
  id: string;
  type: 'INACTIVE_QUEUE' | 'ABSENCE_STREAK' | 'NO_EVOLUTION' | 'PENDING_SUPERVISION' | 'HIGH_PRIORITY_PENDING' | 'FAST_REVIEW_STOPPED' | 'ACCESSIBILITY_STAGNANT';
  status: 'ACTIVE' | 'RESOLVED' | 'IGNORED';
  message: string;
  patientId?: string;
  patientName?: string;
  caseId?: string;
  createdAt: string;
  institutionId: string;
}

export interface AuditLog {
  id: string;
  userId?: string;
  userName?: string;
  action: string;
  resource: string;
  resourceId?: string;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
  institutionId: string;
}

// --- INITIAL SEED DATA ---

const defaultInstitutions: Institution[] = [
  { id: 'inst-horizonte', name: 'Clínica Escola Horizonte', cnpj: '12.345.678/0001-90', subdomain: 'horizonte', active: true },
  { id: 'inst-acolher', name: 'Instituto Acolher', cnpj: '98.765.432/0001-10', subdomain: 'acolher', active: true }
];

const defaultUsers: User[] = [
  { id: 'usr-helena', name: 'Dra. Helena Vasconcelos', email: 'helena@nura.org', role: 'ADMIN', active: true, institutionId: 'inst-horizonte' },
  { id: 'usr-lucas', name: 'Lucas Mendes', email: 'lucas@nura.org', role: 'PROFESSIONAL', active: true, institutionId: 'inst-horizonte' },
  { id: 'usr-roberto', name: 'Dr. Roberto Albuquerque', email: 'roberto@nura.org', role: 'SUPERVISOR', active: true, institutionId: 'inst-horizonte' }
];

const defaultPatients: Patient[] = [
  {
    id: 'pat-pedro',
    name: 'Pedro Silveira',
    email: 'pedro.silveira@email.com',
    phone: '(11) 98888-7777',
    birthDate: '1998-04-12',
    status: 'RECEIVED',
    createdAt: '2026-06-01T10:00:00Z',
    reasonForSeeking: 'Dificuldade grave de concentração, ansiedade antes de provas e cansaço constante.',
    availability: 'Manhãs de segunda e quarta',
    hasNeurodivergence: true,
    neurodivergenceDetails: 'TDAH diagnosticado na infância',
    communicationPreference: 'Texto/E-mail',
    sensorySensitivities: 'Sensibilidade a ruídos altos e luzes muito fortes',
    needsAssistance: false,
    institutionId: 'inst-horizonte',
    rotina: 1,
    concentracao: 1,
    sono: 1,
    sobrecarga: 1,
    apoio: 0,
    urgencia: 0,
    priorityScore: 4,
    priorityLevel: 'LOW',
    priorityReasons: [],
    priorityReviewStatus: 'VALIDATED',
    priorityReviewedAt: '2026-06-02T10:00:00Z',
    priorityReviewedBy: 'Dra. Helena Vasconcelos',
    currentAuraState: 'LOW_ENERGY',
    lastCheckInAt: 'Há 2 horas'
  },
  {
    id: 'pat-julia',
    name: 'Julia Costa',
    email: 'julia.costa@email.com',
    phone: '(11) 97777-6666',
    birthDate: '2005-09-20',
    status: 'WAITING_CARE',
    createdAt: '2026-05-25T14:30:00Z',
    reasonForSeeking: 'Crises de pânico recorrentes e ansiedade generalizada em público.',
    availability: 'Tardes de terça e quinta',
    hasNeurodivergence: false,
    communicationPreference: 'WhatsApp/Mensagens',
    needsAssistance: false,
    institutionId: 'inst-horizonte',
    rotina: 2,
    concentracao: 1,
    sono: 1,
    sobrecarga: 2,
    apoio: 1,
    urgencia: 1,
    priorityScore: 7,
    priorityLevel: 'MODERATE',
    priorityReasons: [
      'Impacto significativo ou severo nas atividades de rotina diária',
      'Sobrecarga emocional percebida como elevada'
    ],
    priorityReviewStatus: 'PENDING',
    currentAuraState: 'ATTENTION',
    lastCheckInAt: 'Há 4 horas'
  },
  {
    id: 'pat-lucas',
    name: 'Lucas de Souza',
    email: 'lucas.souza@email.com',
    phone: '(11) 96666-5555',
    birthDate: '1990-12-05',
    status: 'IN_CARE',
    createdAt: '2026-05-10T09:15:00Z',
    reasonForSeeking: 'Apoio para organização de rotina, dificuldades em relacionamentos e socialização.',
    availability: 'Sábados pela manhã',
    hasNeurodivergence: true,
    neurodivergenceDetails: 'Autodeclaração de traços do espectro autista (TEA)',
    communicationPreference: 'Texto detalhado, comunicação literal e objetiva',
    sensorySensitivities: 'Incomodo extremo com barulhos de fundo repetitivos',
    needsAssistance: true,
    notes: 'Solicitou apoio visual simples na comunicação.',
    institutionId: 'inst-horizonte',
    rotina: 1,
    concentracao: 0,
    sono: 0,
    sobrecarga: 1,
    apoio: 0,
    urgencia: 1,
    priorityScore: 3,
    priorityLevel: 'LOW',
    priorityReasons: [],
    priorityReviewStatus: 'VALIDATED',
    priorityReviewedAt: '2026-05-11T14:00:00Z',
    priorityReviewedBy: 'Lucas Mendes',
    currentAuraState: 'NEUTRAL',
    lastCheckInAt: 'Ontem'
  },
  {
    id: 'pat-mariana',
    name: 'Mariana Santos',
    email: 'mariana.santos@email.com',
    phone: '(11) 95555-4444',
    birthDate: '2002-07-14',
    status: 'COMPLETED',
    createdAt: '2026-04-10T11:00:00Z',
    reasonForSeeking: 'Apoio pedagógico-emocional para lidar com dislexia durante o semestre letivo.',
    availability: 'Tardes de quarta',
    hasNeurodivergence: true,
    neurodivergenceDetails: 'Dislexia moderada',
    communicationPreference: 'Áudio / WhatsApp',
    needsAssistance: false,
    institutionId: 'inst-horizonte',
    rotina: 1,
    concentracao: 1,
    sono: 0,
    sobrecarga: 0,
    apoio: 0,
    urgencia: 0,
    priorityScore: 2,
    priorityLevel: 'LOW',
    priorityReasons: [],
    priorityReviewStatus: 'VALIDATED',
    priorityReviewedAt: '2026-04-12T09:00:00Z',
    priorityReviewedBy: 'Lucas Mendes',
    currentAuraState: 'LIGHT',
    lastCheckInAt: 'Há 3 dias'
  },
  {
    id: 'pat-roberto',
    name: 'Roberto Lima',
    email: 'roberto.lima@email.com',
    phone: '(11) 94444-3333',
    birthDate: '1988-11-22',
    status: 'ARCHIVED',
    createdAt: '2026-05-02T16:00:00Z',
    reasonForSeeking: 'Busca por psicoterapia individual por questões de estresse no trabalho.',
    availability: 'Noites durante a semana',
    hasNeurodivergence: false,
    communicationPreference: 'Chamada de Voz',
    needsAssistance: false,
    institutionId: 'inst-horizonte',
    rotina: 1,
    concentracao: 0,
    sono: 1,
    sobrecarga: 1,
    apoio: 0,
    urgencia: 0,
    priorityScore: 3,
    priorityLevel: 'LOW',
    priorityReasons: [],
    priorityReviewStatus: 'VALIDATED',
    priorityReviewedAt: '2026-05-03T11:00:00Z',
    priorityReviewedBy: 'Dra. Helena Vasconcelos',
    currentAuraState: 'SERENE',
    lastCheckInAt: 'Há 5 dias'
  },
  {
    id: 'pat-gabriela',
    name: 'Gabriela Duarte',
    email: 'gabriela.duarte@email.com',
    phone: '(11) 93333-2222',
    birthDate: '2000-03-15',
    status: 'RECEIVED',
    createdAt: '2026-06-08T09:30:00Z',
    reasonForSeeking: 'Crises constantes de choro, incapacidade de focar nos estudos da faculdade, isolamento familiar e sentimento de incompetência.',
    availability: 'Qualquer horário',
    hasNeurodivergence: false,
    communicationPreference: 'Texto / WhatsApp',
    needsAssistance: false,
    institutionId: 'inst-horizonte',
    rotina: 2,
    concentracao: 2,
    sono: 1,
    sobrecarga: 3,
    apoio: 2,
    urgencia: 1,
    priorityScore: 11,
    priorityLevel: 'HIGH',
    priorityReasons: [
      'Impacto significativo ou severo nas atividades de rotina diária',
      'Dificuldade acentuada de concentração ou foco',
      'Sobrecarga emocional percebida como elevada',
      'Ausência ou fragilidade na rede de apoio sociofamiliar'
    ],
    priorityReviewStatus: 'PENDING',
    currentAuraState: 'ATTENTION',
    lastCheckInAt: 'Hoje pela manhã'
  },
  {
    id: 'pat-enzo',
    name: 'Enzo Ribeiro',
    email: 'enzo.ribeiro@email.com',
    phone: '(11) 92222-1111',
    birthDate: '2009-08-30',
    responsibleName: 'Clara Ribeiro',
    responsiblePhone: '(11) 92222-1110',
    status: 'RECEIVED',
    createdAt: '2026-06-09T07:15:00Z',
    reasonForSeeking: 'Alteração drástica de comportamento, prejuízo total no sono, crises explosivas em casa e choro persistente na escola após mudança de cidade.',
    availability: 'Tardes de segunda a sexta',
    hasNeurodivergence: true,
    neurodivergenceDetails: 'Suspeita de transtorno do processamento sensorial',
    communicationPreference: 'Chamada de Voz com a mãe',
    needsAssistance: true,
    notes: 'Requer acolhimento urgente devido ao alto sofrimento familiar relatado pela mãe.',
    institutionId: 'inst-horizonte',
    rotina: 3,
    concentracao: 2,
    sono: 2,
    sobrecarga: 3,
    apoio: 2,
    urgencia: 3,
    priorityScore: 15,
    priorityLevel: 'FAST_REVIEW',
    priorityReasons: [
      'Impacto significativo ou severo nas atividades de rotina diária',
      'Dificuldade acentuada de concentração ou foco',
      'Prejuízo acentuado na qualidade do sono',
      'Sobrecarga emocional percebida como elevada',
      'Ausência ou fragilidade na rede de apoio sociofamiliar',
      'Urgência elevada percebida pelo próprio paciente'
    ],
    priorityReviewStatus: 'PENDING',
    currentAuraState: 'ATTENTION',
    lastCheckInAt: 'Há 30 minutos'
  }
];

const defaultCases: CareCase[] = [
  {
    id: 'case-lucas',
    patientId: 'pat-lucas',
    patientName: 'Lucas de Souza',
    professionalId: 'usr-lucas',
    professionalName: 'Lucas Mendes',
    supervisorId: 'usr-roberto',
    supervisorName: 'Dr. Roberto Albuquerque',
    type: 'LONG_TERM',
    status: 'ACTIVE',
    startDate: '2026-05-12T10:00:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'case-mariana',
    patientId: 'pat-mariana',
    patientName: 'Mariana Santos',
    professionalId: 'usr-lucas',
    professionalName: 'Lucas Mendes',
    supervisorId: 'usr-roberto',
    supervisorName: 'Dr. Roberto Albuquerque',
    type: 'SHORT_TERM',
    status: 'COMPLETED',
    startDate: '2026-04-12T14:00:00Z',
    endDate: '2026-06-01T15:00:00Z',
    institutionId: 'inst-horizonte'
  }
];

const defaultSessionNotes: SessionNote[] = [
  {
    id: 'note-1',
    caseId: 'case-lucas',
    patientId: 'pat-lucas',
    professionalId: 'usr-lucas',
    professionalName: 'Lucas Mendes',
    content: 'Primeira sessão realizada. Estabelecido vínculo inicial. O acolhido pontuou que se sente sobrecarregado com luzes e barulhos. Alinhamos estratégias de autorregulação e organização visual da rotina.',
    sessionDate: '2026-05-19T10:00:00Z',
    integrityHash: '8f419c8d626c9213f282be1c70e30018f9dfd10cf90fd8e82ef45b4c1004ab0b',
    isAbsent: false,
    createdAt: '2026-05-19T11:15:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'note-2',
    caseId: 'case-lucas',
    patientId: 'pat-lucas',
    professionalId: 'usr-lucas',
    professionalName: 'Lucas Mendes',
    content: 'O paciente não compareceu na data de hoje. Enviou mensagem avisando sobre cansaço extremo devido às demandas acadêmicas acumuladas.',
    sessionDate: '2026-05-26T10:00:00Z',
    integrityHash: '72ca6262a2dfc70a1e0cd808eeff1140994fdcf01c0c058728a4ba5bcfd66324',
    isAbsent: true,
    createdAt: '2026-05-26T10:30:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'note-3',
    caseId: 'case-lucas',
    patientId: 'pat-lucas',
    professionalId: 'usr-lucas',
    professionalName: 'Lucas Mendes',
    content: 'Sessão com foco em organização de rotina. Elaboramos um planner semanal adaptado com códigos de cores. O paciente respondeu muito bem e demonstrou alívio na ansiedade referida.',
    sessionDate: '2026-06-02T10:00:00Z',
    integrityHash: 'e6328bc6b5c00e1cf0cd808eeff1140994fdcf01c0c058728a4ba5bcfd66324e',
    isAbsent: false,
    createdAt: '2026-06-02T11:00:00Z',
    institutionId: 'inst-horizonte'
  }
];

const defaultSupervisionNotes: SupervisionNote[] = [
  {
    id: 'supnote-1',
    caseId: 'case-lucas',
    sessionNoteId: 'note-1',
    supervisorId: 'usr-roberto',
    supervisorName: 'Dr. Roberto Albuquerque',
    content: 'Excelente condução do acolhimento, Lucas. Sugiro mantermos as sessões com luz indireta na sala para respeitar o perfil sensorial do acolhido. Continuar reforçando o planner nas próximas sessões.',
    createdAt: '2026-05-20T14:00:00Z',
    institutionId: 'inst-horizonte'
  }
];

const defaultAlerts: Alert[] = [
  {
    id: 'al-1',
    type: 'INACTIVE_QUEUE',
    status: 'ACTIVE',
    message: 'Pedro Silveira está aguardando na fila de triagem inicial há 8 dias sem análise.',
    patientId: 'pat-pedro',
    patientName: 'Pedro Silveira',
    createdAt: '2026-06-09T08:00:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'al-2',
    type: 'PENDING_SUPERVISION',
    status: 'ACTIVE',
    message: 'Nova evolução clínica registrada para Lucas de Souza aguarda orientação de supervisão.',
    caseId: 'case-lucas',
    patientId: 'pat-lucas',
    patientName: 'Lucas de Souza',
    createdAt: '2026-06-02T11:05:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'al-3',
    type: 'HIGH_PRIORITY_PENDING',
    status: 'ACTIVE',
    message: 'Triagem de prioridade Alta recebida para Gabriela Duarte. Aguarda análise profissional.',
    patientId: 'pat-gabriela',
    patientName: 'Gabriela Duarte',
    createdAt: '2026-06-08T09:30:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'al-4',
    type: 'FAST_REVIEW_STOPPED',
    status: 'ACTIVE',
    message: 'Triagem de prioridade Revisão Rápida (Fast Review) recebida para Enzo Ribeiro. Aguarda análise profissional imediata.',
    patientId: 'pat-enzo',
    patientName: 'Enzo Ribeiro',
    createdAt: '2026-06-09T07:15:00Z',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'al-5',
    type: 'ACCESSIBILITY_STAGNANT',
    status: 'ACTIVE',
    message: 'Acolhido Lucas de Souza possui perfil de acessibilidade ativo e está sem novas evoluções há mais de 10 dias.',
    patientId: 'pat-lucas',
    patientName: 'Lucas de Souza',
    createdAt: '2026-06-09T08:00:00Z',
    institutionId: 'inst-horizonte'
  }
];

const defaultAuditLogs: AuditLog[] = [
  {
    id: 'log-1',
    userId: 'usr-helena',
    userName: 'Dra. Helena Vasconcelos',
    action: 'LOGIN',
    resource: 'Auth',
    ipAddress: '192.168.1.45',
    userAgent: 'Chrome/124.0.0.0 (Macintosh; Apple Silicon)',
    timestamp: '2026-06-08T09:00:00-03:00',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'log-2',
    userId: 'usr-lucas',
    userName: 'Lucas Mendes',
    action: 'READ_CLINICAL_NOTE',
    resource: 'Patient / SessionNote',
    resourceId: 'pat-lucas',
    ipAddress: '192.168.1.102',
    userAgent: 'Firefox/125.0 (Macintosh; Apple Silicon)',
    timestamp: '2026-06-08T10:15:00-03:00',
    institutionId: 'inst-horizonte'
  },
  {
    id: 'log-3',
    userId: 'usr-roberto',
    userName: 'Dr. Roberto Albuquerque',
    action: 'READ_CLINICAL_NOTE',
    resource: 'Patient / SessionNote',
    resourceId: 'pat-lucas',
    ipAddress: '200.141.105.12',
    userAgent: 'Safari/605.1 (iPad; iPadOS 17.4)',
    timestamp: '2026-06-08T14:30:00-03:00',
    institutionId: 'inst-horizonte'
  }
];

// --- STORAGE HELPER GET / SET ---

function getLocalStorage<T>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key);
  if (!value) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  try {
    return JSON.parse(value);
  } catch {
    return defaultValue;
  }
}

function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// --- ACTIVE DATABASE SIMULATION ---

export const getInstitutions = () => getLocalStorage<Institution[]>('@Nura:mock:institutions', defaultInstitutions);
export const getUsers = () => getLocalStorage<User[]>('@Nura:mock:users', defaultUsers);
export const getPatients = () => getLocalStorage<Patient[]>('@Nura:mock:patients', defaultPatients);
export const getCases = () => getLocalStorage<CareCase[]>('@Nura:mock:cases', defaultCases);
export const getSessionNotes = () => getLocalStorage<SessionNote[]>('@Nura:mock:sessionNotes', defaultSessionNotes);
export const getSupervisionNotes = () => getLocalStorage<SupervisionNote[]>('@Nura:mock:supervisionNotes', defaultSupervisionNotes);
export const getAlerts = () => getLocalStorage<Alert[]>('@Nura:mock:alerts', defaultAlerts);
export const getAuditLogs = () => getLocalStorage<AuditLog[]>('@Nura:mock:auditLogs', defaultAuditLogs);

// --- SIMULATED MUTATIONS / WRITE API ---

export function calculatePriorityScoreAndLevel(data: Partial<Patient>): {
  priorityScore: number;
  priorityLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'FAST_REVIEW';
  priorityReasons: string[];
} {
  const rotina = Number(data.rotina ?? 0);
  const concentracao = Number(data.concentracao ?? 0);
  const sono = Number(data.sono ?? 0);
  const sobrecarga = Number(data.sobrecarga ?? 0);
  const apoio = Number(data.apoio ?? 0);
  const urgencia = Number(data.urgencia ?? 0);

  const score = rotina + concentracao + sono + sobrecarga + apoio + urgencia;

  const reasons: string[] = [];
  if (rotina >= 2) reasons.push("Impacto significativo ou severo nas atividades de rotina diária");
  if (concentracao >= 2) reasons.push("Dificuldade acentuada de concentração ou foco");
  if (sono >= 2) reasons.push("Prejuízo acentuado na qualidade do sono");
  if (sobrecarga >= 2) reasons.push("Sobrecarga emocional percebida como elevada");
  if (apoio >= 2) reasons.push("Ausência ou fragilidade na rede de apoio sociofamiliar");
  if (urgencia >= 2) reasons.push("Urgência elevada percebida pelo próprio paciente");

  let level: 'LOW' | 'MODERATE' | 'HIGH' | 'FAST_REVIEW' = 'LOW';
  if (score >= 13 || (urgencia >= 3 && score >= 10)) {
    level = 'FAST_REVIEW';
  } else if (score >= 9) {
    level = 'HIGH';
  } else if (score >= 5) {
    level = 'MODERATE';
  } else {
    level = 'LOW';
  }

  return { priorityScore: score, priorityLevel: level, priorityReasons: reasons };
}

export const savePatient = (patient: Omit<Patient, 'id' | 'createdAt'>) => {
  const patients = getPatients();
  
  // Calculate priority score and level automatically
  const priorityInfo = calculatePriorityScoreAndLevel(patient);
  
  const newPatient: Patient = {
    ...patient,
    ...priorityInfo,
    priorityReviewStatus: 'PENDING',
    id: `pat-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  };
  patients.push(newPatient);
  setLocalStorage('@Nura:mock:patients', patients);

  // Auto create alert if HIGH or FAST_REVIEW
  if (newPatient.priorityLevel === 'FAST_REVIEW' || newPatient.priorityLevel === 'HIGH') {
    const alerts = getAlerts();
    alerts.push({
      id: `al-${Math.random().toString(36).substr(2, 9)}`,
      type: newPatient.priorityLevel === 'FAST_REVIEW' ? 'FAST_REVIEW_STOPPED' : 'HIGH_PRIORITY_PENDING',
      status: 'ACTIVE',
      message: `Triagem de prioridade ${newPatient.priorityLevel === 'FAST_REVIEW' ? 'Revisão Rápida (Fast Review)' : 'Alta'} recebida para ${newPatient.name}. Aguarda análise profissional.`,
      patientId: newPatient.id,
      patientName: newPatient.name,
      createdAt: new Date().toISOString(),
      institutionId: newPatient.institutionId
    });
    setLocalStorage('@Nura:mock:alerts', alerts);
  }

  // Auto create queue item
  addAuditLog(null, 'CREATE_PATIENT_INTAKE', 'Patient', newPatient.id, newPatient.institutionId);
  return newPatient;
};

export const reviewPatientPriority = (
  patientId: string,
  reviewStatus: 'VALIDATED' | 'REVISED',
  revisedLevel?: Patient['priorityLevel'],
  revisedScore?: number,
  revisedReasons?: string[]
) => {
  const patients = getPatients();
  const patient = patients.find(p => p.id === patientId);
  if (patient) {
    patient.priorityReviewStatus = reviewStatus;
    patient.priorityReviewedAt = new Date().toISOString();
    
    const currentUser = getCurrentUser();
    patient.priorityReviewedBy = currentUser ? currentUser.name : 'Dra. Helena Vasconcelos';
    
    if (reviewStatus === 'REVISED' && revisedLevel !== undefined) {
      patient.priorityLevel = revisedLevel;
      if (revisedScore !== undefined) patient.priorityScore = revisedScore;
      if (revisedReasons !== undefined) patient.priorityReasons = revisedReasons;
    }
    
    setLocalStorage('@Nura:mock:patients', patients);
    
    // Resolve alerts associated with this patient's priority
    const alerts = getAlerts();
    const activeAlerts = alerts.filter(
      a => a.patientId === patientId && 
      (a.type === 'HIGH_PRIORITY_PENDING' || a.type === 'FAST_REVIEW_STOPPED')
    );
    activeAlerts.forEach(a => {
      a.status = 'RESOLVED';
    });
    setLocalStorage('@Nura:mock:alerts', alerts);
    
    addAuditLog(currentUser?.id, 'REVIEW_PATIENT_PRIORITY', 'Patient', patientId, patient.institutionId);
  }
};

export const updatePatientStatus = (patientId: string, status: Patient['status'], notes?: string) => {
  const patients = getPatients();
  const patient = patients.find(p => p.id === patientId);
  if (patient) {
    patient.status = status;
    if (notes) patient.notes = notes;
    setLocalStorage('@Nura:mock:patients', patients);
    addAuditLog(getCurrentUser()?.id, 'UPDATE_PATIENT_STATUS', 'Patient', patientId, patient.institutionId);
  }
};

export const createCase = (patientId: string, professionalId: string, supervisorId: string, type: 'SHORT_TERM' | 'LONG_TERM') => {
  const patients = getPatients();
  const patient = patients.find(p => p.id === patientId);
  const users = getUsers();
  const professional = users.find(u => u.id === professionalId);
  const supervisor = users.find(u => u.id === supervisorId);

  if (!patient || !professional) return null;

  // Update patient status to IN_CARE
  updatePatientStatus(patientId, 'IN_CARE');

  const cases = getCases();
  const newCase: CareCase = {
    id: `case-${Math.random().toString(36).substr(2, 9)}`,
    patientId,
    patientName: patient.name,
    professionalId,
    professionalName: professional.name,
    supervisorId,
    supervisorName: supervisor?.name,
    type,
    status: 'ACTIVE',
    startDate: new Date().toISOString(),
    institutionId: patient.institutionId
  };

  cases.push(newCase);
  setLocalStorage('@Nura:mock:cases', cases);
  addAuditLog(getCurrentUser()?.id, 'CREATE_CARE_CASE', 'CareCase', newCase.id, newCase.institutionId);
  return newCase;
};

export const addSessionNote = (caseId: string, content: string, isAbsent: boolean) => {
  const cases = getCases();
  const careCase = cases.find(c => c.id === caseId);
  if (!careCase) return null;

  // Simple Hash simulator
  const fakeHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

  const notes = getSessionNotes();
  const newNote: SessionNote = {
    id: `note-${Math.random().toString(36).substr(2, 9)}`,
    caseId,
    patientId: careCase.patientId,
    professionalId: careCase.professionalId,
    professionalName: careCase.professionalName,
    content,
    sessionDate: new Date().toISOString(),
    integrityHash: fakeHash,
    isAbsent,
    createdAt: new Date().toISOString(),
    institutionId: careCase.institutionId
  };

  notes.push(newNote);
  setLocalStorage('@Nura:mock:sessionNotes', notes);

  // If professional is student/bolsista, add alert for supervision
  const alerts = getAlerts();
  alerts.push({
    id: `al-${Math.random().toString(36).substr(2, 9)}`,
    type: 'PENDING_SUPERVISION',
    status: 'ACTIVE',
    message: `Nova evolução clínica registrada para ${careCase.patientName} aguarda orientação de supervisão.`,
    caseId,
    patientId: careCase.patientId,
    patientName: careCase.patientName,
    createdAt: new Date().toISOString(),
    institutionId: careCase.institutionId
  });
  setLocalStorage('@Nura:mock:alerts', alerts);

  addAuditLog(getCurrentUser()?.id, 'WRITE_CLINICAL_NOTE', 'SessionNote', newNote.id, newNote.institutionId);
  return newNote;
};

export const addSupervisionNote = (caseId: string, sessionNoteId: string, content: string) => {
  const cases = getCases();
  const careCase = cases.find(c => c.id === caseId);
  const user = getCurrentUser();
  if (!careCase || !user) return null;

  const notes = getSupervisionNotes();
  const newNote: SupervisionNote = {
    id: `supnote-${Math.random().toString(36).substr(2, 9)}`,
    caseId,
    sessionNoteId,
    supervisorId: user.id,
    supervisorName: user.name,
    content,
    createdAt: new Date().toISOString(),
    institutionId: careCase.institutionId
  };

  notes.push(newNote);
  setLocalStorage('@Nura:mock:supervisionNotes', notes);

  // Resolve pending supervision alerts for this patient
  const alerts = getAlerts();
  const pendingAlert = alerts.find(a => a.caseId === caseId && a.type === 'PENDING_SUPERVISION' && a.status === 'ACTIVE');
  if (pendingAlert) {
    pendingAlert.status = 'RESOLVED';
    setLocalStorage('@Nura:mock:alerts', alerts);
  }

  addAuditLog(user.id, 'WRITE_CLINICAL_NOTE', 'SupervisionNote', newNote.id, newNote.institutionId);
  return newNote;
};

export const resolveAlert = (alertId: string) => {
  const alerts = getAlerts();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.status = 'RESOLVED';
    setLocalStorage('@Nura:mock:alerts', alerts);
    addAuditLog(getCurrentUser()?.id, 'RESOLVE_ALERT', 'Alert', alertId, alert.institutionId);
  }
};

export const addAuditLog = (userId: string | null | undefined, action: string, resource: string, resourceId?: string, institutionId?: string) => {
  const logs = getAuditLogs();
  const users = getUsers();
  const userObj = users.find(u => u.id === userId);

  const newLog: AuditLog = {
    id: `log-${Math.random().toString(36).substr(2, 9)}`,
    userId: userId || undefined,
    userName: userObj?.name || 'Sistema / Público',
    action,
    resource,
    resourceId,
    ipAddress: '192.168.1.' + Math.floor(Math.random() * 254 + 1),
    userAgent: 'ViteSPA/Chrome-CentelhaDemo',
    timestamp: new Date().toISOString(),
    institutionId: institutionId || 'inst-horizonte'
  };

  logs.unshift(newLog);
  setLocalStorage('@Nura:mock:auditLogs', logs);
};

// --- AUTH LOGGED USER HELPER ---

function getCurrentUser(): User | null {
  const userStr = localStorage.getItem('@Nura:user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}
