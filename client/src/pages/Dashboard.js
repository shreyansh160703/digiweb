import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/Card";
import { Avatar } from "../components/Avatar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user"); 
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex justify-center items-center bg-white text-black"
    >
      <Card className="w-full max-w-3xl p-6 shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24" src={user.photo} alt={user.name} />
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-lg">Role: {user.role}</p>
          {user.role === "Employee" ? (
            <div className="text-left w-full">
              <p>Position: {user.position}</p>
              <p>Joining Date: {user.joiningDate}</p>
              <p>Salary: ${user.salary}</p>
              <p>Pension: ${user.pension}</p>
              <p>Tax Deduction: ${user.tax}</p>
            </div>
          ) : (
            <div className="text-left w-full">
              <p>Services Used: {user.services.join(", ")}</p>
              <p>Pending Bills: ${user.pendingBills}</p>
              <p>Paid Bills: ${user.paidBills}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Dashboard;
