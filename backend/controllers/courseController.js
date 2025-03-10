const pool = require("../config/db")

exports.addCourse = async (req, res) => {
    try {
        const { name, category, image_url, price } = req.body;
        const trainer_id = req.user.id;
        const result = await pool.query('INSERT INTO Course (TrainerID, CourseName, Category, ImageURL, Price) VALUES ($1, $2, $3, $4, $5)')
        [TrainerID,CourseName,Category,ImageURL,Price]

    } catch (error) {

    }
}

exports.seeTeacherCourse = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.allCourses = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.registerStudent = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.deleteStudent = async (req, res) => {
    try {

    } catch (error) {

    }
}
exports.getCourseDetails = async (req, res) => {
    try {

    } catch (error) {

    }
}

