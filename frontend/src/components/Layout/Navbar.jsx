import { useContext, useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { AdminContext } from '../../context/AdminContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { currentUser, logout } = useContext(AuthContext);
  const { products } = useContext(AdminContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <nav className="tg-navbar navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/home">TECKKIE <span>GADGETS</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/enquiry">Enquiry</NavLink></li>
          </ul>
          
          <form className="d-flex ms-lg-3 mt-3 mt-lg-0 align-items-center" onSubmit={handleSearch} style={{ position: 'relative' }}>
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill pe-4" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              style={{ minWidth: '180px', backgroundColor: 'var(--clr-surface-2)', border: '1px solid var(--clr-border)', color: 'var(--clr-text)' }}
            />
            <button type="submit" style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--clr-muted)' }}>
              <i className="bx bx-search"></i>
            </button>
            
            {showSuggestions && searchQuery.trim() && (
              <div 
                className="search-suggestions shadow-lg rounded-3" 
                style={{ 
                  position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', 
                  backgroundColor: 'var(--clr-surface)', border: '1px solid var(--clr-border)', 
                  zIndex: 1050, maxHeight: '300px', overflowY: 'auto'
                }}
              >
                {products
                  .filter(p => p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || p.category?.toLowerCase().includes(searchQuery.toLowerCase()))
                  .slice(0, 5)
                  .map(p => (
                    <Link 
                      key={p.id || p._id} 
                      to={`/product/${p.id || p._id}`} 
                      className="d-flex align-items-center gap-2 p-2 text-decoration-none border-bottom"
                      style={{ color: 'var(--clr-text)', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--clr-surface-2)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <img src={p.img} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px', backgroundColor: 'var(--clr-surface-2)' }} />
                      <div style={{ flex: 1, overflow: 'hidden' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--clr-muted)' }}>{p.category}</div>
                      </div>
                    </Link>
                  ))
                }
                {products.filter(p => p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || p.category?.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <div className="p-3 text-center text-muted" style={{ fontSize: '0.85rem' }}>No products found</div>
                )}
              </div>
            )}
          </form>

          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
            <button onClick={toggleTheme} className="btn btn-sm btn-link text-decoration-none" style={{ color: 'var(--clr-text)', fontSize: '1.2rem' }}>
              <i className={isDarkMode ? 'bx bxs-sun' : 'bx bxs-moon'}></i>
            </button>
            <Link to="/cart" className="btn-nav-cart ms-2" style={{ position: 'relative' }}>
              🛒 Cart
              {cartCount > 0 && (
                <span className="cart-badge" style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {cartCount}
                </span>
              )}
            </Link>
            {currentUser && (
              <div className="d-flex align-items-center ms-3 me-1" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-heading)' }}>
                <i className="bx bxs-user-circle me-1" style={{ fontSize: '1.4rem' }}></i>
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{currentUser.name}</span>
              </div>
            )}
            <button onClick={handleLogout} className="btn-nav-logout" style={{ border: 'none', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
