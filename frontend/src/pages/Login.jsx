import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
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
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password');

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-page-bg">
      {/* Top bar */}
      <div style={{ background: 'var(--clr-surface)', borderBottom: '1px solid var(--clr-border)', padding: '12px 0' }}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 900, color: 'var(--clr-text)', letterSpacing: '-0.02em', textDecoration: 'none' }}>
            TECKKIE <span style={{ color: 'var(--clr-accent-h)' }}>GADGETS</span>
          </Link>
          <div className="d-flex align-items-center gap-3">
            <button onClick={toggleTheme} className="btn btn-sm btn-link text-decoration-none p-0" style={{ color: 'var(--clr-text)', fontSize: '1.2rem' }}>
              <i className={isDarkMode ? 'bx bxs-sun' : 'bx bxs-moon'}></i>
            </button>
            <div style={{ fontSize: '0.88rem', color: 'var(--clr-muted)' }}>
              New here? <Link to="/signup" style={{ color: 'var(--clr-accent-h)', fontWeight: 600, textDecoration: 'none' }}>Create a free account</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-split">
        {/* Left Panel */}
        <div className="auth-left">
          <div className="auth-left-brand">TECKKIE <span>GADGETS</span></div>
          <p className="auth-left-tagline">India's premium destination for cutting-edge electronics.</p>
          <div className="auth-left-features">
            <div className="auth-left-feature">
              <div className="feat-icon">🚚</div>
              <div className="feat-text">
                <div className="feat-title">Free & Fast Shipping</div>
                <div className="feat-sub">On all orders above ₹1,999</div>
              </div>
            </div>
            <div className="auth-left-feature">
              <div className="feat-icon">🛡️</div>
              <div className="feat-text">
                <div className="feat-title">1-Year Warranty</div>
                <div className="feat-sub">Official warranty on every product</div>
              </div>
            </div>
            <div className="auth-left-feature">
              <div className="feat-icon">🔒</div>
              <div className="feat-text">
                <div className="feat-title">Secure Checkout</div>
                <div className="feat-sub">256-bit SSL encrypted payments</div>
              </div>
            </div>
            <div className="auth-left-feature">
              <div className="feat-icon">⭐</div>
              <div className="feat-text">
                <div className="feat-title">Exclusive Member Deals</div>
                <div className="feat-sub">Early access to sales & offers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="auth-right">
          <div className="auth-form-wrap">
            <h1 className="auth-title" style={{ fontSize: '1.8rem', marginBottom: '6px' }}>Welcome back</h1>
            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem', marginBottom: '32px', textAlign: 'center' }}>Sign in to your account to continue shopping.</p>

            {error && (
              <div className="alert alert-danger" role="alert" style={{ fontSize: '0.85rem', padding: '10px', marginBottom: '20px', borderRadius: '8px' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label htmlFor="password" className="form-label mb-0">Password</label>
                  <Link to="/forgot-password" style={{ fontSize: '0.82rem', color: 'var(--clr-accent-h)', textDecoration: 'none' }}>Forgot password?</Link>
                </div>
                <div className="password-input-wrap">
                  <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="form-control" placeholder="Enter your password" required />
                  <button 
                    type="button" 
                    className="password-eye" 
                    aria-label="Show password"
                    onMouseEnter={() => setShowPassword(true)}
                    onMouseLeave={() => setShowPassword(false)}
                  >
                    &#128065;
                  </button>
                </div>
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" id="remember" className="form-check-input" />
                <label htmlFor="remember" className="form-check-label">Remember me for 30 days</label>
              </div>
              <button type="submit" className="btn-primary-tg w-100 mb-3" style={{ textAlign: 'center', width: '100%' }}>Sign In →</button>
              <Link to="/admin-login" className="btn-outline-tg w-100 d-block text-center" style={{ textDecoration: 'none' }}>Login as Admin <i className='bx bx-shield'></i></Link>
            </form>

            <hr className="auth-divider" />
            <div className="auth-link-row">
              Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Create one for free</Link>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button type="button" className="btn btn-link" onClick={() => window.history.back()} style={{ color: 'var(--clr-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Go Back</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: 'var(--clr-surface)', borderTop: '1px solid var(--clr-border)', padding: '16px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--clr-muted)', margin: 0 }}>
          &copy; 2026 Teckkie Gadgets &nbsp;|&nbsp;
          <Link to="/privacy-policy" style={{ color: 'var(--clr-muted)', textDecoration: 'none' }}>Privacy Policy</Link> &nbsp;|&nbsp;
          <Link to="/copyright" style={{ color: 'var(--clr-muted)', textDecoration: 'none' }}>Copyright</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
