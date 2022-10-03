import {useState,useEffect} from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import "./WomensClothing.css";

function WomensClothing() {
    const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProduct(response.data));
  }, []);
  return (
    <div>
        <Navbar/>
    <h1>Women's Clothing</h1>
    <hr/>
    {product.filter((item)=>item.category==="women's clothing")
    .map((item)=>{
     return <div className="card-size">
      <div className="">
        <div className="card">
          <div className="card-img-holder">
            <img
              src={item.image}
              className="card-img-top"
              alt="no-img"
            />
          </div>
          <div className="card-body">
            <p className="card-title text-center">
              {item.category}
            </p>
            <h5>{item.title}</h5>
            <input type="submit" value={"buy"} className="btn btn-danger" />
          </div>
        </div>
      </div>
    </div>
    })}
  </div>
  )
}

export default WomensClothing