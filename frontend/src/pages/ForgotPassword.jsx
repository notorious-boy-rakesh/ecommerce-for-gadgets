import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Auth.css';

const ForgotPassword = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("If an account with that email exists, a reset link has been sent.");
    e.target.reset();
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
              <Link to="/login" style={{ color: 'var(--clr-accent-h)', fontWeight: 600, textDecoration: 'none' }}>← Back to Login</Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ minHeight: 'calc(100vh - 108px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 20px', background: 'var(--clr-bg)' }}>
        <div style={{ width: 'min(100%, 440px)' }}>

          <div className="text-center mb-4">
            <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🔑</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 900, marginBottom: '8px' }}>Forgot your password?</h1>
            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem', maxWidth: '340px', margin: '0 auto' }}>No worries. Enter your registered email and we'll send you a reset link immediately.</p>
          </div>

          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Registered Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <button type="submit" className="btn-primary-tg" style={{ width: '100%', textAlign: 'center' }}>Send Reset Link →</button>
            </form>

            <hr className="auth-divider" />
            <div className="auth-link-row">
              Remembered it? <Link to="/login" style={{ textDecoration: 'none' }}>Back to Login</Link>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <Link to="/signup" style={{ textDecoration: 'none' }}>Create Account</Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--clr-muted)', marginTop: '20px' }}>
            📧 Check your spam folder if you don't see the email within a few minutes.
          </p>

        </div>
      </div>

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

export default ForgotPassword;
