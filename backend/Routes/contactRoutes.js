const express = require('express');
const router = express.Router();
const { submitContactMessage, getContactMessages } = require('../Controllers/contactController');

router.route('/')
  .post(submitContactMessage)
  .get(getContactMessages); // Add protect/admin middleware if needed in the future

module.exports = router;
