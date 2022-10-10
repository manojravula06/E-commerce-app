import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-dark bg-info navbar-expand-md">
    <h4>
    <Link to={"/"} className="navbar-brand">
      E-Cart
      </Link>
      </h4>
     
      <div className="navbar-collapse collapse" id="menu">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to={"/"} className="nav-link">
        Home
        </Link>
        </li>
      <li className="nav-item">
      <Link to={"/products"} className="nav-link">
        All Products
        </Link>
        </li>

      <li className="nav-item">
      <Link to={"/electronics"} className="nav-link">
        Electronics
        </Link>
        </li>
      <li className="nav-item">
        <Link to={"/jewelery"} className="nav-link">
        Jewelery
        </Link>
        </li>
      <li className="nav-item">
        <Link to={"/mensclothing"} className="nav-link">
        Men
        </Link>
        </li>
      <li className="nav-item">
      <Link to={"/womensclothing"} className="nav-link">
        Women
        </Link>
        </li>
     </ul>
     

      </div>

      <div className="navbar-collapse collapse d-flex justify-content-end">
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <Link to={"/login"} className="nav-link">
        Login 
        </Link>
        </li>
      <li className="nav-item">
      <Link to={"/cart"} className="nav-link">
        cart
        </Link>
        </li>
        </ul>
      </div>
     
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
      </button>
    </nav>
    
    </div>
  );
};

export default Navbar;
