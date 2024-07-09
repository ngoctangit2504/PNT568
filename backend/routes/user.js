const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/user-count', userController.getUserCount);

router.get('/', userController.getAllUser);
router.delete('/:id', userController.deleteUser);

router.use(auth);


module.exports = router;