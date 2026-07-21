import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import PageHero from '../components/Layout/PageHero';
import ProductCard from '../components/Cards/ProductCard';
import { AdminContext } from '../context/AdminContext';

const Products = () => {
  const { products } = useContext(AdminContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All Products';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  const categoryList = ['All Products', 'Smartphones', 'Laptops', 'Watches', 'Audio', 'Accessories'];
  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
          
          {/* Category Filter Labels */}
          <div className="d-flex gap-2 flex-wrap mb-5">
            {categoryList.map(cat => (
              <span 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{ 
                  background: selectedCategory === cat ? 'var(--clr-accent)' : 'var(--clr-surface)', 
                  color: selectedCategory === cat ? '#fff' : 'var(--clr-muted)', 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '0.82rem', 
                  fontWeight: selectedCategory === cat ? 700 : 600, 
                  padding: '7px 18px', 
                  borderRadius: '8px', 
                  border: selectedCategory === cat ? 'none' : '1px solid var(--clr-border)',
                  cursor: 'pointer' 
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--clr-text-2)' }}>No products found in this category.</h4>
            </div>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((p, i) => (
                <div key={p._id || p.id || i} className="col-md-6 col-lg-4 col-xl-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
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
