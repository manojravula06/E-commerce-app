import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./index";
import Navbar from "../Navbar";

function ProductDetail() {
  const [seletedproduct, setSelectedProduct] = useState("");
  const [productDetail, setPoductDetail] = useState({});

  const { id } = useParams();

  const init = async () => {
    setSelectedProduct(id);

    console.log(id);

    try {
      const response = await getProductById(id);
      setPoductDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <Navbar />
      ProductDetail
      <div className="row mx-3">
        <div className="card col-6 p-2">
          <img src={"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
        </div>
      </div>

      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default ProductDetail;
