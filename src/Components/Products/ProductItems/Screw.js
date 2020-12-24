import React from "react";
import ProductItem from "../ProductItem";
import "../Product.css";

function Screw() {
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
                  text="Plip Pan Screws"
                  label="IN STOCK"
                  path="/Products"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="CSK Screws"
                  label="IN STOCK"
                  path="/Products"
                  s
                />
                <ProductItem
                  src="Img/Screw.png"
                  text="Washer Phase Screw "
                  label="IN STOProductInfoCK"
                  path="/Products"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Shield Screw XL Super"
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

export default Screw;
