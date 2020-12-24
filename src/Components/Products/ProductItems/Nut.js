import React from "react";
import ProductItem from "../ProductItem";
import "../Product.css";

function Nut() {
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
                  text="Cap Nut"
                  label="IN STOCK"
                  path="/Products"
                />

                <ProductItem
                  src="Img/Cotter_Pin.png"
                  text="Collar Nut with Self Lock Nut Pins"
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

export default Nut;
