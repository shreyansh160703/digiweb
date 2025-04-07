import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../components/Navbar.css";
import "../App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Debugging logs
    console.log("Submitting Signup Form:", { name, email, password, role });

    // Validation Check
    if (!name || !email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { name, email, password, role },
        { withCredentials: true } 
      );

      console.log("Signup Response:", response.data);

      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.message || "Registration failed. Try again.");
      }
    } catch (err) {
      console.error("Signup error:", err.response?.data || err);
      setError(err.response?.data?.message || "An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center bg-secondary min-h-screen mt-[100px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white p-5 rounded w-[400px] shadow-lg">
        <h2 className="text-center mb-4 text-xl font-bold text-black">Register</h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              className="form-control"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
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
              className="form-control"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role"><strong>Role</strong></label>
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
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        <motion.p
          className="text-center mt-3 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Already have an account?
        </motion.p>

        <Link to="/login" className="btn btn-success w-100 rounded-0 text-lg py-2">
          Login
        </Link>
      </div>
    </motion.div>
  );
}

export default Signup;
