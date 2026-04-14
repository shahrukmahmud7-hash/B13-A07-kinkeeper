import React from 'react';
import { FaChartPie, FaClock, FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { NavLink } from 'react-router';

const Navbar = () => {
    const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 ${
      isActive ? "bg-[#244D3F] text-white p-2 m-2 rounded-lg font-bold" : ""
    }`;
    return (
     <div className="flex justify-between items-center p-4 shadow pr-12 pl-12">
      <h1 className="font-bold text-xl">KeenKeeper</h1>

      <div className="flex gap-6">
        <NavLink to="/" className={linkStyle}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/timeline" className={linkStyle}>
          <FaClock /> Timeline
        </NavLink>
        <NavLink to="/stats" className={linkStyle}>
          <ImStatsDots /> Stats
        </NavLink>
      </div>
    </div>
    );
};

export default Navbar; 