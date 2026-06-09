// frontend/src/pages/Formulario.tsx
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { savePatient } from "../data/mockData";
import HeaderMenu from "../components/shared/HeaderMenu";
import { Shield } from "lucide-react";

interface TriagemData {
  nome: string;
  email: string;
  telefone: string;
  birthDate: string;
  responsibleName?: string;
  responsiblePhone?: string;
  reasonForSeeking: string;
  availability: string;
  communicationPreference: string;
  hasNeurodivergence: boolean;
  neurodivergenceDetails?: string;
  sensorySensitivities?: string;
  needsAssistance: boolean;
  notes?: string;
  termo_aceite: boolean;
  
  // Perguntas do Motor de Priorização
  rotina: number;
  concentracao: number;
  sono: number;
  sobrecarga: number;
  apoio: number;
  urgencia: number;
}

const initialDraft: TriagemData = {
  nome: "",
  email: "",
  telefone: "",
  birthDate: "",
  responsibleName: "",
  responsiblePhone: "",
  reasonForSeeking: "",
  availability: "",
  communicationPreference: "Texto / WhatsApp",
  hasNeurodivergence: false,
  neurodivergenceDetails: "",
  sensorySensitivities: "",
  needsAssistance: false,
  notes: "",
  termo_aceite: false,
  rotina: 0,
  concentracao: 0,
  sono: 0,
  sobrecarga: 0,
  apoio: 0,
  urgencia: 0
};

const Formulario = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TriagemData>(initialDraft);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    const draft = localStorage.getItem("@NeuroAcolhe:triagemDraft");
    if (draft) {
      try {
        setFormData(JSON.parse(draft));
      } catch (e) {
        console.error("Erro ao carregar rascunho de triagem:", e);
      }
    }
  }, []);

  // Save draft to localStorage on change
  const updateField = (field: keyof TriagemData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem("@NeuroAcolhe:triagemDraft", JSON.stringify(updated));
  };

  const isMinor = () => {
    if (!formData.birthDate) return false;
    const birth = new Date(formData.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age < 18;
  };

  const nextStep = () => {
    // Validate current step fields
    if (step === 1) {
      if (!formData.nome || !formData.email || !formData.telefone || !formData.birthDate) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      if (isMinor() && (!formData.responsibleName || !formData.responsiblePhone)) {
        alert("Para menores de 18 anos, os dados do responsável são obrigatórios.");
        return;
      }
    } else if (step === 2) {
      if (!formData.reasonForSeeking || !formData.availability) {
        alert("Por favor, informe o motivo e sua disponibilidade.");
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 5) return;
    if (!formData.termo_aceite) {
      alert("Você deve aceitar o Termo de Consentimento LGPD para enviar.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Save to mock database
      savePatient({
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        birthDate: formData.birthDate,
        responsibleName: formData.responsibleName || undefined,
        responsiblePhone: formData.responsiblePhone || undefined,
        status: "RECEIVED",
        reasonForSeeking: formData.reasonForSeeking,
        availability: formData.availability,
        communicationPreference: formData.communicationPreference,
        hasNeurodivergence: formData.hasNeurodivergence,
        neurodivergenceDetails: formData.neurodivergenceDetails || undefined,
        sensorySensitivities: formData.sensorySensitivities || undefined,
        needsAssistance: formData.needsAssistance,
        notes: formData.notes || undefined,
        institutionId: "inst-horizonte", // Default for demo
        
        // Dados de priorização
        rotina: Number(formData.rotina),
        concentracao: Number(formData.concentracao),
        sono: Number(formData.sono),
        sobrecarga: Number(formData.sobrecarga),
        apoio: Number(formData.apoio),
        urgencia: Number(formData.urgencia)
      });

      // Clear draft
      localStorage.removeItem("@NeuroAcolhe:triagemDraft");
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col text-brand-text-main font-sans">
      <nav className="flex justify-between items-center p-6 md:px-12 relative z-50 border-b border-brand-border bg-white">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-extrabold text-brand-primary-dark no-underline flex items-center gap-1.5">
            <Shield className="text-brand-primary" size={24} /> NeuroAcolhe
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-brand-border p-1">
          <HeaderMenu variant="guest" />
        </div>
      </nav>

      <div className="flex-1 flex justify-center items-center p-6 relative z-10 max-w-4xl mx-auto w-full py-12">
        {showSuccess ? (
          <div className="bg-white text-brand-text-main rounded-3xl border border-brand-border p-8 max-w-md w-full shadow-lg text-center space-y-6">
            <div className="h-16 w-16 bg-brand-secondary-soft rounded-full flex items-center justify-center mx-auto text-brand-secondary text-3xl">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-brand-text-main">Triagem Recebida!</h2>
            <p className="text-brand-text-muted leading-relaxed text-sm font-medium">
              Sua triagem foi recebida com sucesso. A equipe do **NeuroAcolhe** fará a análise inicial e entrará em contato em breve usando a sua preferência de comunicação informada.
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-sm"
            >
              Voltar ao Início
            </button>
          </div>
        ) : (
          <div className="bg-white text-brand-text-main rounded-3xl border border-brand-border shadow-lg w-full max-w-xl p-8 space-y-6">
            {/* Form Header */}
            <div>
              <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">Passo {step} de 5</span>
              <h2 className="text-2xl font-black text-brand-text-main mt-1">Ficha de Triagem Inclusiva</h2>
              <div className="w-full bg-brand-surface-soft border border-brand-border h-2 rounded-full mt-4 overflow-hidden">
                <div 
                  className="bg-brand-primary h-full transition-all duration-300" 
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* STEP 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Dados Pessoais Básicos</h3>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Nome Completo *</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => updateField("nome", e.target.value)}
                      placeholder="Nome completo do paciente"
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">E-mail *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="Email de contato"
                        className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Telefone (DDD + Número) *</label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => updateField("telefone", e.target.value)}
                        placeholder="Ex: 11988887777"
                        className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Data de Nascimento *</label>
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => updateField("birthDate", e.target.value)}
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {isMinor() && (
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 space-y-3">
                      <span className="text-xs font-bold text-orange-800 block">Menor de 18 anos detectado. Preencha os dados do responsável legal:</span>
                      <div>
                        <label className="block text-xs font-semibold text-orange-700 mb-1">Nome do Responsável *</label>
                        <input
                          type="text"
                          value={formData.responsibleName}
                          onChange={(e) => updateField("responsibleName", e.target.value)}
                          className="w-full rounded-xl border border-orange-200 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-orange-700 mb-1">Telefone do Responsável *</label>
                        <input
                          type="tel"
                          value={formData.responsiblePhone}
                          onChange={(e) => updateField("responsiblePhone", e.target.value)}
                          className="w-full rounded-xl border border-orange-200 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: Reason and Availability */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Motivo e Horários</h3>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Por que busca atendimento? (Descreva de forma simples) *</label>
                    <textarea
                      value={formData.reasonForSeeking}
                      onChange={(e) => updateField("reasonForSeeking", e.target.value)}
                      placeholder="Conte brevemente os motivos pelos quais gostaria de acolhimento psicológico..."
                      rows={5}
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-normal"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Disponibilidade de Dias/Períodos *</label>
                    <input
                      type="text"
                      value={formData.availability}
                      onChange={(e) => updateField("availability", e.target.value)}
                      placeholder="Ex: Segundas-feiras à tarde, Sábados pela manhã"
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Questionário de Sobrecarga e Rotina */}
              {step === 3 && (
                <div className="space-y-4 text-slate-800">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Indicadores de Rotina e Sobrecarga</h3>
                  <p className="text-xs text-gray-500 leading-normal">
                    Este formulário ajuda a organizar a fila de acolhimento de forma transparente. Responda de acordo com a sua percepção atual nas últimas semanas.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Dificuldade na Rotina Diária *</label>
                      <select
                        value={formData.rotina}
                        onChange={(e) => updateField("rotina", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Nenhum impacto ou impacto mínimo nas minhas atividades</option>
                        <option value={1}>Impacto leve (consigo realizar com esforço extra)</option>
                        <option value={2}>Impacto moderado (tenho deixado de fazer algumas obrigações)</option>
                        <option value={3}>Impacto severo (dificuldade em realizar tarefas básicas diárias)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Dificuldade de Concentração ou Foco *</label>
                      <select
                        value={formData.concentracao}
                        onChange={(e) => updateField("concentracao", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Foco e atenção normais / Esquecimentos eventuais</option>
                        <option value={1}>Dificuldade moderada (dispersão constante que exige esforço)</option>
                        <option value={2}>Dificuldade acentuada (compromete o rendimento em estudos/trabalho)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Qualidade do Sono *</label>
                      <select
                        value={formData.sono}
                        onChange={(e) => updateField("sono", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Sono regular e reparador na maior parte das noites</option>
                        <option value={1}>Dificuldade eventual de pegar no sono ou sono agitado</option>
                        <option value={2}>Prejuízo acentuado (insônia frequente ou sono muito interrompido)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Sobrecarga Emocional Percebida *</label>
                      <select
                        value={formData.sobrecarga}
                        onChange={(e) => updateField("sobrecarga", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Sinto-me tranquilo(a) ou com estresse leve sob controle</option>
                        <option value={1}>Estresse moderado (consigo gerenciar as pressões)</option>
                        <option value={2}>Sobrecarga elevada (sinto-me esgotado(a) com frequência)</option>
                        <option value={3}>Esgotamento extremo (dificuldade de lidar com as demandas diárias)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Rede de Apoio Familiar e Social *</label>
                      <select
                        value={formData.apoio}
                        onChange={(e) => updateField("apoio", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Tenho pessoas próximas (amigos/família) que me apoiam ativamente</option>
                        <option value={1}>Tenho apoio limitado ou poucas pessoas com quem contar</option>
                        <option value={2}>Sinto-me isolado(a) / Sem rede de apoio sociofamiliar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nível de Urgência Percebido por Você *</label>
                      <select
                        value={formData.urgencia}
                        onChange={(e) => updateField("urgencia", Number(e.target.value))}
                        className="w-full rounded-xl border border-gray-300 py-2 px-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Baixa (consigo aguardar o fluxo normal da fila de espera)</option>
                        <option value={1}>Média (gostaria de iniciar o atendimento assim que possível)</option>
                        <option value={2}>Alta (necessidade importante de atendimento rápido)</option>
                        <option value={3}>Muito Alta (necessidade de acolhimento profissional muito urgente)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Accessibility Profile */}
              {step === 4 && (
                <div className="space-y-4 text-slate-800">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Perfil de Acessibilidade</h3>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <span className="block text-sm font-semibold text-gray-800">Autodeclaração Neurodivergente</span>
                      <span className="text-xs text-gray-400">Você possui diagnóstico de autismo, TDAH ou dislexia?</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateField("hasNeurodivergence", !formData.hasNeurodivergence)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.hasNeurodivergence ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.hasNeurodivergence ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {formData.hasNeurodivergence && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Detalhes (Opcional)</label>
                      <input
                        type="text"
                        value={formData.neurodivergenceDetails}
                        onChange={(e) => updateField("neurodivergenceDetails", e.target.value)}
                        placeholder="Ex: TDAH, Autismo nível 1 de suporte"
                        className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Como prefere que entremos em contato com você?</label>
                    <select
                      value={formData.communicationPreference}
                      onChange={(e) => updateField("communicationPreference", e.target.value)}
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Texto / WhatsApp">Mensagem escrita (WhatsApp)</option>
                      <option value="E-mail">E-mail</option>
                      <option value="Ligação telefônica">Ligação Telefônica tradicional</option>
                      <option value="Mensagem de Áudio">Áudio via WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Sensibilidade Sensorial (Opcional)</label>
                    <input
                      type="text"
                      value={formData.sensorySensitivities}
                      onChange={(e) => updateField("sensorySensitivities", e.target.value)}
                      placeholder="Ex: Sensibilidade a luzes fortes, barulhos repentinos"
                      className="w-full rounded-xl border border-gray-300 py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <span className="block text-sm font-semibold text-gray-800">Precisa de Apoio no Preenchimento</span>
                      <span className="text-xs text-gray-400">Solicitar suporte de leitura ou simplificação cognitiva?</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateField("needsAssistance", !formData.needsAssistance)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.needsAssistance ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.needsAssistance ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: Legal Consent (LGPD) */}
              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Consentimento LGPD</h3>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed text-justify space-y-2 max-h-48 overflow-y-auto">
                    <strong className="block text-slate-800 font-bold mb-1">Termo de Consentimento para Tratamento de Dados (LGPD)</strong>
                    <p>
                      Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/18), autorizo o NeuroAcolhe e a clínica parceira a coletar e tratar os dados de saúde descritos neste formulário.
                    </p>
                    <p>
                      Essas informações serão mantidas sob sigilo profissional estrito e serão acessadas unicamente pela coordenação administrativa e pelos profissionais clínicos designados para fins de triagem de admissão e acompanhamento. Posso solicitar a exclusão de meus dados de triagem a qualquer momento, salvo as obrigações legais de manutenção de prontuário clínico.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="termo_aceite"
                      type="checkbox"
                      checked={formData.termo_aceite}
                      onChange={(e) => updateField("termo_aceite", e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer"
                      required
                    />
                    <label htmlFor="termo_aceite" className="text-sm text-gray-700 font-medium select-none cursor-pointer leading-relaxed">
                      Li e concordo com o Termo de Tratamento de Dados Pessoais de Saúde Sensíveis.
                    </label>
                  </div>
                </div>
              )}

              {/* Footer navigation */}
              <div className="flex gap-3 pt-6 border-t border-brand-border mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border border-brand-border hover:bg-brand-surface-soft text-brand-text-main font-bold py-3 rounded-xl transition-all"
                  >
                    Voltar
                  </button>
                )}
                {step < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-sm"
                  >
                    Avançar Passo
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-sm disabled:opacity-75"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Triagem"}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formulario;
