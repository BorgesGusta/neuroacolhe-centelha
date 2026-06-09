// frontend/src/pages/Alerts.tsx
import { useState, useEffect } from "react";
import { getAlerts, resolveAlert, Alert } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";

const Alerts = () => {
  const { user } = useAuth();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [showResolved, setShowResolved] = useState(false);

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = () => {
    setAlerts(getAlerts());
  };

  const handleResolve = (alertId: string) => {
    resolveAlert(alertId);
    loadAlerts(); // reload
  };

  const instId = user?.institutionId || "";
  const localAlerts = alerts.filter(a => a.institutionId === instId);

  // Filter based on resolution state
  const filteredAlerts = showResolved 
    ? localAlerts 
    : localAlerts.filter(a => a.status === "ACTIVE");

  const getAlertTypeLabel = (type: string) => {
    switch (type) {
      case "INACTIVE_QUEUE": return "Fila Parada";
      case "ABSENCE_STREAK": return "Ausências Recorrentes";
      case "NO_EVOLUTION": return "Sem Evolução Recente";
      case "PENDING_SUPERVISION": return "Supervisão Pendente";
      case "HIGH_PRIORITY_PENDING": return "Alta Prioridade";
      case "FAST_REVIEW_STOPPED": return "Revisão Rápida";
      case "ACCESSIBILITY_STAGNANT": return "Acessibilidade Alerta";
      default: return type;
    }
  };

  const getAlertBadgeColor = (type: string) => {
    switch (type) {
      case "ABSENCE_STREAK": return "bg-red-100 text-red-800 border-red-200";
      case "INACTIVE_QUEUE": return "bg-amber-100 text-amber-800 border-amber-200";
      case "PENDING_SUPERVISION": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "NO_EVOLUTION": return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "HIGH_PRIORITY_PENDING": return "bg-red-100 text-red-900 border-red-300 font-extrabold";
      case "FAST_REVIEW_STOPPED": return "bg-purple-100 text-purple-900 border-purple-305 font-extrabold";
      case "ACCESSIBILITY_STAGNANT": return "bg-blue-100 text-blue-900 border-blue-300 font-extrabold";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between border-b border-brand-border pb-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-text-main">Alertas do Sistema</h1>
          <p className="text-xs text-brand-text-muted mt-1">Monitore e gerencie inconsistências ou gargalos na jornada do paciente.</p>
        </div>

        {/* Toggle show resolved */}
        <button
          onClick={() => setShowResolved(!showResolved)}
          className={`px-4 py-2 rounded-xl border text-xs font-semibold transition-colors ${
            showResolved
              ? "bg-brand-surface-soft border-brand-border text-brand-text-main"
              : "bg-white border-brand-border text-brand-text-muted hover:bg-brand-surface-soft"
          }`}
        >
          {showResolved ? "Ocultar Resolvidos" : "Mostrar Histórico / Resolvidos"}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-16 text-brand-text-muted text-sm">
            Nenhum alerta {showResolved ? "" : "ativo"} no momento.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-brand-surface-soft border-b border-brand-border text-xs font-semibold text-brand-text-muted uppercase tracking-wider">
                  <th className="py-4 px-6">Tipo</th>
                  <th className="py-4 px-6">Mensagem</th>
                  <th className="py-4 px-6">Data de Criação</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {filteredAlerts.map(item => (
                  <tr key={item.id} className="hover:bg-brand-surface-soft/60 transition-colors">
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border uppercase tracking-wider ${getAlertBadgeColor(item.type)}`}>
                        {getAlertTypeLabel(item.type)}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-brand-text-main leading-normal">{item.message}</td>
                    <td className="py-4 px-6 text-brand-text-muted">{new Date(item.createdAt).toLocaleString()}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'ACTIVE' 
                          ? "bg-brand-danger-soft text-brand-danger" 
                          : "bg-brand-surface text-brand-text-muted"
                      }`}>
                        {item.status === 'ACTIVE' ? 'Ativo' : 'Resolvido'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {item.status === 'ACTIVE' ? (
                        <button
                          onClick={() => handleResolve(item.id)}
                          className="px-3.5 py-1.5 text-xs font-bold text-brand-secondary bg-brand-secondary-soft hover:bg-brand-secondary/20 border border-brand-secondary/30 rounded-lg transition-colors"
                        >
                          ✓ Resolver
                        </button>
                      ) : (
                        <span className="text-xs text-brand-text-muted">Nenhuma</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;
