const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');
const DetectRouter = require('./Routes/DetectRouter');
require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Enable CORS & Body Parsing **before routes**
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static('public'));

const HF_API_KEY = "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"; // Use environment variable for security
const MODEL_NAME = "tiiuae/falcon-7b-instruct";

// ✅ Hugging Face Diet Plan Route
app.post('/generate-diet', async (req, res) => {
    try {
        console.log("Received Request:", req.body);

        const { weight, height, targetWeight, age, dietType, preference, allergies, region } = req.body;

        if (!weight || !height || !targetWeight || !age) {
            return res.status(400).json({ error: "Please fill all required fields." });
        }

        const prompt = `Create a diet plan for a ${age}-year-old person with ${weight}kg weight, ${height}cm height, targeting ${targetWeight}kg. The diet type is ${dietType}, preference is ${preference}, allergies: ${allergies || "None"}, food region: ${region}. Provide a well-structured response.`;

        const response = await fetch(`https://api-inference.huggingface.co/models/${MODEL_NAME}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: prompt })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Attach Routes
app.use('/auth', AuthRouter);
app.use('/detect', DetectRouter);

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});

