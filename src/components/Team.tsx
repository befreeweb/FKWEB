import React from 'react';
import { Users, Star, Briefcase, Code, Megaphone, Award } from 'lucide-react';

export const Team = () => {
  const leadership = [
    {
      name: "Businessofcinema.com",
      role: "Legacy since 2005: Mass migrated Indian entertainment industry to Facebook & YouTube from 2009-2012",
      company: "20 years of entertainment expertise",
      category: "Leadership",
      icon: <div className="text-2xl font-bold">BOC</div>
    }
  ];

  const ethereumFounders = [
    {
      name: "Taylor Gerring",
      role: "Angel Investor & Co-founder",
      company: "Ethereum.org",
      category: "Ethereum Founding Team",
      icon: <div className="text-2xl font-bold">ETH</div>
    },
    {
      name: "Dr. Daniel Nagy",
      role: "Founder",
      company: "Ethereum Swarm",
      category: "Ethereum Founding Team",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Viktor Toth",
      role: "CTO & Advisor",
      company: "Ethereum Swarm Foundation",
      category: "Ethereum Founding Team",
      icon: <Code className="h-8 w-8" />
    }
  ];

  const technical = [
    {
      name: "Sergei Cobs",
      role: "Blockchain System Architecture",
      company: "",
      category: "Technical",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Ameer",
      role: "Tech Developer",
      company: "",
      category: "Technical",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Thaday",
      role: "Analytics Expert",
      company: "",
      category: "Technical",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Sridhar",
      role: "AI Expert",
      company: "",
      category: "Technical",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Piyush Shukla",
      role: "Web 2 CTO",
      company: "",
      category: "Technical",
      icon: <Code className="h-8 w-8" />
    }
  ];

  const business = [
    {
      name: "Hemant Arora",
      role: "Business Development",
      company: "",
      category: "Business",
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      name: "Jozeph Jagan",
      role: "CMO & Founder",
      company: "WalletHunter.xyz",
      category: "Business",
      icon: <Megaphone className="h-8 w-8" />
    },
    {
      name: "Billy White",
      role: "Co-founder",
      company: "",
      category: "Business",
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      name: "Sabrina Ayu",
      role: "Marketing Expert",
      company: "Ex-Google",
      category: "Business",
      icon: <Megaphone className="h-8 w-8" />
    }
  ];

  const advisors = [
    {
      name: "Golshifte",
      role: "Celebrity Advisor",
      company: "",
      category: "Advisors",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "Sajid Khan",
      role: "Music Director",
      company: "India",
      category: "Advisors",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "Natasha",
      role: "Celebrity Advisor",
      company: "",
      category: "Advisors",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "Shahid Amir",
      role: "Celebrity Advisor",
      company: "",
      category: "Advisors",
      icon: <Award className="h-8 w-8" />
    }
  ];

  const TeamCard = ({ member, index }: { member: any, index: number }) => (
    <div className="group hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-opacity"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {member.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                {member.name}
              </h3>
              <p className="text-purple-300 font-medium">{member.role}</p>
            </div>
          </div>
          
          {member.company && (
            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
              <p className="text-purple-300 font-semibold text-sm">{member.company}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20 mb-8">
            <Users className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Our Team</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            World-Class <span className="gradient-text">Team</span>
          </h2>
          
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            The finest professionals in their fields with immaculate records, 
            bringing together expertise from blockchain, entertainment, and business
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Leadership Team</h3>
          <p className="text-xl text-purple-200 mb-8 text-center max-w-4xl mx-auto">
            Leading the future of entertainment blockchain with deep industry expertise and innovation
          </p>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto mb-12">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
          
          {/* Video Space */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover-lift">
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-white mb-6 text-center">Leadership Vision & Journey</h4>
                <p className="text-purple-200 text-lg">
                  BusinessofCinema.com continues its journey with 20 years of entertainment expertise along with Ethereum co-founder Taylor Gerring and the founding team of Ethereum Foundation including Daniel Nagy and Viktor Toth
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-600 relative overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/-7ewK43nGDc?si=OGrsawbemUM4c_4d" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ethereum Founding Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Ethereum Founding Team</h3>
          <p className="text-xl text-purple-200 mb-8 text-center max-w-4xl mx-auto">
            Bringing decades of blockchain expertise from the original Ethereum founding team
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ethereumFounders.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technical.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Business Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Business Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {business.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Celebrity Advisors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Celebrity Advisors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technology Partners</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group hover-lift">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-opacity"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <div className="text-xl font-bold">CB</div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors mb-2">
                    Cyclone Blockchain
                  </h3>
                  <p className="text-purple-300 font-medium">Infrastructure Partner</p>
                </div>
              </div>
            </div>
            
            <div className="group hover-lift">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-opacity"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <div className="text-xl font-bold">LP</div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors mb-2">
                    LiverPeer
                  </h3>
                  <p className="text-purple-300 font-medium">Streaming Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};