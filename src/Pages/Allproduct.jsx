import React from 'react'
import { useProduct } from '../Context/ProductContext'
import Product from './Common/Product'

function Allproduct() {
  let Products=useProduct()
  return (
   <>
   <div className="container">
   <div className="row d-flex justify-content-evenly m-3">
   {
     Products.map((item,i)=>{
        return  <Product item={item} key={i}/>
      }).slice(8,11)
    }
    </div>
    </div>
   </>
  )
}

export default Allproduct;