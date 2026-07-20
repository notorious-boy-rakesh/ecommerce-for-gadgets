import { Link } from 'react-router-dom';
import PageHero from '../components/Layout/PageHero';
import FeatureCard from '../components/Cards/FeatureCard';

const About = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'About Us', active: true }
  ];

  return (
    <>
      <PageHero 
        title="Passionate About Technology" 
        eyebrow="Our Story" 
        breadcrumbs={breadcrumbs} 
        description="We started with a simple belief — that everyone deserves access to the world's best gadgets at fair prices. That belief still drives us every day." 
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">Built by Tech Lovers, <span className="text-gradient">For Tech Lovers</span></h2>
              <p style={{ color: 'var(--clr-text-2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
                Welcome to <strong style={{ color: 'var(--clr-text)' }}>Teckkie Gadgets</strong> — your trusted destination for the latest and smartest consumer electronics. Our journey began in Madurai with a simple idea: make modern technology accessible, exciting, and affordable for everyone.
              </p>
              <p style={{ color: 'var(--clr-text-2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
                From stylish accessories to flagship devices, we carefully curate products that match today's fast-moving digital lifestyle. Whether you are a student, a professional, a gamer, or a tech enthusiast, our goal is to help you discover gadgets that are useful, reliable, and genuinely impressive.
              </p>
              <p style={{ color: 'var(--clr-text-2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '28px' }}>
                Teckkie Gadgets is more than just an online store. It is a community where innovation meets convenience — a place where every purchase is backed by genuine care, quality assurance, and real after-sales support.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/products" className="btn-primary-tg" style={{ textDecoration: 'none' }}>Explore Products →</Link>
                <Link to="/contact" className="btn-outline-tg" style={{ textDecoration: 'none' }}>Get in Touch</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="tg-card text-center">
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--clr-accent-h)', lineHeight: 1 }}>500+</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--clr-text-2)', marginTop: '6px' }}>Premium Products</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="tg-card text-center">
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--clr-cyan)', lineHeight: 1 }}>25K+</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--clr-text-2)', marginTop: '6px' }}>Happy Customers</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="tg-card text-center">
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--clr-success)', lineHeight: 1 }}>4.9★</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--clr-text-2)', marginTop: '6px' }}>Avg. Customer Rating</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="tg-card text-center">
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--clr-warning)', lineHeight: 1 }}>3+</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--clr-text-2)', marginTop: '6px' }}>Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section-pad" style={{ background: 'var(--clr-surface)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Our Purpose</p>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="feature-card h-100">
                <span className="feature-icon">🎯</span>
                <h3>Our Mission</h3>
                <p>To deliver premium, genuine, and innovative tech gadgets to every corner of India — with unmatched service, transparent pricing, and a shopping experience that respects your time and trust.</p>
                <p style={{ margin: 0 }}>We exist to make cutting-edge technology accessible to students, professionals, and everyday tech enthusiasts alike.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-card h-100">
                <span className="feature-icon">🔭</span>
                <h3>Our Vision</h3>
                <p>To become South India's most trusted and loved electronics brand — known not just for the products we sell, but for the confidence and satisfaction we deliver with each purchase.</p>
                <p style={{ margin: 0 }}>We envision a future where every Indian has access to world-class tech at honest prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Our Core <span className="text-gradient">Values</span></h2>
            <p className="section-sub">These aren't just words on a wall. They are the principles that guide every decision we make.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4"><FeatureCard icon="✅" title="Authenticity First" description="We stock only genuine, officially sourced products. No grey-market imports, no counterfeits — ever." /></div>
            <div className="col-md-6 col-lg-4"><FeatureCard icon="🤝" title="Customer First" description="Every decision starts with one question: &quot;What's best for our customer?&quot; From pricing to packaging to post-sale support." /></div>
            <div className="col-md-6 col-lg-4"><FeatureCard icon="🚀" title="Innovation Driven" description="We constantly refresh our catalogue to bring you tomorrow's technology today — always staying ahead of the curve." /></div>
            <div className="col-md-6 col-lg-4"><FeatureCard icon="💬" title="Transparent Communication" description="No hidden fees, no vague return policies. Just clear, honest communication at every step of your journey with us." /></div>
            <div className="col-md-6 col-lg-4"><FeatureCard icon="🌍" title="Community Roots" description="We are a Madurai-born brand, proud to serve our local community while growing our reach across all of India." /></div>
            <div className="col-md-6 col-lg-4"><FeatureCard icon="🔁" title="Continuous Improvement" description="We listen to every review, every complaint, and every suggestion — because getting better is an ongoing commitment." /></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--clr-surface)' }}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <p className="section-label">Our Journey</p>
              <h2 className="section-title">How We Got <span className="text-gradient">Here</span></h2>
              <p style={{ color: 'var(--clr-muted)', marginTop: '16px' }}>From a small idea to a trusted gadget brand — here's the story of Teckkie Gadgets.</p>
            </div>
            <div className="col-lg-7">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2022</div>
                  <h4>The Spark</h4>
                  <p>Teckkie Gadgets was founded in Madurai with a vision to make premium electronics genuinely accessible to everyday people — not just the tech-savvy elite.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2023</div>
                  <h4>First 1,000 Customers</h4>
                  <p>Word of mouth grew our community rapidly. We hit our first 1,000 satisfied customers, expanded our catalogue to 200+ products, and earned our first 4.9-star rating.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2024</div>
                  <h4>Pan-India Shipping</h4>
                  <p>We expanded delivery to all Indian states and launched our dedicated support team — ensuring every customer gets help within hours, not days.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">2025–26</div>
                  <h4>25,000+ Customers & Growing</h4>
                  <p>Today, we serve over 25,000 happy customers across India with 500+ premium products and an unwavering commitment to quality and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="deal-banner text-center" style={{ justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div className="deal-label">Ready to Upgrade Your Tech?</div>
              <div className="deal-title">Explore Our Full Collection</div>
              <p className="deal-sub">Browse 500+ premium gadgets — all genuine, all warranted, all delivered fast.</p>
            </div>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/products" className="btn-primary-tg" style={{ textDecoration: 'none' }}>Shop Now →</Link>
              <Link to="/enquiry" className="btn-outline-tg" style={{ textDecoration: 'none' }}>Have a Question?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
