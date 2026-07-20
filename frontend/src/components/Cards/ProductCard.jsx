import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      id: product.id || product._id, // Ensure ID is passed to cart if needed
      name: product.name,
      price: product.price,
      img: product.img
    });
  };

  return (
    <div className="product-card">
      {product.badge && <span className={`product-badge ${product.badgeClass}`}>{product.badge}</span>}
      <div className="product-card-img-wrap">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-card-body">
        <div className="star-rating">{product.ratingStars} <span>({product.reviews})</span></div>
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-desc">{product.desc}</div>
        <div className="product-card-price">
          ₹{product.price.toLocaleString('en-IN')} 
          {product.oldPrice && <span className="product-card-price-old"> ₹{product.oldPrice.toLocaleString('en-IN')}</span>}
        </div>
        <div className="product-card-actions" style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleAddToCart} className="btn-primary-tg btn-sm-tg" style={{ flex: 1, textAlign: 'center', border: 'none' }}>Add to Cart</button>
          <Link to={`/product/${product.id || product._id}`} className="btn-secondary-tg btn-sm-tg" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
