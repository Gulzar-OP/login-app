const express = require('express');
const { signup, login, getUser } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authMiddleware, getUser);

module.exports = router;
