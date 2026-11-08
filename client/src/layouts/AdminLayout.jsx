/* AdminLayout – sidebar + main for System Admin */
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const navItems = [
    { to: '/app/admin', label: 'Overview' },
    { to: '/app/admin/station-management', label: 'Station Management' },
    { to: '/app/admin/manager-management', label: 'Manager Management' },
    { to: '/app/admin/user-management', label: 'User Management' },
    { to: '/app/admin/queue-monitoring', label: 'Queue Monitoring' },
    { to: '/app/admin/charging-sessions', label: 'Charging Sessions' },
    { to: '/app/admin/reports', label: 'Reports' },
    { to: '/app/admin/settings', label: 'Settings' },
    { to: '/demo-access', label: 'Back to Demo Access' },
  ];

  return (
    <div className="flex">
      <button className="sidebar-toggle" onClick={toggle}>☰</button>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <nav className="flex flex-col mt-md">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'btn-primary mb-sm' : 'mb-sm')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="container mt-md" style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
