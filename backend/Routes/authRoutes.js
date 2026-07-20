const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  loginAdmin,
  logoutUser,
  getUserProfile,
} = require('../Controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/signup', registerUser); // frontend calls /signup in context
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/logout', logoutUser);
router.get('/me', protect, getUserProfile);

module.exports = router;
