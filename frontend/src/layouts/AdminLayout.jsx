import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminNavbar from '../components/Admin/AdminNavbar';
import '../styles/admin.css';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-mode">
      <div className="admin-layout">
        <AdminSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        {isSidebarOpen && <div className="admin-sidebar-overlay" onClick={closeSidebar}></div>}
        <main className="admin-main">
          <AdminNavbar toggleSidebar={toggleSidebar} />
          <div className="admin-content">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
