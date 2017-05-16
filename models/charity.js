const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String },
  charityId: { type: Number },
  description: { type: String },
  profilePageUrl: { type: String },
  favouritedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Charity', charitySchema);
