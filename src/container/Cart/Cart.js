import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("cartItems");
  console.log(cartItems);
  return (
    <div className="container-center">
      <div className="cart-box">
        <p className="cart-heading">your Shopping cart</p>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}

        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
