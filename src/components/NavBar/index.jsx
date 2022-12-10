import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import Login from "../buttons/Login";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = () => {
  const product = useSelector((state) => state.addItem);
  const wishlist = useSelector((state) => state.addWish);
  const login = useSelector((state) => state.login);

  return (
    <nav>
      <div className="container">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="icon_list ">
                {login === false && <li>
                  <Login/>
                </li>}
                {login && <li>
                  <AccountCircleIcon />
                </li>}
                <li>
                  <div className="cart_warpper">
                    <NavLink to="/wishlist">
                      <FavoriteBorderIcon className="  text-dark"></FavoriteBorderIcon>
                    </NavLink>
                    <span stye={{ position: "absolute" }}>
                      {wishlist.length}
                    </span>
                  </div>
                </li>
                <li>

                  <div className="cart_warpper">
                    <CartBtn />
                    <span>{product.length}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
