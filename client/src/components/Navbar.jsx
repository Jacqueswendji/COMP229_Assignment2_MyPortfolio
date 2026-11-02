// Navbar.jsx
// Navigation bar for the personal portfolio website.

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Custom portfolio logo */}
        <NavLink to="/" className="logo">
          JHW
        </NavLink>

        {/* Main navigation links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li>
            <NavLink to="/education">Education</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;