import React, { useState } from 'react';
import { Video, Calendar, Clock, Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { notificationService } from '../../services/notificationService';

export default function PatientTeleconsultation() {
  const [copied, setCopied] = useState(false);
  const [presenceConfirmed, setPresenceConfirmed] = useState(false);

  const meetingUrl = "https://meet.google.com/abc-defg-hij";

  const handleCopy = () => {
    navigator.clipboard.writeText(meetingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateWhatsApp = () => {
    notificationService.sendTeleconsultationLink('123', 'João Silva', meetingUrl);
    alert('Simulação de envio via WhatsApp registrada (ver console ou painel).');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Teleconsulta</h1>
        <p className="text-slate-500 mt-1">Detalhes do seu próximo encontro online.</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden">
        <div className="bg-brand-primary/10 p-6 flex items-start sm:items-center justify-between gap-4 border-b border-brand-primary/20 flex-col sm:flex-row">
          <div>
            <h2 className="text-xl font-bold text-brand-primary-dark">Sessão de Acolhimento</h2>
            <p className="text-brand-primary-dark/80 mt-1">Profissional: Maria Silva (Psicóloga)</p>
          </div>
          <span className="bg-white text-brand-primary-dark px-3 py-1 rounded-full text-sm font-bold shadow-sm">
            Confirmada
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6 text-slate-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-400" />
              <span className="font-medium">10 de Maio, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              <span className="font-medium">15:00 - 15:45</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wider">Link de Acesso</h3>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-600 font-mono w-full truncate">
                {meetingUrl}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button 
                  onClick={handleCopy}
                  className="p-2 text-slate-500 hover:text-brand-primary bg-white border border-slate-300 rounded-lg transition-colors flex-1 sm:flex-none flex justify-center"
                  title="Copiar link"
                >
                  {copied ? <CheckCircle className="w-5 h-5 text-brand-secondary" /> : <Copy className="w-5 h-5" />}
                </button>
                <a 
                  href={meetingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors flex-1 sm:flex-none"
                >
                  <Video className="w-4 h-4" /> Entrar na Sala
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            {!presenceConfirmed ? (
              <button 
                onClick={() => setPresenceConfirmed(true)}
                className="w-full sm:w-auto border border-brand-secondary text-brand-secondary-dark hover:bg-brand-secondary/5 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Confirmar Presença Antecipada
              </button>
            ) : (
              <div className="flex items-center gap-2 text-brand-secondary-dark font-medium w-full sm:w-auto justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5" /> Presença confirmada
              </div>
            )}

            <button 
              onClick={handleSimulateWhatsApp}
              className="w-full sm:w-auto text-slate-500 hover:text-slate-700 text-sm font-medium flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Simular recebimento (WhatsApp)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
