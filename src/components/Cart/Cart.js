import React from "react";

const Cart = (item) => {
  const { name } = item.item;
  console.log(name);
  return (
    <div>
      <h3>{name}</h3>
      
    </div>
  );
};

export default Cart;
