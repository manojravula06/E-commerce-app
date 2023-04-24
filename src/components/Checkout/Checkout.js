import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {getCart,createCart} from '../../api/cart/index';
import Navbar from '../Navbar/Navbar';

import './checkout.css';

const Checkout = () => {
    const [orderDetails, setOrderDetails] = useState({});
    const [productDetails, setProductDetails] = useState([]);
    const [confirmPaymentSuccess, setConfirmPaymentSuccess] = useState(false);
   
   const init=async()=>{
        try {
            const result=await getCart();
            console.log(result.data.products)
            setOrderDetails(result.data.products);
            setProductDetails(result.data.products);
        } catch (error) {
                console.log(error)
        }
   }
    useEffect(() => {

        init();
    
      }, [])
    const renderComponent = () => {

        return (
          <>
            <Navbar />
        <div className="checkout">
            <div className="container">
                <div className="row">
                    <div className="cart-title">Checkout</div>
                        <div className="cart-wrapper">
                            <div className="order-details">
                             <div className="order-details-title"> Order Summary</div>

                             {
                    productDetails?.map(product => (
                      <div className="order-details-product " key={product.id}>
                        <div className="order-details-product-img ">
                          <img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg"

                            alt="Product"
                          />
                        </div>
                        <div className="order-details-product-data ">
                          <div>{product.productId}</div>
                          <div> {product.quantity} in box</div>
                        </div>
                      </div>
                    ))
                  }
                    </div>
                </div>
            </div>
        </div>
    </div>

           
          </>
        )
    
    
      }
    
      return (
    
        renderComponent()
      )
    }
    

export default Checkout