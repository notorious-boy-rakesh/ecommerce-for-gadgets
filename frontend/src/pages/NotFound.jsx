import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '6rem', fontWeight: 900, color: 'var(--clr-accent-h)', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginTop: '16px', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--clr-muted)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '32px' }}>
        Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link to="/home" className="btn-primary-tg" style={{ textDecoration: 'none' }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
