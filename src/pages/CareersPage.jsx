import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Clock, DollarSign, ArrowRight, Search, Filter, Briefcase, Heart, Zap, Target, Award, Globe, CheckCircle, Star, TrendingUp } from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
  { id: 'all', name: 'All Departments', count: 3 }
];
const [activeJob, setActiveJob] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (job) => {
  setActiveJob(job);
  setIsModalOpen(true);
};

const closeModal = () => {
  setActiveJob(null);
  setIsModalOpen(false);
};


  const locations = [
  
  { id: 'vietnam', name: 'Vietnam' }
];


  const jobs = [
{
  id: 1,
  title: "Sales Executive",
  location: "Vietnam",
  type: "Full-time",
  posted: "2 days ago",
  required: 3,
  urgent: true,
  description: "Responsible for achieving sales targets and managing client relationships.",
  fullDescription: `As a Sales Executive, you will be responsible for:
• Developing a customer approach plan for all products based on the company's orientation, goals, and customer data.
• Exploring new customer sources through meetings, introductions, and consultations.
• Reporting customer feedback under your responsibility to help the company adjust and develop strategies.
• Monitoring, collecting, and being accountable for customer debts.
• Maintaining strong relationships with existing customers.
• Ensuring achievement of the company’s sales targets.
• Reporting on customer approach status and ongoing orders.
• Performing additional tasks as assigned by management.`
},

  {
  id: 2,
  title: "General Admin",
  location: "Vietnam",
  type: "Full-time",
  posted: "1 week ago",
  required: 1,
  urgent: true,
  description: "Provide general administrative support and ensure smooth daily operations.",
  fullDescription: `As a General Admin, you will be responsible for:
• Providing general administrative support including filing, data entry, typing, and assisting with communications and paperwork.
• Managing diaries, travel arrangements, visitors, reception, and telephone duties.
• Assisting the Line Manager in implementing improvements and necessary changes.
• Liaising with external agencies on administration-related matters.
• Preparing monthly reports in the agreed format and content.
• Meeting personal targets and supporting the Line Manager in achieving team goals.
• Ensuring compliance with agreed codes, legislation, and health & safety procedures.
• Maintaining accurate records and documentation for all assigned tasks.
• Reporting any issues or failures that may impact the organization or clients.
• Contributing to the smooth functioning of the team.
• Using resources responsibly and controlling expenses within budget.
• Following all company policies and procedures.
• Interacting and cooperating with colleagues, suppliers, and clients/customers.
• Performing other tasks as required by the management.`
},
  {
  id: 3,
  title: "Purchase Admin",
  location: "Vietnam",
  type: "Full-time",
  posted: "3 days ago",
  required: 1,
  urgent: true,
  description: "Support procurement activities and handle purchasing-related admin tasks.",
  fullDescription: `As a Purchasing Admin, you will be responsible for:
• Preparing purchasing documents and obtaining quotes.
• Creating and maintaining accurate sales and purchasing reports.
• Developing and improving internal processes for procurement and related departments.
• Sourcing suppliers, comparing quotations, and analyzing offers to ensure best value.
• Performing general office administration duties.
• Carrying out other tasks as required by the management.`
}

];



  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear career advancement paths.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, remote options, and generous paid time off policies.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, equity packages, and comprehensive benefits.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const values = [
    {
      
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions."
    },
    {
      
      title: "Collaboration",
      description: "We work together to achieve extraordinary results."
    },
    {
      
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    },
    {
      
      title: "Integrity",
      description: "We act with honesty and transparency in all our dealings."
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-6 border border-emerald-200/50 animate-bounce-in">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Build the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Food Distribution
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Join a team of innovators, technologists, and food industry experts who are revolutionizing 
              how the world's food reaches tables everywhere. Make an impact that matters.
            </p>
          </div>

          
        </div>
      </section>

      {/* Job Search */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Discover exciting opportunities to grow your career with industry-leading compensation and benefits.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 mb-12 animate-fade-in-up delay-400">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover-lift"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover-lift"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover-lift"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
              
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold btn-animate hover-glow flex items-center justify-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Filter Jobs</span>
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 stagger-children">
            {filteredJobs.map((job) => (
              
              <div 
                key={job.id}
                className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-200/50 card-animate gpu-accelerated"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-smooth">
                          Urgent
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center space-x-6 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
  <Users className="w-4 h-4" />
  <span>{job.required} required</span>
</div>

                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
<button
  onClick={() => openModal(job)}
  className="text-emerald-600 font-semibold hover:underline text-sm"
>
  View Full Description
</button>

                    
                  </div>
                  
                  <div className="lg:ml-8 flex flex-col space-y-4">
                    <div className="text-sm text-gray-700 font-semibold mt-2">
  Drop your CV at <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=career@food-empire.net"
  target="_blank"
  rel="noopener noreferrer"
  className="text-emerald-600 underline hover:text-emerald-800 transition"
>
  career@food-empire.net
</a>

</div>

                    <div className="text-center text-sm text-gray-500">
                      Posted {job.posted}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
              {isModalOpen && activeJob && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
    <div className="bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl relative animate-fade-in-up">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeJob.title}</h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {activeJob.fullDescription}
      </p>
    </div>
  </div>
)}

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No positions found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria or check back later for new opportunities</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold btn-animate hover-glow"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

     

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              The principles that guide our culture and drive our success as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {values.map((value, index) => (
              <div 
  key={index}
  className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover-lift text-center gpu-accelerated"
>
  <div className="h-4 mb-4"></div> {/* removed green icon box */}
  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
  <p className="text-gray-300 leading-relaxed">{value.description}</p>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Join Our Mission?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Don't see the perfect role? We're always looking for talented individuals who share our passion for innovation.
          </p>
          
          <div className="animate-fade-in-up delay-400 mt-6">
  <p className="text-lg font-semibold text-gray-700">
    Drop your CV at <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=career@food-empire.net"
  target="_blank"
  rel="noopener noreferrer"
  className="text-emerald-600 underline hover:text-emerald-800 transition"
>
  career@food-empire.net
</a>


  </p>
</div>

        </div>
      </section>
    </div>
  );
};

export default CareersPage;