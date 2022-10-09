
import {AxiosInstance} from "../../util/AxiosInstance";    

export const getAllProduct=async ()=>{

    const URL="/products";
    return AxiosInstance.get(URL)
}

export const getProductsForCategory=async(id)=>{
    const URL = `/categories/${id}/products`;
    return AxiosInstance.get(URL)
}

export const getProductById=async(id)=>{
    const URL = `/products/${id}`;
    return AxiosInstance.get(URL)
}