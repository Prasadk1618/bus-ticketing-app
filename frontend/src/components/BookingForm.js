import React, { useState } from 'react';
import axios from 'axios';

export default function BookingForm({ bus, user }) {
  const [seats, setSeats] = useState(1);

  const book = async () => {
    await axios.post('http://localhost:5000/api/bookings', {
      user_id: user.id,
      bus_id: bus.id,
      seats,
      payment_status: 'PAID'
    });
    alert('Booking successful!');
  };

  return (
    <div>
      <h2>Book: {bus.name}</h2>
      <input
        type="number"
        value={seats}
        min={1}
        max={bus.available_seats}
        onChange={(e) => setSeats(Number(e.target.value))}
      />
      <button onClick={book}>Confirm Booking</button>
    </div>
  );
}
