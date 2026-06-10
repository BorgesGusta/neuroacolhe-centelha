import React from 'react';
import { ArrowRight, Calendar, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import WellbeingAura from '../../components/WellbeingAura';

export default function PatientHome() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Olá, João!</h1>
        <p className="text-slate-500 mt-1">Bem-vindo(a) ao seu portal de acompanhamento Nura.</p>
      </header>

      {/* Quick Actions / Alerts */}
      <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-brand-primary-dark">Check-in disponível</h3>
          <p className="text-sm text-brand-primary-dark/80 mt-1">Reserve 1 minuto para nos contar como você está se sentindo hoje.</p>
        </div>
        <Link 
          to="/paciente/check-in"
          className="bg-brand-primary hover:bg-brand-primary-dark text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
        >
          Fazer Check-in
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Wellbeing Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-6 flex flex-col items-center text-center">
          <h3 className="font-semibold text-slate-800 mb-6">Seu último registro</h3>
          <WellbeingAura state="LIGHT" compact={false} showDisclaimer={false} />
          <p className="text-sm text-slate-500 mt-6">Registrado há 2 dias</p>
          <Link 
            to="/paciente/jornada" 
            className="text-brand-primary hover:text-brand-primary-dark text-sm font-medium mt-2 flex items-center gap-1"
          >
            Ver histórico <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Next Appointment */}
        <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-brand-secondary" />
            <h3 className="font-semibold text-slate-800">Próximo Encontro</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-medium text-slate-800">Teleconsulta de Acolhimento</p>
                <p className="text-xs text-slate-500 mt-1">Com Psicóloga Maria Silva</p>
              </div>
              <span className="bg-brand-secondary/10 text-brand-secondary-dark text-xs px-2 py-1 rounded-md font-medium">
                Confirmada
              </span>
            </div>
            
            <div className="pt-3 border-t border-slate-200">
              <p className="text-sm text-slate-700 font-medium">Amanhã, 15:00</p>
              <p className="text-xs text-slate-500 mt-0.5">Duração aprox. 45 min</p>
            </div>
            
            <Link 
              to="/paciente/teleconsulta"
              className="mt-4 block text-center w-full bg-white border border-slate-200 hover:border-brand-primary hover:text-brand-primary text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Acessar detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
