import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PageHero from '../components/Layout/PageHero';
import ProductCard from '../components/Cards/ProductCard';
import { AdminContext } from '../context/AdminContext';

const Products = () => {
  const { products } = useContext(AdminContext);

  const breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Products', active: true }
  ];

  return (
    <>
      <PageHero 
        title="Our Product Catalogue" 
        eyebrow="500+ Premium Gadgets" 
        breadcrumbs={breadcrumbs} 
        description="Explore our full range of flagship smartphones, powerful laptops, smart wearables, and premium audio gear." 
      />

      {/* Products Grid */}
      <section className="section-pad">
        <div className="container">
          
          {/* Category Filter Labels (Static) */}
          <div className="d-flex gap-2 flex-wrap mb-5">
            <span style={{ background: 'var(--clr-accent)', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 700, padding: '7px 18px', borderRadius: '8px', cursor: 'default' }}>All Products</span>
            <span style={{ background: 'var(--clr-surface)', color: 'var(--clr-muted)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '7px 18px', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>Smartphones</span>
            <span style={{ background: 'var(--clr-surface)', color: 'var(--clr-muted)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '7px 18px', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>Laptops</span>
            <span style={{ background: 'var(--clr-surface)', color: 'var(--clr-muted)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '7px 18px', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>Watches</span>
            <span style={{ background: 'var(--clr-surface)', color: 'var(--clr-muted)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '7px 18px', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>Audio</span>
            <span style={{ background: 'var(--clr-surface)', color: 'var(--clr-muted)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '7px 18px', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>Accessories</span>
          </div>

          <div className="row g-4">
            {products.map((p, i) => (
              <div key={p.id || i} className="col-md-6 col-lg-4 col-xl-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="newsletter-section">
        <div className="container">
          <p className="section-label">Can't find what you need?</p>
          <h2>Ask Our Expert Team</h2>
          <p>Have a specific gadget in mind? Submit an enquiry and our tech specialists will help you find the perfect match.</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-2">
            <Link to="/enquiry" className="btn-primary-tg" style={{ textDecoration: 'none' }}>Submit an Enquiry →</Link>
            <Link to="/contact" className="btn-outline-tg" style={{ textDecoration: 'none' }}>Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
