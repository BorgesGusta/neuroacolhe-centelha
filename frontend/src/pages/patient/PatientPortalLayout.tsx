import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Calendar, User, Activity, CheckSquare } from 'lucide-react';

export default function PatientPortalLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/paciente/inicio', icon: Home },
    { name: 'Jornada', href: '/paciente/jornada', icon: Activity },
    { name: 'Check-in', href: '/paciente/check-in', icon: CheckSquare },
    { name: 'Teleconsulta', href: '/paciente/teleconsulta', icon: Calendar },
    { name: 'Perfil', href: '/paciente/perfil', icon: User },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Mobile Header */}
      <header className="bg-white border-b border-brand-border sticky top-0 z-30 sm:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <span className="text-brand-primary font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-slate-800">Acolly</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col sm:flex-row pb-16 sm:pb-0">
        
        {/* Sidebar (Desktop) */}
        <aside className="hidden sm:flex w-64 flex-col bg-white border-r border-brand-border">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                <span className="text-brand-primary font-bold text-lg">A</span>
              </div>
              <span className="font-semibold tracking-tight text-xl text-slate-800">Acolly</span>
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-2 mt-4">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-primary/10 text-brand-primary-dark'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-brand-primary' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-brand-border">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary-dark font-medium">
                JS
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">João Silva</p>
                <p className="text-xs text-slate-500">Paciente</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8">
          <Outlet />
        </main>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <nav className="sm:hidden fixed bottom-0 w-full bg-white border-t border-brand-border z-40 pb-safe">
        <div className="flex justify-around items-center px-2 py-2">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center p-2 min-w-[64px] ${
                  isActive ? 'text-brand-primary-dark' : 'text-slate-500'
                }`}
              >
                <item.icon className={`w-5 h-5 mb-1 ${isActive ? 'text-brand-primary' : ''}`} />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
