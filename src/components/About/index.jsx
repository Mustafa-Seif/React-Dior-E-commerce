import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import aboutIMG from "../../assets/5078a05eb1b6847d93383eaa4c0ed500.gif";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row  mb-5">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="row gy-4">
        <div className="col-md-6 col-12 ">
          {/* <h1>About Us</h1> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            minus optio ipsa expedita deleniti pariatur amet voluptatibus quidem
            cumque veniam recusandae, dolores soluta! accusantium consectetur.
            Ullam sunt nulla accusamus aliquam, aut tempore facere dolore dicta
            ex labore impedit praesentium fuga, cum distinctio dolor, neque
            adipisci.
          </p>
          <p className="mb-5">
            Quo incidunt laudantium perspiciatis error nesciunt distinctio nemo
            velit a, aut sapiente, neque rerum at libero expedita doloribus
            accusantium consectetur. Ullam sunt nulla accusamus aliquam, aut
            tempore facere dolore dicta ex labore impedit praesentium fuga,
          </p>
          <NavLink to="/contact" className="about">
            Contact Us
          </NavLink>
        </div>
        <div className="col-md-6 col-12">
          <img src={aboutIMG} alt="..." width="100%" />
        </div>
      </div>
    </div>
  );
};

export default About;
