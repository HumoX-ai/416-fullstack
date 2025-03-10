const express = require('express');

// Zafardan keladi
const { signupTrainer, loginTrainer } = require('../controllers/trainerController');
// Sardordan keladi
const trainerRoutes = express.Router()


trainerRoutes.post('/signup', signupTrainer);
trainerRoutes.post('/login', loginTrainer);

module.exports = trainerRoutes