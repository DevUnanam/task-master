const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv'); // Load dotenv first
dotenv.config(); // Load environment variables before using them

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Import MONGO_URI and JWT_SECRET after dotenv has loaded
const { MONGO_URI, JWT_SECRET } = require('./config');

console.log('Mongo URI:', MONGO_URI);
console.log('JWT Secret:', JWT_SECRET);

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Add a root route
app.get('/', (req, res) => {
    res.send('Welcome to the TaskMaster API! Use /api/auth and /api/tasks for endpoints.');
});


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
