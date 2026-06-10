import React, { useState } from 'react';
import WellbeingAura, { AuraState } from '../../components/WellbeingAura';

export default function PatientCheckIn() {
  const [selectedState, setSelectedState] = useState<AuraState | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const states: AuraState[] = ['SERENE', 'LIGHT', 'NEUTRAL', 'LOW_ENERGY', 'ATTENTION'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedState) return;
    setSubmitted(true);
    // Aqui seria feita a chamada à API real
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-6 py-12">
        <div className="flex justify-center">
          <WellbeingAura state={selectedState!} compact={false} showDisclaimer={false} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Check-in recebido!</h2>
          <p className="text-slate-500 mt-2">
            Obrigado por nos informar como você está. O indicador foi atualizado na sua jornada.
          </p>
        </div>
        <button
          onClick={() => window.history.back()}
          className="mt-8 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-medium transition-colors"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-2xl font-bold text-slate-800">Check-in de Bem-estar</h1>
        <p className="text-slate-500 mt-2">
          Como você percebe o seu estado hoje? Selecione a opção que mais se aproxima de como você se sente no momento.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="bg-white border border-brand-border rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {states.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => setSelectedState(state)}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${
                selectedState === state
                  ? 'border-brand-primary bg-brand-primary/5'
                  : 'border-slate-100 hover:border-brand-primary/30 hover:bg-slate-50'
              }`}
            >
              <WellbeingAura state={state} compact={false} showDisclaimer={false} />
              <span className={`text-sm font-medium capitalize ${
                selectedState === state ? 'text-brand-primary-dark' : 'text-slate-600'
              }`}>
                {state === 'SERENE' ? 'Serena' : 
                 state === 'LIGHT' ? 'Leve' : 
                 state === 'NEUTRAL' ? 'Neutra' : 
                 state === 'LOW_ENERGY' ? 'Baixa Energia' : 'Atenção'}
              </span>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Gostaria de compartilhar mais algum detalhe? (opcional)
          </label>
          <textarea
            className="w-full rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50 p-3 text-sm"
            rows={3}
            placeholder="Ex: Tive dificuldade para dormir esta noite..."
          ></textarea>
        </div>

        <div className="bg-amber-50 rounded-lg p-4 mb-6 text-sm text-amber-800 border border-amber-100">
          <p className="font-medium">Importante:</p>
          <p className="mt-1">
            Este check-in é apenas um indicador da sua percepção no momento e <strong>não possui finalidade diagnóstica</strong>. Se estiver em situação de emergência, procure um serviço de saúde.
          </p>
        </div>

        <button
          type="submit"
          disabled={!selectedState}
          className="w-full bg-brand-primary hover:bg-brand-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white py-3 rounded-xl font-medium transition-colors"
        >
          Confirmar Check-in
        </button>
      </form>
    </div>
  );
}
