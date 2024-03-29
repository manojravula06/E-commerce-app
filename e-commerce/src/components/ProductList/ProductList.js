import React, { useState, useEffect } from "react";
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
          {/* Mapping all products in card  */}
          {products.map((item) => {
            return (
              <div className="d-inline-flex justify-content-evenly p-2">
                <div className="size">
                  <div className="card p-2">
                    <img
                      src={item.image}
                      className="img-card-top"
                      style={{ padding: 2 + "rem" }}
                    />
                    <p className="card-title">{item.title}</p>

                    <input
                      type="submit"
                      className="btn btn-primary"
                      value={"View Details"}
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
