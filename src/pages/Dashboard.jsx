import React, { useState, useEffect } from "react";
import { getUserProfile } from "../services/authService";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user data");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome, {user.username}!</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default Dashboard;
