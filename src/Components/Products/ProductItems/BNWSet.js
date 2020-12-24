import React from "react";
import ProductItem from "../ProductItem";
import "../Product.css";

function BNWSet() {
  return (
    <div>
      <div className="p-cards__header__info">
        <h1>Available Products</h1>
      </div>
      <div className="p-cards__container">
        <div className="p-cards">
          <div className="p-cards__container">
            <div className="p-cards__wrapper">
              {/* ROW 1 */}
              <ul className="p-cards__items">
                <ProductItem
                  src="Img/Bolt.png"
                  text="Bolts"
                  label="IN STOCK"
                  path="/Products"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Nuts"
                  label="IN STOCK"
                  path="/Products"
                  s
                />
                <ProductItem
                  src="Img/Screw.png"
                  text="Screws"
                  label="IN STOProductInfoCK"
                  path="/Products"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Shield Clips"
                  label="IN STOCK"
                  path="/Products"
                />
                <ProductItem
                  src="Img/Cotter_Pin.png"
                  text="Cotter Pins"
                  label="IN STOCK"
                  path="/Products"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BNWSet;
