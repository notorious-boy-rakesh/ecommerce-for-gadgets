const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a blog title'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Please add blog content']
  },
  author: {
    type: String,
    default: 'Admin'
  },
  image: {
    type: String,
    default: ''
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);
