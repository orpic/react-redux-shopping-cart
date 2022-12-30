import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="logo">Redux Shopping Cart</p>
      <button className="btn btn-header">
        My Cart <span className="cart-quantity">1</span>
      </button>
    </div>
  );
};

export default Header;
