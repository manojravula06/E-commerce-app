import { BsTrash } from "react-icons/bs";
import React from "react";
import Navbar from "./Navbar";

function Cart() {
  return (
    <div>
      <Navbar />
      <h1>CART</h1>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-8 p-2">
              <img
                src={
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
                style={{ width: 15 + "rem", height: 10 + "rem" }}
              />
            </div>

            <div className="col-4">
              <h5 className="p-2">Product name</h5>
              <h5 className="p-2">Product cost</h5>
              <button className="btn btn-info">Check out</button>
            </div>

            <div className="row p-2">
              <div className="col-6 p-2">
                <button className="btn btn-success">+</button>
              </div>
              <div className="col-6 p-2">
                <button className="btn btn-danger">-</button>
              </div>

              <div className="col-4 p-2">
                <button className="btn btn-danger">
                  <BsTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
