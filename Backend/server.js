// server.js — Simple backend server with clear explanation

require('dotenv').config(); 
// This line loads variables from .env file (like PORT or database URL)

const express = require('express');  
// Express is the main backend framework

const cors = require('cors');        
// CORS allows frontend (React, Postman, browser) to talk to backend

const connectDB = require('./config/db'); 
// This will connect to MongoDB (database)

const attendanceRoutes = require('./routes/attendanceRoutes'); 
// Importing our attendance API routes

const app = express(); 
// Creating our Express app

app.use(express.json()); 
// This allows backend to read JSON data from request body

app.use(cors()); 
// This allows requests from any frontend (React, Postman, etc.)

// Connect to the database (remove if you don’t have db.js yet)
connectDB();

// All attendance-related routes will start with: /api/attendance
app.use('/api/attendance', attendanceRoutes);

// Start the server on the given port
const PORT = process.env.PORT || 5000; 
// If .env has PORT, use it; otherwise use 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// exporting app (optional)
module.exports = app;
