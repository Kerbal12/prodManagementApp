import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDashboard from './components/ProductDashboard';
import AddProductForm from './components/AddProductForm';
import './App.css'; // Optional for global styling

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductDashboard />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
