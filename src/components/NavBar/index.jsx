import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Login from "../buttons/Login";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { isloged } from "../../ReduxToolKit/slices/authSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const NavBar = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wish.value);
  const _islogin = useSelector((state) => state.auth.value);

  // CKECK IS LOGIN OR NOT ON CLICK
  const checkAuth = () => {
    return !_islogin // FIRE TOAST
      ? toast.info("Please login first !", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      : true;
  };

  // SIGN OUT
  const signOut = () => {
    Swal.fire({
      text: "Are you sure you want sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A749FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // CHANGE AUTH STATUS 
        dispatch(isloged(false));
        // NAV TO HOME PAGE 
        Route("/");
        // FIRE SIGN OUT FIREBASE AUTH 
        signOut(auth)
          .then(() => {
            // FIRE TOAST
            toast.info(`Sign Out!`, {
              position: "bottom-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
          .catch((error) => {
            // FIRE TOAST
            toast.error(`${error.massage}`, {
              position: "bottom-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      }
    });
  };
  return (
    <nav>
      <div className="container">
        <div className="navbar navbar-expand-lg navbar-light">
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
                {!_islogin && (
                  <li>
                    <Login />
                  </li>
                )}
                {_islogin && (
                  // <li onClick={() => dispatch(isloged(false))}>
                  <li onClick={signOut}>
                    <NavLink to="/" className="text-danger">
                      <LogoutIcon />
                    </NavLink>
                  </li>
                )}
                <li onClick={checkAuth}>
                  <div className="cart_warpper">
                    <NavLink to="/wishlist">
                      <FavoriteBorderIcon className="  text-dark"></FavoriteBorderIcon>
                    </NavLink>
                    <span stye={{ position: "absolute" }}>
                      {wishlist.length}
                    </span>
                  </div>
                </li>
                <li onClick={checkAuth}>
                  <div className="cart_warpper">
                    <NavLink
                      to="/cart"
                      className="sign"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </NavLink>
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
