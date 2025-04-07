import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./DashboardClient.css";

const ClientDashboard = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (!name || !email) {
      window.location.href = "/login";
      return;
    }

    setClient({
      name,
      email,
      dob: randomDate(),
      phone: randomPhone(),
      address: randomAddress(),
      country: randomCountry(),
      membership: randomMembership(),
      billingHistory: randomBilling(),
      pendingBill: `$${Math.floor(Math.random() * 500) + 50}`,
      servicesTaken: randomServices(),
      productsTaken: randomProducts(),
    });
  }, []);

  const randomDate = () => new Date(1975 + Math.random() * 30, Math.random() * 12, Math.random() * 28).toDateString();
  const randomPhone = () => `+1-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
  const randomAddress = () => ["123 Main St, NY", "456 Elm St, CA", "789 Oak St, TX", "321 Pine St, FL"][Math.floor(Math.random() * 4)];
  const randomCountry = () => ["USA", "Canada", "UK", "Germany", "India", "Australia"][Math.floor(Math.random() * 6)];
  const randomMembership = () => ["Basic", "Premium", "Gold", "Platinum"][Math.floor(Math.random() * 4)];
  const randomBilling = () => [`$${Math.floor(Math.random() * 500) + 50}`, `$${Math.floor(Math.random() * 800) + 100}`];
  const randomServices = () => ["Web Development", "Cloud Hosting", "SEO Optimization", "Cybersecurity"].slice(0, Math.floor(Math.random() * 4) + 1);
  const randomProducts = () => ["Software License", "Hosting Plan", "Security Package", "Analytics Tool"].slice(0, Math.floor(Math.random() * 4) + 1);

  if (!client) return <p className="loading-text">Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-container" style={{ paddingTop: '250px', backgroundColor: '#fff', color: '#000' }}>
        <motion.h1 className="dashboard-title" animate={{ opacity: [0, 1], y: [-20, 0] }} style={{ marginBottom: "40px" }}>
          CLIENT DASHBOARD
        </motion.h1>
        <div className="info-grid" style={{ gap: "50px", marginBottom: "50px" }}>
          {Object.entries(client).map(([key, value], index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
