const express = require('express');
const router = express.Router();
const { submitComplaint, getComplaints } = require('../Controllers/complaintController');

router.route('/')
  .post(submitComplaint)
  .get(getComplaints); // Add protect/admin middleware if needed in the future

module.exports = router;
