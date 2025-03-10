const express = require('express');

// Zafardan keladi
const { _ } = require('../controllers/trainerController');
// Sardordan keladi
const { authentication } = require('../middleware/authontification');

const trainerRoutes = express.Router()


// trainerRoutes.get('/', authentication, getPhotos)
// trainerRoutes.get('/:id', authentication, myPhoto)
// trainerRoutes.post('/addPhoto/:id', authentication, addPhoto)
// trainerRoutes.delete('/deleteImg/:id', authentication, deletPhoto)

module.exports = trainerRoutes