import React from "react";
import "./Item.css";

const Item = () => {
  return (
    <>
      <div className="container-center">
        <div className="prod-item-box">
          <div className="prod-item-row">
            <div className="prod-item-col pr-it-col-left">
              <p className="prod-item-name">Test Product 1</p>
              <p className="prod-item-desc">
                this is a first product - amazing
              </p>
            </div>
            <div className="prod-item-col pr-it-col-right">
              <p className="prod-item-price">₹10.00</p>
              <p className="prod-item-add-to-cart btn">add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
