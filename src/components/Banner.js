import React from "react";
import banner from "../banner.png";
function Header() {
    return (
    <div className="header-image-wrapper">
        <img src={banner} className="header-image img-fluid" alt="Logo"/>
      </div>
    );
  }
  
  export default Header;