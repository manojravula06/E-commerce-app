import React, { useEffect, useState } from "react";
import "./LandingPage.css";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {AxiosInstance} from "../util/AxiosInstance";


const LandingPage = () => {
  // use state hook
  const [categories, setCategories] = useState([]);
  //fetching all categories

  const fetchCategories = async () => {
    try {
      const result = await AxiosInstance.get('/categories');
      console.log(result);
      setCategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  // useEffect hook getAllPrice
  useEffect(() => {
    fetchCategories();
  }, []);
  const renderComponent = () => {
    return (
   
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div classname="col-12">
             
                <div className="category-list">
                <Link to="/products">
                  <div className="category-item">All-Categoies</div>
                  </Link>
                  {categories.map((category,id) => (
                    <Link to="/products">
                      <div className="category-item" key={id}>
                        {category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  };
  return renderComponent();
};

export default LandingPage;
