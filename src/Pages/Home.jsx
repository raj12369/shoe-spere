import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import React from "react";

const featuredProducts = [
  { id: 1, name: "Nike Air Max", price: 5999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: 2, name: "Adidas UltraBoost", price: 6999, image: "https://images.unsplash.com/photo-1696954895463-343839741541?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: 3, name: "Puma Runner", price: 4999, image: "https://images.unsplash.com/photo-1706550630940-4c72f689002a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
];

function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-10 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
