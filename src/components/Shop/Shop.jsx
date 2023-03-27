import React from 'react';
import { useState, useEffect } from 'react';
import Product from '../Products/Product'
import "./shop.css"
const Shop = () => {
    const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
console.log(products);
    return (
        <div className='shop__container'>
            <div className='product-container'>
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
        <div className='shop__container__right'>
            <h1 className='shop__container__right__title'>Order Summary</h1>
            <p>Selected Items:</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <p className='shop__container__right__gtotal'>Grand Total:</p>

        </div>
        </div>
    );
};

export default Shop;