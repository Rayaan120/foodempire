import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Shield, Truck, Thermometer, Award, CheckCircle, ArrowRight, Filter, Search, Star, Globe, Zap } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
  { id: 'all', name: 'All Items', count: 19 },
  { id: 'beef', name: 'Premium Beef', count: 15 },
  { id: 'lamb', name: 'Fresh Lamb', count: 2 },
  { id: 'fries', name: 'French Fries', count: 1 },
  { id: 'mayonnaise', name: 'Mayonnaise', count: 1 } // ✅ New category
];


  const products = [
  // 🔥 15 Premium Beef Products (unchanged)
  {
    id: 1,
    name: "Shin Shank",
    category: "beef",
    description: "Premium Australian shin shank with rich flavor, perfect for slow cooking and stews.",
    image: "/Images/shank.jpg",
    features: ["Australia origin", "Borello brand", "Rich in collagen", "Ideal for stews"],
    gradient: "from-red-500 to-rose-600",
    badge: "Borello",
    rating: 4.9,
    suppliers: 5
  },
  {
    id: 2,
    name: "Beef Bone Brisket Bone",
    category: "beef",
    description: "Flavorful Australian brisket bone, perfect for hearty broths and soups.",
    image: "/Images/bone.jpg",
    features: ["Australia origin", "CAG brand", "Perfect for broths", "Rich meaty taste"],
    gradient: "from-orange-500 to-red-600",
    badge: "CAG",
    rating: 4.8,
    suppliers: 4
  },
  {
    id: 3,
    name: "Short Plate",
    category: "beef",
    description: "Tender Australian short plate, great for grilling and smoking with excellent marbling.",
    image: "/Images/plate.jpg",
    features: ["Australia origin", "AMG brand", "Excellent marbling", "Great for grilling"],
    gradient: "from-amber-500 to-yellow-600",
    badge: "AMG",
    rating: 4.7,
    suppliers: 3
  },
  {
    id: 4,
    name: "PE Brisket",
    category: "beef",
    description: "Premium Australian PE Brisket from Teys, ideal for low and slow cooking.",
    image: "/Images/brisket.jpg",
    features: ["Australia origin", "Teys brand", "Slow cooking cut", "Rich flavor profile"],
    gradient: "from-green-500 to-emerald-600",
    badge: "Teys",
    rating: 4.9,
    suppliers: 6
  },
  {
    id: 5,
    name: "Cube Roll Hokubee",
    category: "beef",
    description: "Premium Australian cube roll from Hokubee, tender and flavorful for gourmet dishes.",
    image: "/Images/hokubee.jpg",
    features: ["Australia origin", "Hokubee brand", "Gourmet quality", "Tender texture"],
    gradient: "from-purple-500 to-pink-600",
    badge: "Hokubee",
    rating: 5.0,
    suppliers: 4
  },
  {
    id: 6,
    name: "Beef Leg Bone",
    category: "beef",
    description: "Australian beef leg bone, rich in marrow and perfect for nutrient-rich broths.",
    image: "/Images/leg.jpg",
    features: ["Australia origin", "Okey brand", "Rich in marrow", "Great for broths"],
    gradient: "from-indigo-500 to-blue-600",
    badge: "Okey",
    rating: 4.8,
    suppliers: 3
  },
  {
    id: 7,
    name: "Kilcoy AUS Beef",
    category: "beef",
    description: "Kilcoy premium Australian beef, known for superior marbling and taste.",
    image: "/Images/AUS.jpg",
    features: ["Australia origin", "Kilcoy brand", "Superior marbling", "Premium quality"],
    gradient: "from-teal-500 to-green-600",
    badge: "Kilcoy",
    rating: 4.9,
    suppliers: 5
  },
  {
    id: 8,
    name: "Beef Striploin Hokubee 352",
    category: "beef",
    description: "Hokubee beef striploin with perfect marbling, ideal for steaks and grilling.",
    image: "/Images/352.jpg",
    features: ["Australia origin", "Hokubee brand", "Perfect marbling", "Great for steaks"],
    gradient: "from-pink-500 to-rose-600",
    badge: "Hokubee",
    rating: 4.9,
    suppliers: 4
  },
  {
    id: 9,
    name: "Short Plate",
    category: "beef",
    description: "Canadian short plate by Excel, tender and flavorful for versatile cooking.",
    image: "/Images/short.jpg",
    features: ["Canada origin", "Excel brand", "Tender cut", "Versatile use"],
    gradient: "from-orange-500 to-amber-600",
    badge: "Excel",
    rating: 4.7,
    suppliers: 3
  },
  {
    id: 10,
    name: "Shortrib",
    category: "beef",
    description: "Premium Canadian shortrib from JBS, excellent for braising and slow cooking.",
    image: "/Images/rib.jpg",
    features: ["Canada origin", "JBS brand", "Great for braising", "Rich flavor"],
    gradient: "from-yellow-500 to-orange-600",
    badge: "JBS",
    rating: 4.8,
    suppliers: 4
  },
  {
    id: 11,
    name: "Topblade",
    category: "beef",
    description: "Tender Canadian topblade from JBS, perfect for steaks and roasts.",
    image: "/Images/blade.jpg",
    features: ["Canada origin", "JBS brand", "Tender cut", "Ideal for roasting"],
    gradient: "from-green-500 to-teal-600",
    badge: "JBS",
    rating: 4.9,
    suppliers: 5
  },
  {
    id: 12,
    name: "Topblade Beef Chuck Boneless 2A",
    category: "beef",
    description: "Boneless Canadian beef chuck by JBS, excellent for slow-cooked dishes.",
    image: "/Images/2A.jpg",
    features: ["Canada origin", "JBS brand", "Boneless cut", "Slow cooking specialty"],
    gradient: "from-indigo-500 to-purple-600",
    badge: "JBS",
    rating: 4.8,
    suppliers: 3
  },
  {
    id: 13,
    name: "Topblade",
    category: "beef",
    description: "Wilson Hellaby New Zealand topblade, known for exceptional flavor and texture.",
    image: "/Images/zealand.jpg",
    features: ["New Zealand origin", "Wilson Hellaby brand", "Exceptional flavor", "Premium texture"],
    gradient: "from-purple-500 to-indigo-600",
    badge: "Wilson Hellaby",
    rating: 4.7,
    suppliers: 4
  },
  {
    id: 14,
    name: "US Beef Noroll Swift Rib Finger",
    category: "beef",
    description: "Premium US rib finger from Swift, juicy and tender for gourmet dishes.",
    image: "/Images/finger.jpg",
    features: ["USA origin", "Swift brand", "Juicy and tender", "Gourmet quality"],
    gradient: "from-red-500 to-rose-600",
    badge: "Swift",
    rating: 5.0,
    suppliers: 3
  },
  {
    id: 15,
    name: "US Beef Topblade",
    category: "beef",
    description: "Swift US beef topblade, tender and flavorful, perfect for high-end recipes.",
    image: "/Images/US.jpg",
    features: ["USA origin", "Swift brand", "Tender cut", "High-end quality"],
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
    description: "Premium Australian boneless lamb leg from Hardwicks, tender and flavorful with perfect quality.",
    image: "/Images/boneless.jpg",
    features: ["Australian origin", "Hardwicks brand", "Boneless cut", "Premium quality"],
    gradient: "from-yellow-500 to-orange-600",
    badge: "Hardwicks",
    rating: 4.9,
    suppliers: 6
  },
  {
    id: 17,
    name: "Mediterranean Lamb Leg",
    category: "lamb",
    description: "Slow-roasted Mediterranean lamb leg with herbs, perfect for family dinners and special occasions.",
    image: "/Images/lamb1.jpg",
    features: ["Mediterranean style", "Herb seasoned", "Family portions", "Special occasions"],
    gradient: "from-purple-500 to-pink-600",
    badge: "Mediterranean",
    rating: 4.7,
    suppliers: 4
  },
  
  // ... (add the other 5 Lamb items like before)

  // 🍟 8 French Fries Products
  {
    id: 24,
    name: "Frozen Shoestring Apotatoes",
    category: "fries",
    description: "Premium frozen shoestring potatoes from China by Apotatoes brand, perfectly cut and ready to cook.",
    image: "/Images/apotatoes.jpg",
    features: ["China origin", "Apotatoes brand", "Shoestring cut", "Frozen quality"],
    gradient: "from-orange-500 to-red-600",
    badge: "Apotatoes",
    rating: 4.9,
    suppliers: 3
  },
  {
    id: 25,
    name: "Crinkle Cut Hungritos",
    category: "fries",
    description: "Premium crinkle cut potatoes from India by Hungritos brand, perfect texture and quality.",
    image: "/Images/cut.jpg",
    features: ["India origin", "Hungritos brand", "Crinkle cut", "Premium texture"],
    gradient: "from-green-500 to-teal-600",
    badge: "Hungritos",
    rating: 4.6,
    suppliers: 2
  },
  
  // ... (add the other 5 Fries items like before)
  {
  id: 26,
  name: " Mayonnaise",
  category: "mayonnaise",
  description: "Creamy and smooth mayonnaise perfect for dips, burgers, and sandwiches.",
  image: "/Images/mayo.jpg",
  features: ["Smooth texture", "Rich flavor", "Ideal for foodservice", "Versatile in recipes"],

  gradient: "from-yellow-500 to-amber-600",
  badge: "Chef's Choice",
  rating: 4.8,
  suppliers: 2
}

];



 const filteredProducts = products.filter(product => {
  const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
  const matchesSearch =
    !searchTerm ||
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});

    
console.log("All Products Count:", products.length);
const allBeefProducts = products.filter(p => p.category === "beef");
console.log("Beef products:", allBeefProducts.map(p => p.name));
console.log("Beef Count:", allBeefProducts.length);



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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-6 border border-emerald-200/50 animate-bounce-in">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Premium Product Range</span>
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
              Discover our multiple premium specialties: finest beef cuts, tender lamb, french fries, and many more—sourced from top suppliers and delivered with precision across fresh, frozen, and specialty categories.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 mb-12 animate-fade-in-up delay-600">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover-lift"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg animate-glow'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-md hover-lift'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Products Grid */}
<section className="py-20 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => {
          console.log("Rendering product:", product.name); // ✅ Debug log

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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-xl font-semibold hover:shadow-md transition"
                >
                  Request Quote
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center col-span-full">
          <h3 className="text-xl font-bold text-gray-700">No products found.</h3>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
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


      
      

     {/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
      <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Ready to Source Premium Products?
      </span>
    </h2>
    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
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