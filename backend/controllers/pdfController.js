const PDF = require('../models/pdf');
const fs = require('fs');
const path = require('path');

exports.listPDFs = async (req, res) => {
  try {
    const pdfs = await PDF.find();
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPDF = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const pdf = new PDF({
    name: req.file.originalname,
    path: req.file.path
  });

  try {
    const newPDF = await pdf.save();
    res.status(201).json(newPDF);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePDF = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    // Kiểm tra xem file có tồn tại không trước khi xóa
    if (fs.existsSync(pdf.path)) {
      fs.unlinkSync(pdf.path);
    } else {
      console.log('File does not exist, skipping file deletion');
    }

    await PDF.findByIdAndDelete(req.params.id);
    res.json({ message: 'PDF deleted successfully' });
  } catch (error) {
    console.error('Error deleting PDF:', error);
    res.status(500).json({ message: 'Error deleting PDF', error: error.message });
  }
};



exports.getPDFCount = async (req, res) => {
  try {
    const count = await PDF.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};