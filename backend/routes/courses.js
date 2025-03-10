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
// const authenticate = require("../middleware/authontification");

courses.post("/ ", addCourse);
courses.get("/trainer/courses/:id", seeTeacherCourse);
courses.get("/", allCourses);
courses.post("/enroll", registerStudent);
courses.post("/unenroll", deleteStudent);
courses.get("/:id", getCourseDetails);

module.exports = courses;
