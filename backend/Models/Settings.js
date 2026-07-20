const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: 'Teckkie Gadgets'
  },
  contactEmail: {
    type: String,
    default: 'support@teckkie.com'
  },
  supportPhone: {
    type: String,
    default: '+1 234 567 8900'
  },
  maintenanceMode: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'light'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Settings', settingsSchema);
