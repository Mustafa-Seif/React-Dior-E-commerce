import React from "react";
import { NavLink } from "react-router-dom";
import "./buttons.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartBtn = () => {
  return (
    <NavLink
      to="/cart"
      className="sign"
      style={{ textDecoration: "none", color: "#000" }}
    >
      <AddShoppingCartIcon></AddShoppingCartIcon>
    </NavLink>
  );
};

export default CartBtn;
