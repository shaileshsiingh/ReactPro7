import React, { useState } from 'react';
import AddProducts from './components/ProductForm';
import ProductList from './components/ProductList';
// import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);

// Function to add a product to the products state
const addProduct = (product) => {
  setProducts([...products, product]);
};

 
  
console.log(setProducts)
  return (
    <div className="App">
      <AddProducts addProduct={addProduct} />
      <ProductList products={products}  />
{/* <Cart/> */}
    </div>
  );
}

export default App;
