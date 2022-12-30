import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart-box">
      <p className="cart-heading">Your Shopping cart</p>
      <CartItem />
    </div>
  );
};

export default Cart;
