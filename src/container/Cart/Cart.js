import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="container-center">
      <div className="cart-box">
        <p className="cart-heading">your Shopping cart</p>
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
