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
    { id: 'all', name: 'All Items', count: 23 },
    { id: 'beef', name: 'Beef', count: 12 },
    { id: 'fries', name: 'French Fries', count: 3 },
    { id: 'lamb', name: 'Lamb', count: 1 },
    { id: 'cheese', name: 'Cheese', count: 2 },
    { id: 'butter_margarine', name: 'Butter & Margarine', count: 2 },
    { id: 'others', name: 'Others', count: 3 }
  ];

  const products = [
    // FRENCH FRIES
    {
      id: 1,
      name: "Crinkle Cut Hungritos",
      category: "fries",
      country: "India",
      description: "Premium crinkle-cut fries offering golden crunch outside with soft, flavorful potato interiors.",
      image: "/Images/hungritos-crinkle.jpg",
      features: ["India origin"],
      gradient: "from-yellow-400 to-orange-500",
      badge: "Hungritos",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 2,
      name: "Frozen Shoestring Acrispy 7×7",
      category: "fries",
      country: "China",
      description: "Classic thin-cut fries delivering crisp texture, light bite, and consistent golden frying results.",
      image: "/Images/acrispy-7x7.jpg",
      features: ["China origin"],
      gradient: "from-yellow-500 to-amber-600",
      badge: "Acrispy",
      rating: 4.7,
      suppliers: 4
    },
    {
      id: 3,
      name: "Frozen Shoestring Acrispy 10×10",
      category: "fries",
      country: "China",
      description: "Straight-cut premium fries designed for crispy exteriors and fluffy, satisfying potato centers.",
      image: "/Images/acrispy-10x10.jpg",
      features: ["China origin"],
      gradient: "from-amber-400 to-orange-500",
      badge: "Acrispy",
      rating: 4.8,
      suppliers: 4
    },

    // AUSTRALIAN BEEF
    {
      id: 4,
      name: "Shin Shank",
      category: "beef",
      country: "Australia",
      description: "Flavor-rich beef shank delivering tender chew and deep taste, ideal for slow cooking.",
      image: "/Images/shank.jpg",
      features: ["Australia origin"],
      gradient: "from-red-600 to-rose-700",
      badge: "Premium",
      rating: 4.9,
      suppliers: 5
    },
    {
      id: 5,
      name: "Beef Bone Brisket Bone CAG",
      category: "beef",
      country: "Australia",
      description: "Collagen-rich marrow bones creating deep, savory stocks with silky, gelatinous texture.",
      image: "/Images/bone.jpg",
      features: ["Australia origin"],
      gradient: "from-red-500 to-orange-600",
      badge: "CAG",
      rating: 4.8,
      suppliers: 4
    },
    {
      id: 6,
      name: "Beef Leg Bone",
      category: "beef",
      country: "Australia",
      description: "Premium leg bones packed with marrow, producing naturally sweet, full-bodied soup bases.",
      image: "/Images/leg.jpg",
      features: ["Australia origin"],
      gradient: "from-rose-500 to-pink-600",
      badge: "Premium",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 7,
      name: "Cube Roll Hokubee",
      category: "beef",
      country: "Australia",
      description: "Highly marbled Hokubee cube roll delivering buttery richness and melt-in-mouth steak texture.",
      image: "/Images/hokubee.jpg",
      features: ["Australia origin"],
      gradient: "from-purple-600 to-indigo-600",
      badge: "Hokubee",
      rating: 5.0,
      suppliers: 4
    },
    {
      id: 8,
      name: "Striploin Hokubee",
      category: "beef",
      country: "Australia",
      description: "Juicy striploin enhanced with signature marbling for balanced richness and grilling perfection.",
      image: "/Images/352.jpg",
      features: ["Australia origin"],
      gradient: "from-pink-600 to-rose-600",
      badge: "Hokubee",
      rating: 5.0,
      suppliers: 4
    },
    {
      id: 9,
      name: "Frozen Australian Beef Rump",
      category: "beef",
      country: "Australia",
      description: "Lean yet tender beef rump offering robust flavor and versatile performance across cooking styles.",
      image: "/Images/rump.jpg",
      features: ["Australia origin"],
      gradient: "from-red-500 to-red-700",
      badge: "Premium",
      rating: 4.7,
      suppliers: 5
    },
    {
      id: 10,
      name: "Australian Minced Beef",
      category: "beef",
      country: "Australia",
      description: "High-quality minced beef with ideal fat balance, ensuring juicy burgers and flavorful dishes.",
      image: "/Images/minced-beef-aus.jpg",
      features: ["Australia origin"],
      gradient: "from-red-600 to-orange-600",
      badge: "Premium",
      rating: 4.8,
      suppliers: 6
    },

    // CANADIAN BEEF
    {
      id: 11,
      name: "Short Rib (Bone-in)",
      category: "beef",
      country: "Canada",
      description: "Well-marbled short ribs delivering intense beef flavor and succulent texture when grilled.",
      image: "/Images/rib.jpg",
      features: ["Canada origin"],
      gradient: "from-amber-600 to-red-600",
      badge: "Premium",
      rating: 4.9,
      suppliers: 3
    },
    {
      id: 12,
      name: "Top Blade 3A Blue Ribbon",
      category: "beef",
      country: "Canada",
      description: "AAA-graded top blade cut featuring superior marbling for tender steaks and barbecue excellence.",
      image: "/Images/blade.jpg",
      features: ["Canada origin"],
      gradient: "from-blue-600 to-indigo-600",
      badge: "Blue Ribbon",
      rating: 4.9,
      suppliers: 4
    },

    // USA BEEF
    {
      id: 13,
      name: "US Beef No-Roll Swift Rib Fingers",
      category: "beef",
      country: "USA",
      description: "Versatile rib fingers offering bold beef flavor, perfect for grilling or slow braising.",
      image: "/Images/finger.jpg",
      features: ["USA origin"],
      gradient: "from-red-600 to-blue-700",
      badge: "Swift",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 14,
      name: "Clear River Farms Short Plate",
      category: "beef",
      country: "USA",
      description: "Thin-sliced short plate delivering buttery richness and tender bite for hotpot dishes.",
      image: "/Images/plate.jpg",
      features: ["USA origin"],
      gradient: "from-blue-600 to-red-600",
      badge: "Clear River",
      rating: 4.7,
      suppliers: 4
    },
    {
      id: 15,
      name: "USA Minced Beef",
      category: "beef",
      country: "USA",
      description: "Premium minced beef producing juicy patties, tender crumble, and steak-like savory depth.",
      image: "/Images/minced-beef-usa.jpg",
      features: ["USA origin"],
      gradient: "from-red-500 to-indigo-600",
      badge: "Premium",
      rating: 4.8,
      suppliers: 5
    },

    // AUSTRALIAN LAMB
    {
      id: 16,
      name: "Australian Lamb Leg Boneless",
      category: "lamb",
      country: "Australia",
      description: "Naturally lean lamb leg delivering juicy texture, earthy flavor, and excellent grilling results.",
      image: "/Images/boneless.jpg",
      features: ["Australia origin"],
      gradient: "from-yellow-500 to-green-600",
      badge: "Premium",
      rating: 4.9,
      suppliers: 4
    },

    // CHEESE
    {
      id: 17,
      name: "Mozzarella Cheese – Mlekpol",
      category: "cheese",
      country: "Poland",
      description: "High-elasticity mozzarella offering perfect melt, golden bubbling, and mild milky flavor.",
      image: "/Images/mlekpol.jpg",
      features: ["Poland origin"],
      gradient: "from-yellow-400 to-yellow-600",
      badge: "Mlekpol",
      rating: 4.9,
      suppliers: 2
    },
    {
      id: 18,
      name: "Pizza Topping Mozzala",
      category: "cheese",
      country: "Poland",
      description: "Specially formulated pizza cheese delivering consistent melt, stretch, and savory richness.",
      image: "/Images/mozzala.jpg",
      features: ["Poland origin"],
      gradient: "from-yellow-500 to-orange-500",
      badge: "Mozzala",
      rating: 4.7,
      suppliers: 3
    },

    // BUTTER & MARGARINE
    {
      id: 19,
      name: "Peerless AU Unsalted Butter",
      category: "butter_margarine",
      country: "Australia",
      description: "Clean-tasting butter providing silky melt, balanced richness, and precise culinary control.",
      image: "/Images/peerless-butter.jpg",
      features: ["Australia origin"],
      gradient: "from-yellow-300 to-yellow-500",
      badge: "Peerless",
      rating: 5.0,
      suppliers: 2
    },
    {
      id: 20,
      name: "Margarine Palffy Unsalted Vivo",
      category: "butter_margarine",
      country: "Singapore",
      description: "Heat-stable margarine offering excellent plasticity and reliable performance in professional baking.",
      image: "/Images/palffy-margarine.jpg",
      features: ["Singapore origin"],
      gradient: "from-yellow-400 to-orange-400",
      badge: "Vivo",
      rating: 4.6,
      suppliers: 2
    },

    // OTHERS
    {
      id: 21,
      name: "Urzante Olive Pomace Oil 5L",
      category: "others",
      country: "Spain",
      description: "High smoke-point olive oil ideal for frying, delivering light texture and heat stability.",
      image: "/Images/urzante-oil.jpg",
      features: ["Spain origin"],
      gradient: "from-green-500 to-emerald-700",
      badge: "Urzante",
      rating: 4.8,
      suppliers: 3
    },
    {
      id: 22,
      name: "Ajinomoto Mayonnaise 3kg",
      category: "others",
      country: "Vietnam",
      description: "Creamy mayonnaise delivering rich egg flavor and smooth consistency for versatile applications.",
      image: "/Images/mayo.jpg",
      features: ["Vietnam origin"],
      gradient: "from-yellow-100 to-yellow-400",
      badge: "Ajinomoto",
      rating: 4.9,
      suppliers: 4
    },
    {
      id: 23,
      name: "Fragata Seedless Black Olives",
      category: "others",
      country: "Spain",
      description: "Naturally ripe black olives offering smooth texture, mild nuttiness, and convenient seedless finish.",
      image: "/Images/fragata-olives.jpg",
      features: ["Spain origin"],
      gradient: "from-gray-700 to-black",
      badge: "Fragata",
      rating: 4.7,
      suppliers: 3
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
      {/* Crystal Dock Filter Section */}
      <div className="sticky top-36 z-30 px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in-up delay-600">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl shadow-emerald-900/5 rounded-3xl p-3 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-500 hover:shadow-emerald-900/10 hover:bg-white/90">

            {/* 1. The Lens (Search) */}
            <div className="relative group w-full md:w-auto md:flex-1 max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Search premium cuts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border-0 rounded-2xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all duration-300 font-medium"
              />
            </div>

            {/* 2. The Liquid Tabs (Categories) */}
            <div className="flex-1 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
              <div className="flex items-center justify-center md:justify-start space-x-1 p-1 md:flex-wrap md:gap-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${selectedCategory === category.id
                      ? 'text-emerald-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
                      }`}
                  >
                    {selectedCategory === category.id && (
                      <span className="absolute inset-0 bg-emerald-100/80 rounded-xl -z-10 animate-scale-in" />
                    )}
                    <span className="relative flex items-center gap-2">
                      {/* Icon logic could go here, keeping it text-clean for "Dock" look */}
                      {category.name}
                      {selectedCategory === category.id && (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. The Passport (Country Dropdown) */}
            <div className="relative w-full md:w-auto flex-shrink-0 group z-50">
              <button
                className="w-full md:w-auto flex items-center justify-between gap-3 px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 group-hover:ring-2 group-hover:ring-emerald-500/10"
              >
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <span>{selectedCountry === 'all' ? 'Global Origin' : selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}</span>
                </div>
                <Filter className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </button>

              {/* Dropdown Menu (Hover-based for desktop, Click for mobile can be added, currently CSS hover via group) */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 origin-top-right overflow-hidden p-2">
                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                  {uniqueCountries.map((country) => (
                    <button
                      key={country}
                      onClick={() => setSelectedCountry(country === 'all' ? 'all' : country.toLowerCase())}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center justify-between ${selectedCountry === (country === 'all' ? 'all' : country.toLowerCase())
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <span>{country === 'all' ? 'All Countries' : country}</span>
                      {selectedCountry === (country === 'all' ? 'all' : country.toLowerCase()) && (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Active Filters Summary (Optional but helpful UX) */}
          {(selectedCategory !== 'all' || selectedCountry !== 'all' || searchTerm) && (
            <div className="flex justify-center mt-6 animate-fade-in-up">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedCountry('all');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col"
                  >
                    {/* Image Container - Fixed Aspect Ratio for Alignment */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>

                    <div className="p-6 relative flex flex-col flex-1">
                      {/* Title & Rating */}
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg shrink-0">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                          <span className="text-xs font-bold text-yellow-700">{product.rating}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-3 group-hover:text-gray-600">
                        {product.description}
                      </p>

                      {/* Features Tags - Included Origin */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {product.features.map((feature, index) => {
                          return (
                            <span
                              key={index}
                              className={`text-xs px-2.5 py-1 rounded-md font-medium border
                                ${feature.toLowerCase().includes("origin")
                                  ? "bg-amber-50 text-amber-700 border-amber-100"
                                  : "bg-gray-100 text-gray-600 border-gray-200"}`}
                            >
                              {feature}
                            </span>
                          );
                        })}
                      </div>

                      {/* Action Button */}
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 group/btn mt-2"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center w-full py-20 col-span-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search terms.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedCountry("all");
                  }}
                  className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-emerald-700 hover:shadow-lg transition-all"
                >
                  Clear All Filters
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