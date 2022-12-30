import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item-box">
      <div className="item-name-price-row">
        <p className="item-name">Test Item</p>
        <p className="item-total-price">
          ₹100<span className="item-price">(₹10/item)</span>
        </p>
      </div>
      <div className="item-quant-btn-row">
        <p className="item-quant">
          x<span>3</span>
        </p>
        <p className="item-quant-add-remove-btn">
          <button>+</button>
          <button>-</button>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
