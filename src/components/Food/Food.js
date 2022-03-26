import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Food.css";

const Food = ({ addToCart, product }) => {
  const { img, name, price } = product;
  return (
    <div className="food">
      <img src={img} alt="" />
      <div className="food-info">
        <p className="food-name">Name: {name}</p>
        <p className="food-price">price: ${price}</p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Food;
