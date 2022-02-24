import React from "react";
import { Iproduct } from "./Interfaces";

const Product = ({ name, price, id, quantity }: Iproduct) => {
  return (
    <div className="container mt-5">
      <div className="card bg-light p-3 mb-3 d-flex justify-content-between">
        <div>
          <h3>Product Name: {name} </h3>
          <p>Product Price: {price}</p>
          <p>Product Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
