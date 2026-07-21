const express = require('express');
const router = express.Router();
const { submitEnquiry, getEnquiries } = require('../Controllers/enquiryController');

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(submitEnquiry)
  .get(protect, admin, getEnquiries);

module.exports = router;
