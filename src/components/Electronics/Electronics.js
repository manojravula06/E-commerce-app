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
        <Navbar/>
        <h1>Electronics</h1>
        <hr />
        {product.filter((item)=>item.category==="electronics").map((item) => {
           console.log(item)
          return  <div className="card-size">
          <div className="">
          <div className="card">
            <div className="card-img-holder">
            <img
               src={item.image}
               className="card-img-top"
              alt="no-img" />
            </div>
             <div className="card-body" >
               <p className="card-title text-center">{item.title}</p>
               <input type="submit" value={"buy"} className="btn btn-danger"  />
             </div>
           </div>
          </div>
     
         </div>;
        })}

        {/* <div className="card-size">
         <div>
         <div className="card">
            <img
              className="card-img-top"
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            />
            <div className="card-body">
              <h5 className="card-title">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </h5>
              <p className="card-title">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </p>
              <input type="submit" value={"Buy"} className="btn btn-danger" />
            </div>
          </div>
         </div>
        </div> */}
       
      </div>
    );
  };
  return renderComponent();
};

export default Electronics;
