import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Normal dashboard (any logged in user) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["super_admin", "creator", "user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Role-specific dashboards */}
        <Route
          path="/super-admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/creator-dashboard"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
