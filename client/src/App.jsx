// Plug&Sync – Root Application
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import ManagerLayout from './layouts/ManagerLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

// Pages – Public
import Home from './pages/public/Home.jsx';
import DemoAccess from './pages/demo/DemoAccess.jsx';

// Pages – Auth
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';

// Pages – Dashboards (place‑holders for now)
import UserDashboard from './pages/user/Overview.jsx';
import ManagerDashboard from './pages/manager/Overview.jsx';
import AdminDashboard from './pages/admin/Overview.jsx';

const App = () => (
  <Router>
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/demo-access" element={<DemoAccess />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* User dashboard */}
      <Route element={<UserLayout />}>
        <Route path="/app/user/*" element={<UserDashboard />} />
      </Route>

      {/* Manager dashboard */}
      <Route element={<ManagerLayout />}>
        <Route path="/app/manager/*" element={<ManagerDashboard />} />
      </Route>

      {/* Admin dashboard */}
      <Route element={<AdminLayout />}>
        <Route path="/app/admin/*" element={<AdminDashboard />} />
      </Route>

      {/* Fallback – redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
