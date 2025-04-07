import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Partners from "./pages/Partners";
import Projects from "./pages/projects";
import Branches from "./pages/branches";
import Services from "./pages/Services";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import "./App.css";
import ContactForm from "./pages/Contact";
import DashboardEmployee from "./pages/DashboardEmployee";
import DashboardClient from "./pages/DashboardClient";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot"; 

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
            <Navbar />
      <div className="content">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<ContactForm />} />

          
          <Route 
            path="/dashboard/employee" 
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <DashboardEmployee />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/client" 
            element={
              <ProtectedRoute allowedRoles={["client"]}>
                <DashboardClient />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
      <Chatbot /> 
       </Router>
  );
};

export default App;