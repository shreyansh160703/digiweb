import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "../App.css";
import "../components/Navbar.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client"); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", { email, password, role });
  
      if (response.data.success) {
        const { user } = response.data; 
  
        
        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(user));
  
        navigate(role === "client" ? "/dashboard/client" : "/dashboard/employee");
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="flex justify-center items-center bg-secondary min-h-screen mt-[-10px]"
    >
      <div className="bg-white p-5 rounded w-[400px] shadow-lg">
        <h2 className="text-center mb-4 text-xl font-bold text-black">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role"><strong>Login as</strong></label>
            <select 
              className="form-control"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="client">Client</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }} 
            whileTap={{ scale: 0.95 }} 
            type="submit" 
            className={`btn w-full text-lg py-2 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white border border-black"} transition duration-300`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <motion.p 
          className="text-center mt-3 mb-5"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Don't have an account?
        </motion.p>
        
        <Link to="/signup" className="btn btn-success w-full text-lg py-2">
          Sign Up
        </Link>
      </div>
    </motion.div>
  );
}

export default Login;
