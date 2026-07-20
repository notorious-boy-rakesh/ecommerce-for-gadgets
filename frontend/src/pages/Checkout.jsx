import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import PageHero from '../components/Layout/PageHero';
import api from '../api/axios';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      alert("Your cart is empty! Redirecting to products.");
      navigate('/products');
    }
  }, [cart, navigate]);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'My Cart', link: '/cart' },
    { label: 'Checkout', active: true }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentMethod = formData.get('payment');
    
    let methodDisplay = "";
    if (paymentMethod === "gpay") methodDisplay = "Google Pay";
    else if (paymentMethod === "paytm") methodDisplay = "Paytm";
    else if (paymentMethod === "phonepe") methodDisplay = "PhonePe";
    else if (paymentMethod === "cod") methodDisplay = "Cash on Delivery";

    try {
      setLoading(true);
      const orderPayload = {
        items: cart.map(item => ({
          product: item.id,
          name: item.name,
          price: item.price,
          qty: item.qty,
          img: item.img
        })),
        amount: total,
        customerName: `${formData.get('fname')} ${formData.get('lname')}`
      };

      const { data } = await api.post('/orders', orderPayload);

      if (data.success) {
        alert(`Order placed successfully!\n\nOrder ID: ${data.data._id}\nPayment Method: ${methodDisplay}\nTotal Amount: ₹${total.toLocaleString('en-IN')}`);
        clearCart();
        navigate('/home');
      }
    } catch (error) {
      console.error('Error placing order', error);
      alert(error.response?.data?.message || 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return null; // Prevent flicker before redirect

  return (
    <>
      <PageHero title="Complete Your Order" eyebrow="Secure Checkout" breadcrumbs={breadcrumbs} />

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="form-card">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-5">
                    <div className="col-md-6">
                      <label htmlFor="fname" className="form-label">First Name</label>
                      <input type="text" id="fname" name="fname" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname" className="form-label">Last Name</label>
                      <input type="text" id="lname" name="lname" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" id="email" name="email" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="form-control" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea id="address" name="address" className="form-control" rows="3" required></textarea>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" id="city" name="city" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="zip" className="form-label">ZIP Code</label>
                      <input type="text" id="zip" name="zip" className="form-control" required />
                    </div>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>Payment Method</h2>
                  <div className="d-flex flex-column gap-3 mb-4">
                    <label className="tg-card p-3 d-flex align-items-center gap-3" style={{ cursor: 'pointer', border: '1px solid var(--clr-border)' }}>
                      <input type="radio" name="payment" value="gpay" required />
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Google Pay</span>
                    </label>
                    <label className="tg-card p-3 d-flex align-items-center gap-3" style={{ cursor: 'pointer', border: '1px solid var(--clr-border)' }}>
                      <input type="radio" name="payment" value="paytm" />
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Paytm</span>
                    </label>
                    <label className="tg-card p-3 d-flex align-items-center gap-3" style={{ cursor: 'pointer', border: '1px solid var(--clr-border)' }}>
                      <input type="radio" name="payment" value="phonepe" />
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>PhonePe</span>
                    </label>
                    <label className="tg-card p-3 d-flex align-items-center gap-3" style={{ cursor: 'pointer', border: '1px solid var(--clr-border)' }}>
                      <input type="radio" name="payment" value="cod" />
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Cash on Delivery (COD)</span>
                    </label>
                  </div>

                  <button type="submit" className="btn-primary-tg w-100" style={{ textAlign: 'center' }} disabled={loading}>
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="tg-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>Order Summary</h3>
                <div className="mb-3 d-flex flex-column gap-2">
                  {cart.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--clr-text-2)' }}>{item.name} x {item.qty}</span>
                      <span style={{ fontWeight: 600 }}>₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <hr className="section-divider" style={{ margin: '16px 0' }} />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
