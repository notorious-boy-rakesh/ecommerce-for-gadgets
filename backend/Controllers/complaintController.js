const Complaint = require('../Models/Complaint');

// @desc    Submit a complaint
// @route   POST /api/complaints
// @access  Public
const submitComplaint = async (req, res, next) => {
  try {
    const complaint = await Complaint.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      orderid: req.body.orderid,
      complaintType: req.body['complaint-type'],
      date: req.body.date,
      subject: req.body.subject,
      resolution: req.body.resolution,
      description: req.body.description
    });
    res.status(201).json({ success: true, data: complaint, message: 'Complaint submitted successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all complaints
// @route   GET /api/complaints
// @access  Private/Admin
const getComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: complaints });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitComplaint,
  getComplaints
};
