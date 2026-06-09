// frontend/src/pages/Audit.tsx
import { useState, useEffect } from "react";
import { getAuditLogs, AuditLog } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";

const Audit = () => {
  const { user } = useAuth();
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    setLogs(getAuditLogs());
  }, []);

  const instId = user?.institutionId || "";
  const localLogs = logs.filter(l => l.institutionId === instId);

  const getActionColor = (action: string) => {
    switch (action) {
      case "READ_CLINICAL_NOTE": return "text-amber-600 bg-amber-50 border-amber-100";
      case "WRITE_CLINICAL_NOTE": return "text-blue-600 bg-blue-50 border-blue-100";
      case "CREATE_CARE_CASE": return "text-green-600 bg-green-50 border-green-100";
      case "LOGIN": return "text-slate-600 bg-slate-50 border-slate-100";
      case "UPDATE_PATIENT_STATUS": return "text-purple-600 bg-purple-50 border-purple-100";
      default: return "text-gray-600 bg-gray-50 border-gray-100";
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Trilha de Auditoria (LGPD)</h1>
        <p className="text-xs text-gray-400 mt-1">
          Registro permanente e inalterável de todos os acessos, leituras de dados de saúde sensíveis e logins na plataforma.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed max-w-3xl">
        ⚖️ **Conformidade de Segurança:** Para atender às diretrizes da LGPD (Lei Geral de Proteção de Dados) e aos conselhos de classe de Psicologia, toda leitura (`READ_CLINICAL_NOTE`) ou escrita (`WRITE_CLINICAL_NOTE`) em evoluções ou prontuários é vinculada à credencial do usuário, registrando data, IP e User-Agent do dispositivo utilizado.
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {localLogs.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            Nenhum log registrado.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Usuário</th>
                  <th className="py-4 px-6">Ação</th>
                  <th className="py-4 px-6">Recurso Acessado</th>
                  <th className="py-4 px-6">Data/Hora</th>
                  <th className="py-4 px-6">Endereço IP</th>
                  <th className="py-4 px-6">Dispositivo/Navegador</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {localLogs.map(log => (
                  <tr key={log.id} className="hover:bg-gray-50/50 transition-colors text-xs">
                    <td className="py-4 px-6 font-bold text-gray-800">{log.userName}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded-full font-bold border ${getActionColor(log.action)}`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-500 font-semibold">{log.resource} ({log.resourceId || 'Global'})</td>
                    <td className="py-4 px-6 text-gray-500">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="py-4 px-6 font-mono text-gray-600 font-semibold">{log.ipAddress}</td>
                    <td className="py-4 px-6 text-gray-400 truncate max-w-[200px]" title={log.userAgent}>{log.userAgent}</td>
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

export default Audit;
