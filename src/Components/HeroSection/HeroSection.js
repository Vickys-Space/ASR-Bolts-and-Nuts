import React from "react";
import "./HeroSection.css";
import "../../App.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="">
      <div className="hero-container">
        <video />
        <h1>Welcome to A.R.S Bolts & Nuts</h1>
        <p>Live and Let Live</p>
        <div className="hero-btns">
          <Link to="/Products">
          <Button
            className="btns"
            buttonStyle="btn--sub"
            buttonSize="btn--large"
            >
            VIEW OUR PRODUCTS
          </Button>
            </Link>
          {/* <Button
            className="btnss"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            VIEW OUR PRODUCTS
            <i className="far fa-play-circle" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
