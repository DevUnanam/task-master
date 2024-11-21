const Task = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
    const { title, description, priority, deadline } = req.body;
    try {
        const newTask = new Task({
            user: req.user.id, // Assuming you're using authentication middleware to add user info
            title,
            description,
            priority,
            deadline
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Get all tasks for the authenticated user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }); // Filter by user ID
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Get a specific task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { title, description, priority, deadline } = req.body;
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        task.title = title || task.title;
        task.description = description || task.description;
        task.priority = priority || task.priority;
        task.deadline = deadline || task.deadline;

        await task.save();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Use deleteOne instead of remove
        await Task.deleteOne({ _id: id });

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
