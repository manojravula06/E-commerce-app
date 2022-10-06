import { useState, useEffect } from "react";
import axios from "axios";
import "./Electronics.css";
import Navbar from "../Navbar";
const Electronics = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProduct(response.data));
    //.then((response)=>console.log(response.data));
  }, []);
  const renderComponent = () => {
    return (
      <div>
        <Navbar />
        <h1>Electronics</h1>
        <hr />
        {product
          .filter((item) => item.category === "electronics")
          .map((item) => {
            console.log(item);
            return (
              <div className="alignment p-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top img-size"
                    alt="no-img"
                  />
                  <div className="card-body">
                    <p className="card-title text-center">{item.title}</p>
                    <input
                      type="submit"
                      value={"View details"}
                      className="btn btn-info"
                    />

                    <input
                      type="submit"
                      value={"Add to cart"}
                      className="btn btn-info d-inline-flex justify-content-end mx-3"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  return renderComponent();
};

export default Electronics;
