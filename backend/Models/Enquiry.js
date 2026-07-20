const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please add your full name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add your email']
  },
  phone: {
    type: String,
  },
  enquiryType: {
    type: String,
    required: [true, 'Please select an enquiry type']
  },
  productName: {
    type: String,
  },
  subject: {
    type: String,
    required: [true, 'Please add a subject']
  },
  message: {
    type: String,
    required: [true, 'Please add your message']
  },
  contactMethod: {
    type: String,
    default: 'email'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Enquiry', enquirySchema);
