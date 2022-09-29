import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Signin from './Signin';
import Landing from './LandingPage';
import ProductList from './ProductList/ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login'



const AppRoutes = () => {
    return(
        <Router>
            <Routes>
            <Route path='/login' element={<Login />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/' element={<Landing />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        
        </Router>
       
    )
}

export default AppRoutes;