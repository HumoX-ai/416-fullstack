const express = require("express");
const {
  addCourse,
  seeTeacherCourse,
  allCourses,
  registerStudent,
  deleteStudent,
  getCourseDetails,
} = require("../controllers/courseController");
const courses = express.Router();
const authenticate = require("../middleware/authontification");
const router = express.Router();

courses.post('/ ', authenticate, addCourse);
courses.get('/trainer/courses/:id', authenticate, seeTeacherCourse);
courses.get('/', authenticate, allCourses);
courses.post('/enroll', authenticate, registerStudent);
courses.post('/unenroll', authenticate, deleteStudent);
courses.get('/:id', authenticate, getCourseDetails);

module.exports = router;