const express = require("express")
const{addCourse,seeTeacherCourse,allCourses,registerStudent,deleteStudent,getCourseDetails} = require("../controllers/courseController")
const courses = express.Router();
const authenticate = require('../middleware/authentication');
const router = express.Router();

courses.post('/courses', authenticate, addCourse);
courses.get('/trainer/courses', authenticate, seeTeacherCourse);
courses.get('/courses', authenticate, allCourses);
courses.post('/courses/enroll', authenticate, registerStudent);
courses.post('/courses/unenroll', authenticate, deleteStudent);
courses.get('/courses/:id', authenticate, getCourseDetails);

module.exports = router;