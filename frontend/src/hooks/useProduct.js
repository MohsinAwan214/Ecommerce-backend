import axios from 'axios';
import { useEffect, useState } from 'react'
import { api_key } from '../productApi/index';

export default function useProduct(query) {
    

   
const [products, setProducts] = useState(null)

const getProductData = async ()=>{
const response = await axios(`${api_key}/product`)
setProducts(response?.data?.products)

};
console.log(products);
useEffect(()=>{
getProductData();
},[])
  return (
    {
      products
    }
  )
}
