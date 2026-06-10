import React from 'react';

export type AuraState = 'SERENE' | 'LIGHT' | 'NEUTRAL' | 'LOW_ENERGY' | 'ATTENTION';

export interface WellbeingAuraProps {
  state: AuraState;
  label?: string;
  description?: string;
  lastCheckInAt?: string;
  compact?: boolean;
  showDisclaimer?: boolean;
}

const auraConfig: Record<AuraState, { gradient: string; dot: string; title: string }> = {
  SERENE: {
    gradient: 'from-blue-100 to-sky-50',
    dot: 'bg-sky-400',
    title: 'Serena'
  },
  LIGHT: {
    gradient: 'from-emerald-100 to-green-50',
    dot: 'bg-emerald-400',
    title: 'Leve'
  },
  NEUTRAL: {
    gradient: 'from-slate-100 to-gray-50',
    dot: 'bg-slate-400',
    title: 'Neutra'
  },
  LOW_ENERGY: {
    gradient: 'from-purple-100 to-fuchsia-50',
    dot: 'bg-purple-400',
    title: 'Baixa Energia'
  },
  ATTENTION: {
    gradient: 'from-rose-100 to-orange-50',
    dot: 'bg-rose-400',
    title: 'Em Atenção'
  }
};

const WellbeingAura: React.FC<WellbeingAuraProps> = ({
  state,
  label,
  description,
  lastCheckInAt,
  compact = false,
  showDisclaimer = false
}) => {
  const config = auraConfig[state] || auraConfig.NEUTRAL;

  if (compact) {
    return (
      <div className="flex items-center gap-2" title={`Aura: ${config.title}`}>
        <div className={`w-3 h-3 rounded-full ${config.dot} shadow-sm animate-pulse`} style={{ animationDuration: '3s' }} />
        <span className="text-xs font-semibold text-brand-text-main">{label || config.title}</span>
      </div>
    );
  }

  return (
    <div className={`p-5 rounded-[2rem] bg-gradient-to-br ${config.gradient} border border-white/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col gap-3 transition-all duration-700`}>
      {/* Organic background shapes for the aura effect */}
      <div className={`absolute top-0 right-0 w-40 h-40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${config.dot} opacity-20 blur-2xl -translate-y-1/3 translate-x-1/4 animate-pulse`} style={{ animationDuration: '6s' }} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] ${config.dot} opacity-15 blur-xl translate-y-1/4 -translate-x-1/4 animate-pulse`} style={{ animationDuration: '8s' }} />
      
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.dot} shadow-sm`} />
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text-muted opacity-80">
            Aura de Bem-estar
          </span>
        </div>
        {lastCheckInAt && (
          <span className="text-[10px] text-brand-text-muted font-medium bg-white/50 px-2 py-0.5 rounded-full border border-white/60">
            {lastCheckInAt}
          </span>
        )}
      </div>

      <div className="relative z-10 pt-2 pb-1">
        <h3 className="text-xl font-extrabold text-brand-text-main flex items-center gap-2 tracking-tight">
          {label || config.title}
        </h3>
        {description && (
          <p className="text-sm text-brand-text-muted font-medium mt-1.5 leading-relaxed max-w-[95%]">
            {description}
          </p>
        )}
      </div>

      {showDisclaimer && (
        <div className="mt-3 pt-3 border-t border-brand-text-muted/10 relative z-10">
          <p className="text-[10px] text-brand-text-muted leading-relaxed font-medium">
            Esta visualização representa o check-in informado pelo paciente. Não é diagnóstico clínico.
          </p>
        </div>
      )}
    </div>
  );
};

export default WellbeingAura;
