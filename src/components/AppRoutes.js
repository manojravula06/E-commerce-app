import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Landing from './LandingPage';
import ProductList from './ProductList/ProductList';
import Electronics from './Electronics/Electronics';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login'
import Jewelery from './Jewelery/Jewelery';
import MensClothing from './Mensclothing/MensClothing';
import WomensClothing from './Womensclothing/WomensClothing'
import Navbar from './Navbar';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
        
            <Route path='/login' element={<Login />} />
                <Route path='/' element={<Landing />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/electronics' element={<Electronics />} />
                <Route path='/mensclothing' element={<MensClothing />} />
                <Route path='/womensclothing' element={<WomensClothing/>}/>
                <Route path='/jewelery' element={<Jewelery />}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        
        </Router>
       
    )
}

export default AppRoutes;