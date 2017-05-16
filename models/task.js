const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  date: { type: String, trim: true },
  price: { type: Number, required: true},
  image: { type: String },
  requestedBy: [{ user: { type: mongoose.Schema.ObjectId, ref: 'User' }, charity: { type: mongoose.Schema.ObjectId, ref: 'Charity' }}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  assignedTo: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
},{
  timestamps: true
});

// taskSchema
//   .path('price')
//   .get(convertToDecimal)
//   .set(convertFromDecimal);
//
// function convertToDecimal(value){
//   return (value/100);
// }
//
// function convertFromDecimal(value){
//   return (value * 100).toFixed(2);
// }

module.exports = mongoose.model('Task', taskSchema);
