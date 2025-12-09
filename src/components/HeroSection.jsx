import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
export default function HeroSection() {
  return (
    <section className="bg-gray-100 text-center py-20">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Step into Style
      </motion.h1>
      <p className="text-gray-600 text-lg mb-6">
        Discover the latest collections from your favorite brands.
      </p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/shop"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
}
