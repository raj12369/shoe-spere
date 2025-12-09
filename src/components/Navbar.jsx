import { Link } from "react-router-dom";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/useCart";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const isLoggedIn = localStorage.getItem("loggedInUser");

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      
     
      <Link to="/" className="text-2xl font-bold text-gray-800">
        ShoeSphere
      </Link>

      <div className="flex gap-6 text-gray-700 font-medium items-center">
        
        
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        
        <Link
          to="/cart"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors relative"
        >
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span>Cart</span>
        </Link>

       
        {isLoggedIn && (
          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              window.location.reload(); 
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
