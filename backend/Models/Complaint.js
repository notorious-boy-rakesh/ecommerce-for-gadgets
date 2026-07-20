const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
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
    required: [true, 'Please add your phone number']
  },
  orderid: {
    type: String,
  },
  complaintType: {
    type: String,
    required: [true, 'Please select a complaint type']
  },
  date: {
    type: Date,
    required: [true, 'Please add the date of incident']
  },
  subject: {
    type: String,
    required: [true, 'Please add a subject']
  },
  resolution: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Please describe your complaint']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Complaint', complaintSchema);
