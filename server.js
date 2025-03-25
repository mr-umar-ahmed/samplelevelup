require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');  // ✅ Import Task Routes
const aiRoutes = require('./routes/aiRoutes');      // ✅ Import AI Routes

const app = express();

// ✅ Middleware
app.use(express.json());  // Parse JSON requests
app.use(cors());          // Handle CORS policy

// ✅ Debugging: Print MONGO_URI (Only in Development Mode)
if (process.env.NODE_ENV !== 'production') {
    console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
}

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);  // Exit process on database failure
    });

// ✅ API Routes
app.use('/api/tasks', taskRoutes);  // ✅ Task API Routes
app.use('/api/ai', aiRoutes);       // ✅ AI API Routes

// ✅ Test Route
app.get('/test', (req, res) => {
    res.json({ message: "Server is running!" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
