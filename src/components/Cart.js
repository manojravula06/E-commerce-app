import {Link} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

function Cart() {
  return (
    <>
    <Navbar />
    <div className="p-2">
      <div className="row container">
        <div className="col card">
          <img src="https://in.canon/media/image/2021/09/25/30be26306419482888690cac6adb9de6_product_category_eosr3.png"
           style={{width:12 +'rem',height:10+'rem'}} />
          <div>Product Name</div>
          <div>Product cost : Rs. 300</div>
          <div>
          <button className="btn btn-danger mx-2">-</button>
            <button className="btn btn-success mx-2">+</button>
           
          </div>
          <button className="btn btn-danger m-3">Delete</button>
        </div>

        <div className="col-4 d-flex flex card bg-warning mx-3">
          <h6 className="text-center">
            <u>Summary</u>
          </h6>
          <ul className="list-group">
            <li className="list-group-item">Products count : </li>

            <li className="list-group-item">Total cost : </li>
          </ul>
          <Link to={"/cart/checkout"}>
          <button className="btn btn-info m-2">Check out</button>
          </Link>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
