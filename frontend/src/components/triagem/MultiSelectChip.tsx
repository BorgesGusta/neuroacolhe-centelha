// frontend/src/components/triagem/MultiSelectChip.tsx
import React from "react";
import { Check } from "lucide-react";

interface MultiSelectChipProps {
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  children: React.ReactNode;
  /** Optional icon */
  icon?: React.ReactNode;
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({
  value,
  selected,
  onSelect,
  children,
  icon,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={selected}
      className={`
        flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-xl border-2 transition-all
        min-h-[48px] text-left w-full
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-1
        ${
          selected
            ? "bg-violet-50 border-violet-400 text-violet-900 font-semibold shadow-sm"
            : "bg-white border-slate-200 text-slate-600 hover:bg-violet-50/40 hover:border-violet-200"
        }
      `}
    >
      {/* Checkbox visual */}
      <span
        className={`
          flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
          ${selected ? "bg-violet-500 border-violet-500" : "border-slate-300 bg-white"}
        `}
        aria-hidden="true"
      >
        {selected && <Check size={12} className="text-white" />}
      </span>

      {icon && (
        <span
          className={`flex-shrink-0 ${selected ? "text-violet-600" : "text-slate-400"}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <span className="flex-1">{children}</span>
    </button>
  );
};

export default MultiSelectChip;
