// Importing mongoose so we can connect to MongoDB
const mongoose = require("mongoose");

// This function will connect our backend to MongoDB
const connectDB = async () => {
  try {
    // Connecting to local MongoDB database
    // "attendanceDB" is the database name (you can change it)
    // If the DB does not exist, MongoDB will create it automatically
    await mongoose.connect("mongodb://localhost:27017/attendanceDB", {
      // options are not required in new versions of mongoose
      // so this object is empty {} – but we still keep it
    });

    console.log("MongoDB connected Successfully");

  } catch (err) {
    // If connection fails, show the error message
    console.error("MongoDB connection error:", err.message);

    // Stop the server if database connection fails
    process.exit(1);
  }
};

// Exporting this function so we can use it in server.js
module.exports = connectDB;


