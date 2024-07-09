// floorPlan router

const express = require('express');
const floorPlanController = require('../controllers/floorPlanController');

const router = express.Router();

router.get('/', floorPlanController.getFloorPlans);
router.post('/', floorPlanController.createFloorPlan);


module.exports = router;
