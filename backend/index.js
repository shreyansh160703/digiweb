require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


(async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
})();

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", require("./routes/chatbotRoutes")); 

app.get("/", (req, res) => {
  res.send("🚀 DigiWeb Backend is Running!");
});

app.use((err, req, res, next) => {
  console.error("🚨 Global Error:", err.stack || err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message || "Unknown Error",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
