import React from 'react';
import { useState, useEffect } from 'react';
import Product from '../Products/Product'


import "./shop.css"
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
const cartHendelar =(product) => {
    const newCart = [...cart,product]
    setCart(newCart) 
}

    return (
        <div className='shop__container'>
            <div className='product-container'>
            {products.map(product => <Product product={product} key={product.id} cartHendelar={cartHendelar} />)}
        </div>
        <div className='shop__container__right'>
          <Cart cart={cart}/>

        </div>
        </div>
    );
};

export default Shop;