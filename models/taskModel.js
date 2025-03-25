const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // User who created the task
    type: { type: String, enum: ['study', 'fitness'], required: true }, // Task category
    title: { type: String, required: true }, // Task title
    description: { type: String }, // Task description
    xp: { type: Number, default: 10 }, // XP earned for completing task
    completed: { type: Boolean, default: false }, // Task completion status
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
