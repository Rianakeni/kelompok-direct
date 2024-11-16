import react from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src="img/logo.png" alt="CSSA Logo" />
        CSSA
      </a>
      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#">OUR MEMBER</a>
      </div>
    </nav>
  );
};

export default Navbar;
