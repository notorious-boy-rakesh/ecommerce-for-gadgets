import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AdminContext } from '../context/AdminContext';
import PageHero from '../components/Layout/PageHero';
import ProductCard from '../components/Cards/ProductCard';
import TrustStrip from '../components/Common/TrustStrip';

const Cart = () => {
  const { cart, updateQty, removeItem } = useContext(CartContext);
  const { products: allProducts } = useContext(AdminContext);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'My Cart', active: true }
  ];

  // Dynamically select popular products (or random, here we just slice top 4 or specific names if we want, but since they are all in the DB, slice is fine).
  const suggestedProducts = allProducts.slice(0, 4);

  return (
    <>
      <PageHero title="Your Cart" eyebrow="Shopping Cart" breadcrumbs={breadcrumbs} />

      <section className="section-pad">
        <div className="container">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything to your cart yet. Explore our collection of premium gadgets and find something you'll love.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/products" className="btn-primary-tg" style={{ textDecoration: 'none' }}>Browse Products →</Link>
                <Link to="/home" className="btn-outline-tg" style={{ textDecoration: 'none' }}>Back to Home</Link>
              </div>
            </div>
          ) : (
            <div className="row g-5">
              <div className="col-lg-8">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>Cart Items</h2>
                {cart.map((item, index) => (
                  <div key={index} className="tg-card mb-3 d-flex align-items-center gap-3">
                    <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', fontWeight: 700 }}>{item.name}</h4>
                      <p style={{ color: 'var(--clr-accent-h)', fontWeight: 600, marginBottom: 0 }}>₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQty(index, -1)}>-</button>
                      <span style={{ fontWeight: 600 }}>{item.qty}</span>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQty(index, 1)}>+</button>
                    </div>
                    <button className="btn btn-sm btn-danger ms-3" onClick={() => removeItem(index)}>Remove</button>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <div className="tg-card">
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>Order Summary</h3>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: 'var(--clr-muted)' }}>Subtotal</span>
                    <span style={{ fontWeight: 600 }}>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: 'var(--clr-muted)' }}>Shipping</span>
                    <span style={{ fontWeight: 600, color: 'var(--clr-success)' }}>Free</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span style={{ color: 'var(--clr-muted)' }}>Estimated Tax (18%)</span>
                    <span style={{ fontWeight: 600 }}>₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <hr className="section-divider" style={{ margin: '16px 0' }} />
                  <div className="d-flex justify-content-between mb-4">
                    <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--clr-accent-h)' }}>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <Link to="/checkout" className="btn-primary-tg w-100" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>Proceed to Checkout →</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--clr-surface)', borderTop: '1px solid var(--clr-border)' }}>
        <div className="container">
          <div className="d-flex align-items-end justify-content-between mb-5 flex-wrap gap-3">
            <div>
              <p className="section-label mb-1">You Might Like</p>
              <h2 className="section-title mb-0">Popular Right Now</h2>
            </div>
            <Link to="/products" className="btn-outline-tg btn-sm-tg" style={{ textDecoration: 'none' }}>View All →</Link>
          </div>
          <div className="row g-4">
            {suggestedProducts.map((p, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />
    </>
  );
};

export default Cart;
