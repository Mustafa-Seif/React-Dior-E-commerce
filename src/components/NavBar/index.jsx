import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Login from "../buttons/Login";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
// ///////////////////////////////////
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { isloged } from "../../ReduxToolKit/slices/authSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NavBar = () => {
  const dispatch = useDispatch();
  const [IsLoged, setIsLoged] = React.useState(false);

  const product = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wish.value);
  const login = useSelector((state) => state.auth.value);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setIsLoged(login);
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
                {login === false && (
                  <li>
                    <Login />
                  </li>
                )}
                {login && (
                  <li onClick={() => dispatch(isloged(false))}>
                    <NavLink to="/" className="text-danger">
                      <LogoutIcon />
                    </NavLink>
                  </li>
                )}
                <li
                  onClick={handleClick({
                    vertical: "top",
                    horizontal: "right",
                  })}
                >
                  <div className="cart_warpper">
                    {login ? (
                      <NavLink to="/wishlist">
                        <FavoriteBorderIcon className="  text-dark"></FavoriteBorderIcon>
                      </NavLink>
                    ) : (
                      <NavLink to="/">
                        <FavoriteBorderIcon className="  text-dark"></FavoriteBorderIcon>
                      </NavLink>
                    )}
                    <span stye={{ position: "absolute" }}>
                      {wishlist.length}
                    </span>
                  </div>
                  {!IsLoged && (
                    <Stack spacing={2} sx={{ width: "100%" }}>
                      <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical, horizontal }}
                        key={vertical + horizontal}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="warning"
                          sx={{ width: "100%", marginTop: "4rem " }}
                        >
                          Please Log In First ...
                        </Alert>
                      </Snackbar>
                    </Stack>
                  )}
                </li>
                <li
                  onClick={handleClick({
                    vertical: "top",
                    horizontal: "right",
                  })}
                >
                  {login ? (
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
                  ) : (
                    <div className="cart_warpper">
                      <NavLink
                        to="/"
                        className="sign"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                      </NavLink>
                      <span>{product.length}</span>
                    </div>
                  )}
                  {!IsLoged && (
                    <Stack spacing={2} sx={{ width: "100%" }}>
                      <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical, horizontal }}
                        key={vertical + horizontal}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="warning"
                          sx={{ width: "100%", marginTop: "4rem " }}
                        >
                          Please Log In First ...
                        </Alert>
                      </Snackbar>
                    </Stack>
                  )}
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
