import { useState, useEffect } from "react";
import axios from "axios";
import "./WomensClothing.css";
import Navbar from "../Navbar";

const WomensClothing = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts=async()=>{
    await axios.get("https://fakestoreapi.com/products").
    then((response)=>setProduct(response.data))
  }
  useEffect(() => {
      fetchProducts()
  }, []);
  const renderComponent = () => {
    return (
      <div>
        <Navbar />
        <h1>Women's Clothing</h1>
        <hr />
        {product
          .filter((item) => item.category === "women's clothing")
          .map((item) => {

            return (
              <div className="alignment md p-3">
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

export default WomensClothing;
