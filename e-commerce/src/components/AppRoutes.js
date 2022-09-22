import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Signin from './Signin';
import Landing from './LandingPage';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';



const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/signin' element={<Signin />} />
                <Route path='/' element={<Landing />} />
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        </Router>
       
    )
}

export default AppRoutes;