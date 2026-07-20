import { Outlet, Link } from 'react-router-dom';
import AuthTopBar from '../components/Layout/AuthTopBar';

const AuthLayout = () => {
  return (
    <>
      <AuthTopBar />
      <Outlet />
      <div style={{ background: 'var(--clr-surface)', borderTop: '1px solid var(--clr-border)', padding: '16px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--clr-muted)', margin: 0 }}>
          &copy; 2026 Teckkie Gadgets &nbsp;|&nbsp;
          <Link to="/privacy-policy" style={{ color: 'var(--clr-muted)', textDecoration: 'none' }}>Privacy Policy</Link> &nbsp;|&nbsp;
          <Link to="/copyright" style={{ color: 'var(--clr-muted)', textDecoration: 'none' }}>Copyright</Link>
        </p>
      </div>
    </>
  );
};

export default AuthLayout;
