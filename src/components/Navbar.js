import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="hortifruti" onClick={() => setShow(true)}>
          Hortifruti
        </span>
        <div className="carrinho" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-arrow-down"></i>
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
