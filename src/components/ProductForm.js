import React, { useState } from 'react';

function ProductForm({addProduct}) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a product object from the form data
    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
    };

    // Call the addProduct function passed as a prop
    addProduct(newProduct)
    console.log(newProduct)

    // Clear the form fields
    setProduct({
      name: '',
      description: '',
      price: '',
    });
  };

  return (
    <>
    <h1>Online Store</h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
    </>
  );
}

export default ProductForm;
