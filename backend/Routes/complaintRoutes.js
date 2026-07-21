const express = require('express');
const router = express.Router();
const { submitComplaint, getComplaints } = require('../Controllers/complaintController');

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(submitComplaint)
  .get(protect, admin, getComplaints);

module.exports = router;
