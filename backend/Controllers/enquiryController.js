const Enquiry = require('../Models/Enquiry');

// @desc    Submit an enquiry
// @route   POST /api/enquiries
// @access  Public
const submitEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      enquiryType: req.body['enquiry-type'],
      productName: req.body['product-name'],
      subject: req.body.subject,
      message: req.body.message,
      contactMethod: req.body['contact-method']
    });
    res.status(201).json({ success: true, data: enquiry, message: 'Enquiry submitted successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all enquiries
// @route   GET /api/enquiries
// @access  Private/Admin
const getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: enquiries });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitEnquiry,
  getEnquiries
};
