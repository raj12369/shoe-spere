import { Link } from "react-router-dom";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500">₹{product.price}</p>
      </div>
    </Link>
  );
}
