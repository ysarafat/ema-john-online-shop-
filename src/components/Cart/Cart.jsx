import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
  import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h1 className='shop__container__right__title'>Order Summary</h1>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: </p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <p className='shop__container__right__gtotal'>Grand Total:</p>
            <div className='btn__div'>
                <button className='clear__cart__btn'>Clear Cart  <FontAwesomeIcon icon={faTrash} /></button>
                <button className='order__review__btn'>Review Order  <FontAwesomeIcon icon={faArrowRight} />  </button>
        </div>
        </div>
    );
};

export default Cart;