import React from "react";

function Cart({ cart, removeFromCart }) {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} style={{ maxWidth: "400px" }} />
          <div className="item-details">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </div>
          <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
      <div className="total">
        Total (in cart): $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
