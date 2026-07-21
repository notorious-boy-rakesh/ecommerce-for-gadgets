import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminSidebar = ({ isOpen, closeSidebar }) => {
  const { settings } = useContext(AdminContext);
  
  return (
    <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="admin-sidebar-header">
        <NavLink to="/admin" className="admin-sidebar-logo" onClick={closeSidebar}>
          <i className='bx bxs-component text-primary' style={{ fontSize: '1.5rem', color: 'var(--admin-primary)' }}></i>
          {settings.siteName}
        </NavLink>
        <button className="admin-mobile-close" onClick={closeSidebar}>
          <i className='bx bx-x'></i>
        </button>
      </div>
      <nav className="admin-sidebar-nav">
        <NavLink to="/admin" end className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bxs-dashboard'></i> Dashboard
        </NavLink>
        <NavLink to="/admin/products" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-box'></i> Products
        </NavLink>
        <NavLink to="/admin/categories" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-category'></i> Categories
        </NavLink>
        <NavLink to="/admin/orders" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-cart-alt'></i> Orders
        </NavLink>
        <NavLink to="/admin/users" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-group'></i> Users
        </NavLink>
        <NavLink to="/admin/reviews" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-star'></i> Reviews
        </NavLink>
        <NavLink to="/admin/blogs" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-news'></i> Blogs
        </NavLink>
        <NavLink to="/admin/settings" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-cog'></i> Settings
        </NavLink>

        <div className="admin-sidebar-divider" style={{ borderTop: '1px solid var(--clr-border)', margin: '15px 15px', opacity: 0.5 }}></div>
        <div style={{ padding: '0 20px', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--clr-muted)', fontWeight: 'bold', marginBottom: '8px' }}>Support Hub</div>
        
        <NavLink to="/admin/enquiries" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-help-circle'></i> Enquiries
        </NavLink>
        <NavLink to="/admin/complaints" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-error-circle'></i> Complaints
        </NavLink>
        <NavLink to="/admin/contacts" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-message-square-detail'></i> Contact Msgs
        </NavLink>

        <div className="admin-sidebar-divider" style={{ borderTop: '1px solid var(--clr-border)', margin: '15px 15px', opacity: 0.5 }}></div>
        <div style={{ padding: '0 20px', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--clr-muted)', fontWeight: 'bold', marginBottom: '8px' }}>Admin Management</div>

        <NavLink to="/admin/profile" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
          <i className='bx bx-user-circle'></i> Admin Profile
        </NavLink>
      </nav>
      <div className="p-3">
        <NavLink to="/home" className="admin-btn-secondary w-100 text-center text-decoration-none d-block">
          <i className='bx bx-link-external me-2'></i> View Website
        </NavLink>
      </div>
    </aside>
  );
};

export default AdminSidebar;
