import { useState, useEffect } from "react";
import axios from "axios";
import "./Jewelery.css";
import Navbar from "../Navbar";
const Jewelery = () => {
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
        <h1>Jewelery</h1>
        <hr />
        {product
          .filter((item) => item.category === "jewelery")
          .map((item) => {
            console.log(item);
            return (
              <div className="alignment p-3">
                <div className="card md">
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

export default Jewelery;
