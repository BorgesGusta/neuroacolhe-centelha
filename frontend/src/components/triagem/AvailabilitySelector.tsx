// frontend/src/components/triagem/AvailabilitySelector.tsx
import React from "react";
import { Sun, Sunset, Moon, Calendar, Laptop, MapPin, Minus } from "lucide-react";

interface AvailabilityData {
  period: string;
  days: string;
  modality: string;
}

interface AvailabilitySelectorProps {
  value: AvailabilityData;
  onChange: (data: AvailabilityData) => void;
}

interface GroupOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const GroupSelector = ({
  title,
  options,
  selected,
  onSelect,
  groupName,
}: {
  title: string;
  options: GroupOption[];
  selected: string;
  onSelect: (val: string) => void;
  groupName: string;
}) => (
  <div className="space-y-2" role="radiogroup" aria-label={title}>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={`${groupName}: ${opt.label}`}
            onClick={() => onSelect(opt.value)}
            className={`
              flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border transition-all
              min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1
              ${isSelected
                ? "bg-teal-50 border-teal-400 text-teal-800 shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:bg-teal-50/50 hover:border-teal-200"
              }
            `}
          >
            <span className={`flex-shrink-0 ${isSelected ? "text-teal-600" : "text-slate-400"}`}>
              {opt.icon}
            </span>
            {opt.label}
            {isSelected && (
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
            )}
          </button>
        );
      })}
    </div>
  </div>
);

const AvailabilitySelector: React.FC<AvailabilitySelectorProps> = ({ value, onChange }) => {
  const periodOptions: GroupOption[] = [
    { value: "Manhã", label: "Manhã", icon: <Sun size={15} /> },
    { value: "Tarde", label: "Tarde", icon: <Sunset size={15} /> },
    { value: "Noite", label: "Noite", icon: <Moon size={15} /> },
  ];

  const daysOptions: GroupOption[] = [
    { value: "Segunda a sexta", label: "Segunda a sexta", icon: <Calendar size={15} /> },
    { value: "Sábado", label: "Sábado", icon: <Calendar size={15} /> },
  ];

  const modalityOptions: GroupOption[] = [
    { value: "Online", label: "Online", icon: <Laptop size={15} /> },
    { value: "Presencial", label: "Presencial", icon: <MapPin size={15} /> },
    { value: "Sem preferência", label: "Sem preferência", icon: <Minus size={15} /> },
  ];

  return (
    <div className="space-y-5">
      <GroupSelector
        title="A) Período"
        options={periodOptions}
        selected={value.period}
        onSelect={(period) => onChange({ ...value, period })}
        groupName="Período"
      />
      <GroupSelector
        title="B) Dias"
        options={daysOptions}
        selected={value.days}
        onSelect={(days) => onChange({ ...value, days })}
        groupName="Dias"
      />
      <GroupSelector
        title="C) Modalidade"
        options={modalityOptions}
        selected={value.modality}
        onSelect={(modality) => onChange({ ...value, modality })}
        groupName="Modalidade"
      />
    </div>
  );
};

export type { AvailabilityData };
export default AvailabilitySelector;
