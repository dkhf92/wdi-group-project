const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  price: { type: Number, required: true}
},{
  timestamps: true
});

taskSchema
  .path('price')
  .get(convertToDecimal)
  .set(convertFromDecimal);

function convertToDecimal(value){
  return (value/100).toFixed(2);
}

function convertFromDecimal(value){
  return (value * 100);
}
module.exports = mongoose.model('Task', taskSchema);
