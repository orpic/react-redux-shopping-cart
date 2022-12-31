import React from "react";
import "./Header.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div className="header">
      <p className="logo">Redux Shopping Cart</p>
      <button onClick={toggleCartHandler} className="btn">
        My Cart <span className="cart-quantity">1</span>
      </button>
    </div>
  );
};

export default Header;
