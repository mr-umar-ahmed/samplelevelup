const express = require('express');
const router = express.Router();

// ✅ Example AI Test Route
router.get('/test', (req, res) => {
    res.json({ message: "AI Routes are working!" });
});

module.exports = router; // ✅ Ensure this line is present
