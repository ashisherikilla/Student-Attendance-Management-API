// attendanceRoutes.js — Routes that connect URLs to controller functions

const express = require("express");
const {
  registerStudent,
  markAttendance,
  getAttendance,
  getSummary
} = require("../controllers/attendanceController");

const router = express.Router();

// When user hits: POST /api/attendance/register → registerStudent is called
router.post("/register", registerStudent);

// POST /api/attendance/mark → markAttendance is called
router.post("/mark", markAttendance);

// GET /api/attendance/attendance/ROLLNUMBER → getAttendance is called
router.get("/attendance/:roll", getAttendance);

// GET /api/attendance/summary/ROLLNUMBER → getSummary is called
router.get("/summary/:roll", getSummary);

module.exports = router;
