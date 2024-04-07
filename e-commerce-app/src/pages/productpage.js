import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ProductList from "../components/productlist";
import Cart from "../components/cart";
import Footer from "../components/footer";
import productsData from "../data/product";

function Productpage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.id !== item.id || cartItem.quantity > 1
    );
    setCart(updatedCart);
  };

  return (
    <div className="product-page">
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <ProductList addToCart={addToCart} />
        </div>
        <div style={{ flex: "0 0 300px" }}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Productpage;
