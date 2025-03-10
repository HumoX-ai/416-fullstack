const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signupTrainer = async (req, res) => {
    const { FirstName, LastName, Username, Password, Specialization, Experience } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        const result = await pool.query(
            'INSERT INTO Trainer (FirstName, LastName, Username, Password, Specialization, Experience) VALUES ($1, $2, $3, $4, $5, $6) returning id, Username',
            [FirstName, LastName, Username, hashedPassword, Specialization, Experience]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ message: 'Username already exists' });
    }
};

exports.loginTrainer = async (req, res) => {
    const { Username, Password } = req.body;
    const result = await pool.query('select * from Trainer where username = $1', [Username]);
    const trainer = result.rows[0];
    if (!trainer || !(await bcrypt.compare(Password, trainer.Password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: trainer.id, role: 'trainer' }, 'secret_key', { expiresIn: '3h' });
    res.json({ token });
};

