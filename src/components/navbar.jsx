import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='megenagna' >Online Shopping Market</h1>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  );
};

export default Navbar;