// attendanceController.js — Handles register, mark, get attendance, summary

const Student = require("../models/Student");
// Importing the Student model so we can save & read data from DB

// ---------------------------
// REGISTER A NEW STUDENT
// ---------------------------
exports.registerStudent = async (req, res) => {
  try {
    // Extract user input from the request body
    const { name, roll, dept } = req.body;

    // Check if all required fields are present
    if (!name || !roll) {
      return res.status(400).json({
        message: "Name and Roll number are required",
      });
    }

    // Check if student with same roll already exists
    let existing = await Student.findOne({ roll });
    if (existing) {
      return res.status(409).json({ message: "Roll already registered" });
    }

    // Create a new student object
    const student = new Student({ name, roll, dept });

    // Save to database
    await student.save();

    res.status(201).json({
      message: "Student registered successfully",
      student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------
// MARK ATTENDANCE
// ---------------------------
exports.markAttendance = async (req, res) => {
  try {
    const { roll, date, status } = req.body;

    // Find the student with given roll number
    const student = await Student.findOne({ roll });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Add attendance entry to array
    student.attendance.push({ date, status });

    // Save updated data
    await student.save();

    res.status(200).json({
      message: "Attendance marked successfully",
      student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------
// GET FULL ATTENDANCE OF A STUDENT
// ---------------------------
exports.getAttendance = async (req, res) => {
  try {
    const { roll } = req.params;

    // Find student
    const student = await Student.findOne({ roll });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      attendance: student.attendance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------
// SUMMARY (present %, absent %, total days)
// ---------------------------
exports.getSummary = async (req, res) => {
  try {
    const { roll } = req.params;

    const student = await Student.findOne({ roll });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const present = student.attendance.filter(
      (a) => a.status === "present"
    ).length;
    const absent = student.attendance.filter(
      (a) => a.status === "absent"
    ).length;
    const total = student.attendance.length;

    const percentage = total === 0 ? 0 : Math.round((present / total) * 100);

    res.status(200).json({
      present,
      absent,
      total,
      percentage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
