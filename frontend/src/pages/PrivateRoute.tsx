// frontend/src/pages/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = () => {
  const { user, signed, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 font-sans text-sm font-semibold text-gray-400">
        Carregando Sessão...
      </div>
    );
  }

  if (!signed || !user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
