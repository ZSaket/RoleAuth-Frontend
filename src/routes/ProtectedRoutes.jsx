import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {

    const decoded = jwt_decode(token);


    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    }


    if (!allowedRoles.includes(decoded.role)) {
      return <Navigate to="/" />;
    }


    return children;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
