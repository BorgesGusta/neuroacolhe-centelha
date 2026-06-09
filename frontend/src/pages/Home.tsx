import { useNavigate, Link } from "react-router-dom";
import { Shield, ClipboardList, GraduationCap, Users } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-brand-bg relative overflow-x-hidden flex flex-col text-brand-text-main font-sans">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary-soft rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-12 relative z-50 bg-white/80 backdrop-blur-md border-b border-brand-border">
        <div className="flex items-center gap-6">
          <span className="text-xl font-extrabold tracking-tight text-brand-primary-dark flex items-center gap-1.5">
            <Shield className="text-brand-primary" size={24} /> NeuroAcolhe
          </span>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-brand-text-main font-semibold text-sm tracking-wide hover:text-brand-primary transition-colors">
              Principal
            </Link>
            <Link to="/sobre" className="text-brand-text-muted font-semibold text-sm tracking-wide hover:text-brand-primary transition-colors">
              Sobre
            </Link>
            <Link to="/triagem" className="text-brand-text-muted font-semibold text-sm tracking-wide hover:text-brand-primary transition-colors">
              Iniciar Triagem
            </Link>
          </div>
        </div>

        <Link
          to="/login"
          className="bg-brand-primary text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-brand-primary-dark transition-colors shadow-sm no-underline"
        >
          Entrar →
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-24 py-16 lg:py-24 relative z-10 gap-12 max-w-7xl mx-auto w-full">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-warning-soft text-brand-warning border border-brand-warning/20 inline-block uppercase tracking-widest">
            Programa Centelha Inovação
          </span>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-brand-text-main">
            Acolhimento Psicológico
            <br />
            <span className="text-brand-primary">Inclusivo &amp; Seguro</span>
          </h1>
          <p className="text-lg text-brand-text-muted leading-relaxed max-w-lg font-medium">
            Estrutura e audita a jornada de atendimento clínico, com triagem acessível para neurodivergentes e total conformidade com a LGPD.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button
              className="bg-brand-primary text-white py-4 px-8 text-base font-bold rounded-xl cursor-pointer shadow-md hover:bg-brand-primary-dark transition-all transform active:scale-95 flex items-center justify-center gap-2"
              onClick={() => navigate("/triagem")}
            >
              <ClipboardList size={20} />
              Iniciar Minha Triagem
            </button>
            <button
              className="bg-white text-brand-text-main border border-brand-border py-4 px-8 text-base font-bold rounded-xl cursor-pointer hover:bg-brand-surface-soft hover:border-brand-primary/30 transition-all flex items-center justify-center gap-2"
              onClick={() => navigate("/login")}
            >
              <Shield size={20} className="text-brand-primary" />
              Acessar Painel Clínico
            </button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6">
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-brand-border px-3 py-1.5 rounded-full text-brand-text-main shadow-sm">
              <Users size={14} className="text-brand-primary" /> Triagem Inclusiva
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-brand-border px-3 py-1.5 rounded-full text-brand-text-main shadow-sm">
              <ClipboardList size={14} className="text-brand-primary" /> Fila de Cuidado
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-brand-border px-3 py-1.5 rounded-full text-brand-text-main shadow-sm">
              <GraduationCap size={14} className="text-brand-primary" /> Supervisão Clínica
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-brand-border px-3 py-1.5 rounded-full text-brand-text-main shadow-sm">
              <Shield size={14} className="text-brand-primary" /> Auditoria LGPD
            </span>
          </div>
        </div>

        {/* Illustration or Mockup */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative flex justify-end">
          <div className="w-full h-auto aspect-square max-h-[500px] bg-white rounded-3xl shadow-xl border border-brand-border flex flex-col overflow-hidden relative">
            <div className="h-12 border-b border-brand-border bg-brand-surface-soft flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-brand-danger/80"></div>
                <div className="w-3 h-3 rounded-full bg-brand-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-brand-secondary/80"></div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4 bg-brand-bg/50">
              <div className="h-24 rounded-xl bg-white border border-brand-border flex items-center px-6 gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary-soft flex items-center justify-center text-brand-primary">
                  <ClipboardList size={24} />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/3 bg-brand-border rounded"></div>
                  <div className="h-3 w-1/4 bg-brand-border/60 rounded"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 h-32 rounded-xl bg-white border border-brand-border"></div>
                <div className="flex-1 h-32 rounded-xl bg-white border border-brand-border"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Info bar */}
      <footer className="w-full bg-white text-brand-text-muted py-6 px-8 text-center text-xs border-t border-brand-border mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-md font-medium text-center md:text-left">
            <strong className="text-brand-text-main">NeuroAcolhe</strong> &copy; 2026. Processamento clínico em conformidade com o CFP e a LGPD.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-text-muted">SaaS Multi-tenant</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-text-muted">WCAG 2.1 AA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
