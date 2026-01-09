# 🎓 Student Registration Portal

A modern, responsive student registration web application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). features a premium "Glassmorphism" UI design.

## 🚀 Features
- **Modern UI**: Polished interface with dark mode, glassmorphism, and smooth animations.
- **REST API**: Backend API to handle student registrations.
- **Data Persistence**: MongoDB database integration.
- **Validation**: Server-side checks for existing emails.

---

## 🛠 Prerequisites

Before running the project, make sure you have the following installed:
1. **Node.js** (v14 or higher) - [Download Here](https://nodejs.org/)
2. **MongoDB** - [Download Community Server](https://www.mongodb.com/try/download/community)
   *Ensure MongoDB service is running locally on port `27017`.*

---

## 🏁 How to Run

You will need to run the **Backend** and **Frontend** in two separate terminals.

### 1. Start the Backend Server
This handles the database connections and API requests.

```bash
# Open a terminal and navigate to the backend directory
cd backend

# Install dependencies (first time only)
npm install

# Start the server
npm start
```
✅ **Success**: You should see: `Server running on port 5000` and `MongoDB Connected`.

### 2. Start the Frontend Application
This runs the React user interface.

```bash
# Open a NEW terminal and navigate to the frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```
✅ **Success**: You will see a local URL, typically `http://localhost:5173`. Open this in your browser.

---

## 📁 Project Structure

```
student-portal/
├── backend/                 # Node.js & Express API
│   ├── models/             # Mongoose Schemas (Student.js)
│   ├── server.js           # Entry point and API Routes
│   └── package.json        # Backend dependencies
│
└── frontend/                # React App (Vite)
    ├── src/
    │   ├── components/     # React Components (RegistrationForm.jsx)
    │   ├── App.jsx         # Main Application Component
    │   └── index.css       # Global Styles & Theming
    └── package.json        # Frontend dependencies
```

## ❓ Troubleshooting

- **MongoDB Error**: If the backend fails to connect, ensure your local MongoDB service is running (`mongod`).
- **Port In Use**: If port 5000 is taken, change the `PORT` in `backend/server.js` and update the URL in `frontend/src/components/RegistrationForm.jsx`.
