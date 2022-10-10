import { Link } from "react-router-dom";
import {TbTruckDelivery} from "react-icons/tb";

function Checkout() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <u>
          <h1 className="display-3">Checkout Page</h1>
        </u>
      </div>
      <div className="container">
        <div className="card">
          <div className="row p-2">
            <img
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              className="card-img-top"
              style={{ width: 12 + "rem", height: 10 + "rem" }}
            />
            <div className="col-8">
              <table className="table bg-light align-middle">
              <tr>
                  <th scope="col">Ordered By</th>
                  <td scope="col"> Something name</td>
                </tr>
                <tr>
                  <th scope="col">Product Name</th>
                  <td scope="col"> Something name</td>
                </tr>
                <tr>
                  <th scope="col">Pay Rs.</th>
                  <td scope="col"> Something cost</td>
                </tr>
                <tr>
                  <th scope="col">Mode of Payment</th>
                  <td scope="col">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Debit Card
                    </button>
                    <div class="dropdown">
                      <ul class="dropdown-menu">
                        <li className="dropdown-item">Cash on Delivery</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="col">Card Details</th>
                  <td scope="col">
                    <label>Card number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your Card number"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </td>
                  <td scope="col">
                    <label>CVV</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="CVV"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Link to="/cart/checkout/message">
                    <button className="btn btn-info rounded-pill">
                     Place order <TbTruckDelivery/>
                    </button>
                    </Link>
                    
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
