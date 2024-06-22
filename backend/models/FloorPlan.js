const mongoose = require('mongoose');

const floorPlanSchema = new mongoose.Schema({
  image: String,
  floor: Number,
  area: Number,
  status: {
    type: String,
    enum: ['available', 'occupied', 'maintenance'],
    default: 'available'
  },
  description: String,
  company:String,
});

module.exports = mongoose.model('FloorPlan', floorPlanSchema);