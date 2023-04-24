import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ProductList from '../../components/ProductList/ProductList'
import ProductDetail from "../ProductDetail";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="/products" element={<ProductList />}/>
        <Route exact path="/product/:productid/details" element={<ProductDetail />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/checkout" element={<Checkout />}/>
        </Routes>
    </Router>
  );
};

export default AppRoutes;
