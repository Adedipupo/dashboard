import React from 'react';
import "./product.css"
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="product">
       <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
        <button className="addButtonProduct">Create</button>
        </Link>
      </div>
      <div className="productTop"></div>
      <div className="productBottom"></div>
    </div>
  )
}
