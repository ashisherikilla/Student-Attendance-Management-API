# 🎓 Student Attendance Management API

A simple, beginner-friendly **Node.js + Express + MongoDB** backend for managing student attendance.  
Built with clean code, clear structure, and designed for students learning backend development step-by-step.

---

## 🚀 Features

- 📝 Register new students  
- 🎯 Mark attendance (present/absent)  
- 📅 Stores attendance automatically with date  
- ❌ Prevents duplicate marking for same day  
- 📊 View complete attendance history  
- 📈 Attendance summary: total presents, absents & percentage  
- 🌐 Fully deployed using Render + MongoDB Atlas  
- 🔒 Well-structured, simple & beginner-friendly codebase  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend Runtime | **Node.js** |
| Framework | **Express.js** |
| Database | **MongoDB Atlas** |
| ODM | **Mongoose** |
| Deployment | **Render** |
| Testing Tools | Postman, Thunder Client, curl |

---

## 📂 Project Structure

```
attendance-api/
│── server.js
│── config/
│    └── db.js
│── controllers/
│    └── attendanceController.js
│── models/
│    └── Student.js
│── routes/
│    └── attendanceRoutes.js
└── README.md
```

---

## 🌍 Live Deployment

Base URL:  
👉 **https://student-attendance-management-api.onrender.com**

(API backend — open in Postman / Browser / Thunder Client)

---

# 📌 API Endpoints

All endpoints start with:

```
/api/attendance
```

---

## 1️⃣ **Register a Student**

**POST**  
```
https://student-attendance-management-api.onrender.com/api/attendance/register
```

### Request Body
```json
{
  "name": "Ashish",
  "roll": "CE01",
  "dept": "Civil"
}
```

---

## 2️⃣ **Mark Attendance**

**POST**  
```
https://student-attendance-management-api.onrender.com/api/attendance/mark
```

### Request Body
```json
{
  "roll": "CE01",
  "status": "present"
}
```

---

## 3️⃣ **Get Full Attendance**

**GET**  
```
https://student-attendance-management-api.onrender.com/api/attendance/attendance/:roll
```

### Example
```
https://student-attendance-management-api.onrender.com/api/attendance/attendance/CE01
```

---

## 4️⃣ **Attendance Summary**

**GET**  
```
https://student-attendance-management-api.onrender.com/api/attendance/summary/:roll
```

### Example
```
https://student-attendance-management-api.onrender.com/api/attendance/summary/CE01
```

---

## 🧪 Testing the API

You may use:

- 🧪 Postman  
- ⚡ Thunder Client (VS Code)  
- 💻 curl  

Example:
```bash
curl -X GET https://student-attendance-management-api.onrender.com/api/attendance/summary/CE01
```

---

## 🌱 Run Locally (Optional)

```bash
git clone <your-repo-url>
cd attendance-api
npm install
npm start
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
```

---

## 🤝 Contributing

Contributions are welcome!  
You may add:

- Authentication (JWT)
- Admin/Teacher login
- Subject-wise attendance
- Dashboards & charts
- React frontend

---

## 🧑‍💻 Author

Made with ❤️ by **Ashish**  
If this project helped you, please ⭐ the repository!



   


