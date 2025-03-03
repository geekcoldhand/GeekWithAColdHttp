import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import DragZone from "../../components/DragZone/DragZone";

export default function Home() {
  return (
    <div className="info">
    <span id="banner">
        <div class="banner-message"> 
        Geek With A Cold Hand
    </div> 
    </span>

      <div className="hero">

      <div className="content">
        <div className="head">
          <h1>Simple Sophistication </h1>
          <p>Shop Ivy League, our new collection of clothes, bags, head-gear and more</p>

          <Link to="/products">
            <button>Start Shopping</button>
          </Link>
          </div>
      </div>
     
      </div>
      <div className="drag-section">
      <DragZone/>
        
      <Footer/>
      </div>
    </div>
  );
}
