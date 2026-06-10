import React from 'react';
import { User, Mail, Phone, Shield } from 'lucide-react';

export default function PatientProfile() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Meu Perfil</h1>
        <p className="text-slate-500 mt-1">Gerencie seus dados e preferências de contato.</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden">
        <div className="bg-slate-50 p-6 flex items-center gap-6 border-b border-slate-200">
          <div className="w-24 h-24 bg-brand-primary/10 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-brand-primary font-bold text-3xl">
            JS
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">João Silva</h2>
            <p className="text-slate-500 mt-1">Paciente desde Maio de 2026</p>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <section>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Dados de Contato</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">E-mail</p>
                  <p className="text-sm text-slate-500 mt-0.5">joao.silva@exemplo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">WhatsApp</p>
                  <p className="text-sm text-slate-500 mt-0.5">(11) 98765-4321</p>
                  <span className="inline-block mt-1 bg-brand-secondary/10 text-brand-secondary-dark text-xs px-2 py-0.5 rounded">Preferencial</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Acessibilidade & Inclusão</h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-700">Nenhuma necessidade específica registrada.</p>
              <button className="text-brand-primary text-sm font-medium mt-2">Atualizar necessidades</button>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Privacidade & LGPD
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" defaultChecked className="mt-1 rounded text-brand-primary focus:ring-brand-primary" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Comunicação via WhatsApp</p>
                  <p className="text-xs text-slate-500">Aceito receber lembretes e links de acesso via WhatsApp.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" defaultChecked className="mt-1 rounded text-brand-primary focus:ring-brand-primary" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Armazenamento de Histórico</p>
                  <p className="text-xs text-slate-500">Concordo com os termos de consentimento preenchidos na triagem.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
