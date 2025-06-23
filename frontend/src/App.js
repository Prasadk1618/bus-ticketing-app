import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import BusList from './components/BusList';
import BookingForm from './components/BookingForm';

function App() {
  const [user, setUser] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);

  return (
    <div>
      <h1>🚌 Bus Ticketing System</h1>
      {!user && (
        <>
          <Register />
          <Login setUser={setUser} />
        </>
      )}
      {user && !selectedBus && <BusList onBook={setSelectedBus} />}
      {user && selectedBus && <BookingForm bus={selectedBus} user={user} />}
    </div>
  );
}

export default App;
