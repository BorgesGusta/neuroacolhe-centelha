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

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: LoginFormInputs) => {
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      // Direct mock login check for local presentation
      if (
        data.email === "helena@neuroacolhe.org" ||
        data.email === "lucas@neuroacolhe.org" ||
        data.email === "roberto@neuroacolhe.org"
      ) {
        if (data.senha_pura !== "senha123") {
          setErrorMsg("Senha incorreta. Use 'senha123' para os perfis de teste.");
          setIsSubmitting(false);
          return;
        }

        let role: 'ADMIN' | 'PROFESSIONAL' | 'SUPERVISOR' = 'PROFESSIONAL';
        let name = "Lucas Mendes";
        if (data.email === "helena@neuroacolhe.org") {
          role = "ADMIN";
          name = "Dra. Helena Vasconcelos";
        } else if (data.email === "roberto@neuroacolhe.org") {
          role = "SUPERVISOR";
          name = "Dr. Roberto Albuquerque";
        }

        const mockUser = {
          id: data.email === "helena@neuroacolhe.org" ? "usr-helena" : data.email === "lucas@neuroacolhe.org" ? "usr-lucas" : "usr-roberto",
          name,
          email: data.email,
          role,
          institutionId: "inst-horizonte",
          active: true
        };

        localStorage.setItem("@NeuroAcolhe:user", JSON.stringify(mockUser));
        localStorage.setItem("@NeuroAcolhe:token", "mock-jwt-token-centelha");
        
        // Reload page or navigate
        window.location.href = "/app/dashboard";
        return;
      }

      // API fallback
      await signIn(data.email, data.senha_pura);
      navigate("/app/dashboard");
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Credenciais inválidas. Use os e-mails mockados (helena@neuroacolhe.org, lucas@neuroacolhe.org, roberto@neuroacolhe.org) com a senha 'senha123'.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between text-brand-text-main font-sans">
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
                placeholder="Ex: helena@neuroacolhe.org"
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

          {/* Test credentials helper */}
          <div className="bg-brand-surface-soft p-4 rounded-xl border border-brand-border text-xs text-brand-text-muted space-y-1.5 leading-normal">
            <span className="font-bold text-brand-text-main block">💡 Contas de Demonstração (Senha: `senha123`):</span>
            <ul className="list-disc pl-4 space-y-0.5">
              <li><strong>Helena (Gestora):</strong> `helena@neuroacolhe.org`</li>
              <li><strong>Lucas (Profissional):</strong> `lucas@neuroacolhe.org`</li>
              <li><strong>Roberto (Supervisor):</strong> `roberto@neuroacolhe.org`</li>
            </ul>
          </div>
        </div>
        
        {/* Value Proposition Blurb */}
        <div className="mt-8 text-center max-w-sm">
          <p className="text-xs text-brand-text-muted font-medium">
            O NeuroAcolhe auxilia clínicas e instituições no processo de triagem e organização do fluxo de atendimento psicológico.
          </p>
        </div>
      </main>

      <footer className="py-6 px-8 text-center text-xs text-brand-text-muted border-t border-brand-border bg-white">
        NeuroAcolhe &copy; 2026. Todos os acessos são auditados eletronicamente para fins de LGPD.
      </footer>
    </div>
  );
};

export default Login;
