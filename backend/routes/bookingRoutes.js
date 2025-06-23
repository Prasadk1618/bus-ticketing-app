const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { user_id, bus_id, seats, payment_status } = req.body;
  db.query('INSERT INTO bookings SET ?', { user_id, bus_id, seats, payment_status }, (err, result) => {
    if (err) return res.status(500).send(err);
    db.query('UPDATE buses SET available_seats = available_seats - ? WHERE id = ?', [seats, bus_id]);
    res.send({ id: result.insertId, message: 'Booking successful' });
  });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  db.query('SELECT * FROM bookings WHERE user_id = ?', [userId], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
});

module.exports = router;
