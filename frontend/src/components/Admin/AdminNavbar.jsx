import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminNavbar = ({ toggleSidebar, searchQuery, setSearchQuery }) => {
  const { adminLogout } = useContext(AdminContext);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-left">
        <button className="admin-icon-btn admin-mobile-toggle" onClick={toggleSidebar}>
          <i className='bx bx-menu'></i>
        </button>
        <div className="admin-search">
          <i className='bx bx-search'></i>
          <input 
            type="text" 
            placeholder="Search services..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="admin-navbar-right">
        <button className="admin-icon-btn" onClick={toggleTheme}>
          <i className={isDarkMode ? 'bx bxs-sun' : 'bx bx-moon'}></i>
        </button>

        <button 
          className="admin-btn-secondary ms-3 d-flex align-items-center gap-2"
          onClick={() => {
            adminLogout();
            navigate('/admin-login');
          }}
          style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
        >
          <i className='bx bx-log-out'></i> Logout
        </button>
        <div className="ms-3 ms-md-4">
          <Link to="/admin/profile">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff" alt="Admin Avatar" className="admin-avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
