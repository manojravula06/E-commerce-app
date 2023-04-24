import axios from "axios";

import { API_BASE_URL, TIMEOUT } from "../config/Config";

// global headers global settings
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

// export const fetchProducts=async()=>{
//   axios.get("https://fakestoreapi.com/products")
//   .then((response)=>console.log(response))
 
// }