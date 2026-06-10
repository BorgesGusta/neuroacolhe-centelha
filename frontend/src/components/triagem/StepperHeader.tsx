// frontend/src/components/triagem/StepperHeader.tsx
import React from "react";
import { Shield } from "lucide-react";

interface StepperHeaderProps {
  step: number;
  total: number;
  stepName: string;
  stepSubtitle?: string;
  estimatedTime?: string;
  subStep?: number;
  subStepTotal?: number;
}

const StepperHeader: React.FC<StepperHeaderProps> = ({
  step,
  total,
  stepName,
  stepSubtitle,
  estimatedTime,
  subStep,
  subStepTotal,
}) => {
  const progress = (step / total) * 100;
  const hasSubStep = subStep !== undefined && subStepTotal !== undefined && subStepTotal > 1;

  return (
    <div className="space-y-5">
      {/* Logo + badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Shield size={18} className="text-teal-600" aria-hidden="true" />
          <span className="font-extrabold text-slate-800 text-base tracking-tight">Nura</span>
        </div>
        <span className="text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-full">
          Triagem inclusiva
        </span>
      </div>

      {/* Progress + step info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            Passo {step} de {total}
          </span>
          {estimatedTime && (
            <span className="text-xs text-slate-400 font-medium">{estimatedTime}</span>
          )}
        </div>

        {/* Main progress bar */}
        <div
          className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Progresso: passo ${step} de ${total}`}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #0d9488, #7c3aed)",
            }}
          />
        </div>

        {/* Step name */}
        <div>
          <h2 className="text-lg font-extrabold text-slate-800 leading-snug">{stepName}</h2>
          {stepSubtitle && (
            <p className="text-sm text-slate-400 mt-0.5 font-medium leading-snug">{stepSubtitle}</p>
          )}
        </div>

        {/* Sub-step indicator for step 3 */}
        {hasSubStep && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Pergunta {subStep! + 1} de {subStepTotal}
              </span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: subStepTotal! }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    i <= subStep! ? "bg-teal-500" : "bg-slate-100"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperHeader;
