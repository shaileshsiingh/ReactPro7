import React, { useState } from 'react';

function ProductList({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Description:</strong> {product.description}
            </div>
            <div>
              <strong>Price:</strong> ${product.price}
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
