/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function ProductItem(props) {
  return (
    <>
      <li className="p-cards__item">
        <Link className="p-cards__item__link" to={props.path}>
          <figure className="p-cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              className="p-cards__item__img"
              alt="Product Image"
            />
          </figure>
          <div className="p-cards__item__info">
            <div className="item__info">
              <h5 className="text">{props.text}</h5>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
