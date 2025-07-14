import React from "react";

function Navbar() {
  return (
    <>
    <nav className="navbar" style={{position: "relative", zIndex:100}}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: '', alignItems: 'center',padding:"10px 20px",zIndex:1000,marginLeft:"40px"  }}>
        <h1 className="navbar-title" >HqOne Energies</h1>
        <ul className="navbar-links" style={{ display: 'flex',fontSize:"18px", justifyContent: 'space-between',gap:"20px", alignItems: 'center', listStyle:"none", marginLeft:"100px", color:"royalblue" }}> 
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#RequestQuote">Request a Quote</a></li>         

        </ul>
        <ul style={{display:"flex", flexDirection:"row",gap:"30px", marginLeft:"220px"}}>

          <li>Cart</li>
         <li>search</li>

        </ul>



      </div>
    </nav>
    </>
  );
}
export default Navbar;