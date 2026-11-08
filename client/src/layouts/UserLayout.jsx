/* UserLayout – sidebar + main content for EV User dashboard */
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const UserLayout = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const navItems = [
    { to: '/app/user', label: 'Overview' },
    { to: '/app/user/find-stations', label: 'Find Stations' },
    { to: '/app/user/my-queue', label: 'My Queue' },
    { to: '/app/user/charging-history', label: 'Charging History' },
    { to: '/app/user/notifications', label: 'Notifications' },
    { to: '/app/user/profile', label: 'My Profile' },
    { to: '/demo-access', label: 'Back to Demo Access' },
  ];

  return (
    <div className="flex">
      {/* Mobile toggle button */}
      <button className="sidebar-toggle" onClick={toggle}>☰</button>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <nav className="flex flex-col mt-md">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'btn-primary mb-sm' : 'mb-sm'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="container mt-md" style={{flex:1}}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
