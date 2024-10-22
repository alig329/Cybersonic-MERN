const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Received data:', req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log('User successfully created:', newUser);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'An error occurred, please try again.' });
  }
});

// Sign-in Route
router.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get Users Route - For testing purposes
router.get('/auth/signup', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred, please try again.' });
  }
});

module.exports = router;
