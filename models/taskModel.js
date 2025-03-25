const mongoose = require('mongoose');

// 🔹 Task Schema
const TaskSchema = new mongoose.Schema({
    userId: { type: String, required: true },  // User who created the task
    type: { type: String, enum: ['study', 'fitness'], required: true },  // Task category
    title: { type: String, required: true },  // Task name
    description: { type: String },
    xp: { type: Number, default: 10 },  // XP earned per task
    completed: { type: Boolean, default: false },  // Task status
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);
