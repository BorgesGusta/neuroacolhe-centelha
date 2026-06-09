// frontend/src/App.tsx
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Sobre from "./pages/Sobre";
import Login from "./pages/login";
import EsqueciSenha from "./pages/EsqueciSenha";
import RedefinirSenha from "./pages/RedefinirSenha";

import { PrivateRoute } from "./pages/PrivateRoute";
import InternalLayout from "./components/layout/InternalLayout";

import Dashboard from "./pages/Dashboard";
import CareQueue from "./pages/CareQueue";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Supervision from "./pages/Supervision";
import Alerts from "./pages/Alerts";
import Audit from "./pages/Audit";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/triagem" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />

        {/* Protected Area /app/* */}
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<InternalLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="care-queue" element={<CareQueue />} />
            <Route path="cases" element={<Cases />} />
            <Route path="cases/:id" element={<CaseDetail />} />
            <Route path="supervision" element={<Supervision />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="audit" element={<Audit />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
