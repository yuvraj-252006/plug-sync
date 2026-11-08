// Plug&Sync – Root Application
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import ManagerLayout from './layouts/ManagerLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

// Public pages
import Home from './pages/public/Home.jsx';
import DemoAccess from './pages/demo/DemoAccess.jsx';

// Auth pages
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';

// User dashboard pages
import UserOverview from './pages/user/Overview.jsx';
import UserFindStations from './pages/user/FindStations.jsx';
import UserQueue from './pages/user/MyQueue.jsx';
import UserChargingHistory from './pages/user/ChargingHistory.jsx';
import UserNotifications from './pages/user/Notifications.jsx';
import UserProfile from './pages/user/Profile.jsx';

// Manager dashboard pages
import ManagerOverview from './pages/manager/Overview.jsx';
import ManagerMyStation from './pages/manager/MyStation.jsx';
import ManagerChargerManagement from './pages/manager/ChargerManagement.jsx';
import ManagerQueueManagement from './pages/manager/QueueManagement.jsx';
import ManagerChargingSessions from './pages/manager/ChargingSessions.jsx';
import ManagerActivityHistory from './pages/manager/ActivityHistory.jsx';
import ManagerProfile from './pages/manager/Profile.jsx';

// Admin dashboard pages
import AdminOverview from './pages/admin/Overview.jsx';
import AdminStationManagement from './pages/admin/StationManagement.jsx';
import AdminManagerManagement from './pages/admin/ManagerManagement.jsx';
import AdminUserManagement from './pages/admin/UserManagement.jsx';
import AdminQueueMonitoring from './pages/admin/QueueMonitoring.jsx';
import AdminChargingSessions from './/pages/admin/ChargingSessions.jsx';
import AdminReports from './pages/admin/Reports.jsx';
import AdminSettings from './pages/admin/Settings.jsx';

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
        <Route path="/app/user" element={<UserOverview />} />
        <Route path="/app/user/find-stations" element={<UserFindStations />} />
        <Route path="/app/user/my-queue" element={<UserQueue />} />
        <Route path="/app/user/charging-history" element={<UserChargingHistory />} />
        <Route path="/app/user/notifications" element={<UserNotifications />} />
        <Route path="/app/user/profile" element={<UserProfile />} />
      </Route>

      {/* Manager dashboard */}
      <Route element={<ManagerLayout />}>
        <Route path="/app/manager" element={<ManagerOverview />} />
        <Route path="/app/manager/my-station" element={<ManagerMyStation />} />
        <Route path="/app/manager/charger-management" element={<ManagerChargerManagement />} />
        <Route path="/app/manager/queue-management" element={<ManagerQueueManagement />} />
        <Route path="/app/manager/charging-sessions" element={<ManagerChargingSessions />} />
        <Route path="/app/manager/activity-history" element={<ManagerActivityHistory />} />
        <Route path="/app/manager/profile" element={<ManagerProfile />} />
      </Route>

      {/* Admin dashboard */}
      <Route element={<AdminLayout />}>
        <Route path="/app/admin" element={<AdminOverview />} />
        <Route path="/app/admin/station-management" element={<AdminStationManagement />} />
        <Route path="/app/admin/manager-management" element={<AdminManagerManagement />} />
        <Route path="/app/admin/user-management" element={<AdminUserManagement />} />
        <Route path="/app/admin/queue-monitoring" element={<AdminQueueMonitoring />} />
        <Route path="/app/admin/charging-sessions" element={<AdminChargingSessions />} />
        <Route path="/app/admin/reports" element={<AdminReports />} />
        <Route path="/app/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
