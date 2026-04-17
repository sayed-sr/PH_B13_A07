import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  // Logic to determine which class to apply based on navigation state
  const getLinkClass = ({ isActive }) => 
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo-link">
        <img src="/assets/logo.png" alt="Logo" className="navbar-logo" />
      </NavLink>

      <div className="nav-menu">
        <NavLink to="/" className={getLinkClass}>
          <Home size={18}/> <span>Home</span>
        </NavLink>
        <NavLink to="/timeline" className={getLinkClass}>
          <Clock size={18}/> <span>Timeline</span>
        </NavLink>
        <NavLink to="/stats" className={getLinkClass}>
          <BarChart3 size={18}/> <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;