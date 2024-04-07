import React from "react";
import ProductItem from "./productitem";
import productsData from "../data/product";

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
