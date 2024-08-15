import React from 'react';
import '../Component/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="hom_2">
      <div className="hom_3">
        <img 
          src="https://img.freepik.com/premium-vector/cartoon-biker-riding-motorcycle-illustration-mascot-logo-vector_488085-607.jpg?w=2000" 
          alt="Logo" 
          className="hom_4" 
        />
      </div>
      <ul className="hom_6">
        <li>
          <NavLink to="/" exact className="hom_7" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/homedrivenav" className="hom_7" activeClassName="active">
            Drive
          </NavLink>
        </li>
        <li>
          <NavLink to="/homeridenav" className="hom_7" activeClassName="active">
            Ride
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" className="hom_7" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
      <ul className="hom_8">
        <li>
          <NavLink to="/contact" className="hom_7" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hom_7" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hom_7" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
