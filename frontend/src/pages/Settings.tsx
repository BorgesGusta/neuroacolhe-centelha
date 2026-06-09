// frontend/src/pages/Settings.tsx
import { useState, useEffect } from "react";
import { getInstitutions, getUsers, Institution, User } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";

const Settings = () => {
  const { user } = useAuth();
  const [inst, setInst] = useState<Institution | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const instId = user?.institutionId || "";
    const currentInst = getInstitutions().find(i => i.id === instId);
    if (currentInst) setInst(currentInst);

    const instUsers = getUsers().filter(u => u.institutionId === instId);
    setUsers(instUsers);
  }, []);

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "ADMIN": return "Gestora / Admin";
      case "SUPERVISOR": return "Supervisor Clínico";
      case "PROFESSIONAL": return "Profissional / Residente";
      default: return role;
    }
  };

  return (
    <div className="space-y-6 font-sans max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Configurações da Instituição</h1>
        <p className="text-xs text-gray-400 mt-1">Gerencie as informações cadastrais da clínica e veja os colaboradores ativos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column (2/3): Form and Term */}
        <div className="md:col-span-2 space-y-6">
          {/* Cadastral data */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-wider">Dados Cadastrais</h2>
            {inst ? (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold">Nome da Clínica/Instituição</span>
                  <span className="font-bold text-gray-800">{inst.name}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold">CNPJ</span>
                  <span className="text-gray-800 font-semibold">{inst.cnpj}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold">Subdomínio Ativo</span>
                  <span className="text-gray-800 font-mono font-bold">{inst.subdomain}.neuroacolhe.org</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold">Status de Cadastro</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800 border border-green-200 inline-block mt-0.5">
                    Cadastro Ativo
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-400">Carregando dados da instituição...</p>
            )}
          </div>

          {/* LGPD Term */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-wider">Termo de Consentimento LGPD (Ativo)</h2>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed font-medium space-y-2">
              <span className="font-bold text-slate-800 block">Termo de Tratamento de Dados - Versão NC-v1.0.0</span>
              <p>
                Ao submeter a triagem, o paciente manifesta consentimento livre e informado para que esta clínica trate dados pessoais sensíveis (histórico de saúde mental e perfil sensorial) estritamente para a finalidade de análise de fila de espera e agendamento de atendimento clínico individual.
              </p>
              <p>
                Os dados de prontuário e evoluções clínicas são protegidos por sigilo profissional e tratados de acordo com a resolução vigente do Conselho Federal de Psicologia e a Lei nº 13.709/2018 (LGPD).
              </p>
            </div>
          </div>
        </div>

        {/* Right column (1/3): Collaborators list */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 h-fit">
          <h2 className="text-sm font-extrabold text-gray-400 uppercase tracking-wider">Colaboradores Vinculados</h2>
          <div className="divide-y divide-gray-100 text-sm">
            {users.map(u => (
              <div key={u.id} className="py-3 first:pt-0 last:pb-0 space-y-0.5">
                <span className="font-bold text-gray-800 block text-xs truncate">{u.name}</span>
                <span className="text-[10px] text-gray-400 block">{u.email}</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200 inline-block mt-1">
                  {getRoleLabel(u.role)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
