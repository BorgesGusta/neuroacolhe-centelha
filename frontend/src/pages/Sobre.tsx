import { Link } from "react-router-dom";
import HeaderMenu from "../components/shared/HeaderMenu";

const Sobre = () => {
  return (
    <div className="min-h-screen w-full bg-[#1E3A8A] relative flex flex-col text-white font-sans overflow-y-auto">
      <nav className="flex justify-between items-center p-6 md:px-12 relative z-50 border-b border-white/10">
        <div className="flex gap-8 items-center">
          <Link
            to="/"
            className="text-white/80 hover:text-white no-underline text-xs md:text-sm tracking-wide transition-colors uppercase font-semibold"
          >
            PRINCIPAL
          </Link>
          <Link
            to="/sobre"
            className="text-white font-bold text-xs md:text-sm tracking-wide transition-colors uppercase"
          >
            SOBRE
          </Link>
          <Link
            to="/triagem"
            className="text-white/80 hover:text-white no-underline text-xs md:text-sm tracking-wide transition-colors uppercase font-semibold"
          >
            INICIAR TRIAGEM
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-1">
          <HeaderMenu variant="guest" />
        </div>
      </nav>

      <main className="flex-1 flex flex-col justify-start pt-8 items-center px-6 md:px-16 relative z-10 w-full max-w-5xl mx-auto">
        <div className="text-center mb-6 space-y-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
            SOBRE O NEUROACOLHE
          </h1>
          <p className="text-blue-200 text-sm max-w-md mx-auto">
            Plataforma SaaS Inclusiva para Gestão e Auditoria de Acolhimento Psicológico
          </p>
        </div>

        <div className="w-full text-left">
          <div className="text-justify text-white/90 text-sm md:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              O **NeuroAcolhe** é uma solução digital moderna projetada especificamente para gerenciar o fluxo operacional de clínicas-escola, instituições públicas e serviços de psicologia clínica. A plataforma aborda a jornada do acolhimento desde o preenchimento da triagem pública até o encerramento do caso, promovendo a eficiência operacional, segurança de dados em saúde e a inclusão.
            </p>

            <p>
              Nossos diferenciais baseiam-se em três pilares fundamentais:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-200">
              <li>
                <strong>Acessibilidade Digital Cognitiva:</strong> A triagem e interfaces possuem modos de contraste elevado, tipografia adaptada para dislexia (OpenDyslexic) e design limpo sem sobrecarga de elementos para respeitar o perfil de pessoas neurodivergentes (TEA, TDAH, Dislexia).
              </li>
              <li>
                <strong>Supervisão Clínica Assíncrona:</strong> O sistema integra alunos/residentes e professores em uma esteira única, permitindo que evoluções de prontuário e pareceres de supervisão ocorram em ambiente seguro e rastreável.
              </li>
              <li>
                <strong>Conformidade Total com a LGPD:</strong> Implementamos trilhas imutáveis de auditoria eletrônica para leitura de dados sensíveis de saúde, assinaturas de integridade e registro legal e estruturado de consentimentos.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
