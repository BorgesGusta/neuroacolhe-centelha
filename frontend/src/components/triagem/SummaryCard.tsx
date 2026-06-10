// frontend/src/components/triagem/SummaryCard.tsx
import React from "react";
import { User, MessageCircle, Clock, Heart } from "lucide-react";

interface SummaryCardProps {
  nome: string;
  telefone: string;
  email: string;
  reasonForSeeking: string;
  availabilityPeriod: string;
  availabilityDays: string;
  availabilityModality: string;
  communicationPreference: string;
  hasCondition: boolean | null;
  adaptations: string[];
}

interface InfoRowProps {
  label: string;
  value: string;
}
const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div>
    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</span>
    <span className="block text-sm font-medium text-slate-800">{value || "—"}</span>
  </div>
);

const SectionCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-teal-500">{icon}</span>
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h4>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
  </div>
);

const SummaryCard: React.FC<SummaryCardProps> = ({
  nome,
  telefone,
  email,
  reasonForSeeking,
  availabilityPeriod,
  availabilityDays,
  availabilityModality,
  communicationPreference,
  hasCondition,
  adaptations,
}) => {
  const availabilityStr = [availabilityPeriod, availabilityDays, availabilityModality]
    .filter(Boolean)
    .join(" · ") || "Não informado";

  return (
    <div className="space-y-3">
      <SectionCard icon={<User size={15} />} title="Dados básicos">
        <InfoRow label="Nome" value={nome} />
        <InfoRow label="Telefone" value={telefone} />
        <InfoRow label="E-mail" value={email} />
      </SectionCard>

      <SectionCard icon={<Heart size={15} />} title="Motivo da busca">
        <div className="sm:col-span-2">
          <InfoRow label="Motivo principal" value={reasonForSeeking} />
        </div>
      </SectionCard>

      <SectionCard icon={<Clock size={15} />} title="Disponibilidade">
        <div className="sm:col-span-2">
          <InfoRow label="Preferência" value={availabilityStr} />
        </div>
      </SectionCard>

      <SectionCard icon={<MessageCircle size={15} />} title="Contato e acessibilidade">
        <InfoRow label="Canal preferido" value={communicationPreference} />
        {hasCondition === true && adaptations.length > 0 && (
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Adaptações</span>
            <span className="block text-sm font-medium text-slate-800">{adaptations.join(", ")}</span>
          </div>
        )}
        {hasCondition === false && (
          <InfoRow label="Acessibilidade" value="Não informado neste momento" />
        )}
      </SectionCard>
    </div>
  );
};

export default SummaryCard;
