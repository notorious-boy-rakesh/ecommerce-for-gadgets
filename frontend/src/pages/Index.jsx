import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Index = () => {
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
    <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--clr-bg)' }}>
      <button onClick={toggleTheme} className="btn btn-sm btn-link text-decoration-none" style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--clr-text)', fontSize: '1.4rem' }}>
        <i className={isDarkMode ? 'bx bxs-sun' : 'bx bxs-moon'}></i>
      </button>
      <div className="text-center" style={{ padding: '40px', background: 'var(--clr-surface)', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
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
