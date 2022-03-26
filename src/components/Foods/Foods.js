import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...carts, product];
    setCarts(newCart);
  };
  return (
    <div className="foods-container">
      <div className="produnct-container">
        {products.map((product) => (
          <Food key={product.id} product={product} addToCart={addToCart}></Food>
        ))}
      </div>
      <div className="cart-container">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Foods;
