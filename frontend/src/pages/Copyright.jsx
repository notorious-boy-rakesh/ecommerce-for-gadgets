import { Link } from 'react-router-dom';

const Copyright = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Copyright', active: true }
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
          <h1>Copyright Notice</h1>
          <p>All content on this website is the intellectual property of Teckkie Gadgets and is protected under applicable copyright laws.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={{ background: 'linear-gradient(135deg, var(--clr-surface-2) 0%, var(--clr-surface-3) 100%)', border: '1px solid var(--clr-border-2)', borderRadius: '14px', padding: '24px 28px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '18px' }}>
                <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>©</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--clr-text)', marginBottom: '4px' }}>&copy; 2026 Teckkie Gadgets. All Rights Reserved.</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--clr-muted)' }}>This copyright notice applies to all content published on teckkiegadgets.com and all associated digital platforms.</div>
                </div>
              </div>

              <div className="form-card">
                <div className="policy-section">
                  <h3>1. Ownership of Content</h3>
                  <p style={{ margin: 0 }}>All content on this website — including but not limited to text, images, graphics, logos, icons, product descriptions, pricing information, layout designs, and visual elements — is the exclusive property of <strong style={{ color: 'var(--clr-text)' }}>Teckkie Gadgets</strong> and is protected under the Copyright Act, 1957 and all applicable intellectual property laws of India and international treaties.</p>
                </div>

                <div className="policy-section">
                  <h3>2. Permitted Use</h3>
                  <p>You may access and use content on this website for personal, non-commercial purposes only. Permitted activities include:</p>
                  <ul>
                    <li>Browsing and viewing product information for personal shopping decisions.</li>
                    <li>Printing or saving individual pages for your own personal reference.</li>
                    <li>Sharing direct links to pages on our website via social media or messaging.</li>
                    <li>Citing brief excerpts for non-commercial educational or reference purposes, with attribution.</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>3. Restrictions</h3>
                  <p>Without prior written permission from Teckkie Gadgets, you may not:</p>
                  <ul>
                    <li>Copy, reproduce, republish, or distribute any content from this website for commercial purposes.</li>
                    <li>Modify, adapt, translate, or create derivative works based on our content.</li>
                    <li>Use our logos, brand name, product images, or trademarks in any form without written authorization.</li>
                    <li>Scrape, crawl, or extract data from this website using automated tools or bots.</li>
                    <li>Frame or embed any portion of this website within another website without consent.</li>
                    <li>Sell, sublicense, or commercially exploit any content from this website.</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>4. Trademarks</h3>
                  <p>"Teckkie Gadgets" and the Teckkie Gadgets logo are registered trademarks of Teckkie Gadgets. Unauthorized use of these trademarks — in any form, on any platform, or in any medium — without our express written consent is strictly prohibited and may result in legal action.</p>
                  <p style={{ margin: 0 }}>All other brand names, product names, logos, and trademarks mentioned on this website are the property of their respective owners and are used solely for descriptive and identification purposes.</p>
                </div>

                <div className="policy-section">
                  <h3>5. User-Generated Content</h3>
                  <p style={{ margin: 0 }}>If you submit reviews, feedback, or any content to our platform, you grant Teckkie Gadgets a non-exclusive, royalty-free, perpetual license to use, display, modify, and distribute such content in connection with our business. You confirm that you own or have the right to submit such content and that it does not infringe the rights of any third party.</p>
                </div>

                <div className="policy-section">
                  <h3>6. Third-Party Content &amp; Links</h3>
                  <p style={{ margin: 0 }}>Our website may contain links to third-party websites or use product images from manufacturers for identification purposes. We do not claim ownership of third-party trademarks, logos, or content. Teckkie Gadgets is not responsible for the content, accuracy, or privacy practices of any external websites.</p>
                </div>

                <div className="policy-section">
                  <h3>7. Digital Millennium Copyright Act (DMCA) Compliance</h3>
                  <p>We respect the intellectual property rights of others and expect our users to do the same. If you believe that any content on this website infringes your copyright, please notify us with:</p>
                  <ul>
                    <li>A detailed description of the copyrighted work you believe has been infringed.</li>
                    <li>The specific URL or location of the allegedly infringing content on our website.</li>
                    <li>Your full contact information, including name, email address, and phone number.</li>
                    <li>A statement that you have a good-faith belief that the use is unauthorized.</li>
                    <li>A statement, made under penalty of perjury, that the information you've provided is accurate.</li>
                  </ul>
                  <p style={{ margin: 0 }}>We will investigate all legitimate notices and take appropriate action, including removing infringing content where necessary.</p>
                </div>

                <div className="policy-section">
                  <h3>8. Reporting Copyright Infringement</h3>
                  <p>To report a copyright concern or request permission for use of our content, contact our legal team:</p>
                  <div style={{ background: 'var(--clr-surface-2)', border: '1px solid var(--clr-border-2)', borderRadius: '10px', padding: '16px 20px' }}>
                    <div className="footer-contact-item mb-2"><span className="icon">📧</span><span><strong style={{ color: 'var(--clr-text)' }}>Email:</strong> &nbsp;support@teckkiegadgets.com</span></div>
                    <div className="footer-contact-item mb-2"><span className="icon">📞</span><span><strong style={{ color: 'var(--clr-text)' }}>Phone:</strong> &nbsp;8248403178</span></div>
                    <div className="footer-contact-item" style={{ margin: 0 }}><span className="icon">📍</span><span><strong style={{ color: 'var(--clr-text)' }}>Address:</strong> &nbsp;214/A Cross Street, Theni Main Road, Madurai 625001, Tamil Nadu, India</span></div>
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

export default Copyright;
