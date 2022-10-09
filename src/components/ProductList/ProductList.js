import { useState, useEffect } from "react";
//  import {fetchAllProducts} from "../../util/AxiosInstance";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";
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
        <h1>All Products</h1>
        <hr />
        {product.map((item) => {
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
                  <Link to={`/products/detail/${product.id}`} key={product.id}>
                    <input
                      type="submit"
                      value={"View details"}
                      className="btn btn-info"
                    />
                  </Link>
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
