const express = require('express');
const router = express.Router();

// ✅ Example Test Route
router.get('/test', (req, res) => {
    res.json({ message: "Task Routes are working!" });
});

module.exports = router; // ✅ Ensure this line is present
