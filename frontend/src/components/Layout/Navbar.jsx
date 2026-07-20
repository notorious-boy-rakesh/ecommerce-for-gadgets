import { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

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
          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
            <Link to="/cart" className="btn-nav-cart" style={{ position: 'relative' }}>
              🛒 Cart
              {cartCount > 0 && (
                <span className="cart-badge" style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={handleLogout} className="btn-nav-logout" style={{ border: 'none', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
