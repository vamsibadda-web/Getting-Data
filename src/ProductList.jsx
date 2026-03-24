import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Product List</h1>

      <div className="grid">
        {products.map(function (item) {
          return (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="image" />
              <h3 className="title">{item.title}</h3>
              <p className="price"> {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;