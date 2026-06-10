import { useNavigate, Link } from "react-router-dom";
import { 
  Shield, 
  ClipboardList, 
  Users, 
  HeartPulse, 
  Calendar, 
  Bell, 
  Lock, 
  CheckCircle2, 
  Activity, 
  MessageCircle, 
  BarChart3 
} from "lucide-react";
import WellbeingAura from "../components/WellbeingAura";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-x-hidden flex flex-col font-sans text-slate-800">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-tight text-brand-primary-dark flex items-center gap-2">
            Nura
          </span>
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#como-funciona" className="text-slate-600 font-medium text-sm hover:text-brand-primary transition-colors">
              Como funciona
            </a>
            <a href="#instituicoes" className="text-slate-600 font-medium text-sm hover:text-brand-primary transition-colors">
              Para instituições
            </a>
            <a href="#pacientes" className="text-slate-600 font-medium text-sm hover:text-brand-primary transition-colors">
              Para pacientes
            </a>
            <a href="#seguranca" className="text-slate-600 font-medium text-sm hover:text-brand-primary transition-colors">
              Segurança
            </a>
          </div>
        </div>

        <Link
          to="/login"
          className="bg-brand-primary text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-brand-primary-dark transition-colors shadow-sm"
        >
          Acessar plataforma
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        
        {/* Decorative Background for Hero */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200 tracking-widest uppercase mb-2">
            Programa Centelha Inovação
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Acolhimento psicológico com mais <span className="text-brand-primary">organização</span>, acesso e continuidade
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            A Nura ajuda clínicas e instituições a organizar triagens, priorizar acolhimentos, acompanhar pacientes e fortalecer o vínculo com check-ins, teleconsulta e comunicação segura.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button
              className="bg-brand-primary text-white py-4 px-8 text-base font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              onClick={() => navigate("/triagem")}
            >
              Iniciar triagem
            </button>
            <a
              href="#como-funciona"
              className="bg-white text-slate-700 border border-slate-300 py-4 px-8 text-base font-bold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              Conhecer a plataforma
            </a>
          </div>
        </div>

        {/* Dynamic Visual Mockup */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative flex justify-center lg:justify-end z-10">
          <div className="w-full max-w-lg bg-slate-50/50 backdrop-blur-sm rounded-[2rem] p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
            
            {/* Mockup Top Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4 transform transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-warning/10 flex items-center justify-center text-brand-warning">
                    <ClipboardList size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Nova triagem recebida</h3>
                    <p className="text-xs text-slate-500">Há 5 minutos</p>
                  </div>
                </div>
                <span className="bg-brand-warning-soft text-brand-warning-dark border border-brand-warning/20 text-[10px] font-bold px-2 py-1 rounded-full">
                  Risco Moderado
                </span>
              </div>
              <div className="h-2 w-3/4 bg-slate-100 rounded-full mb-2"></div>
              <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Mockup Aura Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Check-in Atual</span>
                <div className="scale-75 origin-center">
                  <WellbeingAura state="LIGHT" compact={true} />
                </div>
              </div>

              {/* Mockup Next Appointment Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center transform transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-brand-secondary" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Próximo Encontro</span>
                </div>
                <p className="font-bold text-slate-800 text-sm">Teleconsulta de Acolhimento</p>
                <p className="text-xs text-slate-500 mt-1">Hoje, 15:00</p>
                <div className="mt-3 w-full bg-brand-secondary/10 text-brand-secondary-dark text-xs font-bold py-1.5 rounded-lg text-center">
                  Confirmada
                </div>
              </div>
            </div>

            {/* Mockup Floating Status Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-pulse">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <p className="text-xs font-bold text-slate-700">Acompanhamento contínuo ativo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como a Nura funciona */}
      <section id="como-funciona" className="py-24 bg-white border-y border-slate-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Como a Nura funciona</h2>
            <p className="text-slate-600">Uma jornada integrada desde o primeiro contato até o acompanhamento contínuo, focada na escuta e nos dados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {[
              { icon: <Users />, title: "Triagem inclusiva", desc: "Formulários acessíveis e adaptados." },
              { icon: <BarChart3 />, title: "Priorização responsável", desc: "Motor inteligente de fila baseado em risco." },
              { icon: <Activity />, title: "Jornada do paciente", desc: "Visibilidade total dos passos do tratamento." },
              { icon: <HeartPulse />, title: "Acompanhamento", desc: "Prontuário com evolução e supervisão." },
              { icon: <Shield />, title: "Segurança e LGPD", desc: "Auditoria contínua de acessos." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center bg-white">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary-soft text-brand-primary-dark flex items-center justify-center mb-4 shadow-sm border border-brand-primary/20">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para instituições & Para pacientes */}
      <section className="py-24 bg-slate-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Para Instituições */}
          <div id="instituicoes" className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
              <ClipboardList size={24} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Para Instituições</h2>
            <p className="text-slate-600 mb-8">Gestão eficiente e segura para clínicas e serviços de saúde mental.</p>
            <ul className="space-y-4">
              {[
                "Organização inteligente da fila de espera",
                "Painel de prioridades por risco",
                "Gestão de teleconsultas e agenda",
                "Acompanhamento de check-ins diários",
                "Alertas clínicos e evolução supervisionada",
                "Auditoria completa de LGPD"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-brand-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Para Pacientes */}
          <div id="pacientes" className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
              <Users size={24} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Para Pacientes</h2>
            <p className="text-slate-600 mb-8">Uma experiência mais autônoma, acolhedora e participativa no cuidado.</p>
            <ul className="space-y-4">
              {[
                "Triagem mais simples e adaptada",
                "Portal exclusivo do paciente",
                "Check-ins de bem-estar contínuos",
                "Jornada visual e transparente",
                "Lembretes e notificações via WhatsApp",
                "Teleconsulta integrada e segura"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-brand-secondary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Seção Aura */}
      <section className="py-24 bg-white border-y border-slate-100 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="mb-10 scale-125 origin-center">
            <WellbeingAura state="SERENE" compact={false} showDisclaimer={false} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Conheça a Aura</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium bg-white/80 p-6 rounded-2xl shadow-sm border border-slate-100 backdrop-blur-sm max-w-2xl">
            Aura é o indicador visual de bem-estar da jornada do paciente. 
            Ela representa o check-in informado pelo próprio paciente de forma humanizada e fluida.
            <br/><br/>
            <span className="text-xs text-slate-500 font-normal uppercase tracking-widest block">Nota Clínica: Não constitui diagnóstico automático.</span>
          </p>
        </div>
      </section>

      {/* Segurança e Responsabilidade */}
      <section id="seguranca" className="py-24 bg-slate-900 text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20">
              <Shield size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Segurança e responsabilidade acima de tudo</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Cuidado guiado por escuta, dados e responsabilidade. O design da Nura foi construído *privacy-by-design*, assegurando conformidade estrita com a LGPD e o Conselho Federal de Psicologia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Lock className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Dados sensíveis protegidos</h4>
                  <p className="text-sm text-slate-400">Criptografia ponta a ponta e anonimização de informações críticas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Consentimento LGPD</h4>
                  <p className="text-sm text-slate-400">Termos claros e controle total do paciente sobre seus dados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ClipboardList className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Auditoria de acessos</h4>
                  <p className="text-sm text-slate-400">Registro inalterável de quem acessou cada prontuário.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Decisão Validada</h4>
                  <p className="text-sm text-slate-400">A priorização tecnológica sempre requer validação de um profissional.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
            <pre className="text-xs text-brand-primary font-mono whitespace-pre-wrap leading-relaxed opacity-80 select-all">
              {`// Nura Security Protocol (LGPD)
{
  "tenant_id": "inst-horizonte",
  "patient_consent": true,
  "data_retention": "encrypted_storage",
  "audit_trail": {
    "log_id": "aud_8f92a1",
    "action": "ACCESS_CLINICAL_DATA",
    "timestamp": "${new Date().toISOString()}",
    "integrity_hash": "e3b0c44298fc1c149afbf4c8..."
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-12 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-2xl font-black text-slate-800 tracking-tight">Nura</span>
            <p className="text-slate-500 text-sm max-w-md font-medium">
              Cuidado guiado por escuta, dados e responsabilidade.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>SaaS Multi-tenant</span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>WCAG 2.1 AA</span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>Conformidade CFP</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
          &copy; 2026 Nura Healthtech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;
