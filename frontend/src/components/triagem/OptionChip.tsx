// frontend/src/components/triagem/OptionChip.tsx
import React from "react";
import { Check } from "lucide-react";

interface OptionChipProps {
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  children: React.ReactNode;
  /** Optional icon component */
  icon?: React.ReactNode;
  /** Full-width layout */
  fullWidth?: boolean;
}

const OptionChip: React.FC<OptionChipProps> = ({
  value,
  selected,
  onSelect,
  children,
  icon,
  fullWidth = false,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={selected}
      className={`
        flex items-center gap-2.5 text-sm font-medium px-4 py-3.5 rounded-xl border-2 transition-all
        min-h-[48px] text-left
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1
        ${fullWidth ? "w-full" : ""}
        ${
          selected
            ? "bg-teal-50 border-teal-400 text-teal-800 font-semibold shadow-sm"
            : "bg-white border-slate-200 text-slate-600 hover:bg-teal-50/40 hover:border-teal-200"
        }
      `}
    >
      {icon && (
        <span
          className={`flex-shrink-0 ${selected ? "text-teal-600" : "text-slate-400"}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {selected && (
        <Check
          className="flex-shrink-0 w-4 h-4 text-teal-600 ml-auto"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default OptionChip;
