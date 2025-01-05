import React, { useEffect, useState } from 'react';
import './ProductDashboard.css';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDashboard;
