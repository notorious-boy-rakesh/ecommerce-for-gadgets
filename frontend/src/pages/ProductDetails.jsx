import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Review Form State
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviewSubmitStatus, setReviewSubmitStatus] = useState({ loading: false, message: '', isError: false });

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        setLoading(true);
        // Fetch product
        const { data: prodData } = await api.get(`/products/${id}`);
        // Backend might wrap in {success: true, data: {...}} or return directly
        const productData = prodData.data ? prodData.data : prodData;
        setProduct(productData);

        // Fetch approved reviews
        try {
          const { data: revData } = await api.get(`/reviews/product/${id}`);
          setReviews(revData.data ? revData.data : revData);
        } catch (revErr) {
          console.error("Could not fetch reviews", revErr);
        }
      } catch (err) {
        setError('Failed to load product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndReviews();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id || product._id,
        name: product.name,
        price: product.price,
        img: product.img
      });
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    setReviewSubmitStatus({ loading: true, message: '', isError: false });
    try {
      await api.post('/reviews', {
        product: product._id || product.id,
        rating,
        comment
      });
      
      setReviewSubmitStatus({ 
        loading: false, 
        message: 'Review submitted successfully! It will appear once approved by an admin.', 
        isError: false 
      });
      setRating(5);
      setComment('');
    } catch (err) {
      setReviewSubmitStatus({ 
        loading: false, 
        message: err.response?.data?.message || 'Error submitting review. You may have already reviewed this product.', 
        isError: true 
      });
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">{error || 'Product not found'}</h2>
        <Link to="/products" className="btn-primary-tg mt-3 d-inline-block">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products" className="text-decoration-none">Products</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Product Top Section */}
      <div className="row mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
            <img 
              src={product.img} 
              alt={product.name} 
              className="img-fluid w-100" 
              style={{ objectFit: 'contain', maxHeight: '500px', padding: '2rem' }} 
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-4">
            {product.badge && (
              <span className={`badge bg-${product.badgeClass === 'new' ? 'success' : 'danger'} mb-2`}>
                {product.badge}
              </span>
            )}
            <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
            
            <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2 fs-5">
                {'★'.repeat(Math.round(product.ratingStars || 5))}{'☆'.repeat(5 - Math.round(product.ratingStars || 5))}
              </div>
              <span className="text-muted">({reviews.length} customer reviews)</span>
            </div>

            <div className="mb-4">
              <span className="fs-1 fw-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
              {product.oldPrice && (
                <span className="fs-4 text-muted text-decoration-line-through ms-3">₹{product.oldPrice.toLocaleString('en-IN')}</span>
              )}
            </div>

            <p className="fs-5 text-muted mb-4">{product.desc}</p>

            <div className="d-flex gap-3 mb-4">
              <button 
                onClick={handleAddToCart} 
                className="btn-primary-tg btn-lg-tg flex-grow-1"
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? <><i className='bx bx-cart me-2'></i>Add to Cart</> : 'Out of Stock'}
              </button>
            </div>

            <div className="card bg-light border-0 rounded-3">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><strong>Category:</strong> <span className="text-muted">{product.category}</span></li>
                  <li className="mb-2"><strong>Stock:</strong> <span className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock} available</span></li>
                  <li><strong>Free Delivery:</strong> <span className="text-muted">On orders above ₹50,000</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="row mt-5">
        <div className="col-12">
          <ul className="nav nav-tabs mb-4" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fw-bold px-4 py-3" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab">
                Customer Reviews ({reviews.length})
              </button>
            </li>
          </ul>
          
          <div className="tab-content" id="productTabsContent">
            <div className="tab-pane fade show active" id="reviews" role="tabpanel">
              <div className="row">
                <div className="col-lg-8">
                  {/* Reviews List */}
                  <div className="mb-5">
                    {reviews.length === 0 ? (
                      <p className="text-muted fst-italic">No reviews yet. Be the first to review this product!</p>
                    ) : (
                      reviews.map((rev) => (
                        <div key={rev._id} className="card border-0 border-bottom rounded-0 mb-3 pb-3">
                          <div className="card-body p-0">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h6 className="fw-bold mb-0">{rev.user?.name || 'Anonymous User'}</h6>
                              <div className="text-warning">
                                {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                              </div>
                            </div>
                            <p className="text-muted mb-0">{rev.comment}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="col-lg-4">
                  {/* Write a Review Form */}
                  <div className="card border-0 shadow-sm rounded-4 bg-light">
                    <div className="card-body p-4">
                      <h4 className="fw-bold mb-3">Write a Review</h4>
                      
                      {!currentUser ? (
                        <div className="alert alert-info border-0 rounded-3">
                          You must be logged in to post a review. <br />
                          <Link to="/login" className="alert-link fw-bold mt-2 d-inline-block">Log in here</Link>
                        </div>
                      ) : (
                        <form onSubmit={handleReviewSubmit}>
                          <div className="mb-3">
                            <label className="form-label fw-semibold">Rating</label>
                            <select 
                              className="form-select" 
                              value={rating} 
                              onChange={(e) => setRating(Number(e.target.value))}
                            >
                              <option value="5">5 - Excellent</option>
                              <option value="4">4 - Very Good</option>
                              <option value="3">3 - Average</option>
                              <option value="2">2 - Poor</option>
                              <option value="1">1 - Terrible</option>
                            </select>
                          </div>
                          
                          <div className="mb-3">
                            <label className="form-label fw-semibold">Your Review</label>
                            <textarea 
                              className="form-control" 
                              rows="4" 
                              placeholder="What did you like or dislike?"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              required
                            ></textarea>
                          </div>

                          {reviewSubmitStatus.message && (
                            <div className={`alert ${reviewSubmitStatus.isError ? 'alert-danger' : 'alert-success'} py-2 fs-6`}>
                              {reviewSubmitStatus.message}
                            </div>
                          )}

                          <button 
                            type="submit" 
                            className="btn-primary-tg w-100"
                            disabled={reviewSubmitStatus.loading}
                          >
                            {reviewSubmitStatus.loading ? 'Submitting...' : 'Submit Review'}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
