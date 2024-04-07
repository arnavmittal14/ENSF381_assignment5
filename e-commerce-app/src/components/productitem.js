import React, { useState } from "react";

function ProductItem({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      className="product-item"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}>
      <img
        src={"../" + product.image}
        alt={product.name}
        style={{ maxWidth: "400px" }}
      />
      <h3>{product.name}</h3>
      <p>{showDetails && product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
