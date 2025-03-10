const express = require('express');

// Zafardan keladi
const { signupTrainer, loginTrainer } = require('../controllers/trainerController');
// Sardordan keladi
const { authentication } = require('../middleware/authontification');

const trainerRoutes = express.Router()


router.post('/trainer/signup', signupTrainer);
router.post('/trainer/login', loginTrainer);

module.exports = trainerRoutes