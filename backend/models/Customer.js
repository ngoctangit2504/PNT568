const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { 
    type: String,
     required: true 
    },
    
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  company: { type: String, required: true },
  propertyCode: { type: String, required: true },
  rentalDate: { type: Date, required: true },
  hasPaid: { type: Boolean, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);