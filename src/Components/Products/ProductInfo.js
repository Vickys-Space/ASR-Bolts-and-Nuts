import React from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

function ProductInfo() {
  return ( 
    <div className="container">
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
                  path="/Bolts"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Nuts"
                  label="IN STOCK"
                  path="/Nut"
                  s
                />
                <ProductItem
                  src="Img/Screw.png"
                  text="Screws"
                  label="IN STOCK"
                  path="/Screw"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Shield Clips"
                  label="IN STOCK"
                  path="/ShieldClips"
                />
                <ProductItem
                  src="Img/Cotter_Pin.png"
                  text="Cotter Pins"
                  label="IN STOCK"
                  path="/CotterPin"
                />
              </ul>

              {/* ROW 2 */}
              <ul className="p-cards__items">
                <ProductItem
                  src="Img/Washer.png"
                  text="Washers"
                  label="IN STOCK"
                  path="/Washer"
                />
                <ProductItem
                  src="Img/Fuse.png"
                  text="Fuse"
                  label="IN STOCK"
                  path="/Fuse"
                />
                <ProductItem
                  src="Img/O-rings.png"
                  text="O-RIngs"
                  label="IN STOCK"
                  path="/ORrings"
                />
                <ProductItem
                  src="Img/Relay.png"
                  text="Relay"
                  label="IN STOCK"
                  path="/Relay"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="CRIC Clip Locks"
                  label="IN STOCK"
                  path="/CricLock"
                />
              </ul>

              {/* ROW 3 */}
              <ul className="p-cards__items">
                <ProductItem
                  src="Img/Bolt_Nut_Washer_Set.png"
                  text="Bolt, Nut & Washer Set"
                  label="IN STOCK"
                  path="/BNWSet"
                />
                <ProductItem
                  src="Img/Fuse.png"
                  text="Rare Item"
                  label="IN STOCK"
                  path="/RareItem"
                />
                 <ProductItem
                  src="Img/Bolt_Nut_Set-.png"
                  text="Bolt & Nut Set"
                  label="IN STOCK"
                  path="/BNSet"
                />
                <ProductItem
                  src="Img/Float_Needle.png"
                  text="Float Needle"
                  label="IN STOCK"
                  path="/FloatNeedle"
                />
                <ProductItem
                  src="Img/10mmCB-8spanner.png"
                  text="Nuts for Bolts"
                  label="IN STOCK"
                  path="/NutsForBolts"
                />
              </ul>

              {/* ROW 4 */}
              <ul className="p-cards__items">
                
                
               
                <ProductItem
                  src="Img/Nuts.png"
                  text="Common Item"
                  label="IN STOCK"
                  path="/CommonItem"
                />
                <ProductItem
                  src="Img/Nuts.png"
                  text="Special Kit"
                  label="IN STOCK"
                  path="/SpecialKit"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
