export type Role = "ADMIN" | "PROFESSIONAL" | "SUPERVISOR";

export interface Colaborador {
  id: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
  institutionId: string;
}

export interface AuthResponse {
  token: string;
  usuario?: Colaborador;
  colaborador?: Colaborador;
  user?: Colaborador;
}

export interface Paciente {
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
}

export type CardColor = "blue" | "amber" | "darkblue" | "coral" | "purple";
export type CardIcon =
  | "users"
  | "clipboard"
  | "document"
  | "refresh"
  | "shield";

export interface WaitingList {
  id: number;
  title: string;
  description: string;
  color: CardColor;
  icon: CardIcon;
  to?: string;
}

export interface WaitingListCardProps {
  title: string;
  description: string;
  color: CardColor;
  icon: CardIcon;
  to?: string;
}
