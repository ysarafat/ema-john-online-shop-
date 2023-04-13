import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./order.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/localStorage";

const Order = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  const handelCartItem = (id) => {
    const removeFromCart = cart.filter((product) => product.id !== id);
    setCart(removeFromCart);
    removeFromDb(id);
  };

  // const { img, name, quantity, price } = products;
  return (
    <div className="shop__container">
      <div className="cart_item">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handelCartItem={handelCartItem}
          />
        ))}
      </div>
      <div className="shop__container__right">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
