import axios from "axios";
import React, { useState, useEffect } from "react";

const FetchAPI = () => {
  const [product, setProduct] = useState();
  useEffect = () => {
   axios
   .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log('heloo')
        console.log(res);
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>fhe
       
      </h1>
      {/* <ul>
        {product.map(data => (
          <li key={data.id}>{data.title}</li>
        ))} 
      </ul>*/}
    </div>
  );
};

export default FetchAPI;
