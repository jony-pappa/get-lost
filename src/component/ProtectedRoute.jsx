import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // no token = not logged in
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token); // contains { id, role, exp }
    const userRole = decoded.sub["role"];
    if (allowedRoles.includes(userRole)) {
      return children;
    } else {
      // role not allowed, redirect to its own dashboard
      if (userRole === "super_admin") return <Navigate to="/super-admin-dashboard" replace />;
      if (userRole === "creator") return <Navigate to="/creator-dashboard" replace />;
      return <Navigate to="/user-dashboard" replace />;
    }
  } catch (error) {
    console.error("Invalid token", error);
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
}
