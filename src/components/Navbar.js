import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-info">
      <Link to="/">
        <div className="navbar-brand container text-light">E-commerce app</div>
      </Link>
      <div className="collapse navbar-collapse mx-3" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to={"/"}>
            <li className="nav-item mx-2">Home</li>
          </Link>
          <Link to={"/electronics"}>
            <li className="nav-item mx-2">Electronics</li>
          </Link>
          <Link to={"/jewelery"}>
            <li className="nav-item mx-2">Jewelery</li>
          </Link>
          <Link to={"/mensclothing"}>
            <li className="nav-item mx-2">Men's Clothing</li>
          </Link>
          <Link to={"/womensclothing"}>
            <li className="nav-item mx-2">Women's Clothing</li>
          </Link>
        </ul>
        <div className="m-2">Login</div>
        <div className="d-flex flex-end"> cart</div>
      </div>
   
    </div>
   
  );
};

export default Navbar;
