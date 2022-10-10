import React, { useState, useEffect } from "react";
import {GiShoppingCart} from "react-icons/gi";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function ProductDetail() {
  const [seletedproduct, setSelectedProduct] = useState("");
  const [productDetail, setPoductDetail] = useState({});


  useEffect(() => {

  }, []);
  return (
    <div>
      <Navbar />
      ProductDetail
      <div className="row mx-3">

        <div className="card p-2">
          <img src={"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </div>
        <div className="d-flex">
        <div className="p-2">
          <h4 className="">Product name</h4>
          <h6>Category : </h6>
          <p>Product Description : </p>
          <h4 className="text-danger">Price: </h4>

          <p>rating :</p>
          <p>In stock:</p>
          <div>
          <button className="btn btn-primary rounded-pill">
          <span>Add to cart</span>  <GiShoppingCart/>
          </button>
        </div>
        </div>
            
        </div>
        
      </div>

      
    </div>
  );
}

export default ProductDetail;
