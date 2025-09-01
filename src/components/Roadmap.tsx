import React from 'react';
import { Rocket, Palette, Globe, Star, Calendar, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

export const Roadmap = () => {
  const phases = [
    {
      year: "2025",
      quarter: "Q3",
      title: "Prototype Development",
      icon: <Rocket className="h-10 w-10" />,
      status: "upcoming",
      items: [
        "Prototype development and testing",
        "Community outreach and engagement",
        "Initial partnership setup with creators",
        "Technical infrastructure foundation",
        "Security framework implementation"
      ],
      color: "from-pink-500 to-purple-600",
      progress: 0
    },
    {
      year: "2025",
      quarter: "Q4",
      title: "Alpha Platform Launch", 
      icon: <Palette className="h-10 w-10" />,
      status: "planned",
      items: [
        "Alpha platform launch",
        "Beta testing with limited creators and fans",
        "Core functionality validation",
        "User feedback collection and analysis",
        "Platform optimization and refinements"
      ],
      color: "from-purple-500 to-pink-500",
      progress: 0
    },
    {
      year: "2026",
      quarter: "Q1",
      title: "Full Platform Launch",
      icon: <Globe className="h-10 w-10" />,
      status: "planned",
      items: [
        "Full platform launch to public",
        "Comprehensive marketing campaign",
        "Token sale/ICO execution",
        "Major exchange listings",
        "150+ creators and 50+ IP assets onboarded"
      ],
      color: "from-pink-600 to-purple-700",
      progress: 0
    },
    {
      year: "2026",
      quarter: "Q2+",
      title: "Platform Expansion",
      icon: <TrendingUp className="h-10 w-10" />,
      status: "planned",
      items: [
        "Platform expansion and scaling",
        "Additional creator tools development",
        "Strategic partnerships expansion",
        "DAO governance implementation",
        "Global market penetration"
      ],
      color: "from-purple-500 to-pink-600",
      progress: 0
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20 mb-8">
            <Calendar className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Development Timeline</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Fankoin <span className="gradient-text">Roadmap</span>
          </h2>
          
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Our strategic journey to revolutionize entertainment through blockchain technology, 
            with clear milestones and measurable outcomes
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-purple-600 hidden lg:block rounded-full shadow-lg"></div>

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="glass-effect rounded-3xl p-10 shadow-2xl border border-white/20 hover-lift relative overflow-hidden">
                    {/* Status indicator */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold ${
                      phase.status === 'active' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                      phase.status === 'upcoming' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                    }`}>
                      {phase.status === 'active' ? 'In Progress' : 
                       phase.status === 'upcoming' ? 'Next Up' : 'Planned'}
                    </div>

                    <div className={`bg-gradient-to-r ${phase.color} rounded-2xl w-20 h-20 flex items-center justify-center mb-8 text-white shadow-lg`}>
                      {phase.icon}
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl font-black text-white">{phase.year}</div>
                        <div className="bg-white/10 rounded-lg px-3 py-1 border border-white/20">
                          <span className="text-purple-200 font-semibold text-sm">{phase.quarter}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{phase.title}</h3>
                      
                      {/* Progress bar */}
                      {phase.progress > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-purple-200">Progress</span>
                            <span className="text-sm font-bold text-pink-300">{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-3">
                            <div 
                              className={`bg-gradient-to-r ${phase.color} h-3 rounded-full transition-all duration-1000`}
                              style={{width: `${phase.progress}%`}}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-4 group">
                          <div className={`mt-1 ${phase.status === 'active' && itemIndex < 3 ? 'text-green-500' : 'text-purple-500'}`}>
                            {phase.status === 'active' && itemIndex < 3 ? 
                              <CheckCircle className="h-6 w-6" /> : 
                              <Star className="h-6 w-6" />
                            }
                          </div>
                          <span className="text-purple-200 leading-relaxed group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Timeline connector */}
                    <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full ${index % 2 === 0 ? '-right-6' : '-left-6'} border-4 border-gray-900 shadow-xl pulse-glow`}>
                      <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-2/12"></div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>



        {/* Launch Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 fade-in-up">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Users className="h-8 w-8 text-pink-400" />
              <span>Launch Metrics</span>
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Creators at Launch</span>
                <span className="text-white font-bold">150</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Fans</span>
                <span className="text-white font-bold">200M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Creator Value Captured</span>
                <span className="text-white font-bold">$100M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-purple-400" />
              <span>Growth Targets</span>
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Creators (4M available)</span>
                <span className="text-white font-bold">1% Target</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3-Year Creator Goal</span>
                <span className="text-white font-bold">40,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Market Position</span>
                <span className="text-white font-bold">Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};