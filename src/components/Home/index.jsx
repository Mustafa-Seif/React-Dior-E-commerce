import React from "react";
import "./home.css";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import Products from "../Products";
import { useState } from "react";

const Home = () => {
  const [countDate, setCountDate] = useState("");
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setCountDate(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  }, 1000);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." height="550px" />
            <div class="carousel-caption d-none d-md-block caption_left">
              <h3>Enjoy This Offer Today</h3>
              <h1>
                New Collection <br />
                Sale 40%
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
              height="550px"
            />
            <div class="carousel-caption d-none d-md-block caption_center">
              {/* <h3>Hot Deal!y</h3> */}
              <h1>
                New Black Friday <br />
                Hot Deal!
              </h1>
              <p className="countDawn">{countDate}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100 "
              alt="..."
              height="550px"
            />
            <div class="carousel-caption d-none d-md-block caption_right">
              <h3>Enjoy This Offer Today</h3>
              <h1>
                New Collection <br />
                Sale 40%
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  );
};

export default Home;
