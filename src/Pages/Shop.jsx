import ProductCard from "../components/ProductCard";
import React from "react";

export default function Shop() {
  const products = [
    { id: 1, name: "Nike Air Max", price: 5999, image: "https://images.unsplash.com/photo-1706550631087-5a8b000e6be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    { id: 2, name: "Adidas Yeezy", price: 8999, image: "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    { id: 3, name: "Puma Rider", price: 4999, image: "https://images.unsplash.com/photo-1661324257527-ce9379163e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1827" },
    { id: 4, name: "Reebok Classic", price: 4499, image: "https://images.unsplash.com/photo-1751624310861-d1ee2d74a608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" },
  ];

  return (
    <div className="py-10 px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop All</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
