const FloorPlan = require('../models/FloorPlan');

exports.getFloorPlans = async (req, res) => {
  try {
    const floorPlans = await FloorPlan.find();
    res.json(floorPlans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFloorPlan = async (req, res) => {
  upload.single('image')(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const floorPlanData = {
      image: req.file ? req.file.path : null,
      floor: req.body.floor,
      area: req.body.area,
      status: req.body.status,
      description: req.body.description,
      company: req.body.company
    };

    const newFloorPlan = new FloorPlan(floorPlanData);

    try {
      const savedFloorPlan = await newFloorPlan.save();
      res.status(201).json(savedFloorPlan);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};