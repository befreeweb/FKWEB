import React from 'react';
import { DollarSign, Store, Zap, Users, Building, TrendingUp, PieChart } from 'lucide-react';

export const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Transaction Fees",
      description: "Small fees on all token transactions, swaps, and transfers across the platform",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: "NFT Marketplace",
      description: "Commission on NFT sales, trading, and secondary market transactions",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Premium Launches",
      description: "Enhanced fan token launch packages with marketing and promotional support",
      color: "from-pink-600 to-purple-500",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Revenue Sharing",
      description: "Percentage of creator monetization and fan engagement rewards",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "RWA Tokenization",
      description: "Fees for tokenizing real-world assets like royalties and IP rights",
      color: "from-pink-500 to-purple-600",
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/20 mb-8">
            <PieChart className="h-5 w-5 text-green-400" />
            <span className="text-green-300 font-medium">Business Model</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Revenue <span className="gradient-text">Streams</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Multiple diversified revenue streams creating a sustainable and scalable business model 
            built for long-term growth and profitability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 slide-in-left">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stream.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${stream.color} rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stream.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors mb-4">
                        {stream.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {stream.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative slide-in-right">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl hover-lift text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Market Opportunity</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-black text-pink-400 mb-4">$1.5T</div>
                    <h4 className="text-xl font-bold text-white mb-3">Creator Economy</h4>
                    <p className="text-gray-300">Projected market size</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-purple-400 mb-4">$2.4T</div>
                    <h4 className="text-xl font-bold text-white mb-3">Entertainment Economy</h4>
                    <p className="text-gray-300">Total market value</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl hover-lift text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Growth Strategy</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-black text-pink-400 mb-4">40K</div>
                    <h4 className="text-xl font-bold text-white mb-3">Target Creators</h4>
                    <p className="text-gray-300">1% of 4M total creators in 3 years</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-purple-400 mb-4">200M+</div>
                    <h4 className="text-xl font-bold text-white mb-3">Fan Base Reach</h4>
                    <p className="text-gray-300">At platform launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};