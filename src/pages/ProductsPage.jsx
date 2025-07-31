import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Shield, Truck, Thermometer, Award, CheckCircle, ArrowRight, Filter, Search, Star, Globe, Zap } from 'lucide-react';
import { BsChatDotsFill } from "react-icons/bs";
import { useEffect } from "react";
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Re-added: Initialize selectedCountry to 'all' to show all products by default
  const [selectedCountry, setSelectedCountry] = useState('all');
// s
  const categories = [
    { id: 'all', name: 'All Items', count: 19 },
    { id: 'beef', name: 'Beef', count: 15 },
    { id: 'lamb', name: 'Lamb', count: 1 },
    { id: 'fries', name: 'French Fries', count: 2 },
    { id: 'mayonnaise', name: 'Mayonnaise', count: 1 }
  ];

  const products = [
    // Your existing product data goes here.
    // Make sure your product data is consistent with countries.
    // Example: country: "Australia", country: "Canada", country: "USA", etc.
    // I'm omitting the full products array here for brevity, assume it's the same as before.
    {
      id: 1,
      name: "Shin Shank",
      category: "beef",
      country: "Australia",
      description: "Premium Australian shin shank with rich flavor, perfect for slow cooking and stews.",
      image: "/Images/shank.jpg",
      features: ["Australia origin"],
      gradient: "from-red-500 to-rose-600",
      badge: "Borello",
      rating: 4.9,
      suppliers: 5
    },
    {
      id: 2,
      name: "Beef Bone Brisket Bone",
      category: "beef",
      country: "Australia",
      description: "Flavorful Australian brisket bone, perfect for hearty broths and soups.",
      image: "/Images/bone.jpg",
      features: ["Australia origin"],
      gradient: "from-orange-500 to-red-600",
      badge: "CAG",
      rating: 4.8,
      suppliers: 4
    },
    {
      id: 3,
      name: "Short Plate",
      category: "beef",
      country: "Australia",
      description: "Tender Australian short plate, great for grilling and smoking with excellent marbling.",
      image: "/Images/plate.jpg",
      features: ["Australia origin"],
      gradient: "from-amber-500 to-yellow-600",
      badge: "AMG",
      rating: 4.7,
      suppliers: 3
    },
    {
      id: 4,
      name: "PE Brisket",
      category: "beef",
      country: "Australia",
      description: "Premium Australian PE Brisket from Teys, ideal for low and slow cooking.",
      image: "/Images/brisket.jpg",
      features: ["Australia origin"],
      gradient: "from-green-500 to-emerald-600",
      badge: "Teys",
      rating: 4.9,
      suppliers: 6
    },
    {
      id: 5,
      name: "Cube Roll Hokubee",
      category: "beef",
      country: "Australia",
      description: "Premium Australian cube roll from Hokubee, tender and flavorful for gourmet dishes.",
      image: "/Images/hokubee.jpg",
      features: ["Australia origin"],
      gradient: "from-purple-500 to-pink-600",
      badge: "Hokubee",
      rating: 5.0,
      suppliers: 4
    },
    {
      id: 6,
      name: "Beef Leg Bone",
      category: "beef",
      country: "Australia",
      description: "Australian beef leg bone, rich in marrow and perfect for nutrient-rich broths.",
      image: "/Images/leg.jpg",
      features: ["Australia origin"],
      gradient: "from-indigo-500 to-blue-600",
      badge: "Okey",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 7,
      name: "Kilcoy AUS Beef",
      category: "beef",
      country: "Australia",
      description: "Kilcoy premium Australian beef, known for superior marbling and taste.",
      image: "/Images/AUS.jpg",
      features: ["Australia origin"],
      gradient: "from-teal-500 to-green-600",
      badge: "Kilcoy",
      rating: 4.9,
      suppliers: 5
    },
    {
      id: 8,
      name: "Beef Striploin Hokubee 352",
      category: "beef",
      country: "Australia",
      description: "Hokubee beef striploin with perfect marbling, ideal for steaks and grilling.",
      image: "/Images/352.jpg",
      features: ["Australia origin"],
      gradient: "from-pink-500 to-rose-600",
      badge: "Hokubee",
      rating: 4.9,
      suppliers: 4
    },
    {
      id: 9,
      name: "Short Plate",
      category: "beef",
      country: "Canada",
      description: "Canadian short plate by Excel, tender and flavorful for versatile cooking.",
      image: "/Images/short.jpg",
      features: ["Canada origin"],
      gradient: "from-orange-500 to-amber-600",
      badge: "Excel",
      rating: 4.7,
      suppliers: 3
    },
    {
      id: 10,
      name: "Shortrib",
      category: "beef",
      country: "Canada",
      description: "Premium Canadian shortrib from JBS, excellent for braising and slow cooking.",
      image: "/Images/rib.jpg",
      features: ["Canada origin"],
      gradient: "from-yellow-500 to-orange-600",
      badge: "JBS",
      rating: 4.8,
      suppliers: 4
    },
    {
      id: 11,
      name: "Topblade",
      category: "beef",
      country: "Canada",
      description: "Tender Canadian topblade from JBS, perfect for steaks and roasts.",
      image: "/Images/blade.jpg",
      features: ["Canada origin"],
      gradient: "from-green-500 to-teal-600",
      badge: "JBS",
      rating: 4.9,
      suppliers: 5
    },
    {
      id: 12,
      name: "Topblade Beef Chuck Boneless 2A",
      category: "beef",
      country: "Canada",
      description: "Boneless Canadian beef chuck by JBS, excellent for slow-cooked dishes.",
      image: "/Images/2A.jpg",
      features: ["Canada origin"],
      gradient: "from-indigo-500 to-purple-600",
      badge: "JBS",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 13,
      name: "Topblade",
      category: "beef",
      country: "New Zealand",
      description: "Wilson Hellaby New Zealand topblade, known for exceptional flavor and texture.",
      image: "/Images/zealand.jpg",
      features: ["New Zealand origin"],
      gradient: "from-purple-500 to-indigo-600",
      badge: "Wilson Hellaby",
      rating: 4.7,
      suppliers: 4
    },
    {
      id: 14,
      name: "US Beef Noroll Swift Rib Finger",
      category: "beef",
      country: "USA",
      description: "Premium US rib finger from Swift, juicy and tender for gourmet dishes.",
      image: "/Images/finger.jpg",
      features: ["USA origin"],
      gradient: "from-red-500 to-rose-600",
      badge: "Swift",
      rating: 5.0,
      suppliers: 3
    },
    {
      id: 15,
      name: "US Beef Topblade",
      category: "beef",
      country: "USA",
      description: "Swift US beef topblade, tender and flavorful, perfect for high-end recipes.",
      image: "/Images/US.jpg",
      features: ["USA origin"],
      gradient: "from-amber-500 to-orange-600",
      badge: "Swift",
      rating: 4.9,
      suppliers: 4
    },

    // 🐑 8 Fresh Lamb Products
    {
      id: 16,
      name: "Aus Lamb Leg Boneless",
      category: "lamb",
      country: "Australia",
      description: "Premium Australian boneless lamb leg from Hardwicks, tender and flavorful with perfect quality.",
      image: "/Images/boneless.jpg",
      features: ["Australian origin"],
      gradient: "from-yellow-500 to-orange-600",
      badge: "Hardwicks",
      rating: 4.9,
      suppliers: 6
    },
    


    // 🍟 8 French Fries Products
    {
      id: 24,
      name: "Frozen Shoestring Apotatoes",
      category: "fries",
      country: "China",
      description: "Premium frozen shoestring potatoes from China by Apotatoes brand, perfectly cut and ready to cook.",
      image: "/Images/apotatoes.jpg",
      features: ["China origin"],
      gradient: "from-orange-500 to-red-600",
      badge: "Apotatoes",
      rating: 4.9,
      suppliers: 3
    },
    {
      id: 25,
      name: "Crinkle Cut Hungritos",
      category: "fries",
      country: "India",
      description: "Premium crinkle cut potatoes from India by Hungritos brand, perfect texture and quality.",
      image: "/Images/cut.jpg",
      features: ["India origin"],
      gradient: "from-green-500 to-teal-600",
      badge: "Hungritos",
      rating: 4.6,
      suppliers: 2
    },

    {
      id: 26,
      name: " Mayonnaise",
      category: "mayonnaise",
      country: "Vietnam",
      description: "Creamy and smooth mayonnaise perfect for dips, burgers, and sandwiches.",
      image: "/Images/mayo.jpg",
      features: ["Vietnam origin"],
      gradient: "from-yellow-500 to-amber-600",
      badge: "Chef's Choice",
      rating: 4.8,
      suppliers: 2
    }
  ];

  // Re-added: Derive unique countries from the products
  // Ensure we get unique, trimmed values, and then add 'all' at the beginning and sort.
  const rawUniqueCountries = [...new Set(products.map(p => p.country.trim()))];
  const uniqueCountries = ['all', ...rawUniqueCountries.sort((a, b) => a.localeCompare(b))]; // Add 'all' and then sort the rest

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Re-added: Normalize both product country and selected country for robust comparison
    const productCountryNormalized = product.country.trim().toLowerCase();
    const selectedCountryNormalized = selectedCountry.trim().toLowerCase(); // selectedCountry is usually already lowercase from button click

    const matchesCountry =
      selectedCountry === 'all' ||
      productCountryNormalized === selectedCountryNormalized;

    return matchesCategory && matchesSearch && matchesCountry; // Updated filter logic
  });

  const certifications = [
    { name: "FDA Approved", icon: <Shield className="w-5 h-5" /> },
    { name: "Organic Certified", icon: <Leaf className="w-5 h-5" /> },
    { name: "ISO 22000", icon: <Award className="w-5 h-5" /> },
    { name: "HACCP Compliant", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Cold Chain", icon: <Thermometer className="w-5 h-5" /> },
    { name: "Global Sourcing", icon: <Globe className="w-5 h-5" /> }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };
// Chatbase bot loader
  useEffect(() => {
    if (document.getElementById("-96YCJOIt5KH-ZTaX0tyA")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "-96YCJOIt5KH-ZTaX0tyA"; // Replace with your actual bot ID if needed
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center">
              
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                World-Class Products
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Exceptional Quality
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Discover our multiple finest specialties: finest beef cuts, tender lamb, french fries, and many more — sourced from top suppliers and delivered with precision across fresh, frozen, and specialty categories.
            </p>
          </div>

          {/* Search, Category, and Country Filters - Integrated Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mb-12 animate-fade-in-up delay-600 p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-100">
            {/* Search Input */}
            <div className="relative w-full md:w-[400px] lg:w-[480px] xl:w-[550px]">
  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-12 pr-4 py-4 text-lg bg-white rounded-2xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 shadow-sm"
  />
</div>


            {/* Category and Country Filters Group */}
            <div className="grid md:grid-cols-2 gap-6 w-full">
              {/* Category Filters */}
               <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <Filter className="w-6 h-6 text-gray-600" />
                  <span className="text-xl font-semibold text-gray-800">Category:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-5 py-2 rounded-xl font-semibold text-base transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg animate-glow'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-md hover-lift'
                      }`}
                    >
                      {category.name}
                      <span className="ml-1 text-sm opacity-80">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Country Filters - NEW PLACEMENT */}
               {/* Country Filters - NEW PLACEMENT */}
<div className="flex flex-col items-start space-y-2">
  <div className="flex items-center space-x-2">
    <Globe className="w-6 h-6 text-gray-600" /> {/* Changed icon to Globe */}
    <span className="text-xl font-semibold text-gray-800">Country:</span> {/* Clearer heading */}
  </div>
  <div className="flex flex-wrap justify-center gap-2">
    {uniqueCountries.map((country) => (
      <button
        key={country}
        onClick={() => {
          const valueToSet = country === 'all' ? 'all' : country.toLowerCase();
          setSelectedCountry(valueToSet);
        }}
        // 👇 MODIFIED LINE: Classes now match the Category buttons for consistent size and style.
        className={`px-5 py-2 rounded-xl font-semibold text-base transition-all duration-300 ${
          selectedCountry === (country === 'all' ? 'all' : country.toLowerCase())
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg animate-glow'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-md hover-lift'
        }`}
      >
        {country === 'all' ? 'All Countries' : country}
      </button>
    ))}
  </div>
</div>
</div>

           {/* Global Clear Filter Button */}
            {(searchTerm !== '' || selectedCategory !== 'all' || selectedCountry !== 'all') && ( // Updated condition
                <button
                    onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setSelectedCountry('all'); // Reset country filter as well
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 border border-gray-300 hover:bg-gray-100 transition-colors duration-300 mt-4 md:mt-0" /* Added mt-4 for small screens */
                >
                    <Zap className="w-4 h-4 text-red-500" />
                    Clear Filters
                </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="group relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20`} />

                      {/* ✨ Origin Badge */}
                      {product.features[0]?.toLowerCase().includes("origin") && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                          {product.features[0]}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {product.features.map((feature, index) => {
                          const isOrigin = feature.toLowerCase().includes("origin");
                          return (
                            <span
                              key={index}
                              className={`text-xs px-3 py-1 rounded-full font-semibold
                                ${isOrigin
                                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow"
                                  : "bg-gray-100 text-gray-700"}`}
                            >
                              {feature}
                            </span>
                          );
                        })}
                      </div>
                     <Link
  to="/contact"
  className="block text-center w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-xl font-semibold hover:shadow-md transition mt-4"
>
  Request Quote
</Link>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center col-span-full">
                <h3 className="text-xl font-bold text-gray-700">No products found.</h3>
                {/* This clear filters button is for when no products are found. The global one above is for general use. */}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedCountry("all"); // Reset country filter as well
                  }}
                  className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
            {/* Disclaimer */}
<section className="pb-10 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
  <p className="max-w-4xl mx-auto">
    <strong>Disclaimer:</strong> Product images are for general reference only. The actual product may vary in appearance and may not fully resemble what is shown.
  </p>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Source Premium Products?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Connect with our product specialists to discuss your specific needs and get personalized recommendations.
          </p>

          <div className="flex justify-center animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg btn-animate hover-glow flex items-center space-x-3"
            >
              <span>Request Product Catalog</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ProductsPage;