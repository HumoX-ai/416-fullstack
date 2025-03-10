const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signupStudent = async (req, res) => {
    const { FirstName, LastName, Username, Password, Age } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        const result = await pool.query(
            'INSERT INTO Student (FirstName, LastName, Username, Password, Age) VALUES ($1, $2, $3, $4, $5) returning id, username',
            [FirstName, LastName, Username, hashedPassword, Age]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ message: 'Username already exists' });
    }
};

exports.loginStudent = async (req, res) => {
    const { Username, Password } = req.body;
    const result = await pool.query('SELECT * FROM Student WHERE Username = $1', [Username]);
    const student = result.rows[0];
    if (!student || !(await bcrypt.compare(Password, student.Password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: student.id, role: 'student' }, 'secret_key', { expiresIn: '3h' });
    res.json({ token });
};

