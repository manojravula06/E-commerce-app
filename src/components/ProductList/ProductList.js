import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, getProductsForCategory } from '../../api/product/index';
import Navbar from '../Navbar/Navbar';


import './ProductList.css';


const ProdustList = () => {


  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryName, setCurrentCategoryName] = useState('');


  const init = async () => {

    const query = new URLSearchParams(window.location.search);

    setCurrentCategory(query.get('categoryId'));
    setCurrentCategoryName(query.get('name'));
    const id = query.get('categoryId');

    try {

      const products = id ? await getProductsForCategory(id) : await getAllProducts();
      console.log(products.data)
      setProductList(products.data);

    } catch (error) {
      console.error(error);

    }


  }

  useEffect(() => {

    init();

  }, []);

  return (
    <>
      <Navbar />
      <div className="productList">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-12">
              <h2 className="product-list-title text-uppercase">{currentCategoryName ? `Products in 
              '${currentCategoryName}'` : 'All Products'}</h2>
              <div className="product-list-wrapper">
                <div className="product-list-box">
                  {
                    productList?.map((product) => (
                      <Link key={product.id} className="product-item" to={`/product/${product.id}/details`}>
                        <div className="product-img">
                          <img src={product.image} alt="Item Pic" />
                        </div>
                        <div className="product-name text-center">
                          {product.title}
                        </div>                      
                        <div className="product-price">
                          <i className="fa fa-inr" /> {(+product.price).toFixed(2)}
                        </div>
                      </Link>

                    ))


                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ProdustList