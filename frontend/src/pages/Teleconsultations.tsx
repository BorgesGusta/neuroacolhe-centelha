import React from 'react';
import { Video, Calendar as CalendarIcon, Users, Plus, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function Teleconsultations() {
  const consults = [
    {
      id: '1',
      patient: 'João Silva',
      professional: 'Maria Silva (Psicóloga)',
      date: 'Hoje, 15:00',
      status: 'confirmada',
      link: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: '2',
      patient: 'Ana Paula',
      professional: 'Carlos Souza (Psiquiatra)',
      date: 'Amanhã, 10:00',
      status: 'agendada',
      link: 'https://meet.google.com/xyz-uvw-rst'
    }
  ];

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Teleconsultas</h1>
          <p className="text-slate-500 mt-1">Gestão de encontros online e links seguros.</p>
        </div>
        <button className="bg-brand-primary hover:bg-brand-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Nova Teleconsulta
        </button>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold border-b border-brand-border">
              <tr>
                <th className="px-6 py-4">Paciente</th>
                <th className="px-6 py-4">Data/Hora</th>
                <th className="px-6 py-4">Profissional</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {consults.map((consult) => (
                <tr key={consult.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                        {consult.patient.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-800">{consult.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <CalendarIcon className="w-4 h-4 text-slate-400" /> {consult.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{consult.professional}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      consult.status === 'confirmada' ? 'bg-brand-secondary/10 text-brand-secondary-dark' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {consult.status === 'confirmada' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      <span className="capitalize">{consult.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-brand-primary transition-colors" title="Copiar link">
                        <LinkIcon className="w-4 h-4" />
                      </button>
                      <a href={consult.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-primary text-slate-600 hover:text-brand-primary px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
                        <Video className="w-3.5 h-3.5" /> Entrar
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
