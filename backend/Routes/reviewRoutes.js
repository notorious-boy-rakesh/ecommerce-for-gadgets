const express = require('express');
const router = express.Router();
const {
  getReviews,
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview
} = require('../Controllers/reviewController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, admin, getReviews)
  .post(protect, createReview);

router.get('/product/:productId', getReviewsByProduct);

router.route('/:id')
  .put(protect, admin, updateReview)
  .delete(protect, admin, deleteReview);

module.exports = router;
