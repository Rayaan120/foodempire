import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Calendar, Users, Globe, Zap, Shield } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";


const ContactPage = () => {
  const [showChatButtons, setShowChatButtons] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_wpyjduc',
    'template_7yi4pw8',
    formData,
    '_MaMl2caEo5gsW8HH'
  )
  .then(() => {
    setIsSubmitted(true);
    setFormData({   // 👈 This clears the form
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  })
  .catch((error) => {
    console.error('EmailJS error:', error);
    alert('Failed to send message. Please try again.');
  });
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
  {
    city: "New York",
    address: "123 Distribution Ave, Suite 500",
    zipcode: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@foodempire.com",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    manager: "Sarah Mitchell",
    specialties: ["AI Logistics", "Technology Hub", "East Coast Operations"]
  },
  {
    city: "Los Angeles",
    address: "456 Pacific Blvd, Floor 12",
    zipcode: "Los Angeles, CA 90028",
    phone: "+1 (555) 987-6543",
    email: "la@foodempire.com",
    image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    manager: "David Chen",
    specialties: ["Fresh Produce", "West Coast Hub", "Sustainability Center"]
  },
  {
    city: "Chicago",
    address: "789 Midwest Plaza, Suite 300",
    zipcode: "Chicago, IL 60601",
    phone: "+1 (555) 456-7890",
    email: "chicago@foodempire.com",
    image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    manager: "Maria Rodriguez",
    specialties: ["Quality Control", "Central Distribution", "Training Center"]
  }
];


const contactMethods = [
 {
  icon: <Phone className="w-8 h-8" />,
  title: "Call Us",
  description: "Speak with our experts",
  contact: "+84 258 3888 388",
  availability: "Mon-Fri, 8AM–5PM · Sat, 8AM–12PM",
  gradient: "from-blue-500 to-cyan-600",
  action: "Call Now",
  href: "tel:+842583888388" // ✅ Triggers phone call
},
 {
  icon: <Mail className="w-8 h-8" />,
  title: "Email Us",
  description: "Get detailed information and quotes",
  contact: "info@food-empire.net",
  availability: "Response within a day",
  gradient: "from-purple-500 to-pink-600",
  action: "Send Email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@food-empire.net" // ✅ Gmail compose
},
  {
  icon: <MessageSquare className="w-8 h-8" />,
  title: "Live Chat",
  description: "Instant support from our team",
  contact: "Within Business Hours",
  availability: "Average response: business hours",
  gradient: "from-emerald-500 to-teal-600",
  action: "Start Chat",
  href: "https://zalo.me/0799508999" // ✅ Zalo link
},
 {
  icon: <Calendar className="w-8 h-8" />,
  title: "Schedule Meeting",
  description: "Connect with our specialists to discuss your needs",
  contact: "Personalized consultation",
  availability: "Available slots this week",
  gradient: "from-orange-500 to-red-600",
  action: "Book Now",
  href: "#contact-form" // ✅ added this
}


];

  

 const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Response",
    description: "Average response time within business hours"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Communication",
    description: "All communications are encrypted and secure"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Dedicated specialists for every inquiry type"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reliable Availability",
    description: "Live chat support during working hours"
  }
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'beef', label: 'Beef' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'fries', label: 'Fries' },
  { value: 'mayonnaise', label: 'Mayonnaise' }
];

useEffect(() => {
  const scriptConfig = document.createElement("script");
  scriptConfig.innerHTML = `
    window.chatbaseConfig = {
      chatbotId: "YOUR_CHATBOT_ID"
    };
  `;
  document.body.appendChild(scriptConfig);

  const scriptEmbed = document.createElement("script");
  scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
  scriptEmbed.id = "chatbase-script";
  scriptEmbed.defer = true;
  document.body.appendChild(scriptEmbed);

  return () => {
    document.body.removeChild(scriptConfig);
    document.body.removeChild(scriptEmbed);
  };
}, []);


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up delay-200">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-6 border border-emerald-200/50 animate-bounce-in">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Let's Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Partnership Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Ready to transform your food distribution? Our team of experts is here to help you elevate your business.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-children">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 card-animate"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-900 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500 mb-6">{method.availability}</p>
          {method.href ? (
  <a
    href={method.href}
    className={`w-full inline-block text-center bg-gradient-to-r ${method.gradient} text-white py-3 rounded-xl font-semibold btn-animate hover-glow`}
  >
    {method.action}
  </a>
) : (
  <button
    className={`w-full bg-gradient-to-r ${method.gradient} text-white py-3 rounded-xl font-semibold btn-animate hover-glow`}
  >
    {method.action}
  </button>
)}


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-white to-gray-50 animate-fade-in-up delay-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within business hours. 
                For urgent matters, please call us directly.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200/50">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. Our team will review your message and respond within 2 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 resize-none"
                      placeholder="Please provide details about your inquiry, including any specific requirements or questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

   {/* Office Location */}
<section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
      <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
        Visit Our Vietnam Office
      </span>
    </h2>
    <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
      Strategically located in Nha Trang City, our Vietnam office supports operations, coordination, and distribution across the region.
    </p>

    <div className="max-w-3xl mx-auto bg-white border border-gray-200/50 shadow-xl rounded-3xl overflow-hidden transition-all hover:shadow-2xl">
      <div className="bg-gradient-to-br from-[#d4f4f0] via-[#f2f8fd] to-white p-10 relative">
        <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-teal-200 mb-6">
          <MapPin className="text-teal-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Nha Trang City, Vietnam
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Lot NV05-06, Road No. 28,<br />
          Phuoc Long Urban Area,<br />
          Phuoc Long Ward,<br />
          Nha Trang City, Khanh Hoa Province
        </p>
        <a
          href="https://www.google.com/maps/place/37+Tr%E1%BA%A7n+Quang+Kh%E1%BA%A3i,+L%E1%BB%99c+Th%E1%BB%8D,+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a+650000,+Vietnam/@12.2332643,109.1936006,17z/data=!3m1!4b1!4m6!3m5!1s0x31706764eff7c72d:0xece8e725defcfa6c!8m2!3d12.2332643!4d109.1961755!16s%2Fg%2F11gh_74wq9?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </div>
  </div>
  
</section>



      {/* Business Hours */}
<section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-white mb-4">Business Hours & Support</h3>
      <p className="text-gray-300 max-w-2xl mx-auto">
        We're here when you need us with comprehensive support during working hours.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
        <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-4">Business Hours</h4>
        <div className="space-y-2 text-gray-300">
          <p>Monday - Friday: 8:00 AM - 5:00 PM ICT</p>
          <p>Saturday: 8:00 AM - 12:00 PM ICT</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
        <MessageSquare className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-4">Customer Support</h4>
        <div className="space-y-2 text-gray-300">
          
          <p>Live Chat: Online during business hours</p>
          <p>Email: Replies within working hours</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
        <Phone className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-4">Reach Us</h4>
        <div className="space-y-2 text-gray-300">
          <p>Call: +84 258 3888 388</p>
          <p>Email: info@food-empire.net</p>
          <p>We’re ready to help</p>
        </div>
      </div>
    </div>
  </div>
 {/* Floating Toggle Button for Zalo & WhatsApp */}
<div className="fixed bottom-6 right-6 z-50">
  <div className="relative">
    {/* Toggle Button */}
   {/* Toggle Button */}
<button
  onClick={() => setShowChatButtons(!showChatButtons)}
  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
  aria-label="Toggle Chat Options"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
</button>


    {/* Zalo + WhatsApp Buttons */}
    {showChatButtons && (
      <div className="absolute bottom-16 right-0 space-y-3 transition-all duration-300">
        {/* Zalo */}
        <a
          href="https://zalo.me/0799508999"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg"
          aria-label="Chat on Zalo"
        >
          <BsChatDotsFill size={22} />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/84799508999"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-12 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
       )}
  </div>
  </div>

</section>

    </div>
  );
};

export default ContactPage;