// frontend/src/pages/CaseDetail.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { 
  getCases, 
  getPatients, 
  getSessionNotes, 
  getSupervisionNotes, 
  addSessionNote, 
  addSupervisionNote,
  addAuditLog,
  CareCase, 
  Patient, 
  SessionNote, 
  SupervisionNote 
} from "../data/mockData";
import WellbeingAura from "../components/WellbeingAura";

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  
  const [careCase, setCareCase] = useState<CareCase | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [notes, setNotes] = useState<SessionNote[]>([]);
  const [supervisions, setSupervisions] = useState<SupervisionNote[]>([]);

  // Modais
  const [showEvolutionModal, setShowEvolutionModal] = useState(false);
  const [showSupervisionModal, setShowSupervisionModal] = useState(false);
  
  // Forms inputs
  const [evolutionContent, setEvolutionContent] = useState("");
  const [isAbsent, setIsAbsent] = useState(false);
  
  const [selectedNoteIdForSupervision, setSelectedNoteIdForSupervision] = useState<string | undefined>(undefined);
  const [supervisionContent, setSupervisionContent] = useState("");
  
  // Tab navigation
  const [activeTab, setActiveTab] = useState<"resumo" | "dados" | "triagem" | "checkins" | "teleconsultas" | "evolucoes" | "supervisao">("resumo");

  useEffect(() => {
    loadCaseData();
  }, [id]);

  const loadCaseData = () => {
    if (!id) return;
    const allCases = getCases();
    const currentCase = allCases.find(c => c.id === id);
    if (currentCase) {
      setCareCase(currentCase);
      
      const allPatients = getPatients();
      const currentPatient = allPatients.find(p => p.id === currentCase.patientId);
      if (currentPatient) setPatient(currentPatient);

      const allNotes = getSessionNotes().filter(n => n.caseId === id);
      // Sort notes chronologically (newest first)
      setNotes(allNotes.sort((a, b) => new Date(b.sessionDate).getTime() - new Date(a.sessionDate).getTime()));

      const allSupervisions = getSupervisionNotes().filter(s => s.caseId === id);
      setSupervisions(allSupervisions);

      // LGPD Audit Log Trigger: Log clinical note read access
      addAuditLog(
        user?.id,
        "READ_CLINICAL_NOTE",
        "Patient / SessionNote / Supervision",
        currentCase.patientId,
        currentCase.institutionId
      );
    }
  };

  if (!careCase || !patient) {
    return (
      <div className="text-center py-16 text-gray-500 font-sans">
        Caso clínico não encontrado. <Link to="/app/cases" className="text-blue-600 underline">Voltar para a lista</Link>
      </div>
    );
  }

  // Handle Save Evolution
  const handleEvolutionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !evolutionContent.trim()) return;

    addSessionNote(id, evolutionContent, isAbsent);
    setEvolutionContent("");
    setIsAbsent(false);
    setShowEvolutionModal(false);
    loadCaseData(); // reload
  };

  // Handle Save Supervision
  const handleSupervisionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !supervisionContent.trim()) return;

    addSupervisionNote(id, selectedNoteIdForSupervision || "", supervisionContent);
    setSupervisionContent("");
    setSelectedNoteIdForSupervision(undefined);
    setShowSupervisionModal(false);
    loadCaseData(); // reload
  };

  const getCaseTypeLabel = (type: string) => {
    return type === "LONG_TERM" ? "Acompanhamento Regular (Longo Prazo)" : "Atendimento de Protocolo (Curto Prazo)";
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Back button */}
      <Link to="/app/cases" className="text-xs font-bold text-brand-text-muted hover:text-brand-text-main flex items-center gap-1.5 w-fit">
        ← Voltar para todos os Casos
      </Link>

      {/* Case Header Card */}
      <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-text-muted">Caso Clínico - {careCase.id}</span>
          <h1 className="text-2xl font-extrabold text-brand-text-main mt-1">{patient.name}</h1>
          <p className="text-xs text-brand-text-muted font-semibold mt-1">
            Modalidade: {getCaseTypeLabel(careCase.type)}
          </p>
        </div>

        <div className="flex gap-2">
          {/* Add Evolution (For professionals) */}
          {user?.role === "PROFESSIONAL" && (
            <button
              onClick={() => setShowEvolutionModal(true)}
              className="px-4 py-2 text-xs font-bold bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl shadow-sm transition-all"
            >
              📝 Registrar Sessão (Evolução)
            </button>
          )}

          {/* Add Supervision (For supervisors) */}
          {user?.role === "SUPERVISOR" && (
            <button
              onClick={() => {
                setSelectedNoteIdForSupervision(undefined);
                setShowSupervisionModal(true);
              }}
              className="px-4 py-2 text-xs font-bold bg-brand-secondary hover:bg-brand-secondary-dark text-white rounded-xl shadow-sm transition-all"
            >
              👨‍🏫 Emitir Nota de Orientação
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-brand-border overflow-x-auto hide-scrollbar">
        {[
          { id: "resumo", label: "Resumo Clínico" },
          { id: "dados", label: "Dados Pessoais" },
          { id: "triagem", label: "Triagem & Prioridade" },
          { id: "checkins", label: "Check-ins" },
          { id: "teleconsultas", label: "Teleconsultas" },
          { id: "evolucoes", label: "Evoluções" },
          { id: "supervisao", label: "Supervisão" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
              activeTab === tab.id
                ? "border-brand-primary text-brand-primary-dark"
                : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content: Resumo (Default Layout) */}
      {activeTab === "resumo" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Session Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6">
            <h2 className="text-lg font-bold text-brand-text-main border-b border-brand-border pb-3 mb-4">Diário Clínico / Prontuário</h2>

            {notes.length === 0 ? (
              <div className="text-center py-16 text-brand-text-muted text-sm">
                Nenhuma sessão registrada para este caso.
              </div>
            ) : (
              <div className="space-y-6">
                {notes.map((note) => {
                  // Find related supervision notes for this note
                  const noteSupervisions = supervisions.filter(s => s.sessionNoteId === note.id);

                  return (
                    <div key={note.id} className="relative pl-6 border-l-2 border-brand-border space-y-3 pb-6 last:pb-0">
                      {/* Timeline dot */}
                      <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-brand-primary border-2 border-white shadow-sm" />

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-brand-text-main">
                            Sessão em {new Date(note.sessionDate).toLocaleDateString()}
                          </span>
                          {note.isAbsent ? (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-brand-danger-soft text-brand-danger border border-brand-danger/30">
                              Falta
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-brand-secondary-soft text-brand-secondary border border-brand-secondary/30">
                              Presença
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-brand-text-muted">Registrado por {note.professionalName}</span>
                      </div>

                      <p className="text-sm text-brand-text-main bg-brand-surface-soft p-4 rounded-xl border border-brand-border leading-relaxed font-medium">
                        {note.content}
                      </p>

                      {/* Cryptographic Hash for integrity */}
                      <div className="flex items-center gap-1.5 text-[9px] text-brand-text-muted font-mono select-all">
                        <span>🛡️ Assinatura de Integridade (SHA-256):</span>
                        <span className="bg-brand-surface-soft px-1 py-0.5 rounded text-brand-text-muted truncate max-w-[200px]" title={note.integrityHash}>
                          {note.integrityHash}
                        </span>
                      </div>

                      {/* Supervisor comments for this session */}
                      {noteSupervisions.length > 0 && (
                        <div className="space-y-2 pl-4">
                          {noteSupervisions.map(sup => (
                            <div key={sup.id} className="bg-brand-secondary-soft p-4 rounded-xl border border-brand-secondary/30 text-sm">
                              <div className="flex items-center justify-between mb-1.5 text-xs">
                                <span className="font-bold text-brand-secondary-dark">💡 Orientação de Supervisão</span>
                                <span className="text-brand-secondary font-medium">{sup.supervisorName}</span>
                              </div>
                              <p className="text-brand-text-main font-medium leading-relaxed">{sup.content}</p>
                              <span className="text-[10px] text-brand-text-muted mt-1 block">Registrado em {new Date(sup.createdAt).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Quick action for supervisors on this specific session */}
                      {user?.role === "SUPERVISOR" && noteSupervisions.length === 0 && (
                        <button
                          onClick={() => {
                            setSelectedNoteIdForSupervision(note.id);
                            setShowSupervisionModal(true);
                          }}
                          className="text-xs font-bold text-brand-secondary hover:text-brand-secondary-dark hover:underline mt-2 block"
                        >
                          + Responder / Orientar Sessão
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (1 Col): Patient and Acessibility details */}
        <div className="space-y-6">
          {/* Patient Card */}
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-brand-text-muted uppercase tracking-wider">Cadastro do Acolhido</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[10px] text-brand-text-muted block font-semibold">Contato</span>
                <span className="text-brand-text-main font-medium">{patient.phone}</span>
                <span className="text-brand-text-muted block text-xs truncate">{patient.email}</span>
              </div>
              <div>
                <span className="text-[10px] text-brand-text-muted block font-semibold">Idade</span>
                <span className="text-brand-text-main font-medium">
                  {new Date().getFullYear() - new Date(patient.birthDate).getFullYear()} anos ({new Date(patient.birthDate).toLocaleDateString()})
                </span>
              </div>
              {patient.responsibleName && (
                <div>
                  <span className="text-[10px] text-brand-text-muted block font-semibold">Responsável</span>
                  <span className="text-brand-text-main font-medium">{patient.responsibleName}</span>
                  <span className="text-brand-text-muted block text-xs">{patient.responsiblePhone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Box de Prioridade e Tomada de Decisão */}
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-brand-text-muted uppercase tracking-wider">Classificação de Prioridade</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-brand-text-muted font-semibold uppercase">Pontuação</span>
                <span className="font-bold text-brand-text-main">
                  Score: {patient.priorityScore ?? 0}/15
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-brand-text-muted font-semibold uppercase">Nível</span>
                <div>
                  {patient.priorityLevel === 'FAST_REVIEW' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-danger-soft text-brand-danger border border-brand-danger/30">
                      ⚡ Fast Review
                    </span>
                  )}
                  {patient.priorityLevel === 'HIGH' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-warning-soft text-brand-warning border border-brand-warning/30">
                      🔴 Alta
                    </span>
                  )}
                  {patient.priorityLevel === 'MODERATE' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary-soft text-brand-primary border border-brand-primary/30">
                      🟡 Moderada
                    </span>
                  )}
                  {patient.priorityLevel === 'LOW' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-secondary-soft text-brand-secondary border border-brand-secondary/30">
                      🟢 Baixa
                    </span>
                  )}
                </div>
              </div>

              {patient.priorityReasons && patient.priorityReasons.length > 0 && (
                <div>
                  <span className="text-[10px] text-brand-text-muted block font-semibold uppercase mb-1">Motivos de Atenção</span>
                  <ul className="list-disc pl-4 text-xs text-brand-text-muted space-y-1">
                    {patient.priorityReasons.map((reason, idx) => (
                      <li key={idx} className="leading-relaxed text-brand-text-main">{reason}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 border-t border-brand-border space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Revisão Clínica:</span>
                  {patient.priorityReviewStatus === 'PENDING' ? (
                    <span className="font-bold text-brand-warning">Pendente</span>
                  ) : patient.priorityReviewStatus === 'VALIDATED' ? (
                    <span className="font-bold text-brand-secondary">Validada</span>
                  ) : (
                    <span className="font-bold text-brand-primary">Revisada</span>
                  )}
                </div>
                {patient.priorityReviewedBy && (
                  <div className="text-[10px] text-brand-text-muted text-right">
                    Por: {patient.priorityReviewedBy}
                  </div>
                )}
              </div>

              <div className="bg-brand-warning-soft border border-brand-warning/20 rounded-lg p-2 text-[9px] text-brand-warning-dark leading-normal">
                ⚠️ Classificação administrativa de suporte à decisão de triagem, não constituindo parecer, prognóstico ou diagnóstico clínico nos termos do CFP.
              </div>
            </div>
          </div>

          {/* Current Wellbeing Check-in */}
          {patient.currentAuraState && (
            <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 space-y-4">
              <h3 className="text-sm font-extrabold text-brand-text-muted uppercase tracking-wider">Check-in Atual</h3>
              <WellbeingAura state={patient.currentAuraState} lastCheckInAt={patient.lastCheckInAt} compact={false} showDisclaimer={true} />
            </div>
          )}

          {/* Accessibility Profile */}
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-brand-text-muted uppercase tracking-wider">Preferências de Inclusão</h3>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[10px] text-brand-text-muted block font-semibold">Perfil Sensorial</span>
                <span className="text-brand-text-main font-medium bg-brand-surface-soft p-2 rounded-lg border border-brand-border block mt-1 leading-normal">
                  {patient.sensorySensitivities || "Nenhuma sensibilidade sensorial declarada."}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-brand-text-muted block font-semibold">Comunicação Preferida</span>
                <span className="text-brand-text-main font-medium bg-brand-surface-soft p-2 rounded-lg border border-brand-border block mt-1">
                  {patient.communicationPreference}
                </span>
              </div>
              {patient.hasNeurodivergence && (
                <div>
                  <span className="text-[10px] text-brand-warning-dark block font-bold">Autodeclaração Neurodivergente</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-warning-soft text-brand-warning border border-brand-warning/30 mt-1 inline-block">
                    {patient.neurodivergenceDetails || "Neurodivergente"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Tab Content: Evoluções */}
      {activeTab === "evolucoes" && (
        <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6">
          <h2 className="text-lg font-bold text-brand-text-main border-b border-brand-border pb-3 mb-4">Diário Clínico / Prontuário</h2>
          {notes.length === 0 ? (
            <div className="text-center py-16 text-brand-text-muted text-sm">
              Nenhuma sessão registrada para este caso.
            </div>
          ) : (
            <div className="space-y-6">
              {notes.map((note) => (
                <div key={note.id} className="relative pl-6 border-l-2 border-brand-border space-y-3 pb-6 last:pb-0">
                  <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-brand-primary border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-brand-text-main">
                      Sessão em {new Date(note.sessionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-brand-text-main bg-brand-surface-soft p-4 rounded-xl border border-brand-border">{note.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Outras abas mockadas (Check-ins, Teleconsultas) */}
      {["checkins", "teleconsultas", "dados", "triagem", "supervisao"].includes(activeTab) && (
        <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-12 text-center text-slate-500">
          <p>Conteúdo da aba em desenvolvimento para demonstração.</p>
        </div>
      )}

      {/* MODAL: Add Session Note */}
      {showEvolutionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-brand-border p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <h2 className="text-lg font-bold text-brand-text-main">Registrar Evolução de Sessão</h2>
              <button onClick={() => setShowEvolutionModal(false)} className="text-brand-text-muted hover:text-brand-text-main text-xl font-bold">×</button>
            </div>

            <form onSubmit={handleEvolutionSubmit} className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-brand-text-muted block">Acolhido</span>
                <span className="font-bold text-brand-text-main">{patient.name}</span>
              </div>

              <div>
                <label className="flex items-center gap-2 font-medium text-brand-text-main cursor-pointer mb-2">
                  <input
                    type="checkbox"
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                    className="rounded text-brand-primary focus:ring-brand-primary"
                  />
                  Paciente faltou à sessão? (Registrar falta)
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text-muted mb-1.5 uppercase">Relato Clínico (Evolução)</label>
                <textarea
                  value={evolutionContent}
                  onChange={(e) => setEvolutionContent(e.target.value)}
                  placeholder="Descreva a evolução do acolhido durante a sessão..."
                  rows={6}
                  className="w-full rounded-xl border border-brand-border py-2.5 px-3 text-brand-text-main bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary leading-normal"
                  required
                />
              </div>

              <div className="bg-brand-surface-soft p-3 rounded-xl border border-brand-border text-[10px] text-brand-text-muted leading-normal">
                🛡️ **Segurança LGPD:** Ao salvar, o sistema irá registrar irreversivelmente o log de acesso e criará uma assinatura criptográfica de integridade do relato (SHA-256). O relato não poderá ser editado retroativamente.
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-brand-border">
                <button
                  type="button"
                  onClick={() => setShowEvolutionModal(false)}
                  className="px-4 py-2 text-xs font-semibold bg-brand-surface hover:bg-brand-surface-soft text-brand-text-main rounded-xl border border-brand-border"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl shadow-sm"
                >
                  Salvar Registro Clínico
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Add Supervision Note */}
      {showSupervisionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-brand-border p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <h2 className="text-lg font-bold text-brand-text-main">Emitir Nota de Orientação</h2>
              <button onClick={() => setShowSupervisionModal(false)} className="text-brand-text-muted hover:text-brand-text-main text-xl font-bold">×</button>
            </div>

            <form onSubmit={handleSupervisionSubmit} className="space-y-4 text-sm">
              <div className="bg-brand-secondary-soft p-3 rounded-xl border border-brand-secondary/30">
                <span className="text-xs text-brand-secondary block font-bold">Emitir Orientação para</span>
                <span className="font-extrabold text-brand-secondary-dark">{patient.name}</span>
                {selectedNoteIdForSupervision && (
                  <span className="text-[10px] text-brand-secondary block mt-0.5">Orientação vinculada a uma sessão específica</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-text-muted mb-1.5 uppercase">Conteúdo do Parecer / Conduta Recomendada</label>
                <textarea
                  value={supervisionContent}
                  onChange={(e) => setSupervisionContent(e.target.value)}
                  placeholder="Escreva orientações de conduta clínica e recomendações para o profissional..."
                  rows={6}
                  className="w-full rounded-xl border border-brand-border py-2.5 px-3 text-brand-text-main bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary leading-normal"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-brand-border">
                <button
                  type="button"
                  onClick={() => setShowSupervisionModal(false)}
                  className="px-4 py-2 text-xs font-semibold bg-brand-surface hover:bg-brand-surface-soft text-brand-text-main rounded-xl border border-brand-border"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-brand-secondary hover:bg-brand-secondary-dark text-white rounded-xl shadow-sm"
                >
                  Registrar Orientação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetail;
