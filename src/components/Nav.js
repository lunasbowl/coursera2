import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav () {
    return (
        <nav className="nav">
            <Link to="/" className="nav-item">HomePage</Link>
            <Link to="/booking" className="nav-item">BookingPage</Link>
            <Link to="/aboutus" className="nav-item">About Us</Link>
        </nav>
    );
}

export default Nav;