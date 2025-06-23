const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  db.query('INSERT INTO users SET ?', { name, email, password: hash }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, message: 'User registered' });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) return res.status(401).send('Invalid credentials');
    const user = results[0];
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).send('Invalid credentials');
    res.send({ message: 'Login successful', user });
  });
});

module.exports = router;
