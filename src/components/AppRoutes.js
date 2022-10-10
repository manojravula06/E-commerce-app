import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../api/auth";
import Landing from "./LandingPage";
import ProductList from "./ProductList/ProductList";
import Electronics from "./Electronics/Electronics";
import Cart from "./Cart";
import Login from "./Login";
import Jewelery from "./Jewelery/Jewelery";
import MensClothing from "./Mensclothing/MensClothing";
import WomensClothing from "./Womensclothing/WomensClothing";
import ProductDetail from "./ProductDetail/ProductDetail";
import Checkout from "./Checkout";
import Message from "./Message";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products/detail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/mensclothing" element={<MensClothing />} />
        <Route path="/womensclothing" element={<WomensClothing />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/checkout/message" element={<Message />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
