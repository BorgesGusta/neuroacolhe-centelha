import React, { useState } from 'react';
import { Bell, Mail, MessageCircle, Send, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { notificationService, NotificationLog } from '../services/notificationService';

export default function Notifications() {
  const [logs, setLogs] = useState<NotificationLog[]>(notificationService.getLogs());

  const handleSimulateCheckIn = () => {
    notificationService.scheduleCheckInReminder('123', 'João Silva', new Date().toISOString());
    setLogs(notificationService.getLogs());
  };

  const handleSimulateIntake = () => {
    notificationService.sendIntakeConfirmation('123', 'João Silva');
    setLogs(notificationService.getLogs());
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <CheckCircle2 className="w-4 h-4 text-brand-secondary" />;
      case 'delivered': return <CheckCircle2 className="w-4 h-4 text-brand-secondary-dark" />;
      case 'failed': return <XCircle className="w-4 h-4 text-rose-500" />;
      default: return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'whatsapp': return <MessageCircle className="w-4 h-4 text-emerald-500" />;
      case 'email': return <Mail className="w-4 h-4 text-blue-500" />;
      default: return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Notificações e Engajamento</h1>
          <p className="text-slate-500 mt-1">Gerencie a régua de comunicação e histórico de envios.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-brand-border p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Simular Envios</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-slate-800 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-500" /> Lembrete de Check-in
                </h3>
                <p className="text-sm text-slate-500 mt-1">Simula o convite diário para o paciente no WhatsApp.</p>
              </div>
              <button onClick={handleSimulateCheckIn} className="flex items-center gap-2 bg-white border border-slate-300 hover:border-brand-primary hover:text-brand-primary text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                <Send className="w-4 h-4" /> Enviar
              </button>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-slate-800 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" /> Confirmação de Triagem
                </h3>
                <p className="text-sm text-slate-500 mt-1">Simula e-mail transacional de boas-vindas.</p>
              </div>
              <button onClick={handleSimulateIntake} className="flex items-center gap-2 bg-white border border-slate-300 hover:border-brand-primary hover:text-brand-primary text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                <Send className="w-4 h-4" /> Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-brand-border flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800">Histórico Recente</h2>
          </div>
          <div className="flex-1 overflow-auto p-0">
            {logs.length === 0 ? (
              <div className="p-8 text-center text-slate-500 flex flex-col items-center">
                <Bell className="w-8 h-8 text-slate-300 mb-2" />
                <p>Nenhuma notificação enviada nesta sessão.</p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {logs.map(log => (
                  <li key={log.id} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getChannelIcon(log.channel)}</div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">Para: {log.recipientName}</p>
                          <p className="text-xs text-slate-500 mt-1 max-w-[280px] truncate" title={log.content}>{log.content}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          {getStatusIcon(log.status)} <span className="capitalize">{log.status}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {new Date(log.sentAt || '').toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
