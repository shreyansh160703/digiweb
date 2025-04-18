const Contact = require("../models/Contact");


const contactFormHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact form:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { contactFormHandler };
