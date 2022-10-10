import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";

function Cart() {
  const [itemCount, setItemCount] = useState(0);
  const [Totalcost, setTotalCost] = useState(0);

  const itemCount_incre_Click = () => {
    // itemCount state is incremented
    setItemCount(itemCount + 1);
  };

  const itemCount_decrem_Click = () => {
    // itemcount state is incremented
    setItemCount(itemCount - 1);
  };
  return (
    <>
      <Navbar />
      <div className="p-2">
        <div className="row container">
          <div className="col card">
            <img
              src="https://in.canon/media/image/2021/09/25/30be26306419482888690cac6adb9de6_product_category_eosr3.png"
              style={{ width: 12 + "rem", height: 10 + "rem" }}
            />
            <div>Product Name</div>
            <div>Product cost : Rs. 300</div>
            <div>
              <button
                className="btn btn-danger mx-2"
                onClick={itemCount_decrem_Click}
              >
                -
              </button>
              <button
                className="btn btn-success mx-2"
                onClick={itemCount_incre_Click}
              >
                +
              </button>
            </div>
            <button className="btn btn-danger m-3">Delete</button>
          </div>

          <div className="col-4 d-flex flex card bg-warning mx-3">
            <h6 className="text-center">
              <u>Summary</u>
            </h6>
            <ul className="list-group">
              <li className="list-group-item">Products count : {itemCount} </li>

              <li className="list-group-item">Total cost : {Totalcost} </li>
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
