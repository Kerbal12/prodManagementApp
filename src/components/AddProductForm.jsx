import React, { useState } from 'react';

function AddProductForm() {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (for now just log the inputs)
    console.log({
      productName,
      image,
      price,
      category
    });
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input 
          type="text" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
        />
        
        <label>Image URL</label>
        <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
        
        <label>Price</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        
        <label>Category</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
        
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
