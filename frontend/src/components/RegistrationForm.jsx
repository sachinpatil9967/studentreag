import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Courses list
    const courses = [
        'Computer Science',
        'Information Technology',
        'Data Science',
        'Business Administration',
        'Digital Marketing'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Assuming backend runs on port 5000
            await axios.post('http://localhost:5000/api/students', formData);
            setStatus({ type: 'success', message: 'Registration Successful!' });
            setFormData({ name: '', email: '', phone: '', course: '' });
        } catch (error) {
            const msg = error.response?.data?.message || 'Something went wrong. Please try again.';
            setStatus({ type: 'error', message: msg });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-card fade-in" style={{ padding: '2.5rem', maxWidth: '500px', width: '100%', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>Register Now</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Join our student community</p>
            </div>

            {status.message && (
                <div className={`message ${status.type}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Select Course</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Choose a course...</option>
                        {courses.map((course) => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Registering...' : 'Submit Registration'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
