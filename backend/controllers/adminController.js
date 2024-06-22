const FloorPlan = require('../models/FloorPlan');
const User = require('../models/User');


exports.getFloorPlan = async (req, res) => {
  try {
    const floorPlans = await FloorPlan.find();
    res.send(floorPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};