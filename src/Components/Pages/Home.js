import React, { useState } from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import "../HeroSection/HeroSection.css";

const Home = () => {
 
  
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
