import React from "react";
import { useState, useEffect } from "react";
import Product from "../Products/Product";
import "./shop.css";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/localStorage";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storeCart = getShoppingCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const cartHandler = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.quantity !== product.quantity);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };
  const clearCartItem = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop__container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            cartHandler={cartHandler}
          />
        ))}
      </div>
      <div className="shop__container__right">
        <Cart cart={cart} clearCartItem={clearCartItem} />
      </div>
    </div>
  );
};

export default Shop;
