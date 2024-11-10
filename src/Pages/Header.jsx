import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';
import { BsCart3 } from "react-icons/bs";
import { useCart } from '../Context/CartContext';
import { FaBars } from "react-icons/fa";

function Header() {
  let { totalCount } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Brand Logo" height="30" />
          </Link>
          
          {/* Toggle button for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          
          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link ">
                  <BsCart3 style={{ fontSize: '1.5rem' }}className='position-relative' />
                  <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                    {totalCount}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
