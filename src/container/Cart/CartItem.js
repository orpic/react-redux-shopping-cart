import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { title, quantity, total, price } = item || {
    title: "Fallback Title",
    quantity: 0,
    total: 0,
    price: 0,
  };

  return (
    <div className="cart-item-box">
      <div className="item-name-price-quant-btn-row">
        <p className="item-name">{title}</p>
        <p className="item-total-price">
          ₹{total}.00<span className="item-price">(₹{price}.00/item)</span>
        </p>
      </div>
      <div className="item-name-price-quant-btn-row">
        <p className="item-quant">
          x<span>{quantity}</span>
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
