const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema({
  charityDisplayName: { type: String, required: true },
  logoUrl: { type: String },
  charityId: { type: Number },
  description: { type: String }
});

module.exports = mongoose.model('Charity', charitySchema);
