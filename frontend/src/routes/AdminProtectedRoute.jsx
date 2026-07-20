import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';

const AdminProtectedRoute = () => {
  const { isAdminAuthenticated } = useContext(AdminContext);

  if (!isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
