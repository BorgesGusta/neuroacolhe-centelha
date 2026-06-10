// frontend/src/components/layout/InternalLayout.tsx
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Users, GraduationCap, Bell, Shield, Settings, LogOut, MessageCircle, Video } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import AccessibilityPanel from "../shared/AccessibilityPanel";

const InternalLayout = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  // Get Institution Name based on user tenant
  const getInstitutionName = () => {
    if (user?.institutionId === "inst-horizonte") {
      return "Clínica Escola Horizonte";
    }
    if (user?.institutionId === "inst-acolher") {
      return "Instituto Acolher";
    }
    return "Instituição Nura";
  };

  // Translate roles for display badge
  const getRoleBadge = (role?: string) => {
    switch (role) {
      case "ADMIN":
        return { label: "Gestora", color: "bg-purple-100 text-purple-800 border-purple-200" };
      case "SUPERVISOR":
        return { label: "Supervisor", color: "bg-emerald-100 text-emerald-800 border-emerald-200" };
      case "PROFESSIONAL":
      default:
        return { label: "Profissional", color: "bg-blue-100 text-blue-800 border-blue-200" };
    }
  };

  const badge = getRoleBadge(user?.role);

  const menuItems = [
    { path: "/app/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/app/care-queue", label: "Fila de Cuidado", icon: <ClipboardList size={20} /> },
    { path: "/app/cases", label: "Casos Clínicos", icon: <Users size={20} /> },
    { path: "/app/supervision", label: "Supervisão", icon: <GraduationCap size={20} /> },
    { path: "/app/teleconsultas", label: "Teleconsultas", icon: <Video size={20} /> },
    { path: "/app/notifications", label: "Notificações", icon: <MessageCircle size={20} /> },
    { path: "/app/alerts", label: "Alertas do Sistema", icon: <Bell size={20} /> },
    { path: "/app/audit", label: "Auditoria (LGPD)", icon: <Shield size={20} /> },
    { path: "/app/settings", label: "Configurações", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-brand-bg font-sans">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col bg-white border-r border-brand-border shrink-0">
        {/* Brand Logo */}
        <div className="h-16 flex items-center px-6 border-b border-brand-border bg-white gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-primary-soft flex items-center justify-center text-brand-primary">
            <Shield size={20} className="stroke-[2.5]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-brand-text-main flex items-center gap-1.5">
            Nura
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? "bg-brand-primary-soft text-brand-primary-dark"
                    : "text-brand-text-muted hover:bg-brand-surface-soft hover:text-brand-text-main"
                }`}
              >
                <span className="mr-3 flex items-center justify-center" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-brand-border bg-white flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-brand-primary-soft flex items-center justify-center font-bold text-brand-primary uppercase text-sm">
              {user?.name?.substring(0, 2) || "NA"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-brand-text-main truncate">{user?.name || "Usuário"}</p>
              <p className="text-[10px] text-brand-text-muted truncate">{user?.email || ""}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center py-2 px-3 gap-2 text-xs font-semibold text-brand-danger bg-white hover:bg-brand-danger-soft border border-brand-border hover:border-brand-danger/30 rounded-lg transition-colors mt-2"
          >
            <LogOut size={14} />
            Sair da Conta
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-brand-border flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-brand-text-main truncate" id="main-header-title">
              {getInstitutionName()}
            </h2>
            <span className={`px-2.5 py-0.5 text-xs font-semibold border rounded-full ${badge.color}`}>
              {badge.label}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-brand-text-muted block">Organização Ativa</span>
              <span className="text-sm font-semibold text-brand-text-main">{user?.institutionId || "Default"}</span>
            </div>
          </div>
        </header>

        {/* Content canvas */}
        <main className="flex-1 overflow-y-auto p-8 bg-brand-bg focus:outline-none">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Floating Accessibility Controls */}
      <AccessibilityPanel />
    </div>
  );
};

export default InternalLayout;
