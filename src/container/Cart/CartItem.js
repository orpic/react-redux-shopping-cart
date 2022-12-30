import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item-box">
      <div className="item-name-price-quant-btn-row">
        <p className="item-name">Test Item</p>
        <p className="item-total-price">
          ₹30.00<span className="item-price">(₹10.00/item)</span>
        </p>
      </div>
      <div className="item-name-price-quant-btn-row">
        <p className="item-quant">
          x<span>3</span>
        </p>
        <p className="item-quant-add-remove-btn">
          <button className="btn cart-btn">-</button>
          <button className="btn cart-btn">+</button>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
