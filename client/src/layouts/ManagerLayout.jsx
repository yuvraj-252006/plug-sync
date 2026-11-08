/* ManagerLayout – sidebar + main for Station Manager */
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const ManagerLayout = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const navItems = [
    { to: '/app/manager', label: 'Overview' },
    { to: '/app/manager/my-station', label: 'My Station' },
    { to: '/app/manager/charger-management', label: 'Charger Management' },
    { to: '/app/manager/queue-management', label: 'Queue Management' },
    { to: '/app/manager/charging-sessions', label: 'Charging Sessions' },
    { to: '/app/manager/activity-history', label: 'Activity History' },
    { to: '/app/manager/profile', label: 'Profile' },
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
      <main className="container mt-md" style={{flex:1}}>
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
