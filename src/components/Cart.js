import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {item.name}
            </div>
            <div>
              <strong>Price:</strong> ${item.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
