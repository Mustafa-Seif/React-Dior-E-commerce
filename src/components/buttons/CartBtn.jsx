import React from "react";
import { NavLink } from "react-router-dom";
import "./buttons.css";

const CartBtn = () => {
  return (
    <NavLink
      to="/cart"
      className="sign"
      style={{ textDecoration: "none", color: "#000" }}
    >
      <i class="fa fa-shopping-cart" aria-hidden="true">
      </i>
    </NavLink>
  );
};

export default CartBtn;
