import React, { useState } from 'react'
import ToggleBtns from './ToggleBtns'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function AddtoCart({single}) {
    let {stock}=single;
  let {addCart}=useCart()
    let [cartCount,setCartCount]=useState(1);
    function cartIncHandler(){
        stock <=cartCount ? setCartCount(stock) :setCartCount(cartCount+1)
    }

    function cartDecHandler(){
        cartCount <= 1 ? setCartCount(1) : setCartCount(cartCount - 1);
    }

  return (
    <>
    <ToggleBtns cartIncHandler={cartIncHandler} stock={stock} cartDecHandler={cartDecHandler} cartCount={cartCount}/>
    <Link to='/Cart'> <button style={{backgroundColor:'yellow',border:'none',padding:'5px 10px',borderRadius:'3px'}} onClick={()=>{addCart({single,cartCount})}}>Add to Cart</button></Link>
    </>
  )
}

export default AddtoCart