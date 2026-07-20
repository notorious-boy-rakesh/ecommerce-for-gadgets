import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Privacy Policy', active: true }
  ];

  return (
    <>
      <section className="page-hero">
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
          <div className="hero-eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p>We take your privacy seriously. Learn how we collect, protect, and manage your personal information.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={{ background: 'var(--clr-surface-2)', border: '1px solid var(--clr-border-2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>📅</span>
                <div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--clr-text)' }}>Effective Date:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--clr-muted)', marginLeft: '6px' }}>January 1, 2026</span>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--clr-muted)' }}>Last Updated: January 2026</span>
              </div>

              <div className="form-card mb-4">
                <p style={{ color: 'var(--clr-text-2)', fontSize: '0.97rem', lineHeight: 1.8, margin: 0 }}>
                  Welcome to <strong style={{ color: 'var(--clr-text)' }}>Teckkie Gadgets</strong>. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases. Please read this policy carefully.
                </p>
              </div>

              <div className="form-card">
                <div className="policy-section">
                  <h3>1. Information We Collect</h3>
                  <p>We collect the following types of information when you use our website:</p>
                  <ul>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Personal Information:</strong> Name, email address, phone number, shipping address, and billing details provided during registration or checkout.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Usage Data:</strong> Pages visited, time spent on the site, browser type, and device information collected automatically.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Cookies:</strong> Small files stored on your device to improve your browsing experience and remember your preferences.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Transaction Data:</strong> Details about purchases you make, including products ordered, payment method used, and order history.</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>2. How We Use Your Information</h3>
                  <p>We use your information for the following purposes:</p>
                  <ul>
                    <li>To process and fulfill your orders accurately and on time.</li>
                    <li>To communicate with you about your account, orders, and promotional offers.</li>
                    <li>To improve our website, product catalogue, and customer service experience.</li>
                    <li>To prevent fraud and ensure the security of our platform and your transactions.</li>
                    <li>To send you relevant marketing communications (only with your consent).</li>
                    <li>To comply with legal and regulatory obligations.</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>3. Information Sharing &amp; Disclosure</h3>
                  <p>We do not sell or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
                  <ul>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Payment Processors:</strong> To complete your transactions securely.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Shipping Partners:</strong> To deliver your orders to the correct address.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Legal Obligations:</strong> When required by law enforcement agencies or court orders.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets.</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>4. Data Security</h3>
                  <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include:</p>
                  <ul>
                    <li>256-bit SSL encryption for all data transmitted through our website.</li>
                    <li>Secure server infrastructure with regular security audits.</li>
                    <li>Restricted access to personal data — only authorized personnel can access it.</li>
                    <li>Regular monitoring for suspicious activity and data breaches.</li>
                  </ul>
                  <p style={{ margin: 0 }}>However, no method of transmission over the internet is 100% secure. We encourage you to use strong, unique passwords and keep them confidential.</p>
                </div>

                <div className="policy-section">
                  <h3>5. Cookies Policy</h3>
                  <p>We use cookies to enhance your browsing experience. Types of cookies we use:</p>
                  <ul>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Essential Cookies:</strong> Required for the website to function properly.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
                  </ul>
                  <p style={{ margin: 0 }}>You can disable cookies through your browser settings; however, some website features may not function correctly without them.</p>
                </div>

                <div className="policy-section">
                  <h3>6. Your Rights</h3>
                  <p>As a user, you have the following rights regarding your personal data:</p>
                  <ul>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Access:</strong> Request a copy of the personal data we hold about you.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Correction:</strong> Request correction of any inaccurate or incomplete information.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Deletion:</strong> Request deletion of your personal data, subject to legal requirements.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Opt-Out:</strong> Opt out of promotional emails at any time using the unsubscribe link.</li>
                    <li><strong style={{ color: 'var(--clr-text)' }}>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                  </ul>
                  <p style={{ margin: 0 }}>To exercise any of these rights, contact us at <span style={{ color: 'var(--clr-accent-h)' }}>support@teckkiegadgets.com</span>.</p>
                </div>

                <div className="policy-section">
                  <h3>7. Changes to This Policy</h3>
                  <p style={{ margin: 0 }}>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any updates will be posted on this page with the updated effective date. We encourage you to review this page periodically.</p>
                </div>

                <div className="policy-section">
                  <h3>8. Contact Us</h3>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                  <div style={{ background: 'var(--clr-surface-2)', border: '1px solid var(--clr-border-2)', borderRadius: '10px', padding: '16px 20px' }}>
                    <div className="footer-contact-item mb-2"><span className="icon">📧</span><span><strong style={{ color: 'var(--clr-text)' }}>Email:</strong> &nbsp;support@teckkiegadgets.com</span></div>
                    <div className="footer-contact-item mb-2"><span className="icon">📞</span><span><strong style={{ color: 'var(--clr-text)' }}>Phone:</strong> &nbsp;8248403178</span></div>
                    <div className="footer-contact-item" style={{ margin: 0 }}><span className="icon">📍</span><span><strong style={{ color: 'var(--clr-text)' }}>Address:</strong> &nbsp;214/A Cross Street, Theni Main Road, Madurai 625001, Tamil Nadu</span></div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5">
                <Link to="/home" className="btn-outline-tg" style={{ textDecoration: 'none' }}>← Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
