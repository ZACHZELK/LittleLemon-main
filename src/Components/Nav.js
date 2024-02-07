import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
export const Nav = () => {
  return (
    <>
      <nav>
        <Link to='/Home'><img className="LLimg" src="./icons_assets/Logo.svg" alt="Little Lemon" /></Link>
        <ul className="ulNav">
          <li className="liNav"><Link to="/Home">Home</Link></li>
          <li className="liNav"><Link to="/About">About</Link></li>
          <li className="liNav"><Link to="/Menu">Menu</Link></li>
          <li className="liNav"><Link to="/Reservations">Reservations</Link></li>
          <li className="liNav"><Link to="/Order-Online">Order&nbsp;&nbsp;Online</Link></li>
          <li className="liNav"><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </>
  );
};
