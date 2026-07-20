const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../Controllers/blogController');
const { protect, admin } = require('../middleware/authMiddleware');

// Note: To conditionally allow getBlogs for admins vs public, we might need a non-failing protect middleware.
// But for simplicity, let's keep getBlogs public. The controller handles if req.user exists (if we pass auth header optionally).
// Actually, `protect` will fail if no token. Let's create an optionalAuth middleware or just let it be public and filter inside.
// Wait, req.user won't be set if we don't run protect. For now, public gets all published.

router.route('/')
  .get(getBlogs)
  .post(protect, admin, createBlog);

router.route('/:id')
  .get(getBlogById)
  .put(protect, admin, updateBlog)
  .delete(protect, admin, deleteBlog);

module.exports = router;
