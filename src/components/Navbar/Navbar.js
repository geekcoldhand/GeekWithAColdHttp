import React, { use, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "../../context/cart_context";
import "./Navbar.css";
import logo from "../../images/logoBlue.png";


export default function Navbar() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const isUser = isAuthenticated && user;
  var navLinks = document.getElementsByClassName("nav-link");
  const { amount } = useGlobalContext();


  useEffect(() => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenLinks = document.querySelector(".off-screen-links");
    const links = document.querySelectorAll(".links");

    const toggleMenu = () => {
      hamMenu.classList.toggle("active");
      offScreenLinks.classList.toggle("active");
  };

  if (hamMenu && offScreenLinks) {
      hamMenu.addEventListener("click", toggleMenu);
  }

  // Add click event to each link
  if (links) {
      links.forEach(link => {
          link.addEventListener("click", toggleMenu);
      });
  }

  // Cleanup
  return () => {
      if (hamMenu) {
          hamMenu.removeEventListener("click", toggleMenu);
      }
      if (links) {
          links.forEach(link => {
              link.removeEventListener("click", toggleMenu);
          });
      }
  };
}, []);

  return (
    <div className="nav">
       
      <div className="nav-container">
        <ul className="off-screen-links">
        <li className="links"> 
            <Link to="/">Home</Link>
        </li>
         <li className="links"> 
              <Link to="/products">Atelier</Link>
        </li>
        </ul>
        <nav>
          <div className="ham-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        
        <div className="nav-item">
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          <Link to="/cart">
            <i className="fa fa-shopping-cart cart-icon"></i>{" "}
          </Link>
          </div>
      </div>
      <label className="nav-name nav-logo">GWACH</label>
      
    </div>
  );
}
