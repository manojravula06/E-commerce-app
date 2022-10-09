import {API_BASE_URL} from "../config/Config";
import axios from "axios";

// global headers global settings
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 15000,

});

export const fetchAllProducts=axios.get(API_BASE_URL).then(
  response=>console.log(response.data)
  
)