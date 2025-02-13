// /routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Route for user registration (Sign Up)
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

module.exports = router;
