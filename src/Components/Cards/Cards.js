import React from "react";
import CardsItem from "./CardsItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards__container">
      <div className="cards__header__info">
        <h1>Check out our fast moving products!</h1>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardsItem
                src="Img/Bolt.png"
                text="Bolts"
                label="IN STOCK"
                path="/Products"
              /> 
              <CardsItem
                src="Img/Nuts.png"
                text="Nuts"
                label="IN STOCK"
                path="/Products"
              />
            </ul>
            <ul className="cards__items">
              <CardsItem
                src="Img/Washer.png"
                text="Washers"
                label="IN STOCK"
                path="/Products"
              />
              <CardsItem
                src="Img/Fuse.png"
                text="Fuse"
                label="IN STOCK"
                path="/Products"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
