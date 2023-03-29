import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    const {name, price,seller, ratings,img} =props.product
   const cartHandler =props.cartHandler;

    return (
        <div className='product-cards'>
            <img src={img} alt={name} />
            <h3 className='product__name'>{name}</h3> 
            <p className='product__price'>Price : ${price}</p>
            <p className='product__seller'>Seller : {seller}</p>
            <p className='product__seller'>Rating : {ratings}</p>
            <button onClick={() =>cartHandler(props.product)} className='product__cart_btn'>Add to Cart <FontAwesomeIcon icon={faCartPlus}/> </button>
        </div>
        
        
    );
};

export default Product;