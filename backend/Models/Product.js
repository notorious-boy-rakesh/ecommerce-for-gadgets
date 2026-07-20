const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true
  },
  desc: {
    type: String,
    required: [true, 'Please add a product description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  oldPrice: {
    type: Number,
    default: null
  },
  img: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  badge: {
    type: String,
    default: null
  },
  badgeClass: {
    type: String,
    default: ''
  },
  ratingStars: {
    type: String,
    default: '★★★★★'
  },
  reviews: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  stock: {
    type: Number,
    required: [true, 'Please add stock quantity'],
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
