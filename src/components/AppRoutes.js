import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Landing from './LandingPage';
import ProductList from './ProductList/ProductList';
import Electronics from './Electronics/Electronics';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login'



const AppRoutes = () => {
    return(
        <Router>
            <Routes>
            <Route path='/login' element={<Login />} />
                <Route path='/' element={<Landing />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/electronics' element={<Electronics />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        
        </Router>
       
    )
}

export default AppRoutes;