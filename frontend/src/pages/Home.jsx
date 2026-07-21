import { Link } from 'react-router-dom';
import { useContext } from 'react';
import TrustStrip from '../components/Common/TrustStrip';
import CategoryCard from '../components/Cards/CategoryCard';
import ProductCard from '../components/Cards/ProductCard';
import FeatureCard from '../components/Cards/FeatureCard';
import { AdminContext } from '../context/AdminContext';

const Home = () => {
  const { products: allProducts } = useContext(AdminContext);
  const products = allProducts.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="main-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-eyebrow">New Arrivals 2026</span>
              <h1 className="hero-title">
                The Future of <br/><span className="accent">Tech Is Here</span>
              </h1>
              <p className="hero-sub">
                Explore our curated collection of premium gadgets — flagship phones, cutting-edge audio, powerful laptops, and smart wearables. All with warranty, fast shipping, and expert support.
              </p>
              <div className="hero-actions">
                <Link to="/products" className="btn-primary-tg" style={{ textDecoration: 'none' }}>Shop Now →</Link>
                <Link to="/about" className="btn-outline-tg" style={{ textDecoration: 'none' }}>Our Story</Link>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-num">500+</div>
                  <div className="hero-stat-label">Products</div>
                </div>
                <div>
                  <div className="hero-stat-num">25K+</div>
                  <div className="hero-stat-label">Customers</div>
                </div>
                <div>
                  <div className="hero-stat-num">4.9★</div>
                  <div className="hero-stat-label">Rating</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img-wrap">
                <div className="hero-img-glow"></div>
                <img src="https://www.triveniworld.com/cdn/shop/articles/innovative-tech-gadgets-you-need-to-own-in-2025-triveni-world.webp?v=1736040337"
                  alt="Latest gadgets 2026 — smartphones, headphones, smartwatches collection" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Categories Section */}
      <section className="section-pad" id="explore">
        <div className="container">
          <div className="text-center">
            <p className="section-label">Browse by Category</p>
            <h2 className="section-title">Explore Our <span className="text-gradient">Gadget Universe</span></h2>
            <p className="section-sub">From the latest flagships to smart home gadgets — every category you need, all in one store.</p>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="📱" name="Smartphones" count="48 Products" link="/products?category=Smartphones" /></div>
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="⌚" name="Smartwatches" count="36 Products" link="/products?category=Watches" /></div>
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="🎧" name="Headphones" count="52 Products" link="/products?category=Audio" /></div>
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="💻" name="Laptops" count="24 Products" link="/products?category=Laptops" /></div>
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="🔊" name="Speakers" count="30 Products" link="/products?category=Audio" /></div>
            <div className="col-6 col-md-4 col-lg-2"><CategoryCard icon="🎵" name="TWS Earbuds" count="40 Products" link="/products?category=Audio" /></div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Best Sellers */}
      <section className="section-pad">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between mb-5 flex-wrap gap-3">
            <div>
              <p className="section-label mb-1">Trending Now</p>
              <h2 className="section-title mb-0">Best Sellers</h2>
            </div>
            <Link to="/products" className="btn-outline-tg btn-sm-tg" style={{ textDecoration: 'none' }}>View All Products →</Link>
          </div>
          <div className="row g-4">
            {products.map((p, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Banner */}
      <section className="section-pad-sm" style={{ background: 'var(--clr-surface)' }}>
        <div className="container">
          <div className="deal-banner">
            <div>
              <div className="deal-label">⚡ Limited Offer — Ends Soon</div>
              <div className="deal-title">Up to 40% Off on<br/>Premium Audio Gear</div>
              <p className="deal-sub">Shop our curated audio collection — headphones, earbuds & speakers at unbeatable prices.</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link to="/products" className="btn-cyan-tg" style={{ textDecoration: 'none' }}>Shop the Sale →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <p className="section-label">Why Teckkie</p>
            <h2 className="section-title">Built Around <span className="text-gradient">Your Experience</span></h2>
            <p className="section-sub">We don't just sell gadgets — we deliver confidence, quality, and care with every order.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="🏆" title="100% Genuine Products" description="Every gadget is sourced directly from authorized distributors — no counterfeits, ever." />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="🎓" title="Expert Guidance" description="Our trained tech advisors help you pick the right gadget for your needs and budget." />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="⚡" title="Lightning Fast Delivery" description="Same-day dispatch across Tamil Nadu and 3–5 day delivery all over India." />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="🤝" title="After-Sales Support" description="Dedicated support team available 6 days a week — for service, warranty, and returns." />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ background: 'var(--clr-surface)' }}>
        <div className="container">
          <div className="text-center">
            <p className="section-label">Customer Stories</p>
            <h2 className="section-title">Loved by <span className="text-gradient">25,000+ Customers</span></h2>
            <p className="section-sub">Real reviews from real gadget enthusiasts across India.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">Ordered an iPhone 15 Pro and it arrived the very next day — brand new, sealed, with full warranty card. The packaging was immaculate. Absolutely brilliant service!</p>
                <div className="star-rating mb-3">★★★★★</div>
                <div className="testimonial-author">M Rakesh</div>
                <div className="testimonial-role">Software Engineer, Chennai</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">The Sony headphones I bought are exactly as described — zero compromise on quality. Teckkie Gadgets has the best deals I've found online. My go-to store for tech now.</p>
                <div className="star-rating mb-3">★★★★★</div>
                <div className="testimonial-author">K Ajay</div>
                <div className="testimonial-role">Graphic Designer, Coimbatore</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">Had a minor issue with my laptop and their support team resolved it within hours. That kind of after-sales care is rare. I'll definitely recommend Teckkie to everyone I know.</p>
                <div className="star-rating mb-3">★★★★★</div>
                <div className="testimonial-author">T K Siddarth</div>
                <div className="testimonial-role">College Student, Madurai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="newsletter-section">
        <div className="container">
          <p className="section-label">Stay Updated</p>
          <h2>Get the Best Deals First</h2>
          <p>Subscribe to our newsletter and be the first to know about flash sales, new launches, and exclusive offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" aria-label="Email for newsletter" />
            <button type="button">Subscribe</button>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--clr-muted)', marginTop: '14px', marginBottom: 0 }}>🔒 No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
