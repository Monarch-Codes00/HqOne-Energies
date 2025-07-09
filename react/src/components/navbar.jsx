import React from "react";

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container" style={{ display: 'flex', justifyContent: '', alignItems: 'center',padding:"10px 20px",  }}>
        <h1 className="navbar-title" >HqOne Energies</h1>
        <ul className="navbar-links" style={{ display: 'flex',fontSize:"18px", justifyContent: 'space-between',gap:"20px", alignItems: 'center', listStyle:"none", marginLeft:"" }}> 
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#RequestQuote">Request a Quote</a></li>

          

        </ul>
      </div>
    </nav>
    </>
  );
}
export default Navbar;