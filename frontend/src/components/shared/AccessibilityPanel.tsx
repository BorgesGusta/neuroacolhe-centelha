// frontend/src/components/shared/AccessibilityPanel.tsx
import { useState, useEffect } from "react";

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "lg" | "xl">("normal");
  const [contrast, setContrast] = useState(false);
  const [dyslexic, setDyslexic] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [accessibleFont, setAccessibleFont] = useState(false);

  // Load configuration from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("@NeuroAcolhe:acc:fontSize") as "normal" | "lg" | "xl" || "normal";
    const savedContrast = localStorage.getItem("@NeuroAcolhe:acc:contrast") === "true";
    const savedDyslexic = localStorage.getItem("@NeuroAcolhe:acc:dyslexic") === "true";
    const savedReducedMotion = localStorage.getItem("@NeuroAcolhe:acc:reducedMotion") === "true";
    const savedAccessibleFont = localStorage.getItem("@NeuroAcolhe:acc:accessibleFont") === "true";

    setFontSize(savedFontSize);
    setContrast(savedContrast);
    setDyslexic(savedDyslexic);
    setReducedMotion(savedReducedMotion);
    setAccessibleFont(savedAccessibleFont);

    applyConfigs({
      fontSize: savedFontSize,
      contrast: savedContrast,
      dyslexic: savedDyslexic,
      reducedMotion: savedReducedMotion,
      accessibleFont: savedAccessibleFont,
    });
  }, []);

  const applyConfigs = (configs: {
    fontSize: "normal" | "lg" | "xl";
    contrast: boolean;
    dyslexic: boolean;
    reducedMotion: boolean;
    accessibleFont: boolean;
  }) => {
    const root = document.documentElement;

    // Apply Font Size
    if (configs.fontSize === "normal") {
      root.removeAttribute("data-font-size");
    } else {
      root.setAttribute("data-font-size", configs.fontSize);
    }

    // Apply Contrast
    if (configs.contrast) {
      root.setAttribute("data-theme", "contrast");
    } else {
      root.removeAttribute("data-theme");
    }

    // Apply Dyslexic Font
    if (configs.dyslexic) {
      root.setAttribute("data-font-dyslexic", "true");
    } else {
      root.removeAttribute("data-font-dyslexic");
    }

    // Apply Reduced Motion
    if (configs.reducedMotion) {
      root.setAttribute("data-reduced-motion", "true");
    } else {
      root.removeAttribute("data-reduced-motion");
    }

    // Apply Accessible Font
    if (configs.accessibleFont) {
      root.setAttribute("data-font-accessible", "true");
    } else {
      root.removeAttribute("data-font-accessible");
    }
  };

  const handleFontSizeChange = (size: "normal" | "lg" | "xl") => {
    setFontSize(size);
    localStorage.setItem("@NeuroAcolhe:acc:fontSize", size);
    applyConfigs({ fontSize: size, contrast, dyslexic, reducedMotion, accessibleFont });
  };

  const handleContrastToggle = () => {
    const newValue = !contrast;
    setContrast(newValue);
    localStorage.setItem("@NeuroAcolhe:acc:contrast", String(newValue));
    applyConfigs({ fontSize, contrast: newValue, dyslexic, reducedMotion, accessibleFont });
  };

  const handleDyslexicToggle = () => {
    const newValue = !dyslexic;
    setDyslexic(newValue);
    localStorage.setItem("@NeuroAcolhe:acc:dyslexic", String(newValue));
    applyConfigs({ fontSize, contrast, dyslexic: newValue, reducedMotion, accessibleFont });
  };

  const handleReducedMotionToggle = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("@NeuroAcolhe:acc:reducedMotion", String(newValue));
    applyConfigs({ fontSize, contrast, dyslexic, reducedMotion: newValue, accessibleFont });
  };

  const handleAccessibleFontToggle = () => {
    const newValue = !accessibleFont;
    setAccessibleFont(newValue);
    localStorage.setItem("@NeuroAcolhe:acc:accessibleFont", String(newValue));
    applyConfigs({ fontSize, contrast, dyslexic, reducedMotion, accessibleFont: newValue });
  };

  const resetAccessibility = () => {
    setFontSize("normal");
    setContrast(false);
    setDyslexic(false);
    setReducedMotion(false);
    setAccessibleFont(false);

    localStorage.setItem("@NeuroAcolhe:acc:fontSize", "normal");
    localStorage.setItem("@NeuroAcolhe:acc:contrast", "false");
    localStorage.setItem("@NeuroAcolhe:acc:dyslexic", "false");
    localStorage.setItem("@NeuroAcolhe:acc:reducedMotion", "false");
    localStorage.setItem("@NeuroAcolhe:acc:accessibleFont", "false");

    applyConfigs({
      fontSize: "normal",
      contrast: false,
      dyslexic: false,
      reducedMotion: false,
      accessibleFont: false,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all border border-blue-400"
        title="Acessibilidade e Inclusão"
        aria-label="Menu de Acessibilidade"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      </button>

      {/* Accessibility Panel Overlay */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl transition-all">
          <div className="mb-4 flex items-center justify-between border-b pb-2">
            <h3 className="text-base font-bold text-gray-900">Acessibilidade</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Fechar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Font Size Scaling */}
          <div className="mb-4">
            <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Tamanho do Texto
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => handleFontSizeChange("normal")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                  fontSize === "normal"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Padrão
              </button>
              <button
                onClick={() => handleFontSizeChange("lg")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                  fontSize === "lg"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Grande
              </button>
              <button
                onClick={() => handleFontSizeChange("xl")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                  fontSize === "xl"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Extra
              </button>
            </div>
          </div>

          {/* Dyslexia-friendly Font */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="block text-sm font-semibold text-gray-800">
                Fonte para Dislexia
              </span>
              <span className="text-xs text-gray-400">
                Usa tipografia de leitura facilitada
              </span>
            </div>
            <button
              onClick={handleDyslexicToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                dyslexic ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  dyslexic ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* High Contrast */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="block text-sm font-semibold text-gray-800">
                Alto Contraste
              </span>
              <span className="text-xs text-gray-400">
                Cores de alta distinção visual
              </span>
            </div>
            <button
              onClick={handleContrastToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                contrast ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  contrast ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Accessible Font */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="block text-sm font-semibold text-gray-800">
                Fonte Acessível (Atkinson)
              </span>
              <span className="text-xs text-gray-400">
                Maior legibilidade visual
              </span>
            </div>
            <button
              onClick={handleAccessibleFontToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                accessibleFont ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  accessibleFont ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <div>
              <span className="block text-sm font-semibold text-gray-800">
                Reduzir Animações
              </span>
              <span className="text-xs text-gray-400">
                Evita sobrecarga e enjoos visuais
              </span>
            </div>
            <button
              onClick={handleReducedMotionToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                reducedMotion ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  reducedMotion ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={resetAccessibility}
            className="w-full rounded-lg border border-red-200 py-2.5 text-center text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
          >
            Restaurar Configurações Originais
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPanel;
