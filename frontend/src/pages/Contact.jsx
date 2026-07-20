import { Link } from 'react-router-dom';
import PageHero from '../components/Layout/PageHero';

const Contact = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Contact Us', active: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! Our team will get back to you soon.');
    e.target.reset();
  };

  return (
    <>
      <PageHero 
        title="Get in Touch With Us" 
        eyebrow="We're Here to Help" 
        breadcrumbs={breadcrumbs} 
        description="Our dedicated support team is ready to assist you with orders, products, warranties, and anything else you need." 
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="info-card text-center">
                <span className="contact-icon">📞</span>
                <h3>Customer Support</h3>
                <p>Speak directly with our trained support team for instant assistance.</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--clr-accent-h)', margin: 0 }}>8248403178</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card text-center">
                <span className="contact-icon">📧</span>
                <h3>Email Support</h3>
                <p>Send us an email and we'll respond within 4–8 business hours guaranteed.</p>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--clr-accent-h)', margin: 0 }}>support@teckkiegadgets.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card text-center">
                <span className="contact-icon">📍</span>
                <h3>Visit Our Store</h3>
                <p>Come find us in Madurai — we welcome walk-in customers Monday to Saturday.</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--clr-text-2)', margin: 0 }}>214/A Cross Street, Theni Main Road,<br/>Madurai 625001, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <div className="form-card">
                <p className="section-label mb-1">Send a Message</p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '6px' }}>We'd Love to Hear From You</h2>
                <p style={{ color: 'var(--clr-muted)', fontSize: '0.9rem', marginBottom: '28px' }}>Fill out the form below and our team will reach out as soon as possible.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="contact-name" className="form-label">Full Name</label>
                      <input type="text" id="contact-name" name="name" className="form-control" placeholder="Your full name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contact-email" className="form-label">Email Address</label>
                      <input type="email" id="contact-email" name="email" className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                      <input type="tel" id="contact-phone" name="phone" className="form-control" placeholder="+91 98765 43210" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contact-subject" className="form-label">Subject</label>
                      <input type="text" id="contact-subject" name="subject" className="form-control" placeholder="Brief topic of your message" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="contact-message" className="form-label">Your Message</label>
                      <textarea id="contact-message" name="message" rows="5" className="form-control" placeholder="Describe your question or concern in detail..." required></textarea>
                    </div>
                    <div className="col-12 d-flex gap-3 flex-wrap mt-1">
                      <button type="submit" className="btn-primary-tg">Send Message →</button>
                      <button type="reset" className="btn-outline-tg">Clear Form</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="tg-card mb-4">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '18px' }}>🕐 Business Hours</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--clr-border)' }}>
                  <span style={{ color: 'var(--clr-text-2)', fontSize: '0.9rem' }}>Monday – Friday</span>
                  <span style={{ color: 'var(--clr-text)', fontWeight: 600, fontSize: '0.9rem' }}>9:00 AM – 6:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--clr-border)' }}>
                  <span style={{ color: 'var(--clr-text-2)', fontSize: '0.9rem' }}>Saturday</span>
                  <span style={{ color: 'var(--clr-text)', fontWeight: 600, fontSize: '0.9rem' }}>10:00 AM – 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span style={{ color: 'var(--clr-text-2)', fontSize: '0.9rem' }}>Sunday</span>
                  <span style={{ color: 'var(--clr-danger)', fontWeight: 600, fontSize: '0.9rem' }}>Closed</span>
                </div>
                <div style={{ background: 'var(--clr-surface-2)', border: '1px solid var(--clr-border-2)', borderRadius: '10px', padding: '12px 14px', marginTop: '14px' }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--clr-muted)', margin: 0 }}>⚡ Email support available 24/7. Replies within 4–8 hours on business days.</p>
                </div>
              </div>

              <div className="tg-card mb-3" style={{ borderColor: 'var(--clr-border-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '1.8rem' }}>📋</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--clr-text)', marginBottom: '2px' }}>Register a Complaint</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--clr-muted)', marginBottom: '8px' }}>Issue with your order or product? We'll fix it.</div>
                    <Link to="/complaint" className="btn-primary-tg btn-sm-tg" style={{ textDecoration: 'none' }}>Go to Complaint Form →</Link>
                  </div>
                </div>
              </div>

              <div className="tg-card" style={{ borderColor: 'var(--clr-border-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '1.8rem' }}>💬</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--clr-text)', marginBottom: '2px' }}>Product Enquiry</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--clr-muted)', marginBottom: '8px' }}>Questions about pricing, availability or specs?</div>
                    <Link to="/enquiry" className="btn-outline-tg btn-sm-tg" style={{ textDecoration: 'none' }}>Submit an Enquiry →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--clr-surface)', borderTop: '1px solid var(--clr-border)', borderBottom: '1px solid var(--clr-border)', padding: '56px 0' }}>
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Find Us</p>
            <h2 className="section-title">Our Location</h2>
          </div>
          <div style={{ background: 'var(--clr-surface-2)', border: '1px solid var(--clr-border-2)', borderRadius: 'var(--card-radius)', height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px' }}>
            <span style={{ fontSize: '3rem', marginBottom: '16px' }}>📍</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Teckkie Gadgets Store</h3>
            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem', marginBottom: '4px' }}>214/A Cross Street, Theni Main Road</p>
            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>Madurai 625001, Tamil Nadu, India</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-cyan-tg btn-sm-tg" style={{ textDecoration: 'none' }}>Open in Google Maps →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
