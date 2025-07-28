import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Clock, Phone, Mail, MapPin, CheckCircle, Users, Award, Globe, ArrowRight, Play, TrendingUp, Zap, Target, ChevronRight, Quote, Leaf, Award as AwardIcon, Sparkles, Eye, Heart, ThumbsUp } from 'lucide-react';
import GlobalPresenceMap from "../components/GlobalPresenceMap";
import AOS from 'aos';
import 'aos/dist/aos.css';




const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
  AOS.init({
    duration: 800,  // animation duration
    once: true      // animate only once
  });
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Food Lover",
      rating: 5,
      text: "Food Empire delivers the most amazing beef and lamb! The quality is restaurant-grade and arrives perfectly fresh. Their french fries are crispy perfection every time!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      verified: true,
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      company: "Regular Customer",
      rating: 5,
      text: "Outstanding service and premium quality food! The app makes ordering seamless and the delivery is always on time. Best food delivery service I've ever used!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Maria Rodriguez",
      company: "Family Customer",
      rating: 5,
      text: "Professional, reliable, and delicious! Their real-time tracking lets me know exactly when my order arrives. The whole family loves their premium beef and lamb dishes!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      verified: true,
      date: "3 weeks ago"
    },
    {
      name: "David Kim",
      company: "Loyal Customer",
      rating: 5,
      text: "The best food delivery service I've ever used! Their sustainability initiatives and eco-friendly packaging align perfectly with my values. Exceptional quality and taste!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      verified: true,
      date: "1 week ago"
    }
  ];

  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: " Beef Selection",
      description: "Hand-selected finest cuts of beef from certified farms, aged to perfection and delivered frozen with temperature-controlled logistics.",
      gradient: "from-violet-200 via-red-600 to-red-600",
      features: ["Finest cuts", "Certified farms", "Perfect aging", "Temperature controlled"],
      
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Finest Lamb Selections ",
      description: "Tender, flavorful lamb from premium suppliers with full traceability, delivered in optimal frozen condition.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      features: ["Trusted suppliers", "Full traceability", "Optimal frozen condition", "Quality certified"],
      
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Golden French Fries",
      description: "Golden, crispy french fries made from top-grade potatoes, perfectly seasoned and delivered hot with our advanced heating technology.",
      gradient: "from-yellow-600  to-orange-600",
      features: ["Top-grade potatoes", "Perfect seasoning", "Always hot", "Crispy texture"],
    
    },
   {
  icon: <Target className="w-12 h-12" />,
  title: "Reliable Delivery Service",
  description: "Our efficient logistics ensure your food arrives on time, with quality maintained throughout transit.",
  gradient: "from-indigo-600 via-purple-600 to-pink-600",
  features: ["Timely delivered", "Quality guaranteed", "Optimized logistics", "Safe packaging"],
  
}

  ];

  const stats = [
 
  { number: "100%", label: "Quality Assurance", icon: <Leaf className="w-8 h-8" />, color: "from-yellow-500 to-amber-500" },
  { number: "Timely", label: "Delivery", icon: <Target className="w-8 h-8" />, color: "from-emerald-500 to-teal-500" },
  { number: "Diverse range", label: "Fresh, Frozen & More", icon: <CheckCircle className="w-8 h-8" />, color: "from-green-500 to-lime-500" }
];


  const certifications = [
    { name: "FDA Certified", icon: <Shield className="w-6 h-6" /> },
    { name: "ISO 22000", icon: <Award className="w-6 h-6" /> },
    { name: "HACCP Compliant", icon: <CheckCircle className="w-6 h-6" /> },
    { name: "Organic Certified", icon: <Leaf className="w-6 h-6" /> },
    { name: "Carbon Neutral", icon: <Globe className="w-6 h-6" /> },
    { name: "Blockchain Verified", icon: <Zap className="w-6 h-6" /> }
  ];

 const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div className="mb-8">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full mb-6 border border-green-300/50 animate-bounce-in hover:scale-105 transition-transform duration-300">
        <Sparkles className="w-5 h-5 text-green-600" />
        <span className="text-green-700 font-semibold">Trusted Food Distribution</span>
      </div>
      
     <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
  <span className="text-white">Trusted Quality</span>
  <br />
  <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent animate-gradient">
    Food Distribution
  </span>
</h1>


      
      
      <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
  Savor the finest beef, lamb, french fries and other delivered products to your door, perfect for business meets —powered by smart logistics, operational process
  and finest quality at your doorsteps. Trusted for quality. Chosen for consistency.
</p>

    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up delay-600">
      <Link
        to="/contact"
        className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg btn-animate hover-glow flex items-center space-x-3"
      >
        <span>Order Now</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
      </Link>
    </div>

    {/* ✅ Centered Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center">
      {stats.map((stat, index) => (
       <div 
  key={index} 
  className="group bg-white/80 backdrop-blur-sm p-6 w-64 rounded-2xl shadow-xl border border-gray-200/50 card-animate animate-float gpu-accelerated"
>

          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-rotate">
            <div className="text-white">
              {stat.icon}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2 hover-scale">{stat.number}</div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Hero Background Image */}
  <div className="absolute inset-0 z-0">
  {/* Dark overlay */}
  

  {/* Background image */}
  <img 
    src="/Images/hero-bg.jpg"
    alt="Beef, Lamb, and French Fries"
    className="w-full h-full object-cover brightness-90"
  />
</div>


  {/* Floating Elements */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-float animation-delay-1000"></div>
  <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-600/10 rounded-full animate-float animation-delay-2000"></div>
  <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-400/10 rounded-full animate-bounce-slow animation-delay-1500"></div>
</section>


      

      {/* Services Section */}
     <section 
  className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
  data-aos="fade-up"
>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full mb-6 border border-green-300/50 animate-bounce-in hover-scale">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">Our Specialties</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Finest Food Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-400">
              Specializing in multiple finest categories: finest beef cuts, tender lamb, golden french fries, and other products delivered with care to your door.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {services.map((service, index) => (
             <div 
  key={index}
  className="group relative bg-white transition-all duration-700 p-10 rounded-3xl shadow-xl border border-gray-200/50 card-animate overflow-hidden gpu-accelerated"
  data-aos="fade-up"
  data-aos-delay={`${index * 150}`}
>


                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                <div className="relative z-10">
                  

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                 <div className="space-y-3">
  {service.features.map((feature, featureIndex) => (
    <div key={featureIndex} className="flex items-center space-x-3">
      <div
        className={`w-2 h-2 rounded-full animate-pulse-smooth ${
          service.title === "Signature Beef Selection"
            ? "bg-gradient-to-r from-red-500 via-red-400 to-pink-400"
            : `bg-gradient-to-r ${service.gradient}`
        }`}
      ></div>
      <span className="text-gray-700 font-medium">{feature}</span>
    </div>
  ))}
</div>


                  <button className="mt-8 group/btn flex items-center space-x-2 text-gray-700 hover:text-green-600 font-semibold hover-scale">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

       {/* Featured Categories Section */}
    <section 
  className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
  data-aos="fade-up"
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Signature Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Multiple finest categories, countless delicious possibilities. Each item is carefully selected and prepared to perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 stagger-children">
          {/* Premium Beef */}
         <div
  className="group relative bg-white rounded-3xl shadow-xl ..."
  data-aos="fade-up"
  data-aos-delay="0"  // 👈 first card
>

            <div className="relative h-64 overflow-hidden">
              <img 
  src="/Images/beef.jpg" // <-- your professional beef image path
  alt="Premium Beef"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-smooth">
                 Beef
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4"> Beef Selection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enjoy our top-grade beef, selected for consistent quality and unbeatable flavor. 
                Aged to perfection.
              </p>
              <div className="space-y-2 mb-6">
                
              </div>
              <Link
                to="/products"
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-xl font-semibold btn-animate hover-glow flex items-center justify-center space-x-2"
              >
                <span>Explore Beef</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Fresh Lamb */}
          <div
  className="group relative bg-white rounded-3xl shadow-xl ..."
  data-aos="fade-up"
  data-aos-delay="150"  // 👈 second card
>

            <div className="relative h-64 overflow-hidden">
              <img 
                src="/Images/lamb.jpg"
                alt="Fresh Lamb"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-smooth">
                  Tender Lamb
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finest Lamb Selections </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
               Enjoy the rich taste of high-quality lamb, selected for its tenderness. 
                Perfectly seasoned and ready to cook.
              </p>
              <div className="space-y-2 mb-6">
                
              </div>
              <Link
                to="/products"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold btn-animate hover-glow flex items-center justify-center space-x-2"
              >
                <span>Explore Lamb</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* French Fries */}
          <div
  className="group relative bg-white rounded-3xl shadow-xl ..."
  data-aos="fade-up"
  data-aos-delay="300"  // 👈 third card
>

            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="French Fries"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-smooth">
                  French Fries
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Golden French Fries</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Golden classic fries, and healthy sweet potato options. 
                Always delivered hot and crispy.
              </p>
              <div className="space-y-2 mb-6">
                
              </div>
              <Link
                to="/products"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold btn-animate hover-glow flex items-center justify-center space-x-2"
              >
                <span>Explore Fries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
          

      {/* CTA Section */}
      <section 
  className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
  data-aos="fade-up"
>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Order Our Products?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
             Growing fast and already trusted by hundreds, Food Empire is redefining what great food delivery means—one order at a time. 
              Order now and taste the difference quality makes!
            </p>
          </div>

          <div className="text-center animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl btn-animate hover-glow flex items-center space-x-3 mx-auto inline-flex"
            >
              <span>Order Your Favorites Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </Link>
            <p className="text-gray-500 mt-4 animate-fade-in-up delay-600"> Guaranteed excellence • Lightning-fast delivery • Quality you can taste</p>
          </div>
        </div>
        
        

        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-500/5 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-600/5 rounded-full animate-float-slow delay-1200"></div>
      </section>
    </div>
  );
};

export default HomePage;