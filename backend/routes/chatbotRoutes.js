const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ success: false, message: "Message is required" });
  }

  try {
    console.log("📩 Received message:", message);

    const response = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3.2",
      prompt: message,
      stream: false,
    });

    console.log("🟢 Ollama Response:", response.data);

    if (!response.data.response) {
      throw new Error("No response from Ollama API");
    }

    res.json({ success: true, reply: response.data.response });
  } catch (error) {
    console.error("❌ Chatbot Error:", error.message || error);

    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        success: false,
        message: "Chatbot service is unavailable. Ensure Ollama is running with `ollama serve`.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Chatbot service failed",
      error: error.message,
    });
  }
});

module.exports = router;
