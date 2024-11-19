import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="img/logo.png" alt="CSSA Logo" />
        CSSA
      </Link>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/ourmember">OUR MEMBER</Link>
      </div>
    </nav>
  );
};

export default Navbar;
