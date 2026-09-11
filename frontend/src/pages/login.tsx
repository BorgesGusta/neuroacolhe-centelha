// frontend/src/pages/login.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import HeaderMenu from "../components/shared/HeaderMenu";
import { Shield } from "lucide-react";

interface LoginFormInputs {
  email: string;
  senha_pura: string;
}

const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === "true";
const DEMO_PASSWORD = "demo123";
const demoProfiles = [
  { label: "Dra. Helena (Gestora)", email: "helena@nura.org" },
  { label: "Lucas (Profissional)", email: "lucas@nura.org" },
  { label: "Roberto (Supervisor)", email: "roberto@nura.org" },
];

const Login = () => {
  const { register, handleSubmit, setValue } = useForm<LoginFormInputs>();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fillDemoProfile = (email: string) => {
    setValue("email", email);
    setValue("senha_pura", DEMO_PASSWORD);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      await signIn(data.email, data.senha_pura);
      navigate("/app/dashboard");
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Credenciais inválidas. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between text-brand-text-main font-sans">
      <nav className="flex justify-between items-center p-6 md:px-12 relative z-50 border-b border-brand-border bg-white">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-extrabold text-brand-primary-dark no-underline flex items-center gap-1.5">
            <Shield className="text-brand-primary" size={24} /> Nura
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-brand-border p-1">
          <HeaderMenu variant="guest" />
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 flex-col">
        <div className="bg-white text-brand-text-main rounded-3xl shadow-lg border border-brand-border w-full max-w-md p-8 md:p-10 space-y-6">
          <div>
            <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">Acesso Restrito</span>
            <h2 className="text-2xl font-black text-brand-text-main mt-1">Entrar na Plataforma</h2>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl border border-brand-danger/30 bg-brand-danger-soft text-brand-danger text-xs font-semibold leading-relaxed">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-brand-text-muted mb-1">E-mail Corporativo</label>
              <input
                type="email"
                id="email"
                placeholder="Ex: helena@nura.org"
                className="w-full rounded-xl border border-brand-border py-3 px-4 text-brand-text-main bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                {...register("email", { required: true })}
                required
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-xs font-semibold text-brand-text-muted mb-1">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                className="w-full rounded-xl border border-brand-border py-3 px-4 text-brand-text-main bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                {...register("senha_pura", { required: true })}
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-75"
              >
                {isSubmitting ? "Autenticando..." : "Entrar"}
              </button>
            </div>
          </form>

          {/* Demo profile quick-access (only shown in demo builds) */}
          {DEMO_MODE && (
            <div className="bg-brand-surface-soft p-4 rounded-xl border border-brand-border text-xs text-brand-text-muted space-y-2.5 leading-normal">
              <span className="font-bold text-brand-text-main block">
                💡 Acesso Rápido (Modo Demonstração — senha: <code>demo123</code>)
              </span>
              <div className="flex flex-wrap gap-2">
                {demoProfiles.map((profile) => (
                  <button
                    key={profile.email}
                    type="button"
                    onClick={() => fillDemoProfile(profile.email)}
                    className="px-3 py-2 rounded-lg border border-brand-border bg-white text-brand-text-main font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {profile.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-brand-text-muted">
                Clique em um perfil para preencher os campos automaticamente. Você ainda pode digitar manualmente.
              </p>
            </div>
          )}
        </div>
        
        {/* Value Proposition Blurb */}
        <div className="mt-8 text-center max-w-sm">
          <p className="text-xs text-brand-text-muted font-medium">
            O Nura auxilia clínicas e instituições no processo de triagem e organização do fluxo de atendimento psicológico.
          </p>
        </div>
      </main>

      <footer className="py-6 px-8 text-center text-xs text-brand-text-muted border-t border-brand-border bg-white">
        Nura &copy; 2026. Todos os acessos são auditados eletronicamente para fins de LGPD.
      </footer>
    </div>
  );
};

export default Login;
