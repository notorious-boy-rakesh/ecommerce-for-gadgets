import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #FFFAF3 0%, #FFF2DB 100%)' }}>
      <div className="text-center" style={{ padding: '40px', background: 'white', borderRadius: '24px', boxShadow: '0 20px 40px rgba(245,158,11,0.1)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, color: 'var(--clr-text)', marginBottom: '8px' }}>
          TECKKIE <span style={{ color: 'var(--clr-accent-h)' }}>GADGETS</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--clr-muted)', marginBottom: '32px' }}>Welcome to the ultimate tech destination.</p>
        <Link to="/login" className="btn-primary-tg" style={{ display: 'inline-block', textDecoration: 'none' }}>Get Started →</Link>
      </div>
    </div>
  );
};

export default Index;
