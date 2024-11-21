const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors middleware

// Load environment variables
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Allow preflight requests for all routes
app.options('*', cors());

// Connect Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the TaskMaster API! Use /api/auth and /api/tasks for endpoints.');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
