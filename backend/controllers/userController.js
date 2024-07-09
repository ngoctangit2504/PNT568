const User = require('../models/User');

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại' });
    res.json({ message: 'Đã xóa người dùng' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserCount = async (req, res) => {
    try {
      const count = await User.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };