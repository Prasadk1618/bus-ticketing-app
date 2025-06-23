const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM buses', (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
});

router.post('/', (req, res) => {
  const bus = req.body;
  db.query('INSERT INTO buses SET ?', bus, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, message: 'Bus added' });
  });
});

module.exports = router;
