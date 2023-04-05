import React from "react";
import "./reviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product }) => {
  const { img, name, price, quantity } = product;
  return (
    <div className="cart_container">
      <img src={img} alt="" />
      <div className="product_info">
        <div>
          <h5 className="product_name">{name}</h5>
          <p>
            Price: <span className="p_price">${price}</span>
          </p>
          <p>
            Quantity: <span className="p_qty">{quantity}</span>
          </p>
        </div>
        <button className="trash_icon">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
