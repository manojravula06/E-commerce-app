import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./ProductList.css";
import axios from "axios";

const ProductList = () => {
  // use state hook
  const [products, setProducts] = useState([]);

  // useEffect hook fetching all products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
    //.then((response) => console.log(response.data)
  }, []);
  const renderComponent = () => {
    return (
      <>
        <div>
        <Navbar/>
          {/* Mapping all products in card  */}
          {products.map((item) => {
            return (
              <div className="d-inline-flex justify-content-evenly p-2">
                <div className="size">
                  <div className="card m-2">
                    <img
                      src={item.image}
                      className="img-card-top"
                      style={{ padding: 2 + "rem" }}
                      alt="no-img"
                    />
                    <p className="card-title p-3">{item.title}</p>

                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="View Details"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return renderComponent();
};

export default ProductList;
