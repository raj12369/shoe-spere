import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const location = useLocation();

  
  const openRoutes = ["/login", "/signup"];

  if (!isLoggedIn && !openRoutes.includes(location.pathname)) {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {!openRoutes.includes(location.pathname) && <Navbar />}

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />

          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {!openRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}
