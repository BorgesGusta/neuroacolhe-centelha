// frontend/src/pages/Cases.tsx
import { useState, useEffect } from "react";
import { getCases, CareCase } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Cases = () => {
  const { user } = useAuth();
  const [cases, setCases] = useState<CareCase[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("ACTIVE");

  useEffect(() => {
    setCases(getCases());
  }, []);

  const instId = user?.institutionId || "";
  const localCases = cases.filter(c => c.institutionId === instId);

  // Filter cases by status
  const filteredCases = statusFilter === "ALL" 
    ? localCases 
    : localCases.filter(c => c.status === statusFilter);

  const getCaseTypeLabel = (type: string) => {
    return type === "LONG_TERM" ? "Longo Prazo / Regular" : "Curto Prazo / Protocolo";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-100 text-green-800 border-green-200";
      case "SUSPENDED":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "COMPLETED":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ARCHIVED":
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ACTIVE": return "Ativo";
      case "SUSPENDED": return "Suspenso";
      case "COMPLETED": return "Finalizado";
      case "ARCHIVED": return "Arquivado";
      default: return status;
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Casos Clínicos</h1>
          <p className="text-xs text-gray-400 mt-1">Acompanhe e acesse todos os prontuários de atendimento clínico da instituição.</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {["ACTIVE", "COMPLETED", "ARCHIVED", "ALL"].map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                statusFilter === filter
                  ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {filter === "ALL" ? "Todos" : getStatusText(filter)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {filteredCases.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            Nenhum caso clínico encontrado para este filtro.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Paciente</th>
                  <th className="py-4 px-6">Profissional</th>
                  <th className="py-4 px-6">Supervisor</th>
                  <th className="py-4 px-6">Tipo</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCases.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">{item.patientName}</td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{item.professionalName}</td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{item.supervisorName || "Não designado"}</td>
                    <td className="py-4 px-6 text-xs text-gray-500 font-semibold">{getCaseTypeLabel(item.type)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-0.5 text-xs font-semibold border rounded-full ${getStatusBadge(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={`/app/cases/${item.id}`}
                        className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50/50 hover:bg-blue-50 border border-blue-200 rounded-lg transition-colors inline-block"
                      >
                        🔎 Acessar Prontuário
                      </Link>
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

export default Cases;
