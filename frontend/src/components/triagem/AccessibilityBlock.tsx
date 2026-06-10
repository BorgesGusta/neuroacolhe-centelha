// frontend/src/components/triagem/AccessibilityBlock.tsx
import React from "react";
import { Check } from "lucide-react";

interface AccessibilityBlockProps {
  hasCondition: boolean | null;
  adaptations: string[];
  communicationPreference: string;
  additionalNeeds: string;
  onHasConditionChange: (val: boolean) => void;
  onAdaptationToggle: (val: string) => void;
  onCommunicationChange: (val: string) => void;
  onAdditionalNeedsChange: (val: string) => void;
}

const adaptationOptions = [
  { value: "Autismo", label: "Autismo" },
  { value: "TDAH", label: "TDAH" },
  { value: "Dislexia", label: "Dislexia" },
  { value: "Sensibilidade a luz", label: "Sensibilidade a luz" },
  { value: "Sensibilidade a ruídos", label: "Sensibilidade a ruídos" },
  { value: "Prefiro mensagens escritas", label: "Prefiro mensagens escritas" },
  { value: "Preciso de linguagem simples", label: "Preciso de linguagem simples" },
  { value: "Preciso de apoio no preenchimento", label: "Apoio no preenchimento" },
  { value: "Outro", label: "Outro" },
];

const communicationOptions = [
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "E-mail", label: "E-mail" },
  { value: "Ligação", label: "Ligação" },
  { value: "Sem preferência", label: "Sem preferência" },
];

const AccessibilityBlock: React.FC<AccessibilityBlockProps> = ({
  hasCondition,
  adaptations,
  communicationPreference,
  additionalNeeds,
  onHasConditionChange,
  onAdaptationToggle,
  onCommunicationChange,
  onAdditionalNeedsChange,
}) => {
  return (
    <div className="space-y-8">
      {/* Pergunta principal */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-800 leading-snug">
            Existe alguma condição, característica ou preferência que ajude a equipe a acolher você melhor?
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Essa informação é opcional e será usada apenas para personalizar seu acolhimento.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3" role="radiogroup" aria-label="Informar condição ou característica">
          <button
            type="button"
            role="radio"
            aria-checked={hasCondition === true}
            onClick={() => onHasConditionChange(true)}
            className={`
              flex-1 flex items-center justify-center gap-2.5 text-sm font-semibold
              px-5 py-4 rounded-xl border-2 transition-all min-h-[52px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1
              ${hasCondition === true
                ? "bg-teal-50 border-teal-400 text-teal-800"
                : "bg-white border-slate-200 text-slate-600 hover:bg-teal-50/40 hover:border-teal-200"
              }
            `}
          >
            {hasCondition === true && <Check size={16} className="text-teal-600 flex-shrink-0" />}
            Sim, quero informar
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={hasCondition === false}
            onClick={() => onHasConditionChange(false)}
            className={`
              flex-1 flex items-center justify-center gap-2.5 text-sm font-semibold
              px-5 py-4 rounded-xl border-2 transition-all min-h-[52px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1
              ${hasCondition === false
                ? "bg-slate-100 border-slate-400 text-slate-800"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
              }
            `}
          >
            {hasCondition === false && <Check size={16} className="text-slate-600 flex-shrink-0" />}
            Não neste momento
          </button>
        </div>
      </div>

      {/* Bloco condicional de adaptações */}
      {hasCondition === true && (
        <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm font-semibold text-slate-700">
            O que se aplica a você? <span className="text-slate-400 font-normal">(selecione quantas quiser)</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {adaptationOptions.map((opt) => {
              const isSelected = adaptations.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onAdaptationToggle(opt.value)}
                  className={`
                    flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-xl border transition-all text-left
                    min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-1
                    ${isSelected
                      ? "bg-violet-50 border-violet-400 text-violet-900"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-violet-50/40 hover:border-violet-200"
                    }
                  `}
                >
                  {/* Checkbox visual */}
                  <span
                    className={`
                      flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
                      ${isSelected ? "bg-violet-500 border-violet-500" : "border-slate-300 bg-white"}
                    `}
                    aria-hidden="true"
                  >
                    {isSelected && <Check size={12} className="text-white" />}
                  </span>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Separador */}
      <div className="border-t border-slate-100" />

      {/* Canal de contato */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-slate-800">
          Canal de contato preferido <span className="text-rose-400">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="radiogroup" aria-label="Canal de contato">
          {communicationOptions.map((opt) => {
            const isSelected = communicationPreference === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onCommunicationChange(opt.value)}
                className={`
                  flex items-center justify-center gap-2 text-sm font-medium px-3 py-3 rounded-xl border transition-all
                  min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1
                  ${isSelected
                    ? "bg-teal-50 border-teal-400 text-teal-800 font-semibold shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-teal-50/40 hover:border-teal-200"
                  }
                `}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" aria-hidden="true" />}
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Campo adicional opcional */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700" htmlFor="additional-needs">
          Quer contar algo que ajude a equipe a acolher você melhor?{" "}
          <span className="text-slate-400 font-normal">(Opcional)</span>
        </label>
        <textarea
          id="additional-needs"
          value={additionalNeeds}
          onChange={(e) => onAdditionalNeedsChange(e.target.value)}
          placeholder="Ex: Preciso de avisos prévios antes das consultas, prefiro comunicação por escrito..."
          rows={3}
          className="w-full rounded-xl border border-slate-200 py-3 px-4 text-slate-900 text-sm
            focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:border-teal-400
            transition-all bg-white placeholder:text-slate-400 resize-none"
        />
      </div>
    </div>
  );
};

export default AccessibilityBlock;
