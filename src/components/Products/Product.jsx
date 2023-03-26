import React from 'react';
import './product.css';

const Product = (props) => {
    const {name, price,seller, ratings,img} =props.product
    return (
        <div className='product-cards'>
            <img src={img} alt={name} />
            <h3 className='product__name'>{name}</h3> 
            <p className='product__price'>Price : {price}</p>
            <p className='product__seller'>Seller : {seller}</p>
            <p className='product__seller'>Rating : {ratings}</p>
            <button className='product__cart_btn'>Add to Cart</button>
        </div>
        
        
    );
};

export default Product;