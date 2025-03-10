const pool = require("../config/db")

exports.addCourse = async (req, res) => {
    try {
        const { CourseName, Category, ImageURL, Price } = req.body;
        const TrainerID = req.params.id;
        const result = await pool.query('INSERT INTO Course (TrainerID, CourseName, Category, ImageURL, Price) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        [TrainerID, CourseName, Category, ImageURL, Price]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json('Kurs qo`shishda muammo bo`lib qoldi')
        console.log(error);
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
        WHERE c.TrainerID = ${TrainerID};
`)

        res.status(200).json(result.rows)
    } catch (error) {
        res.status(404).json('Serverda muammo')
        console.log(error);
    }
}

exports.allCourses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Course')
        res.json(result.rows);
    } catch (error) {
        res.status(404).json('Serverda muammo')
        console.log(error);

    }
}

exports.registerStudent = async (req, res) => {
    try {
        const { CourseID } = req.body;
        const student_id = req.params.id;
        await pool.query(`INSERT INTO Enrollment (StudentID, CourseID) VALUES ($1,$2)
`[student_id, CourseID])
        res.status(201).json({ message: 'Student qo`shildi' })
    } catch (error) {
        res.status(403).json('Student qo`shishda muammo bo`ldi')
        console.log(error);
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const { CourseID } = req.body;
        const student_id = req.params.id;
        await pool.query(`DELETE FROM Enrollment WHERE StudentID = ${student_id} AND CourseID = ${CourseID} RETURNING *;
`[student_id, CourseID])
        res.status(201).json({ message: 'Student o`chirildi' })
    } catch (error) {
        res.status(403).json('Student o`chirishda muammo bo`ldi')
        console.log(error);
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
        console.log(error);
    }
}

