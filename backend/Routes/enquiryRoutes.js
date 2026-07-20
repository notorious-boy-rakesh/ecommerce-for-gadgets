const express = require('express');
const router = express.Router();
const { submitEnquiry, getEnquiries } = require('../Controllers/enquiryController');

router.route('/')
  .post(submitEnquiry)
  .get(getEnquiries); // Add protect/admin middleware if needed in the future

module.exports = router;
