import { Link, useLocation } from 'react-router-dom';

const AuthTopBar = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div style={{ background: 'var(--clr-surface)', borderBottom: '1px solid var(--clr-border)', padding: '12px 0' }}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 900, color: 'var(--clr-text)', letterSpacing: '-0.02em', textDecoration: 'none' }}>
          TECKKIE <span style={{ color: 'var(--clr-accent-h)' }}>GADGETS</span>
        </Link>
        <div style={{ fontSize: '0.88rem', color: 'var(--clr-muted)' }}>
          {isLogin ? (
            <>New here? <Link to="/signup" style={{ color: 'var(--clr-accent-h)', fontWeight: 600 }}>Create a free account</Link></>
          ) : (
            <><Link to="/login" style={{ color: 'var(--clr-accent-h)', fontWeight: 600 }}>← Back to Login</Link></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthTopBar;
