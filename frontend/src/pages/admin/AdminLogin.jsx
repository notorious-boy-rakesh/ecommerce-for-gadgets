import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import '../../styles/admin.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { adminLogin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!adminId || !password) {
      setError('Please enter both Admin ID and Password');
      return;
    }

    const result = await adminLogin(adminId, password);
    if (result.success) {
      navigate('/admin', { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="admin-mode" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--admin-bg)' }}>
      <div className="admin-card" style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
        <div className="text-center mb-4">
          <i className='bx bxs-shield text-primary mb-2' style={{ fontSize: '3rem', color: 'var(--admin-primary)' }}></i>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--admin-text-main)' }}>Admin Portal</h2>
          <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>Enter your credentials to access the dashboard</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--admin-danger)', padding: '0.75rem', borderRadius: 'var(--admin-radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-form-label">Admin ID</label>
            <input
              type="text"
              className="admin-form-control"
              placeholder="Email"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Password</label>
            <input
              type="password"
              className="admin-form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="admin-btn-primary w-100" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
            <i className='bx bx-log-in-circle'></i> Secure Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" style={{ color: 'var(--admin-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
            &larr; Back to User Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
