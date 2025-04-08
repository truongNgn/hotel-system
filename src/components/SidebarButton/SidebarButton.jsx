import React from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ to, icon, text, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 my-1 rounded-lg shadow transition-colors duration-200 ${
        isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default SidebarButton;