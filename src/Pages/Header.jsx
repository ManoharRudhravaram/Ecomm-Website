import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/Header.css'
import { BsCart3 } from "react-icons/bs";
import { useCart } from '../Context/CartContext';

function Header() {
  let { totalCount } = useCart()
  return (
    <>
      <nav className="navbar bg-light d-flex justify-content-evenly container-fluid">
        <div className="container m-2">
          <div className="brand d-flex align-items-center justify-content-evenly">
            <span><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="x" /></span>
          </div>
          <div className="links d-flex justify-content-evenly align-items-center">
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/product' className='link'>Product</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Link to='/cart'>
              <div className='cart'>
                <BsCart3 style={{ fontSize: '30px' }} />
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{ top: "18px", marginLeft: '25px' }}>{totalCount}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;