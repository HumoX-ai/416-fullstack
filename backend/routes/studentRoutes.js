const express = require('express');

// Zafardan keladi
const { signupStudent, loginStudent } = require('../controllers/studentController');

const studentRoutes = express.Router()


studentRoutes.post('/signup', signupStudent)
studentRoutes.post('/login', loginStudent)

module.exports = studentRoutes