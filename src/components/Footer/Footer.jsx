import React from "react";
import './footer.css'
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGofore } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-danger">
      <div className="container ">
        <div className="row align-items-center position-relative">
          <NavLink className="navbar-brand fw-bild col-4" to="/">
            <h1>Dior.</h1>
          </NavLink>
          <div  className="col-4 footerIcons">
            <FaFacebookF />
            <FaTwitter className="ms-4 me-4"/>
            <FaGofore />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
