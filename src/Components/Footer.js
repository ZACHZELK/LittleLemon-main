import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = () => {
  return (
    <>
      <footer>
        <footcard>
          <h4 className="titlecard">Get to Know Us</h4>
          <div className="links"><Link to="/About">About us</Link></div>
          <div className="links"><Link to="/">Careers</Link></div>
          <h4 className="titlecard">Misc</h4>
          <div className="links"><Link to="/Menu">Menu</Link></div>
          <div className="links"><Link to="/Reservations">Reservations</Link></div>
          <div className="links"><Link to="/Order-Online">Delivery</Link></div>
          <h4 className="titlecard">Account</h4>
          <div className="links"><Link to="/">Create a Account</Link></div>
          <div className="links"><Link to="/">Forgot Password</Link></div>
          <div className="links"><Link to="/">Forgot Username</Link></div>
        </footcard>
      </footer>
    </>
  );
};
