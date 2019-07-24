const express = require('express');

const router = express.Router();

const { register, login } = require('../controllers/userController');

//Registration route
router.post('/register', (req,res) => {
	register(req,res);
});

//Login route
router.post('/login', (req,res) => {
	login(req,res);
});

module.exports = router;