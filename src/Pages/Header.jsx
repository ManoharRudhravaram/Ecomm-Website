import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';
import { BsCart3 } from "react-icons/bs";
import { useCart } from '../Context/CartContext';
import { FaBars } from "react-icons/fa";

function Header() {
  let { totalCount } = useCart();

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Brand Logo" height="30" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link" onClick={handleLinkClick}>Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" onClick={handleLinkClick}>
                  <BsCart3 style={{ fontSize: '1.5rem' }} className="position-relative" />
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
