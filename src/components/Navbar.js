import React from 'react';
import './Navbar.css'; // Import the CSS file
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid"> {/* Use container-fluid for full-width */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="custom-logo" />
          <div className="custom-brand-name ms-2" font-family="Product Sans">GDG RCOEM</div> {/* Added spacing between logo and brand name */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Push nav links to the right */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Alumni</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>

          {/* Add toggle switch next to nav items */}
          <div className="d-flex align-items-center ms-3"> {/* Add margin to separate it from nav items */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Theme</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
