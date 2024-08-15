import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './DriveNav.css';

function DriveNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="Rina_1">
      <div className="Rina_2">
        <img 
          src="https://img.freepik.com/premium-vector/cartoon-biker-riding-motorcycle-illustration-mascot-logo-vector_488085-607.jpg?w=2000" 
          alt="Logo" 
          className="Rina_3" 
        />
      </div>
      <ul className="Rina_4">
        <li>
          <NavLink to="/driverhome" exact className="Rina_5" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/drivehome" className="Rina_5" activeClassName="active">
            Drive
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" className="Rina_5" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
      <ul className="Rina_6">
        <li>
          <NavLink to="/contact" className="Rina_5" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        <li className="Rina_7" onClick={toggleDropdown}>
          <FaUserCircle size={24} className="Rina_5" />
          {dropdownOpen && (
            <div className="Rina_8">
              <NavLink to="/profilepage" className="Rina_5" activeClassName="active">
                View Details
              </NavLink>
              <NavLink to="/" className="Rina_5" activeClassName="active">
                Logout
              </NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default DriveNav;
