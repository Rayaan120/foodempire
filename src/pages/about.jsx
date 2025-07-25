import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Globe, Target, Zap, Shield, Heart, TrendingUp, CheckCircle, ArrowRight, Building, Calendar, MapPin, Star } from 'lucide-react';
import {  Clock, Menu } from "lucide-react";


const AboutPage = () => {
  const milestones = [
    { year: "2006", title: "Company Founded", description: "Started with a vision to revolutionize food distribution" },
    { year: "2010", title: "First AI Implementation", description: "Pioneered AI-powered logistics in food industry" },
    { year: "2015", title: "Global Expansion", description: "Expanded operations to 15 countries worldwide" },
    { year: "2018", title: "Blockchain Integration", description: "First food distributor to implement blockchain traceability" },
    { year: "2020", title: "Carbon Neutral", description: "Achieved carbon neutrality across all operations" },
    { year: "2024", title: "Industry Leader", description: "Serving 2,500+ partners with 99.9% success rate" }
  ];

  const team = [
    {
  name: "Alishan Zafar",
  role: "Chief Executive Officer",
  image: "/Images/alishan.jpg", // Replace with actual image path
  bio: "Experienced executive in the food industry, known for driving growth and leading high-performing teams at top global companies."


    },
   {
  name: "Truong Thi Thu Lieu",
  role: "Sales Director",
  image: "/Images/truong.jpg", // Replace with actual image path
  bio: "Leads strategic sales initiatives and builds strong client relationships to drive business growth."
},
    
    {
  name: "Vo Ngoc Trang",
  role: "Operations Manager",
  image: "/Images/trang.jpg", // Replace with actual image path
  bio: "Oversees day-to-day operations and ensures smooth coordination across departments for efficient delivery."
}

  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality First",
      description: "Uncompromising commitment to food safety and quality standards in every aspect of our operations.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation",
      description: "Pioneering cutting-edge technology solutions to transform the food distribution industry.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Sustainability",
      description: "Environmental responsibility and sustainable practices in all our business operations.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Partnership",
      description: "Building long-term relationships based on trust, reliability, and mutual success.",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
  
  { number: "Timely", label: " Delivery ", icon: <Clock className="w-8 h-8" /> },
  { number: "Multiple", label: "Menu Items Available", icon: <Menu className="w-8 h-8" /> },
  { number: "100%", label: "Quality Guaranteed", icon: <CheckCircle className="w-8 h-8" /> }
];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-6 border border-emerald-200/50 animate-bounce-in">
              <Building className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">About Food Empire</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Pioneering the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Food Distribution
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Food Empire is redefining food distribution through smart technology, a focus on quality, and a commitment to sustainable practices.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 justify-items-center stagger-children">

            {stats.map((stat, index) => (
              <div 
  key={index}
  className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated w-72"
>

                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-rotate animate-float">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Our Mission & Vision
                </span>
              </h2>
              
              <div className="space-y-8 stagger-children">
                <div className="group p-8 bg-white rounded-3xl shadow-xl border border-gray-200/50 card-animate">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center hover-rotate">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize food distribution through innovative technology, ensuring fresh, 
                    safe, and sustainable food reaches every table while supporting our partners' success.
                  </p>
                </div>

                <div className="group p-8 bg-white rounded-3xl shadow-xl border border-gray-200/50 card-animate">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center hover-rotate">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in intelligent food distribution, setting new standards 
                    for quality, sustainability, and technological innovation in the industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <img 
                src="/Images/premium.jpg"
                alt="Food Empire facility"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-xl border border-gray-200/50 card-animate overflow-hidden gpu-accelerated"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 animate-gradient`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 hover-rotate animate-float`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Food Empire Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Why Choose Food Empire?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Discover what makes Food Empire the premier choice for premium food delivery. From cutting-edge technology to uncompromising quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-rotate animate-float">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
               We ensure your premium beef, lamb, fries, and other products are delivered in perfect condition with guaranteed timely delivery.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-rotate animate-float">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-selected ingredients from certified suppliers with blockchain traceability ensuring authenticity and safety.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-rotate animate-float">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Carefully Packaged</h3>
<p className="text-gray-600 leading-relaxed">
  Every order is securely packed using insulated materials to maintain quality from our facility to your doorstep.
</p>

            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-rotate animate-float">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                4.9/5 star rating with 98% customer satisfaction rate. Our commitment to excellence shows in every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      
       {/* Target Customers Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Who We Serve?
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 animate-fade-in-up delay-200">
            We proudly serve the HORECA sector — <span className="font-semibold text-gray-900">Hotels, Restaurants, and Catering</span> — along with large resorts, hospitality chains, catering services, and online retail platforms. Our tailored solutions ensure high-volume, high-quality supply with precision and care.
          </p>

          <div className="flex items-center justify-center space-x-6 animate-fade-in-up delay-400">
            <div className="flex items-center bg-gradient-to-br from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-3xl shadow-lg">
              <Target className="w-6 h-6 mr-3 text-white" />
              <span className="font-semibold text-lg">HORECA Focus</span>
            </div>
            <div className="flex items-center bg-gradient-to-br from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-3xl shadow-lg">
              <Globe className="w-6 h-6 mr-3 text-white" />
              <span className="font-semibold text-lg">Global Hospitality Clients</span>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Meet the visionary leaders driving Food Empire's innovation and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate text-center gpu-accelerated"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg hover-rotate"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Global Presence */}
<section className="py-20 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Global Presence
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
        A growing group of dynamic companies led by Alishan Zafar, committed to quality, innovation, and expansion across international markets.
      </p>
    </div>

    <div className="max-w-4xl mx-auto animate-fade-in-left">
      <div className="space-y-12">
        {/* Our Companies */}
        <div className="group">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Companies</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-smooth"></div>
              <span className="text-gray-700">
                <strong>BlueFocus</strong> — Dubai, established in 2002, operating across multiple industries
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-smooth"></div>
              <span className="text-gray-700">
                <strong>Greek Souvlaki</strong> — European-based food brand with a focus on refined taste and quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Partner with Industry Leaders?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Join thousands of satisfied partners who trust Food Empire for their distribution needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg btn-animate hover-glow flex items-center space-x-3"
            >
              <span>Start Partnership</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/careers"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border-2 border-white/20 btn-animate hover-lift"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;