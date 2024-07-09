const express = require('express');
const router = express.Router();
const matBangController = require('../controllers/matBangController');

router.get('/matbang-count', matBangController.getMatBangCount);

router.get('/', matBangController.getAllMatBang);
router.post('/', matBangController.createMatBang);
router.get('/:id', matBangController.getMatBang);
router.put('/:id', matBangController.updateMatBang);
router.delete('/:id', matBangController.deleteMatBang);

module.exports = router;