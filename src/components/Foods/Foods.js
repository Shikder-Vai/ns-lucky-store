import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import Bonus from "../Q&A/Bonus";
import "./Foods.css";

const Foods = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    const matchetProduct = cart.find((item) => item.id === product.id);
    if (matchetProduct) {
      alert("This Item has been already added");
    } else if (cart.length >= 4) {
      alert("You can not add more then 4 items");
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  const randomOne = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];
    const newCarts = [random];
    setCart(newCarts);
  };
  const resetButton = () => {
    const reset = [];
    setCart(reset);
  };
  return (
    <div className="foods-container">
      <div className="produnct-container">
        {products.map((product) => (
          <Food key={product.id} product={product} addToCart={addToCart}></Food>
        ))}
      </div>
      <div className="cart-container">
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <div className="choose-btn">
        <button onClick={randomOne}>
          <p>Choose one</p>
        </button>
        <button onClick={resetButton}>
          <p>Choose Again</p>
        </button>
        </div>
      </div>
      <Bonus></Bonus>
    </div>
  );
};

export default Foods;
