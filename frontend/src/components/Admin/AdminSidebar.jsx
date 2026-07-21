import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminSidebar = ({ isOpen, closeSidebar, searchQuery = '' }) => {
  const { settings } = useContext(AdminContext);
  
  const navItems = [
    { to: "/admin", icon: "bxs-dashboard", label: "Dashboard", end: true },
    { to: "/admin/products", icon: "bx-box", label: "Products" },
    { to: "/admin/categories", icon: "bx-category", label: "Categories" },
    { to: "/admin/orders", icon: "bx-cart-alt", label: "Orders" },
    { to: "/admin/users", icon: "bx-group", label: "Users" },
    { to: "/admin/reviews", icon: "bx-star", label: "Reviews" },
    { to: "/admin/blogs", icon: "bx-news", label: "Blogs" },
    { to: "/admin/settings", icon: "bx-cog", label: "Settings" }
  ];

  const supportItems = [
    { to: "/admin/enquiries", icon: "bx-help-circle", label: "Enquiries" },
    { to: "/admin/complaints", icon: "bx-error-circle", label: "Complaints" },
    { to: "/admin/contacts", icon: "bx-message-square-detail", label: "Contact Msgs" }
  ];

  const adminItems = [
    { to: "/admin/profile", icon: "bx-user-circle", label: "Admin Profile" }
  ];

  const filterItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const renderNavLinks = (items) => {
    return filterItems(items).map(item => (
      <NavLink 
        key={item.to}
        to={item.to} 
        end={item.end} 
        className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`} 
        onClick={closeSidebar}
      >
        <i className={`bx ${item.icon}`}></i> {item.label}
      </NavLink>
    ));
  };

  const filteredNav = renderNavLinks(navItems);
  const filteredSupport = renderNavLinks(supportItems);
  const filteredAdmin = renderNavLinks(adminItems);

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
        {filteredNav}
        
        {filteredSupport.length > 0 && (
          <>
            <div className="admin-sidebar-divider" style={{ borderTop: '1px solid var(--clr-border)', margin: '15px 15px', opacity: 0.5 }}></div>
            <div style={{ padding: '0 20px', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--clr-muted)', fontWeight: 'bold', marginBottom: '8px' }}>Support Hub</div>
            {filteredSupport}
          </>
        )}

        {filteredAdmin.length > 0 && (
          <>
            <div className="admin-sidebar-divider" style={{ borderTop: '1px solid var(--clr-border)', margin: '15px 15px', opacity: 0.5 }}></div>
            <div style={{ padding: '0 20px', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--clr-muted)', fontWeight: 'bold', marginBottom: '8px' }}>Admin Management</div>
            {filteredAdmin}
          </>
        )}
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
