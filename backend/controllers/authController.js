const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

let blacklistedTokens = [];

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: false // Mặc định là false khi đăng ký
    });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, 'secret', {
      expiresIn: '1h'
    });

    res.send({ token, user });
  } catch (error) {
    res.status(500).send({ error: 'Error logging in' });
  }
};

exports.logout = (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  blacklistedTokens.push(token);
  res.status(200).send({ message: 'Logout successful' });
};

exports.isAuthenticated = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (blacklistedTokens.includes(token)) {
    return res.status(401).send({ error: 'Token is no longer valid' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

