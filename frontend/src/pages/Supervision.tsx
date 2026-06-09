// frontend/src/pages/Supervision.tsx
import { useState, useEffect } from "react";
import { getCases, getAlerts, CareCase, Alert } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Supervision = () => {
  const { user } = useAuth();
  const [cases, setCases] = useState<CareCase[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    setCases(getCases());
    setAlerts(getAlerts());
  }, []);

  const instId = user?.institutionId || "";
  const localCases = cases.filter(c => c.institutionId === instId);
  const activeAlerts = alerts.filter(a => a.institutionId === instId && a.status === "ACTIVE");

  // If the logged-in user is a Supervisor, show only their assigned cases. 
  // Otherwise, show all cases in the institution for coordenação overview.
  const supervisedCases = user?.role === "SUPERVISOR"
    ? localCases.filter(c => c.supervisorId === user.id)
    : localCases;

  const getCasePendingAlert = (caseId: string) => {
    return activeAlerts.find(a => a.caseId === caseId && a.type === "PENDING_SUPERVISION");
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Supervisão Clínica</h1>
        <p className="text-xs text-gray-400 mt-1">
          Acompanhe o desenvolvimento clínico dos profissionais, faça orientações de conduta e responda evoluções.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {supervisedCases.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            Nenhum caso sob sua supervisão.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Paciente</th>
                  <th className="py-4 px-6">Profissional Orientado</th>
                  <th className="py-4 px-6">Supervisor Designado</th>
                  <th className="py-4 px-6">Tipo</th>
                  <th className="py-4 px-6">Pendência</th>
                  <th className="py-4 px-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {supervisedCases.map(item => {
                  const pendingAlert = getCasePendingAlert(item.id);

                  return (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-800">{item.patientName}</td>
                      <td className="py-4 px-6 text-gray-600 font-semibold">{item.professionalName}</td>
                      <td className="py-4 px-6 text-gray-600 font-medium">{item.supervisorName || "Não designado"}</td>
                      <td className="py-4 px-6 text-xs text-gray-500 font-medium">
                        {item.type === "LONG_TERM" ? "Longo Prazo / Regular" : "Curto Prazo / Protocolo"}
                      </td>
                      <td className="py-4 px-6">
                        {pendingAlert ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 animate-pulse">
                            ⏳ Aguarda Orientação
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">Regular</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          to={`/app/cases/${item.id}`}
                          className="px-3.5 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200 rounded-lg transition-colors inline-block"
                        >
                          👁️ Revisar e Orientar
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supervision;
