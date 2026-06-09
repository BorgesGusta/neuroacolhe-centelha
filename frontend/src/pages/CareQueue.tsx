// frontend/src/pages/CareQueue.tsx
import { useState, useEffect } from "react";
import { getPatients, updatePatientStatus, createCase, getUsers, reviewPatientPriority, Patient, User } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";

const CareQueue = () => {
  const { user: currentUser } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [professionals, setProfessionals] = useState<User[]>([]);
  const [supervisors, setSupervisors] = useState<User[]>([]);
  
  // Tab states
  const [activeTab, setActiveTab] = useState<'RECEIVED' | 'IN_ANALYSIS' | 'WAITING_CARE' | 'IN_CARE' | 'CLOSED'>('RECEIVED');

  // Detail Modal States
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [revising, setRevising] = useState(false);
  const [selectedRevisedLevel, setSelectedRevisedLevel] = useState<'LOW' | 'MODERATE' | 'HIGH' | 'FAST_REVIEW' | null>(null);
  const [revisionComment, setRevisionComment] = useState("");
  
  // Status Transition Modal
  const [transitionPatient, setTransitionPatient] = useState<Patient | null>(null);
  const [nextStatus, setNextStatus] = useState<string>("");
  const [transitionNotes, setTransitionNotes] = useState("");

  // Start Case Modal
  const [startCasePatient, setStartCasePatient] = useState<Patient | null>(null);
  const [assignedProfessionalId, setAssignedProfessionalId] = useState("");
  const [assignedSupervisorId, setAssignedSupervisorId] = useState("");
  const [caseType, setCaseType] = useState<'SHORT_TERM' | 'LONG_TERM'>('LONG_TERM');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setPatients(getPatients());
    const allUsers = getUsers();
    setProfessionals(allUsers.filter(u => u.role === "PROFESSIONAL"));
    setSupervisors(allUsers.filter(u => u.role === "SUPERVISOR"));
  };

  // Filter patients by active user's institution
  const instId = currentUser?.institutionId || "";
  const localPatients = patients.filter(p => p.institutionId === instId);

  // Split tabs
  const getTabPatients = () => {
    if (activeTab === 'CLOSED') {
      return localPatients.filter(p => p.status === 'COMPLETED' || p.status === 'ARCHIVED');
    }
    return localPatients.filter(p => p.status === activeTab);
  };

  const currentList = getTabPatients();

  // Handle Status Update
  const handleTransitionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transitionPatient) return;
    updatePatientStatus(transitionPatient.id, nextStatus as Patient['status'], transitionNotes);
    setTransitionPatient(null);
    setTransitionNotes("");
    loadData(); // reload
  };

  // Handle Start Case
  const handleStartCaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startCasePatient || !assignedProfessionalId || !assignedSupervisorId) return;

    createCase(startCasePatient.id, assignedProfessionalId, assignedSupervisorId, caseType);
    setStartCasePatient(null);
    setAssignedProfessionalId("");
    setAssignedSupervisorId("");
    loadData(); // reload
  };


  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Fila de Cuidado</h1>
          <p className="text-xs text-gray-400 mt-1">Gerencie a jornada de triagens e status de atendimento da clínica.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto gap-2">
        {(['RECEIVED', 'IN_ANALYSIS', 'WAITING_CARE', 'IN_CARE', 'CLOSED'] as const).map((tab) => {
          const isActive = activeTab === tab;
          let label = "";
          let count = 0;

          if (tab === 'RECEIVED') {
            label = "Triagem Nova";
            count = localPatients.filter(p => p.status === 'RECEIVED').length;
          } else if (tab === 'IN_ANALYSIS') {
            label = "Em Análise";
            count = localPatients.filter(p => p.status === 'IN_ANALYSIS').length;
          } else if (tab === 'WAITING_CARE') {
            label = "Aguardando Vaga";
            count = localPatients.filter(p => p.status === 'WAITING_CARE').length;
          } else if (tab === 'IN_CARE') {
            label = "Em Acompanhamento";
            count = localPatients.filter(p => p.status === 'IN_CARE').length;
          } else {
            label = "Concluídos / Arquivados";
            count = localPatients.filter(p => p.status === 'COMPLETED' || p.status === 'ARCHIVED').length;
          }

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 border-b-2 font-semibold text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? "border-brand-primary text-brand-primary"
                  : "border-transparent text-brand-text-muted hover:text-brand-text-main hover:border-brand-border"
              }`}
            >
              {label}
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                isActive ? "bg-brand-primary-soft text-brand-primary" : "bg-brand-surface text-brand-text-muted"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Patient List Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {currentList.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            Nenhum paciente neste status da fila.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Nome</th>
                  <th className="py-4 px-6">Triado em</th>
                  <th className="py-4 px-6">Prioridade</th>
                  <th className="py-4 px-6">Acessibilidade</th>
                  <th className="py-4 px-6">Contato Pref.</th>
                  <th className="py-4 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentList.map(pat => (
                  <tr key={pat.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">{pat.name}</td>
                    <td className="py-4 px-6 text-gray-500">{new Date(pat.createdAt).toLocaleDateString()}</td>
                    {/* Prioridade Column */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          {pat.priorityLevel === 'FAST_REVIEW' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-danger-soft text-brand-danger border border-brand-danger/30">
                              ⚡ Fast Review
                            </span>
                          )}
                          {pat.priorityLevel === 'HIGH' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-warning-soft text-brand-warning border border-brand-warning/30">
                              🔴 Alta
                            </span>
                          )}
                          {pat.priorityLevel === 'MODERATE' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary-soft text-brand-primary border border-brand-primary/30">
                              🟡 Moderada
                            </span>
                          )}
                          {pat.priorityLevel === 'LOW' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-secondary-soft text-brand-secondary border border-brand-secondary/30">
                              🟢 Baixa
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-gray-500">
                            Score: {pat.priorityScore ?? 0}/15
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {pat.priorityReviewStatus === 'PENDING' ? (
                            <span className="text-[9px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                              Pendente
                            </span>
                          ) : pat.priorityReviewStatus === 'VALIDATED' ? (
                            <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                              Validada
                            </span>
                          ) : (
                            <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-250">
                              Revisada
                            </span>
                          )}
                          
                          {pat.priorityReasons && pat.priorityReasons.length > 0 && (
                            <span 
                              title={pat.priorityReasons.join("\n")} 
                              className="cursor-help text-gray-400 hover:text-gray-600 text-[11px] select-none"
                            >
                              ℹ️ Motivos
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {pat.hasNeurodivergence ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
                          🧠 Neurodivergente
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">Padrão</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-600 font-semibold">{pat.communicationPreference}</td>
                    <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setSelectedPatient(pat);
                          setRevising(false);
                          setSelectedRevisedLevel(null);
                          setRevisionComment("");
                        }}
                        className="px-3 py-1.5 text-xs font-semibold border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        🔎 Ficha
                      </button>

                      {pat.status !== 'IN_CARE' && pat.status !== 'COMPLETED' && pat.status !== 'ARCHIVED' && (
                        <button
                          onClick={() => {
                            setTransitionPatient(pat);
                            setNextStatus(pat.status === 'RECEIVED' ? 'IN_ANALYSIS' : 'WAITING_CARE');
                          }}
                          className="px-3 py-1.5 text-xs font-semibold border border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          🔄 Mover
                        </button>
                      )}

                      {pat.status === 'WAITING_CARE' && (
                        <button
                          onClick={() => setStartCasePatient(pat)}
                          className="px-3 py-1.5 text-xs font-bold bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors"
                        >
                          🌱 Iniciar Acompanhamento
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MODAL 1: Patient Details */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-bold text-gray-900">Detalhes de Acolhimento</h2>
              <button onClick={() => setSelectedPatient(null)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">×</button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-gray-400 block font-semibold">Nome</span>
                <span className="font-bold text-gray-800">{selectedPatient.name}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-semibold">Data de Nascimento</span>
                <span className="text-gray-800">{new Date(selectedPatient.birthDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-semibold">E-mail</span>
                <span className="text-gray-800">{selectedPatient.email}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-semibold">Telefone</span>
                <span className="text-gray-800">{selectedPatient.phone}</span>
              </div>
              {selectedPatient.responsibleName && (
                <>
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold">Responsável Legal</span>
                    <span className="text-gray-800">{selectedPatient.responsibleName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold">Telefone do Responsável</span>
                    <span className="text-gray-800">{selectedPatient.responsiblePhone}</span>
                  </div>
                </>
              )}
            </div>

            <hr className="border-gray-100" />

            <div className="space-y-2 text-sm">
              <span className="text-xs text-gray-400 block font-semibold">Motivo da Busca por Atendimento</span>
              <p className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-gray-700 leading-relaxed font-medium">
                {selectedPatient.reasonForSeeking}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-gray-400 block font-semibold">Disponibilidade</span>
                <span className="text-gray-800 font-medium">{selectedPatient.availability}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-semibold">Preferência de Comunicação</span>
                <span className="text-gray-800 font-medium">{selectedPatient.communicationPreference}</span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Box de Prioridade e Tomada de Decisão */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Motor de Priorização de Acolhimento</h4>
                  <p className="text-[10px] text-gray-400">Suporte administrativo à decisão profissional</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    Score: {selectedPatient.priorityScore ?? 0}/15
                  </span>
                  
                  {selectedPatient.priorityLevel === 'FAST_REVIEW' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-danger-soft text-brand-danger border border-brand-danger/30">
                      ⚡ Fast Review
                    </span>
                  )}
                  {selectedPatient.priorityLevel === 'HIGH' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-warning-soft text-brand-warning border border-brand-warning/30">
                      🔴 Alta
                    </span>
                  )}
                  {selectedPatient.priorityLevel === 'MODERATE' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-primary-soft text-brand-primary border border-brand-primary/30">
                      🟡 Moderada
                    </span>
                  )}
                  {selectedPatient.priorityLevel === 'LOW' && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-secondary-soft text-brand-secondary border border-brand-secondary/30">
                      🟢 Baixa
                    </span>
                  )}
                </div>
              </div>

              {selectedPatient.priorityReasons && selectedPatient.priorityReasons.length > 0 && (
                <div className="text-xs space-y-1">
                  <span className="font-semibold text-gray-600 block">Motivos de atenção identificados pelo motor:</span>
                  <ul className="list-disc pl-4 text-gray-600 space-y-0.5">
                    {selectedPatient.priorityReasons.map((reason, idx) => (
                      <li key={idx} className="text-slate-700">{reason}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Status da Revisão */}
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                <div>
                  <span className="text-gray-400">Auditoria de Revisão:</span>{' '}
                  {selectedPatient.priorityReviewStatus === 'PENDING' ? (
                    <span className="font-bold text-amber-600">Aguardando Avaliação Profissional</span>
                  ) : selectedPatient.priorityReviewStatus === 'VALIDATED' ? (
                    <span className="font-bold text-emerald-600">Validada por {selectedPatient.priorityReviewedBy} em {selectedPatient.priorityReviewedAt ? new Date(selectedPatient.priorityReviewedAt).toLocaleDateString() : ''}</span>
                  ) : (
                    <span className="font-bold text-blue-650">Revisada manualmente por {selectedPatient.priorityReviewedBy} em {selectedPatient.priorityReviewedAt ? new Date(selectedPatient.priorityReviewedAt).toLocaleDateString() : ''}</span>
                  )}
                </div>
              </div>

              {/* Ações de Revisão Clínica */}
              {selectedPatient.priorityReviewStatus === 'PENDING' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-3">
                  <span className="block text-[11px] font-bold text-slate-700">Decisão Profissional (Homologar Prioridade):</span>
                  
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        reviewPatientPriority(selectedPatient.id, 'VALIDATED');
                        // Update selected patient to update view immediately
                        setSelectedPatient({
                          ...selectedPatient,
                          priorityReviewStatus: 'VALIDATED',
                          priorityReviewedAt: new Date().toISOString(),
                          priorityReviewedBy: currentUser?.name || 'Profissional da Saúde'
                        });
                        loadData();
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                    >
                      ✓ Validar Nível ({selectedPatient.priorityLevel === 'FAST_REVIEW' ? 'Fast Review' : selectedPatient.priorityLevel === 'HIGH' ? 'Alto' : selectedPatient.priorityLevel === 'MODERATE' ? 'Moderado' : 'Baixo'})
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setRevising(true);
                      }}
                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-lg border border-blue-200 transition-colors"
                    >
                      ✏️ Alterar Prioridade Manualmente
                    </button>
                  </div>
                  
                  {revising && (
                    <div className="pt-3 border-t border-dashed border-gray-200 space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Selecione o Novo Nível:</label>
                        <div className="flex gap-2">
                          {(['LOW', 'MODERATE', 'HIGH', 'FAST_REVIEW'] as const).map(lvl => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => setSelectedRevisedLevel(lvl)}
                              className={`px-2 py-1 text-xs font-bold rounded-md border transition-all ${
                                selectedRevisedLevel === lvl
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              {lvl === 'LOW' && 'Baixa'}
                              {lvl === 'MODERATE' && 'Moderada'}
                              {lvl === 'HIGH' && 'Alta'}
                              {lvl === 'FAST_REVIEW' && 'Fast Review'}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">Justificativa da Alteração:</label>
                        <input
                          type="text"
                          value={revisionComment}
                          onChange={(e) => setRevisionComment(e.target.value)}
                          placeholder="Ex: Julgamento clínico aponta menor impacto de rotina..."
                          className="w-full text-xs rounded-lg border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-800"
                        />
                      </div>
                      
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setRevising(false);
                            setSelectedRevisedLevel(null);
                            setRevisionComment("");
                          }}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 border"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          disabled={!selectedRevisedLevel || !revisionComment}
                          onClick={() => {
                            if (!selectedRevisedLevel) return;
                            const reasons = [
                              `Alterado profissionalmente para ${selectedRevisedLevel}. Motivo: ${revisionComment}`
                            ];
                            reviewPatientPriority(selectedPatient.id, 'REVISED', selectedRevisedLevel, selectedPatient.priorityScore, reasons);
                            setSelectedPatient({
                              ...selectedPatient,
                              priorityLevel: selectedRevisedLevel,
                              priorityReviewStatus: 'REVISED',
                              priorityReviewedAt: new Date().toISOString(),
                              priorityReviewedBy: currentUser?.name || 'Profissional da Saúde',
                              priorityReasons: reasons
                            });
                            setRevising(false);
                            setSelectedRevisedLevel(null);
                            setRevisionComment("");
                            loadData();
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Disclaimer do Motor de Priorização */}
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 text-[10px] text-amber-800 leading-normal">
                ⚠️ <strong>Aviso de Uso Profissional:</strong> Esta classificação de prioridade baseia-se em regras de triagem administrativa de vulnerabilidade e sobrecarga informadas pelo próprio usuário. Não constitui diagnóstico clínico, teste psicológico, parecer ou prognóstico de saúde mental. Toda decisão de agendamento e conduta clínica é de exclusiva responsabilidade de profissional habilitado nos termos das resoluções do CFP e normas de auditoria LGPD.
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Accessibility profile */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Perfil de Acessibilidade</h4>
              <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100 text-sm grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <span className="text-[10px] text-orange-600 block font-bold">Autodeclaração Neurodivergente</span>
                  <span className="font-semibold text-orange-950">
                    {selectedPatient.hasNeurodivergence ? selectedPatient.neurodivergenceDetails || "Sim" : "Não declarada"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-orange-600 block font-bold">Necessita Apoio no Preenchimento</span>
                  <span className="font-semibold text-orange-950">{selectedPatient.needsAssistance ? "Sim" : "Não"}</span>
                </div>
                {selectedPatient.sensorySensitivities && (
                  <div className="col-span-2">
                    <span className="text-[10px] text-orange-600 block font-bold">Preferências/Sensibilidades Sensoriais</span>
                    <span className="font-semibold text-orange-950">{selectedPatient.sensorySensitivities}</span>
                  </div>
                )}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* LGPD Consent record */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1">
              <span className="font-bold text-slate-700 block">🛡️ Registro Legal de Consentimento (LGPD)</span>
              <p>Consentimento expresso coletado em conformidade com a LGPD para tratamento de dados pessoais sensíveis de saúde.</p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                <span><strong>IP de Origem:</strong> 177.105.{Math.floor(Math.random() * 200)}.{Math.floor(Math.random() * 200)}</span>
                <span><strong>Versão do Termo:</strong> NC-v1.0.0</span>
                <span><strong>Navegador:</strong> Chrome/Firefox (SPA Intake Form)</span>
              </div>
            </div>

            <div className="flex justify-end pt-3">
              <button
                onClick={() => setSelectedPatient(null)}
                className="px-4 py-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors"
              >
                Fechar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Status Transition */}
      {transitionPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold text-gray-900">Mover Status na Fila</h2>
              <button onClick={() => setTransitionPatient(null)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">×</button>
            </div>

            <form onSubmit={handleTransitionSubmit} className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-gray-400 block">Paciente</span>
                <span className="font-bold text-gray-800">{transitionPatient.name}</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Próximo Status</label>
                <select
                  value={nextStatus}
                  onChange={(e) => setNextStatus(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="RECEIVED">Recebido (Novo)</option>
                  <option value="IN_ANALYSIS">Em Análise</option>
                  <option value="WAITING_CARE">Aguardando Vaga</option>
                  <option value="ARCHIVED">Arquivado (Desistência/Encaminhamento)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Observação / Justificativa Clínica</label>
                <textarea
                  value={transitionNotes}
                  onChange={(e) => setTransitionNotes(e.target.value)}
                  placeholder="Justifique a transição (visível nos logs de auditoria)"
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setTransitionPatient(null)}
                  className="px-4 py-2 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/25"
                >
                  Confirmar Transição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Start Case (Assign User) */}
      {startCasePatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold text-gray-900">Iniciar Caso Clínico</h2>
              <button onClick={() => setStartCasePatient(null)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">×</button>
            </div>

            <form onSubmit={handleStartCaseSubmit} className="space-y-4 text-sm">
              <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                <span className="text-xs text-blue-600 block font-bold">Paciente a ser Atendido</span>
                <span className="font-extrabold text-blue-900">{startCasePatient.name}</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Profissional Responsável (Residente / Psicólogo)</label>
                <select
                  value={assignedProfessionalId}
                  onChange={(e) => setAssignedProfessionalId(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione o profissional...</option>
                  {professionals.map(prof => (
                    <option key={prof.id} value={prof.id}>{prof.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Supervisor Clínico Responsável</label>
                <select
                  value={assignedSupervisorId}
                  onChange={(e) => setAssignedSupervisorId(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione o supervisor...</option>
                  {supervisors.map(sup => (
                    <option key={sup.id} value={sup.id}>{sup.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Modalidade do Caso</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="caseType"
                      checked={caseType === 'LONG_TERM'}
                      onChange={() => setCaseType('LONG_TERM')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    Acompanhamento Regular (Longo Prazo)
                  </label>
                  <label className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="caseType"
                      checked={caseType === 'SHORT_TERM'}
                      onChange={() => setCaseType('SHORT_TERM')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    Atendimento de Protocolo (Curto Prazo)
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setStartCasePatient(null)}
                  className="px-4 py-2 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-500/25"
                >
                  🌱 Vincular e Ativar Caso
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareQueue;
