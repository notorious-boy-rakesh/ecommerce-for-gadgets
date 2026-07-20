import { Link } from 'react-router-dom';
import PageHero from '../components/Layout/PageHero';

const Enquiry = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Contact', link: '/contact' },
    { label: 'Enquiry', active: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const phone = formData.get('phone');

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;

    if (!nameRegex.test(fullname)) {
      alert("Please enter a valid full name.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (phone && !phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    alert("Enquiry submitted successfully!");
    e.target.reset();
  };

  return (
    <>
      <PageHero 
        title="Product Enquiry Form" 
        eyebrow="Have a Question?" 
        breadcrumbs={breadcrumbs} 
        description="Ask us about product details, pricing, availability, bulk orders, or anything else — our team responds within 24 hours." 
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-8">
              <div className="form-card">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>Submit Your Enquiry</h2>
                <p style={{ color: 'var(--clr-muted)', fontSize: '0.9rem', marginBottom: '28px' }}>Fill in the details below and we'll get back to you as soon as possible.</p>

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
                      <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 98765 43210" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="enquiry-type" className="form-label">Enquiry Type</label>
                      <select id="enquiry-type" name="enquiry-type" className="form-select" required>
                        <option value="">Select Enquiry Type</option>
                        <option value="product-info">Product Information</option>
                        <option value="pricing">Pricing and Offers</option>
                        <option value="availability">Product Availability</option>
                        <option value="shipping">Shipping and Delivery</option>
                        <option value="warranty">Warranty Details</option>
                        <option value="bulk-order">Bulk Order Enquiry</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="product-name" className="form-label">Product Name <span style={{ color: 'var(--clr-muted)', fontWeight: 400 }}>(if applicable)</span></label>
                      <input type="text" id="product-name" name="product-name" className="form-control" placeholder="e.g. iPhone 17 Pro, Sony WH-1000XM5" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" placeholder="Brief subject of your enquiry" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea id="message" name="message" rows="6" className="form-control" placeholder="Describe your enquiry in detail — include any specific requirements, quantities, or technical questions..." required></textarea>
                    </div>
                    <div className="col-12">
                      <p className="form-label mb-2">Preferred Contact Method</p>
                      <div className="d-flex gap-4">
                        <div className="form-check">
                          <input type="radio" id="contact-email" name="contact-method" value="email" className="form-check-input" defaultChecked />
                          <label htmlFor="contact-email" className="form-check-label">Email</label>
                        </div>
                        <div className="form-check">
                          <input type="radio" id="contact-phone" name="contact-method" value="phone" className="form-check-input" />
                          <label htmlFor="contact-phone" className="form-check-label">Phone Call</label>
                        </div>
                        <div className="form-check">
                          <input type="radio" id="contact-whatsapp" name="contact-method" value="whatsapp" className="form-check-input" />
                          <label htmlFor="contact-whatsapp" className="form-check-label">WhatsApp</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex flex-wrap gap-3 mt-2">
                      <button type="submit" className="btn-primary-tg">Submit Enquiry →</button>
                      <button type="reset" className="btn-outline-tg">Reset Form</button>
                      <button type="button" className="btn-outline-tg" onClick={() => window.history.back()}>Go Back</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tg-card mb-4">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>⚡ Quick Response Guarantee</h3>
                <p style={{ color: 'var(--clr-muted)', fontSize: '0.88rem', marginBottom: '14px' }}>We take every enquiry seriously. Here's what to expect after you submit:</p>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--clr-cyan)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Acknowledgement email within <strong style={{ color: 'var(--clr-text)' }}>1 hour</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--clr-cyan)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Detailed response within <strong style={{ color: 'var(--clr-text)' }}>24 hours</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--clr-cyan)', fontSize: '1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)' }}>Dedicated agent for <strong style={{ color: 'var(--clr-text)' }}>bulk orders</strong></span>
                </div>
              </div>

              <div className="tg-card mb-4">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '14px' }}>📞 Prefer to Call?</h3>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.88rem', marginBottom: '8px' }}>Our phone support team is available:</p>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--clr-accent-h)', marginBottom: '4px' }}>8248403178</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', margin: 0 }}>Mon–Fri: 9AM–6PM &nbsp;|&nbsp; Sat: 10AM–4PM</p>
              </div>

              <div className="tg-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '14px' }}>📋 Register a Complaint?</h3>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.88rem', marginBottom: '16px' }}>If you've already placed an order and encountered an issue, use our dedicated complaint form.</p>
                <Link to="/complaint" className="btn-outline-tg btn-sm-tg" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Go to Complaint Form →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
