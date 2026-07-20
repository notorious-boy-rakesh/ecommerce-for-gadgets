import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';

const Complaint = () => {
  const [loading, setLoading] = useState(false);
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Contact', link: '/contact' },
    { label: 'Complaint', active: true }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const orderid = formData.get('orderid');

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;
    const orderIdRegex = /^TG-\d{4}-\d{5}$/;

    if (!nameRegex.test(fullname)) {
      alert("Please enter a valid full name.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (orderid && !orderIdRegex.test(orderid)) {
      alert("Please enter a valid Order ID (e.g. TG-2026-00123).");
      return;
    }

    setLoading(true);
    try {
      await api.post('/complaints', data);
      alert("Complaint submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Error submitting complaint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #FFFAF3 0%, #FFF2DB 50%, #FFE5BF 100%)', borderBottomColor: '#FFE5BF' }}>
        <div className="container">
          <nav aria-label="breadcrumb" className="tg-breadcrumb">
            <ol className="breadcrumb justify-content-center">
              {breadcrumbs.map((bc, i) => (
                <li key={i} className={`breadcrumb-item ${bc.active ? 'active' : ''}`} aria-current={bc.active ? 'page' : undefined}>
                  {bc.link ? <Link to={bc.link}>{bc.label}</Link> : bc.label}
                </li>
              ))}
            </ol>
          </nav>
          <div className="hero-eyebrow" style={{ color: 'var(--clr-accent)' }}>Report an Issue</div>
          <h1>Complaint Registration</h1>
          <p>We're sorry to hear you had an issue. Submit your complaint below and our dedicated resolution team will respond within 24–48 hours.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-8">
              <div className="form-card" style={{ borderColor: '#fee2e2' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Complaint Registration Form</h2>
                </div>
                <p style={{ color: 'var(--clr-muted)', fontSize: '0.9rem', marginBottom: '28px' }}>Please fill in all required fields. The more detail you provide, the faster we can resolve your issue.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="fullname" className="form-label">Full Name</label>
                      <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your full name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="orderid" className="form-label">Order ID <span style={{ color: 'var(--clr-muted)', fontWeight: 400 }}>(if applicable)</span></label>
                      <input type="text" id="orderid" name="orderid" className="form-control" placeholder="e.g. TG-2026-00123" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="complaint-type" className="form-label">Complaint Type</label>
                      <select id="complaint-type" name="complaint-type" className="form-select" required>
                        <option value="">Select Complaint Type</option>
                        <option value="product-defect">Product Defect / Damage</option>
                        <option value="delivery-issue">Delivery Issue / Delay</option>
                        <option value="wrong-product">Wrong Product Received</option>
                        <option value="payment-issue">Payment Issue</option>
                        <option value="refund-request">Refund Request</option>
                        <option value="poor-service">Poor Customer Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="date" className="form-label">Date of Incident</label>
                      <input type="date" id="date" name="date" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" placeholder="Brief subject of your complaint" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="resolution" className="form-label">Preferred Resolution</label>
                      <select id="resolution" name="resolution" className="form-select">
                        <option value="">Select Preferred Resolution</option>
                        <option value="replacement">Product Replacement</option>
                        <option value="refund">Full Refund</option>
                        <option value="repair">Product Repair</option>
                        <option value="callback">Callback from Support</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="description" className="form-label">Describe Your Complaint</label>
                      <textarea id="description" name="description" rows="6" className="form-control" placeholder="Please describe your issue in as much detail as possible — include purchase date, product name, what went wrong, and any steps already taken..." required></textarea>
                    </div>
                    <div className="col-12">
                      <div style={{ background: 'var(--clr-surface-2)', border: '1px solid #fee2e2', borderRadius: '10px', padding: '14px 16px', marginBottom: '4px' }}>
                        <div className="form-check">
                          <input type="checkbox" id="agree" name="agree" className="form-check-input" required />
                          <label htmlFor="agree" className="form-check-label" style={{ fontSize: '0.88rem' }}>I confirm that all information provided above is accurate and true to the best of my knowledge.</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex flex-wrap gap-3 mt-2">
                      <button type="submit" className="btn-primary-tg" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', boxShadow: '0 8px 24px rgba(220,38,38,0.30)' }}>Submit Complaint →</button>
                      <button type="reset" className="btn-outline-tg">Reset Form</button>
                      <button type="button" className="btn-outline-tg" onClick={() => window.print()}>Print Form</button>
                      <button type="button" className="btn-outline-tg" onClick={() => window.history.back()}>Go Back</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tg-card mb-4">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>🛡️ Our Resolution Promise</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--clr-success)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Acknowledgement within <strong style={{ color: 'var(--clr-text)' }}>2 hours</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--clr-success)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Dedicated resolution within <strong style={{ color: 'var(--clr-text)' }}>24–48 hours</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--clr-success)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Replacement / refund processed within <strong style={{ color: 'var(--clr-text)' }}>5–7 days</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--clr-success)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Regular status updates via <strong style={{ color: 'var(--clr-text)' }}>email / phone</strong></span>
                </div>
              </div>

              <div className="tg-card mb-4">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>📞 Urgent Issue?</h3>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.88rem', marginBottom: '8px' }}>For urgent complaints, call us directly:</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--clr-accent-h)', marginBottom: '4px' }}>8248403178</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', marginBottom: '12px' }}>Mon–Fri: 9AM–6PM &nbsp;|&nbsp; Sat: 10AM–4PM</p>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.88rem', margin: 0 }}>Or email: <span style={{ color: 'var(--clr-accent-h)' }}>support@teckkiegadgets.com</span></p>
              </div>

              <div className="tg-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>💬 Have a Question Instead?</h3>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.88rem', marginBottom: '16px' }}>If it's not a complaint but a product or service question, use our enquiry form instead.</p>
                <Link to="/enquiry" className="btn-outline-tg btn-sm-tg" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Go to Enquiry Form →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complaint;
