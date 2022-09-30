import React from "react";
import { Link } from "react-router-dom";
import { BsCart4,BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            E-commerce site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-light">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-light">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-light">
                  Fashon
                </Link>
              </li>
            </ul>
            {/* search bar */}
            
          </div>

          {/* Sign in and car buttons */}

          <div className="d-flex justify-content-evenly">
            <h5 className="text-light px-2 btn">
            <Link className="nav-link text-light" to="/signin">
              sign in
              </Link> 
              </h5>
            <h5 className="text-light px-2 btn">
              <Link className="nav-link text-light" to="/cart">
              <BsCart4 />
              </Link>
            </h5>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
