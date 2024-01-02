import React from 'react'
import { useCart } from '../Context/CartContext'
import '../Css/Cart.css'
import { NavLink } from 'react-router-dom'
import ToggleBtns from './ToggleBtns'
import { AiOutlineDelete } from 'react-icons/ai'

function CartComp() {
  let {cart,incHandler,decHandler,removeHandler,clearAll,totalPrice} = useCart()  
  return (
    <>
    {
      cart.length==0 && <div className="container">
      <div className="row d-flex justify-content-center align-items-center" style={{height:"50vh" ,width:"100%"}}>
          <div className="col">
          <h1>Cart is Empty</h1>
          <NavLink to="/">
          <button className="btn btn-primary">continue shopping</button>
          </NavLink>
          </div>
      </div>                  
      </div>
    }
    {
      cart.length>0 && (
        <div className="container">
          <div className="row" id='cart'>
            <div className="col-md-2">Item</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
            <div className="col-md-2">Total</div>
            <div className="col-md-2">Remove</div>
            <hr />
          </div>
          {cart.length>0 && cart.length>0 && cart.map((item,i)=>{
            return (
              <div className="row d-flex justify-content-evenly">
                <div className="col-md-2">
                  <div>
                    <img
                      src={item.image}
                      alt={Math.random() * 1000}
                      className="img-fluid"
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className="col-md-2">{item.price}</div>
                <div className="col-md-2">
                  <ToggleBtns
                    cartCount={item.cartCount}
                    cartDecHandler={() => {
                      decHandler(item.id);
                    }}
                    cartIncHandler={() => {
                      incHandler(item.id);
                    }}
                  />
                </div>
                <div className="col-md-2">{item.price * item.cartCount}</div>
                <div className="col-md-2">
                  <button style={{ border: "none", backgroundColor: "white" }}>
                    <AiOutlineDelete
                      style={{ color: "red" }}
                      onClick={() => {
                        removeHandler(item.id);
                      }}
                    />
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="container">
          <div className="row d-flex justify-content-between m-5">
            <div className="col-md-3">
              <NavLink to="/">
                <button className="btn btn-primary">CONTINUE SHOPPING</button>
              </NavLink>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger" onClick={clearAll}>CLEAR ALL CART</button>
            </div>
          </div>
        <h4>Total : {totalPrice}</h4>
        </div>
        </div>
      )
    }
    </>
    )
}

export default CartComp