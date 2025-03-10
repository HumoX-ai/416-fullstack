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
        const TrainerID = req.params.id;
        const result = await pool.query(`
        SELECT 
            c.id AS CourseID,
            c.CourseName,
            c.Category,
            c.ImageURL,
            c.Price
        FROM Course c
        WHERE c.TrainerID = ${TrainerID} returning *;
`)

        res.status(200).json(result.rows)
    } catch (error) {
        res.status(404).json('Serverda muammo')

    }
}

exports.allCourses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses')
        res.json(result.rows);
    } catch (error) {
        res.status(404).json('Serverda muammo')
    }
}

exports.registerStudent = async (req, res) => {
    try {
        const { CourseID } = req.body;
        const student_id = req.params.id
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
        const CourseID = req.params.id;
        const course = await pool.query('SELECT * FROM Course WHERE id = $1', [CourseID]);
        const student = await pool.query(`SELECT 
        s.id AS StudentID,
        s.FirstName,
        s.LastName,
        s.Username,
        s.Age
        FROM Enrollment e
        JOIN Student s ON e.StudentID = s.id
        WHERE e.CourseID = ${CourseID};
    `);
        res.status(200).json({ course: course.rows[0], student: student.rows })
    } catch (error) {
        res.status(404).json('Malumot olishda xatolik')
    }
}

