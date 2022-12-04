import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import Login from "../buttons/Login";
import Register from "../buttons/Register";
import { BsSearch, BsSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const product = useSelector((state) => state);

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              
            >
              <NavLink className="navbar-brand fw-bild" to="/">
                <h1>Dior.</h1>
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              
              <Login />
              <Register />
              <NavLink to="/wishlist">
                <BsSuitHeartFill className="ms-3 me-3 text-dark"></BsSuitHeartFill>
              </NavLink>
              <div className="cart_warpper">
                <CartBtn />
                <span className="text-danger">{product.length}</span>
              </div>
              
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
