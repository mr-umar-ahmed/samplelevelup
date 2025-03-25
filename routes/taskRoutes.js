const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');
const User = require('../models/userModel'); 

// ✅ Mark Task as Completed & Update XP/Health
router.post('/tasks/complete/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        const { userId } = req.body;

        const task = await Task.findById(taskId);
        if (!task) return res.status(404).json({ error: "Task not found" });

        // Update Task Completion
        task.completed = true;
        await task.save();

        // Update User XP, Level & Health
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.xp += task.xp;  // Increase XP
        user.health -= 10;  // Decrease health bar
        if (user.xp >= user.level * 50) {  // Level-Up Logic
            user.level += 1;
            user.xp = 0;
            user.health = 100;  // Refill health on level-up
        }
        await user.save();

        res.json({ message: "Task completed!", xp: user.xp, level: user.level, health: user.health });
    } catch (error) {
        console.error("❌ Task Completion Error:", error);
        res.status(500).json({ error: "Task completion failed" });
    }
});

module.exports = router;
