import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate('/demo-access');

  return (
    <nav className="flex justify-between align-center py-sm" style={{backgroundColor: 'var(--color-primary)', color: '#fff'}}>
      <div className="flex align-center">
        <h1 className="ml-sm" style={{margin:0, fontSize:'1.5rem'}}>Plug&Sync</h1>
      </div>
      <ul className="flex" style={{listStyle:'none', margin:0}}>
        <li className="mx-sm"><NavLink to="/" className={({ isActive }) => isActive ? 'btn-outline' : ''}>Home</NavLink></li>
        <li className="mx-sm"><a href="#how-it-works" className="">How It Works</a></li>
        <li className="mx-sm"><a href="#features" className="">Features</a></li>
        <li className="mx-sm"><a href="#about" className="">About</a></li>
        <li className="mx-sm"><NavLink to="/login" className="btn-outline">Login</NavLink></li>
        <li className="mx-sm"><button onClick={handleGetStarted} className="btn-primary ml-sm">Get Started</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
