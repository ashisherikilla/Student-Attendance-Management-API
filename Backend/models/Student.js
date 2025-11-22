// Student.js — Defines how a student looks inside the database

const mongoose = require("mongoose");
// Mongoose helps us interact with MongoDB

// This is a small structure for each attendance entry
const attendanceSchema = new mongoose.Schema({
  date: String, 
  // We store date as a simple string like "2025-11-22"

  status: {
    type: String,
    enum: ["present", "absent"], 
    // The value must be ONLY "present" or "absent"
    default: "present",
  },

  markedAt: { type: Date, default: Date.now }
  // Date and time when teacher marked attendance
});

// This is the main student structure
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  // Student name is required

  roll: { type: String, required: true, unique: true },
  // Roll number must be unique (cannot have two students with the same roll)

  dept: String,
  // Department (CSE, Civil, Mechanical etc.)

  attendance: [attendanceSchema],
  // Every student's attendance is stored in an array (list)
});

// Exporting the model so we can use it in controller
module.exports = mongoose.model("Student", studentSchema);
