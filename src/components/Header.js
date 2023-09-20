import React from "react";
import Logo from "./assets/Logo.svg";
import Nav from "./Nav";
import './Header.css';

function Header () {
    return (
        <header>
            <img className="lemon-logo" src={Logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
}

export default Header;