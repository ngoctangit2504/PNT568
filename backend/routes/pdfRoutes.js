const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfController = require('../controllers/pdfController');

const upload = multer({ dest: 'uploads/' });

router.get('/pdf-count', pdfController.getPDFCount);


router.get('/', pdfController.listPDFs);
router.post('/', upload.single('pdf'), pdfController.addPDF);
router.delete('/:id', pdfController.deletePDF);

module.exports = router;