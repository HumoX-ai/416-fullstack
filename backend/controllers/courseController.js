const pool = require("../config/db")

exports.addCourse = async (req, res) => {
    try {
        const { CourseName, Category, ImageURL, Price } = req.body;
        const TrainerID = req.user.id;
        const result = await pool.query('INSERT INTO Course (TrainerID, CourseName, Category, ImageURL, Price) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        [TrainerID, CourseName, Category, ImageURL, Price]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json('Kurs qo`shishda muammo bo`lib qoldi')

    }
}

exports.seeTeacherCourse = async (req, res) => {
    try {
        const TrainerID = req.user.id;
        const result = await pool.query(`
        SELECT 
            c.id AS CourseID,
            c.CourseName,
            c.Category,
            c.ImageURL,
            c.Price
        FROM Course c
        WHERE c.TrainerID = ${TrainerID};
`)

res.status(200).json(result.rows)
    } catch (error) {
        res.status(404).json('Serverda muammo')

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

