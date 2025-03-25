const mongoose = require('mongoose');

// 🔹 User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },  
    email: { type: String, required: true, unique: true },  
    xp: { type: Number, default: 0 },  // XP system
    level: { type: Number, default: 1 },  // Level system
    health: { type: Number, default: 100 },  // Health bar system
});

module.exports = mongoose.model('User', UserSchema);
