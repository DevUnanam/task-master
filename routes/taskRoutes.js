const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// Task Routes with authentication middleware

router.post('/', authMiddleware, createTask);           // Create Task (protected)
router.get('/', authMiddleware, getTasks);              // Get all Tasks (protected)
router.get('/:id', authMiddleware, getTaskById);        // Get Task by ID (protected)
router.put('/:id', authMiddleware, updateTask);         // Update Task (protected)
router.delete('/:id', authMiddleware, deleteTask);     // Delete Task (protected)

module.exports = router;
