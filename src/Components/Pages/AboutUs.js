import React from "react";
import "../../App.css";
import Image from "../Assets/images/ASR&bn.png";

function AboutUs() {
  return (
    <div className="about--container">
      <div className="img-container">
        <img src={Image} alt="ARS" />
      </div>
      <div className="abt-para">
          <h1>About Us</h1>
          <p> ARS is one of the leading industrial Bolts and Nuts suppliers and exporters across India.
              We provide you with a wide range of products in regular as well as in metric shapes and specification.
              Our quality complaint products are manufactured and designed to cater to the needs of Modern-day
              industry. While we go through the manufacturing process within out in house manufacturing facility 
              only , our high-tech facility is fully equipped wit advanced with advanced machinery and technology.

              As our main focus is to provide excellent quality products to our clients, we make sure that we team
              uses high-grade raw materials in accordance to the same. Moreover, post-production, these get tested for 
              quality by our product compliance team.
            <br/>
            <br/>
              <span>Mission, Vision and Values: </span>
              <br/>


              Mission: Our mission to provide the highest quality products. There is the goal is to consistently 
              manufacture these types of with top quality. We aim to be the leader in manufacturing.  
          </p>
      </div>
    </div>
  );
}

export default AboutUs;
