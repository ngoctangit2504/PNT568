const express = require('express');
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

const router = express.Router();

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send({ error: 'Access denied' });
  }
  next();
};

router.use(auth, isAdmin);

router.get('/users', adminController.getUsers);
router.get('/floor-plan', adminController.getFloorPlan);

module.exports = router;