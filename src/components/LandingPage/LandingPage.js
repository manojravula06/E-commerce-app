
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { getAllCategories } from '../../api/category/index';
import './LandingPage.css';

const LandingPage = () => {
  const [categories, setCategories] = useState();

  const init = async () => {
    const result = await getAllCategories();
    console.log(result.data);
    setCategories(result.data);

  }

  useEffect(() => {
    init();
  }, [])



  return (
    <>
    <Navbar />
      <div className="home container">
        <div className="row">
          <div className="col-12">
            <h2 className="home-title">Welcome to Online Shopping ...</h2>
          </div>
          <div className="col-12">
            <div className="category-list">
              <div className="category-item" >
                <Link to="/products" >All Products</Link>
              </div>
              {categories?.map(category => (
                <>
                  <div className="category-item" key={category.id}>
                    <Link to={`/products${category ? `?categoryId=${category}&name=${category}` : ''}`} className="text-white">
                      {category}
                    </Link>
                  </div>
                </>
              )
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="category-title ">Select a category to start shopping</div>
          </div>
        </div>
      </div>
    </>
  )

}

export default LandingPage