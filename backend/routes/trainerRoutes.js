const express = require('express');

// Zafardan keladi
const { signupTrainer, loginTrainer } = require('../controllers/trainerController');
// Sardordan keladi
const trainerRoutes = express.trainerRoutes()


trainerRoutes.post('/trainer/signup', signupTrainer);
trainerRoutes.post('/trainer/login', loginTrainer);

module.exports = trainerRoutes