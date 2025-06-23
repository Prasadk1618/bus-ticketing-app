const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YourPass123!',
  database: 'bus_booking'
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL connected!');
});

module.exports = conn;
