/* PublicLayout – wraps public‑site pages */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';

const PublicLayout = () => (
  <>
    <Navbar />
    <main className="container mt-md">
      <Outlet />
    </main>
    <footer className="mt-xl py-md text-center" style={{backgroundColor: 'var(--color-secondary-soft-grey)'}}>
      <p style={{margin:0}}>© 2026 Plug&Sync. All rights reserved.</p>
    </footer>
  </>
);

export default PublicLayout;
