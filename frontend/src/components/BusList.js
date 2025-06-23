import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BusList({ onBook }) {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/buses').then(res => setBuses(res.data));
  }, []);

  return (
    <div>
      <h2>Available Buses</h2>
      {buses.map(bus => (
        <div key={bus.id}>
          <p>{bus.name} - {bus.source} to {bus.destination} | Seats: {bus.available_seats}</p>
          <button onClick={() => onBook(bus)}>Book</button>
        </div>
      ))}
    </div>
  );
}
