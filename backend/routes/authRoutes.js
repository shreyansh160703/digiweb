const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
require("dotenv").config();

const router = express.Router();

router.post("/register", async (req, res) => {
    console.log("🔥 Register API hit with data:", req.body);
  
  try {
    let { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    email = email.toLowerCase();

    if (!["client", "employee"].includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const newUser = new UserModel({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ success: true, message: "Registration successful" });
  } catch (err) {
    console.error("Error in /register:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    email = email.toLowerCase();
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.role !== role) {
      return res.status(403).json({ success: false, message: "Incorrect role" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ success: true, message: "Login successful", token, user });
  } catch (err) {
    console.error("🚨 Error in /login:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
