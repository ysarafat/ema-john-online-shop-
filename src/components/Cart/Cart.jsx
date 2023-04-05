import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 10) / 100;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h1 className="shop__container__right__title">Order Summary</h1>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge: ${shipping} </p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <p className="shop__container__right__gtotal">
        Grand Total: ${grandTotal} (Including 10% VAT)
      </p>
      <div className="btn__div">
        <button className="clear__cart__btn">
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="order__review__btn">
          Review Order <FontAwesomeIcon icon={faArrowRight} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
