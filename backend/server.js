const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Student = require('./models/Student');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/student-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
// Register a new student
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, phone, course } = req.body;

        // Simple validation
        if (!name || !email || !phone || !course) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists' });
        }

        const newStudent = new Student({
            name,
            email,
            phone,
            course
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully', student: newStudent });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find().sort({ enrollmentDate: -1 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
