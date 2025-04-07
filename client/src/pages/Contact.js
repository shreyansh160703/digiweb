import React, { useState } from "react";
import axios from "axios";
import '../App.css';
import '../pages/Contact.css';

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/contact", form);
      alert("Message Sent Successfully");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Failed to Send Message");
    }
    setLoading(false);
  };

  return (
    <div className="contact-form-container">
     <div className="bg-white p-5 rounded w-[400px] shadow-lg mt-[10px]">
        <h2 className="text-center mb-6 text-xl font-bold text-black">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject">
              <strong>Subject</strong>
            </label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-control"
              onChange={handleChange}
              value={form.subject}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message">
              <strong>Message</strong>
            </label>
            <textarea
              placeholder="Your Message"
              name="message"
              className="form-control"
              onChange={handleChange}
              value={form.message}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn w-40 text-lg py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300" disabled={loading}>
         
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
