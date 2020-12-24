import React from "react";
import ProductItem from "../ProductItem";
import "../Product.css";

function Bolts() {
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
                  src="Img/10mmCB-8spanner.png"
                  text="10 mm Collar Bolt [ 8 SPANNER Head ]"
                  label="IN STOCK"
                  path="/CB8spn"
                />
                <ProductItem
                  src="Img/10mmCB-10spanner.png"
                  text="10 mm Collar Bolt [ 10 SPANNER Head ]"
                  label="IN STOCK"
                  path="/Products"
                  s
                />
                <ProductItem
                  src="Img/13mmCB.png"
                  text="13 mm Collar Bolt"
                  label="IN STOCK"
                  path="/Products"
                />
              
                <ProductItem
                  src="Img/CCBolt.png"
                  text="Chain Cover Bolt Pins"
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

export default Bolts;
