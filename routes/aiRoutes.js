const express = require('express');
const router = express.Router();
const openai = require('../ai/aiConfig'); 

// ✅ AI Suggests Study & Workout Tasks
router.post('/task-suggestions', async (req, res) => {
    const { category, difficulty } = req.body;  

    if (!category || !difficulty) {
        return res.status(400).json({ error: "Category and difficulty are required." });
    }

    let prompt = "";
    if (category === "study") {
        prompt = `Suggest a ${difficulty} study plan for programming students.`;
    } else if (category === "fitness") {
        prompt = `Suggest a ${difficulty} workout plan for home exercises.`;
    } else {
        return res.status(400).json({ error: "Invalid category. Choose 'study' or 'fitness'." });
    }

    try {
        // 🔹 OpenAI API Call
        const response = await openai.createCompletion({
            model: "gpt-4",
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        });

        res.json({ suggestion: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error("❌ AI Suggestion Error:", error);
        res.status(500).json({ error: "Failed to get AI suggestion" });
    }
});

module.exports = router;
