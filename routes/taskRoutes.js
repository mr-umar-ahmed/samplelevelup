const express = require('express');
const Task = require('../models/taskModel'); // Import Task Model
const router = express.Router();

// ✅ Create a Task
router.post('/', async (req, res) => {  // ✅ Corrected path to '/'
    try {
        const { userId, type, title, description, xp } = req.body;
        const newTask = new Task({ userId, type, title, description, xp });
        await newTask.save();
        res.status(201).json({ message: "Task created successfully!", task: newTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
