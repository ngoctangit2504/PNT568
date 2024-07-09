const MatBang = require('../models/MatBang');

exports.getAllMatBang = async (req, res) => {
  try {
    const matBangs = await MatBang.find();
    res.json(matBangs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMatBang = async (req, res) => {
  const matBang = new MatBang(req.body);
  try {
    const newMatBang = await matBang.save();
    res.status(201).json(newMatBang);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMatBang = async (req, res) => {
  try {
    const matBang = await MatBang.findById(req.params.id);
    if (!matBang) return res.status(404).json({ message: 'Mặt bằng không tồn tại' });
    res.json(matBang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMatBang = async (req, res) => {
  try {
    const matBang = await MatBang.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!matBang) return res.status(404).json({ message: 'Mặt bằng không tồn tại' });
    res.json(matBang);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMatBang = async (req, res) => {
  try {
    const matBang = await MatBang.findByIdAndDelete(req.params.id);
    if (!matBang) return res.status(404).json({ message: 'Mặt bằng không tồn tại' });
    res.json({ message: 'Đã xóa mặt bằng' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMatBangCount = async (req, res) => {
  try {
    const count = await MatBang.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};