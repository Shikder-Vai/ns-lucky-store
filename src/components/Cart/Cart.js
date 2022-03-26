import React from "react";
import "./Cart.css";

const Cart = (item) => {
  const { name, img } = item.item;
  console.log(name);
  return (
    <div>
      <div className="cart">
        <img src={img} alt="" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Cart;
