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
import Notifications from "./pages/Notifications";
import Teleconsultations from "./pages/Teleconsultations";

import PatientPortalLayout from "./pages/patient/PatientPortalLayout";
import PatientHome from "./pages/patient/PatientHome";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientJourney from "./pages/patient/PatientJourney";
import PatientCheckIn from "./pages/patient/PatientCheckIn";
import PatientTeleconsultation from "./pages/patient/PatientTeleconsultation";

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
            <Route path="notifications" element={<Notifications />} />
            <Route path="teleconsultas" element={<Teleconsultations />} />
          </Route>
        </Route>

        {/* Patient Portal Routes */}
        <Route path="/paciente" element={<PatientPortalLayout />}>
          <Route path="inicio" element={<PatientHome />} />
          <Route path="perfil" element={<PatientProfile />} />
          <Route path="jornada" element={<PatientJourney />} />
          <Route path="check-in" element={<PatientCheckIn />} />
          <Route path="teleconsulta" element={<PatientTeleconsultation />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
