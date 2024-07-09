const UserCount = require('../models/User');


exports.getUserCount = async (req, res) => {
    try {
      const count = await UserCount.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };