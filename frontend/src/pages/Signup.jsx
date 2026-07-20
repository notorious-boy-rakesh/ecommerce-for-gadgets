import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;
    const passwordRegex = /^.{8,}$/;

    if (!nameRegex.test(name)) {
      setError("Please enter a valid name (letters and spaces only).");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (phone && !phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = await signup({ name, email, phone, password });
    
    if (result.success) {
      alert("Account created successfully!");
      navigate('/login');
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
          <div style={{ fontSize: '0.88rem', color: 'var(--clr-muted)' }}>
            Already a member? <Link to="/login" style={{ color: 'var(--clr-accent-h)', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
          </div>
        </div>
      </div>

      <div style={{ minHeight: 'calc(100vh - 108px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 20px', background: 'var(--clr-bg)' }}>
        <div style={{ width: 'min(100%, 540px)' }}>

          <div className="text-center mb-4">
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 900, marginBottom: '6px' }}>Create your account</h1>
            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem' }}>Join 25,000+ tech enthusiasts and unlock exclusive deals.</p>
          </div>

          <div className="form-card">
            {error && (
              <div className="alert alert-danger" role="alert" style={{ fontSize: '0.85rem', padding: '10px', marginBottom: '20px', borderRadius: '8px' }}>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Your full name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 98765 43210" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" name="password" className="form-control" placeholder="Min. 8 characters" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                  <input type="password" id="confirm_password" name="confirm_password" className="form-control" placeholder="Repeat password" required />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input type="checkbox" id="terms" className="form-check-input" required />
                    <label htmlFor="terms" className="form-check-label">
                      I agree to the <Link to="/privacy-policy" style={{ color: 'var(--clr-accent-h)', textDecoration: 'none' }}>Terms &amp; Privacy Policy</Link>
                    </label>
                  </div>
                </div>
                <div className="col-12 mt-2">
                  <button type="submit" className="btn-primary-tg" style={{ width: '100%', textAlign: 'center' }}>Create Account →</button>
                </div>
              </div>
            </form>

            <hr className="auth-divider" />
            <div className="auth-link-row">
              Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Sign in instead</Link>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button type="button" className="btn btn-link" onClick={() => window.history.back()} style={{ color: 'var(--clr-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Go Back</button>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap" style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>
            <span>🔒 Secure registration</span>
            <span>📧 No spam guaranteed</span>
            <span>🎁 Instant access to deals</span>
          </div>

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

export default Signup;
