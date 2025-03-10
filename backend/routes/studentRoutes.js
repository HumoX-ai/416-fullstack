const express = require('express');

// Zafardan keladi
const { _ } = require('../controllers/studentController');
// Sardordan keladi
const { authentication } = require('../middleware/authontification');

const studentRoutes = express.Router()


// studentRoutes.get('/', authentication, getPhotos)
// studentRoutes.get('/:id', authentication, myPhoto)
// studentRoutes.post('/addPhoto/:id', authentication, addPhoto)
// studentRoutes.delete('/deleteImg/:id', authentication, deletPhoto)

module.exports = studentRoutes