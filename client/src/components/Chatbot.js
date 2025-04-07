import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Chatbot.css";
import chatIcon from "./chatting.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const chatbotRef = useRef(null);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
    } else {
      setMessages([]); 
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setError("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("Failed to fetch chatbot response.");

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.reply || "I'm sorry, I didn't understand that." },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100); 
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target) &&
        inputRef.current !== document.activeElement
      ) {
        setIsOpen(false);
        setMessages([]); 
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="chatbot-container">
      
      <motion.button
        className="chatbot-toggle"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={chatIcon} alt="Chat" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            className="chatbot-box"
            drag
            dragConstraints={{ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight }}
            dragElastic={0.5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <span>AI Chatbot</span>
              <button className="close-btn" onClick={toggleChatbot}>×</button>
            </div>
            <div className="chatbot-messages">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    className={`chatbot-message ${msg.sender}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && <div className="chatbot-message bot">...Loading...</div>}
              {error && <div className="chatbot-message bot error">{error}</div>}
              <div ref={messagesEndRef} /> 
            </div>
            <div className="chatbot-input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
                autoFocus
              />
              <motion.button
                className="send-btn"
                onClick={sendMessage}
                disabled={loading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {loading ? "..." : "Send"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
