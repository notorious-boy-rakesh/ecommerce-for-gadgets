const Review = require('../Models/Review');
const Product = require('../Models/Product');

// Helper to update Product rating and review count
const updateProductRating = async (productId) => {
  try {
    const reviews = await Review.find({ product: productId, isApproved: true });
    
    let avgRating = 5;
    if (reviews.length > 0) {
      const total = reviews.reduce((acc, review) => acc + review.rating, 0);
      avgRating = total / reviews.length;
    }
    
    const roundedRating = Math.round(avgRating);
    const ratingStars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
    
    await Product.findByIdAndUpdate(productId, {
      reviews: reviews.length,
      ratingStars: ratingStars
    });
  } catch (error) {
    console.error('Error updating product rating:', error);
  }
};

// @desc    Get all reviews (Admin)
// @route   GET /api/reviews
// @access  Private/Admin
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate('user', 'name email')
      .populate('product', 'name img');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get approved reviews for a specific product
// @route   GET /api/reviews/product/:productId
// @access  Public
const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ 
      product: req.params.productId,
      isApproved: true 
    }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a review
// @route   POST /api/reviews
// @access  Private
const createReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;

    // Check if user already submitted a review for this product
    const alreadyReviewed = await Review.findOne({
      user: req.user._id,
      product
    });

    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Product already reviewed' });
    }

    const review = await Review.create({
      user: req.user._id,
      product,
      rating: Number(rating),
      comment
    });

    // Update Product stats
    await updateProductRating(product);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a review (Approve/Reject)
// @route   PUT /api/reviews/:id
// @access  Private/Admin
const updateReview = async (req, res) => {
  try {
    const { isApproved } = req.body;
    const review = await Review.findById(req.params.id);

    if (review) {
      review.isApproved = isApproved !== undefined ? isApproved : review.isApproved;
      const updatedReview = await review.save();
      
      // Update Product stats (since approval status changed)
      await updateProductRating(review.product);

      res.json(updatedReview);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private/Admin
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (review) {
      const productId = review.product;
      await review.deleteOne();
      
      // Update Product stats
      await updateProductRating(productId);

      res.json({ message: 'Review removed' });
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReviews,
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview
};
