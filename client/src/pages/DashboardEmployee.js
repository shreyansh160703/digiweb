import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./DashboardEmployee.css";

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (!name || !email) {
      window.location.href = "/login";
      return;
    }

    setEmployee({
      name,
      email,
      dob: randomDate(),
      phone: randomPhone(),
      address: randomAddress(),
      country: randomCountry(),
      department: randomDepartment(),
      position: randomPosition(),
      joiningDate: randomDate(),
      salary: `$${Math.floor(Math.random() * 5000) + 3000} / month`,
      taxDeductions: `$${Math.floor(Math.random() * 500) + 100}`,
      pension: `$${Math.floor(Math.random() * 400) + 100}`,
      projectsAssigned: randomProjects(),
      skills: randomSkills(),
    });
  }, []);

  const randomDate = () => new Date(1975 + Math.random() * 30, Math.random() * 12, Math.random() * 28).toDateString();
  const randomPhone = () => `+1-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
  const randomAddress = () => ["123 Main St, NY", "456 Elm St, CA", "789 Oak St, TX", "321 Pine St, FL"][Math.floor(Math.random() * 4)];
  const randomCountry = () => ["USA", "Canada", "UK", "Germany", "India", "Australia"][Math.floor(Math.random() * 6)];
  const randomDepartment = () => ["Engineering", "Marketing", "Sales", "Human Resources", "Finance", "Support"][Math.floor(Math.random() * 6)];
  const randomPosition = () => ["Software Engineer", "Project Manager", "HR Executive", "Sales Lead", "Marketing Analyst"][Math.floor(Math.random() * 5)];
  const randomProjects = () => ["AI Research", "Cloud Migration", "Cybersecurity Upgrade", "Product Redesign"].slice(0, Math.floor(Math.random() * 4) + 1);
  const randomSkills = () => ["React", "Node.js", "Python", "SQL", "Cloud Computing", "DevOps"].slice(0, Math.floor(Math.random() * 4) + 2);

  if (!employee) return <p className="loading-text">Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-container" style={{ paddingTop: '400px', backgroundColor: '#fff', color: '#000' }}>
        <motion.h1 className="dashboard-title" animate={{ opacity: [0, 1], y: [-20, 0] }} style={{ marginBottom: "40px" }}>
          EMPLOYEE DASHBOARD
        </motion.h1>
        <div className="info-grid" style={{ gap: "50px", marginBottom: "50px" }}>
          {Object.entries(employee).map(([key, value], index) => (
            <motion.div key={index} className="info-box" whileHover={{ scale: 1.05 }}>
              <strong className="info-heading">{key.replace(/([A-Z])/g, " $1").toUpperCase()}</strong>
              <p className="info-text" style={{ fontSize: "1.5rem" }}>{Array.isArray(value) ? value.join(", ") : value}</p>
            </motion.div>
          ))}
        </div>
        <div className="button-container" style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
          <motion.button className="dashboard-button blue" whileHover={{ scale: 1.1 }} onClick={() => window.location.href='/product'}>VIEW PRODUCTS</motion.button>
          <motion.button className="dashboard-button green" whileHover={{ scale: 1.1 }} onClick={() => window.location.href='/services'}>VIEW SERVICES</motion.button>
          <motion.button className="dashboard-button red" whileHover={{ scale: 1.1 }} onClick={() => window.location.href='/projects'}>VIEW PROJECTS</motion.button>
          <motion.button className="dashboard-button orange" whileHover={{ scale: 1.1 }} onClick={() => window.location.href='/about'}>ABOUT US</motion.button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;