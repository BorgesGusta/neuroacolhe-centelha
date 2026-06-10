// frontend/src/components/triagem/SuccessScreen.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Home, MessageCircle, Clock, Inbox } from "lucide-react";

interface SuccessScreenProps {
  communicationPreference: string;
  patientName: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ communicationPreference, patientName }) => {
  const firstName = patientName.split(" ")[0] || patientName;

  return (
    <div className="w-full max-w-lg mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Ícone animado */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-20 w-20 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 shadow-sm">
            <CheckCircle2 size={40} className="text-teal-500" />
          </div>
          {/* Anel pulsante */}
          <div
            className="absolute inset-0 rounded-full border-2 border-teal-300 animate-ping opacity-30"
            style={{ animationDuration: "2s", animationIterationCount: "3" }}
            aria-hidden="true"
          />
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Triagem recebida{firstName ? `, ${firstName}` : ""}!
          </h2>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-sm mx-auto">
            A equipe responsável fará a análise e entrará em contato pelo canal informado.
          </p>
        </div>
      </div>

      {/* Card de status */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 text-left">
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
            <Inbox size={17} className="text-teal-600" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <span className="block text-sm font-semibold text-slate-800">Triagem recebida</span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-4">
          <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
            <Clock size={17} className="text-violet-500" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Próximo passo</span>
            <span className="block text-sm font-semibold text-slate-800">Análise pela equipe</span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-4">
          <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
            <MessageCircle size={17} className="text-sky-500" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Canal preferido</span>
            <span className="block text-sm font-semibold text-slate-800">{communicationPreference || "Não informado"}</span>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-3">
        <Link
          to="/paciente/inicio"
          className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700
            text-white font-bold py-4 px-6 rounded-xl transition-all shadow-sm
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
        >
          Acessar portal do paciente
          <ArrowRight size={18} />
        </Link>
        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50
            text-slate-600 border border-slate-200 font-semibold py-4 px-6 rounded-xl transition-all
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
        >
          <Home size={16} />
          Voltar para início
        </Link>
      </div>
    </div>
  );
};

export default SuccessScreen;
