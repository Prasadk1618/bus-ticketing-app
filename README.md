# 🚌 Bus Ticketing and Payment System

A cloud-powered full-stack web application for booking bus tickets and managing payments, providing a seamless and user-friendly experience for travelers and admins.

## 🚀 Features

- User Registration and Login
- View Available Buses
- Book Bus Tickets
- Payment Status Handling
- MySQL database storage
- RESTful API (Node.js + Express)
- React.js Frontend

---

## 🛠️ Technologies Used

| Frontend  | Backend  | Database | Dev Tools        |
|-----------|----------|----------|------------------|
| React.js  | Node.js  | MySQL    | npm, axios       |
| HTML/CSS  | Express  |          | dotenv, cors     |

---

## 📁 Project Structure

bus-ticketing-app/
├── backend/
│ ├── config/db.js
│ ├── routes/userRoutes.js
│ ├── routes/busRoutes.js
│ ├── routes/bookingRoutes.js
│ ├── .env
│ ├── server.js
│ └── schema.sql
├── frontend/
│ ├── public/index.html
│ ├── src/components/*.js
│ ├── src/App.js
│ ├── src/index.js
│ └── package.json
└── README.md


---

## ⚙️ Backend Setup (Node.js + MySQL)

1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install backend dependencies:
   ```bash
   npm install
3. Start the backend server:
   ```bash
   node server.js

## ⚙️ Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Clean install:
```bash
rm -rf node_modules package-lock.json
npm install
```
3. Start frontend server:
```bash
npm start
```
## Frontend runs at: http://localhost:3000
