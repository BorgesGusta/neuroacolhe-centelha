// frontend/src/pages/Dashboard.tsx
import { useState, useEffect } from "react";
import { getPatients, getCases, getAlerts, getAuditLogs, Patient, CareCase, Alert } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [cases, setCases] = useState<CareCase[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);

  useEffect(() => {
    // Load mock database
    setPatients(getPatients());
    setCases(getCases());
    setAlerts(getAlerts());
    setRecentLogs(getAuditLogs().slice(0, 5));
  }, []);

  // Filter metrics strictly by User Tenant (Institution)
  const instId = user?.institutionId || "";
  const localPatients = patients.filter(p => p.institutionId === instId);
  const localCases = cases.filter(c => c.institutionId === instId);
  const localAlerts = alerts.filter(a => a.institutionId === instId && a.status === "ACTIVE");

  const countReceived = localPatients.filter(p => p.status === "RECEIVED").length;
  const countInAnalysis = localPatients.filter(p => p.status === "IN_ANALYSIS").length;
  const countWaiting = localPatients.filter(p => p.status === "WAITING_CARE").length;
  const countActiveCases = localCases.filter(c => c.status === "ACTIVE").length;

  const countHighPriorityPending = localPatients.filter(
    p => (p.priorityLevel === "HIGH" || p.priorityLevel === "FAST_REVIEW") && p.priorityReviewStatus === "PENDING"
  ).length;

  const countPendingReview = localPatients.filter(p => p.priorityReviewStatus === "PENDING").length;

  const countAccessibilityAssistance = localPatients.filter(p => p.needsAssistance).length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-brand-primary-soft border border-brand-primary/20 rounded-2xl p-6 md:p-8 text-brand-primary-dark shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-brand-primary-dark">
          Olá, {user?.name || "Profissional"}!
        </h1>
        <p className="text-brand-primary-dark/80 max-w-xl text-sm leading-relaxed font-medium">
          Bem-vindo ao painel do **NeuroAcolhe**. Aqui você gerencia a fila de acolhimento, evolui prontuários e acompanha as orientações da equipe.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between min-h-[120px]">
          <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider block">Triagens Novas</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-brand-primary">{countReceived}</span>
            <span className="text-xs text-brand-text-muted font-medium">recebidas</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between min-h-[120px]">
          <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider block">Em Análise</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-brand-warning">{countInAnalysis}</span>
            <span className="text-xs text-brand-text-muted font-medium">fila triagem</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between min-h-[120px]">
          <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider block font-sans">Aguardando</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-brand-secondary">{countWaiting}</span>
            <span className="text-xs text-brand-text-muted font-medium font-sans">para iniciar</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between min-h-[120px]">
          <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider block">Casos Ativos</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-brand-primary-dark">{countActiveCases}</span>
            <span className="text-xs text-brand-text-muted font-medium">acompanhando</span>
          </div>
        </div>
        <div className="bg-brand-danger-soft p-5 rounded-2xl border border-brand-danger/20 shadow-sm flex flex-col justify-between min-h-[120px]">
          <span className="text-xs font-semibold text-brand-danger uppercase tracking-wider block">Alertas</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-brand-danger">{localAlerts.length}</span>
            <span className="text-xs text-brand-danger font-semibold bg-white px-2 py-0.5 rounded-full border border-brand-danger/20">ativos</span>
          </div>
        </div>
      </div>

      {/* Painel do Motor de Priorização */}
      <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-brand-text-main">Motor de Priorização e Controle de Filas</h2>
          <p className="text-xs text-brand-text-muted mt-1">Dados de apoio à triagem e tempo médio de espera simulado.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-brand-surface-soft border border-brand-border p-4 rounded-xl flex flex-col justify-between min-h-[90px]">
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider block">Alta Prioridade Sem Revisão</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-black text-brand-danger">{countHighPriorityPending}</span>
              <span className="text-[10px] text-brand-danger font-semibold bg-brand-danger-soft px-2 py-0.5 rounded-full border border-brand-danger/20">Fast/High</span>
            </div>
          </div>
          
          <div className="bg-brand-surface-soft border border-brand-border p-4 rounded-xl flex flex-col justify-between min-h-[90px]">
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider block">Pendentes de Homologação</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-black text-brand-warning">{countPendingReview}</span>
              <span className="text-xs text-brand-text-muted font-medium">triagens novas</span>
            </div>
          </div>
          
          <div className="bg-brand-surface-soft border border-brand-border p-4 rounded-xl flex flex-col justify-between min-h-[90px]">
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider block font-sans">Apoio em Acessibilidade</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-black text-brand-primary">{countAccessibilityAssistance}</span>
              <span className="text-xs text-brand-text-muted font-medium">solicitantes</span>
            </div>
          </div>

          <div className="bg-brand-surface-soft border border-brand-border p-4 rounded-xl flex flex-col justify-between min-h-[90px] md:col-span-1">
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider block">Tempo Médio na Fila (Simulado)</span>
            <div className="mt-2 space-y-1 text-[11px] font-semibold text-brand-text-main">
              <div className="flex justify-between">
                <span className="text-brand-danger">⚡ Fast Review:</span>
                <span>~ 1 dia útil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-warning">🔴 Alta:</span>
                <span>~ 3 dias úteis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-primary">🟡 Moderada:</span>
                <span>~ 7 dias úteis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-secondary">🟢 Baixa:</span>
                <span>~ 15 dias úteis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Alerts and Cases */}
        <div className="lg:col-span-2 space-y-6">
          {/* Alerts panel */}
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6">
            <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-4">
              <h2 className="text-lg font-bold text-brand-text-main">Alertas Clínicos Ativos</h2>
              <Link to="/app/alerts" className="text-xs font-semibold text-brand-primary hover:text-brand-primary-dark">Ver todos</Link>
            </div>
            {localAlerts.length === 0 ? (
              <div className="text-center py-6 text-brand-text-muted text-sm">
                Nenhum alerta crítico ativo no momento.
              </div>
            ) : (
              <div className="space-y-3">
                {localAlerts.map(alert => (
                  <div key={alert.id} className="flex gap-3 p-3.5 rounded-xl border border-brand-danger/30 bg-brand-danger-soft text-brand-danger text-sm">
                    <span className="text-base shrink-0">⚠️</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold leading-normal">{alert.message}</p>
                      <span className="text-[10px] opacity-80 mt-1 block">Registrado em {new Date(alert.createdAt).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cases list */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h2 className="text-lg font-bold text-gray-800">Seus Casos Clínicos Ativos</h2>
              <Link to="/app/cases" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Ver todos</Link>
            </div>
            {localCases.filter(c => c.status === "ACTIVE").length === 0 ? (
              <div className="text-center py-6 text-gray-400 text-sm">
                Nenhum caso ativo sob sua responsabilidade.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {localCases.filter(c => c.status === "ACTIVE").map(item => (
                  <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{item.patientName}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Modalidade: {item.type === "LONG_TERM" ? "Longo Prazo / Regular" : "Curto Prazo / Protocolo"}
                      </p>
                    </div>
                    <Link
                      to={`/app/cases/${item.id}`}
                      className="px-3.5 py-1.5 text-xs font-semibold border border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      Acessar Prontuário
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Audit log panel */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-fit">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h2 className="text-lg font-bold text-gray-800">Auditoria de Leitura (LGPD)</h2>
            <Link to="/app/audit" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Ver painel</Link>
          </div>
          <div className="space-y-4">
            {recentLogs.map(log => (
              <div key={log.id} className="text-xs border-l-2 border-slate-300 pl-3 space-y-1 py-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{log.userName}</span>
                  <span className="text-[10px] text-gray-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <p className="text-slate-500 font-medium">
                  Ação: <span className="font-bold text-slate-700">{log.action}</span>
                </p>
                <p className="text-[10px] text-gray-400">Recurso: {log.resource} ({log.resourceId || 'N/A'})</p>
                <p className="text-[10px] text-gray-400">IP: {log.ipAddress}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
