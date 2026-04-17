import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const linkStyles = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${
      isActive ? 'bg-[#1e3a34] text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b sticky top-0 z-50">
      <NavLink to="/">
        <img src="/assets/logo.png" alt="Logo" className="h-8" />
      </NavLink>
      <div className="flex gap-6">
        <NavLink to="/" className={linkStyles}><Home size={18}/> Home</NavLink>
        <NavLink to="/timeline" className={linkStyles}><Clock size={18}/> Timeline</NavLink>
        <NavLink to="/stats" className={linkStyles}><BarChart3 size={18}/> Stats</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;