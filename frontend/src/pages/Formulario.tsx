// frontend/src/pages/Formulario.tsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { savePatient } from "../data/mockData";
import { AlertCircle, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import OptionChip from "../components/triagem/OptionChip";
import StepperHeader from "../components/triagem/StepperHeader";
import AvailabilitySelector, { AvailabilityData } from "../components/triagem/AvailabilitySelector";
import AccessibilityBlock from "../components/triagem/AccessibilityBlock";
import SummaryCard from "../components/triagem/SummaryCard";
import SuccessScreen from "../components/triagem/SuccessScreen";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TriagemData {
  nome: string;
  email: string;
  telefone: string;
  birthDate: string;
  responsibleName?: string;
  responsiblePhone?: string;
  institutionOrClinic: string;
  relationship: string;

  reasonForSeeking: string;
  reasonExplanation?: string;
  availabilityPeriod: string;
  availabilityDays: string;
  availabilityModality: string;

  rotina: number;
  concentracao: number;
  sono: number;
  sobrecarga: number;
  apoio: number;
  urgencia: number;

  hasCondition: boolean | null;
  communicationPreference: string;
  adaptations: string[];
  additionalNeeds?: string;

  termo_aceite: boolean;
}

const initialDraft: TriagemData = {
  nome: "",
  email: "",
  telefone: "",
  birthDate: "",
  institutionOrClinic: "",
  relationship: "",
  responsibleName: "",
  responsiblePhone: "",

  reasonForSeeking: "",
  reasonExplanation: "",
  availabilityPeriod: "",
  availabilityDays: "",
  availabilityModality: "",

  rotina: -1,
  concentracao: -1,
  sono: -1,
  sobrecarga: -1,
  apoio: -1,
  urgencia: -1,

  hasCondition: null,
  communicationPreference: "",
  adaptations: [],
  additionalNeeds: "",

  termo_aceite: false,
};

// ─── Step 3 questions ─────────────────────────────────────────────────────────

const step3Questions = [
  {
    field: "rotina" as keyof TriagemData,
    label: "Como está sua rotina nas últimas semanas?",
    options: [
      "Consigo realizar minhas atividades normalmente",
      "Tenho feito o necessário, mas com esforço extra",
      "Tenho deixado tarefas importantes de lado",
      "Está muito difícil realizar até atividades básicas",
    ],
  },
  {
    field: "concentracao" as keyof TriagemData,
    label: "Como está sua concentração?",
    options: [
      "Sinto que meu foco está normal",
      "Sinto a mente dispersa, preciso me esforçar mais para focar",
      "Tenho muita dificuldade de concentração, isso tem me prejudicado",
    ],
  },
  {
    field: "sono" as keyof TriagemData,
    label: "Como está seu sono?",
    options: [
      "Tenho dormido bem e acordo com energia",
      "Meu sono tem sido agitado ou demoro para dormir",
      "Tenho dormido muito mal ou sinto exaustão constante",
    ],
  },
  {
    field: "sobrecarga" as keyof TriagemData,
    label: "Como está sua sensação de sobrecarga?",
    options: [
      "Sinto-me tranquilo(a) ou lidando bem com os desafios",
      "Sinto algum estresse, mas consigo gerenciar",
      "Sinto-me muito sobrecarregado(a) frequentemente",
      "Sinto que cheguei ao meu limite",
    ],
  },
  {
    field: "apoio" as keyof TriagemData,
    label: "Você sente que tem com quem contar?",
    options: [
      "Tenho pessoas próximas com quem posso contar sempre",
      "Tenho algum apoio, mas às vezes me sinto sozinho(a)",
      "Sinto-me isolado(a) e sem ter com quem conversar",
    ],
  },
  {
    field: "urgencia" as keyof TriagemData,
    label: "Como você percebe a urgência do acolhimento?",
    options: [
      "Posso aguardar os prazos normais sem problemas",
      "Gostaria de iniciar em breve, mas consigo esperar",
      "Preciso muito de ajuda o quanto antes",
      "Estou em muito sofrimento e preciso de atenção urgente",
    ],
  },
];

const reasonOptions = [
  "Organização da rotina",
  "Sobrecarga emocional",
  "Dificuldade de concentração",
  "Sono ou cansaço",
  "Relacionamentos",
  "Adaptação aos estudos/trabalho",
  "Acompanhamento contínuo",
  "Outro",
];

const stepSubtitles: Record<number, string> = {
  1: "Vamos começar com algumas informações básicas.",
  2: "Nos ajude a entender o que trouxe você até aqui.",
  3: "Responda com base em como você tem se sentido nas últimas semanas.",
  4: "Queremos que seu acolhimento seja o mais confortável possível.",
  5: "Revise suas informações antes de enviar.",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Formulario = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [formData, setFormData] = useState<TriagemData>(initialDraft);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // ── Persist draft ──────────────────────────────────────────────────────────
  useEffect(() => {
    const draft = localStorage.getItem("@Nura:triagemDraftV3");
    if (draft) {
      try {
        setFormData(JSON.parse(draft));
      } catch (e) {
        console.error("Erro ao carregar rascunho de triagem:", e);
      }
    }
  }, []);

  const updateField = (field: keyof TriagemData, value: unknown) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem("@Nura:triagemDraftV3", JSON.stringify(updated));
    setErrorMsg("");
  };

  const toggleAdaptation = (adaptation: string) => {
    let current = [...formData.adaptations];
    if (current.includes(adaptation)) {
      current = current.filter((a) => a !== adaptation);
    } else {
      current.push(adaptation);
    }
    updateField("adaptations", current);
  };

  // ── Availability helper ────────────────────────────────────────────────────
  const availabilityData: AvailabilityData = {
    period: formData.availabilityPeriod,
    days: formData.availabilityDays,
    modality: formData.availabilityModality,
  };

  const handleAvailabilityChange = (data: AvailabilityData) => {
    const updated = {
      ...formData,
      availabilityPeriod: data.period,
      availabilityDays: data.days,
      availabilityModality: data.modality,
    };
    setFormData(updated);
    localStorage.setItem("@Nura:triagemDraftV3", JSON.stringify(updated));
    setErrorMsg("");
  };

  // ── Utilities ──────────────────────────────────────────────────────────────
  const isMinor = () => {
    if (!formData.birthDate) return false;
    const birth = new Date(formData.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age < 18;
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const scrollTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => errorRef.current?.focus(), 100);
  };

  // ── Navigation ─────────────────────────────────────────────────────────────
  const nextStep = () => {
    setErrorMsg("");

    if (step === 1) {
      if (
        !formData.nome ||
        !formData.email ||
        !formData.telefone ||
        !formData.birthDate ||
        !formData.institutionOrClinic ||
        !formData.relationship
      ) {
        showError("Por favor, preencha todos os campos obrigatórios para avançar.");
        return;
      }
      if (!validateEmail(formData.email)) {
        showError("E-mail inválido. Por favor, verifique.");
        return;
      }
      if (formData.telefone.length < 10) {
        showError("Telefone incompleto.");
        return;
      }
      if (isMinor() && (!formData.responsibleName || !formData.responsiblePhone)) {
        showError("Para menores de 18 anos, os dados do responsável são obrigatórios.");
        return;
      }
    } else if (step === 2) {
      if (!formData.reasonForSeeking) {
        showError("Selecione o motivo que mais se aproxima da sua busca.");
        return;
      }
      if (!formData.availabilityPeriod || !formData.availabilityDays || !formData.availabilityModality) {
        showError("Selecione uma opção em cada grupo de disponibilidade: período, dias e modalidade.");
        return;
      }
    } else if (step === 3) {
      const unanswered = step3Questions.some((q) => (formData[q.field] as number) < 0);
      if (unanswered) {
        showError("Por favor, responda todas as perguntas para avançar.");
        return;
      }
    } else if (step === 4) {
      if (!formData.communicationPreference) {
        showError("Selecione sua preferência de contato.");
        return;
      }
      if (formData.hasCondition === null) {
        showError("Responda a pergunta sobre acessibilidade para continuar.");
        return;
      }
    }

    setSubStep(0);
    setStep(step + 1);
    scrollTop();
  };

  const prevStep = () => {
    setErrorMsg("");
    setSubStep(0);
    setStep(step - 1);
    scrollTop();
  };

  // ── Sub-step navigation (step 3) ───────────────────────────────────────────
  const nextSubStep = () => {
    const currentField = step3Questions[subStep].field;
    if ((formData[currentField] as number) < 0) {
      showError("Selecione uma opção antes de continuar.");
      return;
    }
    setErrorMsg("");
    setSubStep((s) => s + 1);
    scrollTop();
  };

  const prevSubStep = () => {
    setErrorMsg("");
    setSubStep((s) => s - 1);
    scrollTop();
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 5) return;
    if (!formData.termo_aceite) {
      showError("Você deve concordar com o uso dos dados para fins de triagem para prosseguir.");
      return;
    }

    setIsSubmitting(true);

    const availabilityStr = [formData.availabilityPeriod, formData.availabilityDays, formData.availabilityModality]
      .filter(Boolean)
      .join(" · ");

    setTimeout(() => {
      savePatient({
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        birthDate: formData.birthDate,
        responsibleName: formData.responsibleName || undefined,
        responsiblePhone: formData.responsiblePhone || undefined,
        status: "RECEIVED",
        reasonForSeeking:
          formData.reasonForSeeking + (formData.reasonExplanation ? ` - ${formData.reasonExplanation}` : ""),
        availability: availabilityStr,
        communicationPreference: formData.communicationPreference,
        hasNeurodivergence: formData.hasCondition ?? false,
        sensorySensitivities: formData.adaptations.join(", ") || undefined,
        needsAssistance: formData.adaptations.includes("Preciso de apoio no preenchimento"),
        notes: formData.additionalNeeds || undefined,
        institutionId: "inst-horizonte",
        rotina: formData.rotina,
        concentracao: formData.concentracao,
        sono: formData.sono,
        sobrecarga: formData.sobrecarga,
        apoio: formData.apoio,
        urgencia: formData.urgencia,
      });

      localStorage.removeItem("@Nura:triagemDraftV3");
      setIsSubmitting(false);
      setShowSuccess(true);
      scrollTop();
    }, 1200);
  };

  // ── Step names ─────────────────────────────────────────────────────────────
  const stepNames = [
    "Dados básicos",
    "Motivo e disponibilidade",
    "Rotina e bem-estar",
    "Acessibilidade e comunicação",
    "Consentimento e envio",
  ];

  // ── Inline scale radio ─────────────────────────────────────────────────────
  const ScaleOption = ({
    field,
    idx,
    label,
  }: {
    field: keyof TriagemData;
    idx: number;
    label: string;
  }) => {
    const isSelected = (formData[field] as number) === idx;
    return (
      <button
        type="button"
        onClick={() => {
          updateField(field, idx);
          // Auto-advance to next sub-step after selection (with delay), respecting reduced motion
          if (subStep < step3Questions.length - 1) {
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const delay = reducedMotion ? 0 : 400;
            setTimeout(() => {
              setErrorMsg("");
              setSubStep((s) => s + 1);
              scrollTop();
            }, delay);
          }
        }}
        className={`
          w-full flex items-start gap-3 text-sm text-left px-4 py-3.5 rounded-xl border-2 transition-all
          min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1
          ${
            isSelected
              ? "bg-teal-50 border-teal-400 text-teal-800 font-semibold shadow-sm"
              : "bg-white border-slate-200 text-slate-600 hover:bg-teal-50/40 hover:border-teal-200"
          }
        `}
        aria-pressed={isSelected}
      >
        <span
          className={`
            mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
            ${isSelected ? "border-teal-500 bg-teal-500" : "border-slate-300"}
          `}
          aria-hidden="true"
        >
          {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
        </span>
        <span className="flex-1 leading-snug">{label}</span>
      </button>
    );
  };

  // ── Input class helper ─────────────────────────────────────────────────────
  const inputCls =
    "w-full rounded-xl border border-slate-200 py-3 px-4 text-slate-900 text-sm bg-white " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:border-teal-400 " +
    "transition-all placeholder:text-slate-400";

  const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #f5f3ff 100%)" }}
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50
          bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
      >
        Pular para conteúdo principal
      </a>

      {/* ── Minimal nav ─────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-lg font-extrabold text-slate-800 hover:text-teal-600 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg px-1"
          aria-label="Voltar para início - Nura"
        >
          Nura
        </button>
        {!showSuccess && (
          <span className="text-xs text-slate-400 font-semibold">
            Passo {step} de 5
          </span>
        )}
      </nav>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <main
        id="main-content"
        ref={topRef}
        className="flex-1 flex flex-col items-center px-4 py-10 pb-32 sm:pb-12"
      >
        <div className="w-full max-w-xl">
          {showSuccess ? (
            <SuccessScreen
              communicationPreference={formData.communicationPreference}
              patientName={formData.nome}
            />
          ) : (
            <div className="space-y-6">
              {/* ── Stepper ─────────────────────────────────────────────── */}
              <StepperHeader
                step={step}
                total={5}
                stepName={stepNames[step - 1]}
                stepSubtitle={stepSubtitles[step]}
                estimatedTime={step === 1 ? "Leva cerca de 3 minutos" : undefined}
                subStep={step === 3 ? subStep : undefined}
                subStepTotal={step === 3 ? step3Questions.length : undefined}
              />

              {/* ── Error message ────────────────────────────────────────── */}
              {errorMsg && (
                <div
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  aria-live="polite"
                  className="bg-rose-50 text-rose-700 p-4 rounded-xl border border-rose-100 flex gap-3 items-start animate-in fade-in duration-200"
                >
                  <AlertCircle className="shrink-0 w-5 h-5 mt-0.5" aria-hidden="true" />
                  <span className="text-sm font-medium">{errorMsg}</span>
                </div>
              )}

              {/* ── Form ───────────────────────────────────────────────── */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="p-6 sm:p-8">

                  {/* ════════════ STEP 1 — Dados básicos ════════════ */}
                  {step === 1 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div>
                        <label htmlFor="nome" className={labelCls}>
                          Nome completo <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="nome"
                          type="text"
                          autoComplete="name"
                          value={formData.nome}
                          onChange={(e) => updateField("nome", e.target.value)}
                          placeholder="Seu nome completo"
                          className={inputCls}
                          aria-required="true"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className={labelCls}>
                            E-mail <span className="text-rose-400">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            placeholder="seu@email.com"
                            className={inputCls}
                            aria-required="true"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone" className={labelCls}>
                            Telefone / WhatsApp <span className="text-rose-400">*</span>
                          </label>
                          <input
                            id="telefone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.telefone}
                            onChange={(e) => updateField("telefone", e.target.value)}
                            placeholder="(DD) 90000-0000"
                            className={inputCls}
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="birthDate" className={labelCls}>
                            Data de nascimento <span className="text-rose-400">*</span>
                          </label>
                          <input
                            id="birthDate"
                            type="date"
                            autoComplete="bday"
                            value={formData.birthDate}
                            onChange={(e) => updateField("birthDate", e.target.value)}
                            className={inputCls}
                            aria-required="true"
                          />
                        </div>
                        <div>
                          <label htmlFor="relationship" className={labelCls}>
                            Vínculo <span className="text-rose-400">*</span>
                          </label>
                          <select
                            id="relationship"
                            value={formData.relationship}
                            onChange={(e) => updateField("relationship", e.target.value)}
                            className={inputCls}
                            aria-required="true"
                          >
                            <option value="">Selecione...</option>
                            <option value="Paciente particular">Paciente particular</option>
                            <option value="Aluno/Estudante">Aluno / Estudante</option>
                            <option value="Colaborador">Colaborador / Funcionário</option>
                            <option value="Outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="institution" className={labelCls}>
                          Instituição / Clínica vinculada <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="institution"
                          type="text"
                          value={formData.institutionOrClinic}
                          onChange={(e) => updateField("institutionOrClinic", e.target.value)}
                          placeholder="Nome da clínica ou instituição"
                          className={inputCls}
                          aria-required="true"
                        />
                      </div>

                      {isMinor() && (
                        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 space-y-3 animate-in fade-in duration-200">
                          <p className="text-sm font-bold text-amber-800 flex items-center gap-2">
                            <AlertCircle size={16} aria-hidden="true" />
                            Dados do Responsável Legal (obrigatório)
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              value={formData.responsibleName}
                              onChange={(e) => updateField("responsibleName", e.target.value)}
                              placeholder="Nome do responsável"
                              className={inputCls}
                              aria-label="Nome do responsável legal"
                              aria-required="true"
                            />
                            <input
                              type="tel"
                              value={formData.responsiblePhone}
                              onChange={(e) => updateField("responsiblePhone", e.target.value)}
                              placeholder="Telefone do responsável"
                              className={inputCls}
                              aria-label="Telefone do responsável legal"
                              aria-required="true"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ════════════ STEP 2 — Motivo e Disponibilidade ════════════ */}
                  {step === 2 && (
                    <div className="space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      {/* Motivo */}
                      <div className="space-y-3">
                        <label className={labelCls}>
                          Qual opção mais se aproxima do motivo da sua busca?{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <div
                          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                          role="radiogroup"
                          aria-label="Motivo da busca"
                        >
                          {reasonOptions.map((reason) => (
                            <OptionChip
                              key={reason}
                              value={reason}
                              selected={formData.reasonForSeeking === reason}
                              onSelect={(val) => updateField("reasonForSeeking", val)}
                            >
                              {reason}
                            </OptionChip>
                          ))}
                        </div>
                      </div>

                      {/* Campo aberto */}
                      <div className="space-y-2">
                        <label htmlFor="reason-explanation" className={labelCls}>
                          Quer explicar algo com suas palavras?{" "}
                          <span className="text-slate-400 font-normal">(Opcional)</span>
                        </label>
                        <textarea
                          id="reason-explanation"
                          value={formData.reasonExplanation}
                          onChange={(e) => updateField("reasonExplanation", e.target.value)}
                          placeholder="Fique à vontade para detalhar um pouco mais..."
                          rows={3}
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* Disponibilidade */}
                      <div className="space-y-3 pt-5 border-t border-slate-100">
                        <div>
                          <p className={labelCls}>
                            Qual a sua disponibilidade para encontros?{" "}
                            <span className="text-rose-400">*</span>
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">Selecione uma opção em cada grupo.</p>
                        </div>
                        <AvailabilitySelector
                          value={availabilityData}
                          onChange={handleAvailabilityChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* ════════════ STEP 3 — Rotina e bem-estar (mini-quiz) ════════════ */}
                  {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      {(() => {
                        const q = step3Questions[subStep];
                        return (
                          <div className="space-y-5" key={subStep}>
                            <div>
                              <p className="text-base font-bold text-slate-800 leading-snug">{q.label}</p>
                            </div>

                            <div
                              className="flex flex-col gap-2.5"
                              role="radiogroup"
                              aria-label={q.label}
                            >
                              {q.options.map((opt, idx) => (
                                <ScaleOption
                                  key={idx}
                                  field={q.field}
                                  idx={idx}
                                  label={opt}
                                />
                              ))}
                            </div>

                            {/* Sub-step navigation */}
                            <div className="flex items-center justify-between pt-2">
                              {subStep > 0 ? (
                                <button
                                  type="button"
                                  onClick={prevSubStep}
                                  className="flex items-center gap-1.5 text-sm text-slate-500 font-semibold
                                    hover:text-slate-700 transition-colors px-3 py-2 rounded-xl hover:bg-slate-100
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                                >
                                  <ChevronLeft size={16} /> Anterior
                                </button>
                              ) : (
                                <div />
                              )}
                              {subStep < step3Questions.length - 1 && (
                                <button
                                  type="button"
                                  onClick={nextSubStep}
                                  className="flex items-center gap-1.5 text-sm bg-teal-600 hover:bg-teal-700
                                    text-white font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"
                                >
                                  Próxima <ChevronRight size={16} />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* ════════════ STEP 4 — Acessibilidade ════════════ */}
                  {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <AccessibilityBlock
                        hasCondition={formData.hasCondition}
                        adaptations={formData.adaptations}
                        communicationPreference={formData.communicationPreference}
                        additionalNeeds={formData.additionalNeeds || ""}
                        onHasConditionChange={(val) => {
                          updateField("hasCondition", val);
                          if (!val) updateField("adaptations", []);
                        }}
                        onAdaptationToggle={toggleAdaptation}
                        onCommunicationChange={(val) => updateField("communicationPreference", val)}
                        onAdditionalNeedsChange={(val) => updateField("additionalNeeds", val)}
                      />
                    </div>
                  )}

                  {/* ════════════ STEP 5 — Consentimento ════════════ */}
                  {step === 5 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      {/* Summary */}
                      <SummaryCard
                        nome={formData.nome}
                        telefone={formData.telefone}
                        email={formData.email}
                        reasonForSeeking={formData.reasonForSeeking}
                        availabilityPeriod={formData.availabilityPeriod}
                        availabilityDays={formData.availabilityDays}
                        availabilityModality={formData.availabilityModality}
                        communicationPreference={formData.communicationPreference}
                        hasCondition={formData.hasCondition}
                        adaptations={formData.adaptations}
                      />

                      {/* LGPD */}
                      <div className="bg-teal-50/60 p-5 rounded-xl border border-teal-100 space-y-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          Seus dados serão usados apenas para organizar o acolhimento e permitir que a equipe
                          responsável entre em contato. Você poderá solicitar atualização ou remoção dos seus
                          dados conforme as regras aplicáveis.
                        </p>
                        <label className="flex items-start gap-3 cursor-pointer group" htmlFor="termo">
                          <div className="relative flex items-center justify-center mt-0.5 flex-shrink-0">
                            <input
                              id="termo"
                              type="checkbox"
                              checked={formData.termo_aceite}
                              onChange={(e) => updateField("termo_aceite", e.target.checked)}
                              className="peer appearance-none w-6 h-6 border-2 border-teal-300 rounded-lg
                                checked:bg-teal-600 checked:border-teal-600 transition-all cursor-pointer
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"
                              aria-required="true"
                            />
                            <CheckCircle2 className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" aria-hidden="true" />
                          </div>
                          <span className="text-sm text-slate-700 font-semibold select-none group-hover:text-teal-700 transition-colors leading-snug">
                            Li e concordo com o uso dos meus dados para fins de triagem e acolhimento.
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Navigation buttons ───────────────────────────────────── */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <div className="border-t border-slate-100 pt-5 flex gap-3">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center justify-center gap-1.5 px-5 border border-slate-200
                          text-slate-500 font-semibold py-3.5 rounded-xl hover:bg-slate-50 hover:text-slate-700
                          transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-1"
                        aria-label="Voltar ao passo anterior"
                      >
                        <ChevronLeft size={18} aria-hidden="true" />
                        <span className="hidden sm:inline">Voltar</span>
                      </button>
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={step === 3 && subStep < step3Questions.length - 1 ? nextSubStep : nextStep}
                        className="flex-1 flex items-center justify-center gap-2
                          bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl
                          transition-all shadow-sm
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"
                      >
                        {step === 3 && subStep < step3Questions.length - 1 ? "Próxima pergunta" : "Próximo passo"}
                        <ChevronRight size={18} aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2
                          bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl
                          transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"
                        aria-label={isSubmitting ? "Enviando triagem..." : "Enviar triagem"}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" aria-hidden="true" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar triagem
                            <ChevronRight size={18} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>

              {/* Mobile sticky hint */}
              <p className="text-center text-xs text-slate-400 mt-2">
                Seus dados são salvos automaticamente.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Mobile sticky bottom nav */}
      <style>{`
        @media (max-width: 639px) {
          #main-content form > div:last-child {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid #f1f5f9;
            padding: 12px 16px;
            padding-bottom: max(12px, env(safe-area-inset-bottom));
            z-index: 40;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-in { animation: none !important; }
          .animate-ping { animation: none !important; }
          .animate-spin { animation: none !important; }
          * { transition-duration: 0.001ms !important; }
        }
      `}</style>
    </div>
  );
};

export default Formulario;
