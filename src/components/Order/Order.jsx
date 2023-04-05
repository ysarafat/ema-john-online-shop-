import React from "react";
import Cart from "../Cart/Cart";
import "./order.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const products = useLoaderData();

  // const { img, name, quantity, price } = products;
  return (
    <div className="shop__container">
      <div className="cart_item">
        {products.map((product) => (
          <ReviewItem key={product.id} product={product} />
        ))}
      </div>
      <div className="shop__container__right">
        <Cart cart={products}></Cart>
      </div>
    </div>
  );
};

export default Order;
