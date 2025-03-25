require('dotenv').config();
const OpenAI = require('openai');  // ✅ Import OpenAI correctly

// ✅ Initialize OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,  // Load API Key from .env
});

module.exports = openai;
