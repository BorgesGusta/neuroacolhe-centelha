import { Component, type ErrorInfo, type ReactNode } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// Error boundary to catch React crashes and show a useful message
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("NeuroAcolhe — React crash:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "#0F172A", color: "#F1F5F9", fontFamily: "system-ui, sans-serif",
          padding: "2rem", textAlign: "center"
        }}>
          <span style={{ fontSize: "3rem" }}>⚠️</span>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "1rem 0 0.5rem" }}>
            Erro ao carregar o NeuroAcolhe
          </h1>
          <p style={{ color: "#94A3B8", maxWidth: "480px", lineHeight: 1.6 }}>
            Ocorreu um problema interno. Tente recarregar a página.
          </p>
          <pre style={{
            background: "#1E293B", color: "#F87171", borderRadius: "0.75rem",
            padding: "1rem 1.5rem", fontSize: "0.75rem", marginTop: "1.5rem",
            maxWidth: "600px", textAlign: "left", overflow: "auto"
          }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.5rem", background: "#3B82F6", color: "#fff",
              border: "none", borderRadius: "0.75rem", padding: "0.75rem 2rem",
              fontWeight: 700, cursor: "pointer", fontSize: "0.9rem"
            }}
          >
            Recarregar Página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
