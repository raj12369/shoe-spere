import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import { useCart } from "../context/useCart";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

 
  const allProducts = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 5999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1706550631087-5a8b000e6be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      description: "Experience the legendary comfort and style of Nike Air Max. Featuring the iconic Air Max cushioning technology for all-day comfort and performance.",
    },
    {
      id: 2,
      name: "Adidas Yeezy",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      description: "Step into style with Adidas Yeezy. A premium collaboration featuring unique design and exceptional comfort for the modern sneaker enthusiast.",
    },
    {
      id: 3,
      name: "Puma Rider",
      price: 4999,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1661324257527-ce9379163e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1827",
      description: "Puma Rider brings retro vibes with modern functionality. Perfect for casual wear and everyday adventures with its sleek design.",
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: 4499,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1751624310861-d1ee2d74a608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      description: "Reebok Classic is the timeless choice for comfort and durability. A versatile shoe that complements any outfit and lifestyle.",
    },
  ];

  const product = allProducts.find((p) => p.id === parseInt(id)) || allProducts[0];

  const details = {
    material: "Premium mesh and synthetic leather",
    sole: "Rubber with cushioning technology",
    weight: "250g per shoe",
    care: "Hand wash recommended",
  };

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "White", "Blue", "Red", "Gray"];

  const features = [
    "Advanced cushioning technology for maximum comfort",
    "Breathable mesh upper for ventilation",
    "Lightweight design for agility",
    "Durable rubber sole for traction",
    "Eco-friendly materials",
    "Available in multiple colors and sizes",
  ];

  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      selectedSize,
      selectedColor,
      quantity,
      image: product.image,
    };
    addToCart(cartItem);
    alert(`${product.name} added to cart!`);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <button onClick={() => navigate("/")} className="hover:text-blue-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate("/shop")} className="hover:text-blue-600">
            Shop
          </button>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[product.image, product.image, product.image, product.image].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt={`Product view ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          
          <div className="flex flex-col gap-6">
            
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-gray-600 text-sm mt-1">SKU: PROD-{product.id}</p>
                </div>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorited ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <FaHeart size={24} />
                </button>
              </div>

              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  4.5 (328 reviews)
                </span>
              </div>

              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                {discount > 0 && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save {discount}%
                  </span>
                )}
              </div>

              
              <div className="mb-6">
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  In Stock
                </span>
              </div>
            </div>

            
            <div className="border-t border-b py-6 space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Color: <span className="text-gray-600">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all font-medium ${
                        selectedColor === color
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size: <span className="text-gray-600">{selectedSize}</span>
                </label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all font-semibold flex items-center justify-center ${
                        selectedSize === size
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

           
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <FaShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors">
                Buy Now
              </button>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <FaTruck className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On orders over ₹1000</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <FaUndo className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <FaShieldAlt className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-600">1-year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-16 bg-white rounded-lg shadow-md">
          <div className="flex border-b">
            {["description", "details", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold transition-colors capitalize ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            
            {activeTab === "description" && (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="text-blue-600 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            
            {activeTab === "details" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 capitalize">{key}</h4>
                      <p className="text-gray-600 mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Be the first to review this product</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-left"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                      <span className="text-gray-500 line-through text-sm">₹{item.originalPrice}</span>
                    </div>
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                      Quick View
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;