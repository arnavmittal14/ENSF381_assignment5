// CartItem.js
import React from "react";

function CartItem({ item, removeFromCart }) {
  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        ${item.price} x {item.quantity}
      </p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
}

export default CartItem;
