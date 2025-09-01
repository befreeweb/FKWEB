import React from 'react';
import { AlertTriangle, DollarSign, Zap, TrendingDown, Lock, ArrowDown } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-10 w-10" />,
      title: "Fragmented Fan Engagement",
      description: "Fans scattered across multiple platforms with no unified experience or meaningful connection to creators",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Revenue Lost to Intermediaries",
      description: "Creators lose 30-70% of revenue to platform fees, agents, and complex distribution chains",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Complex Tokenization",
      description: "Current blockchain solutions require technical expertise that 99% of creators don't possess",
    },
    {
      icon: <TrendingDown className="h-10 w-10" />,
      title: "Unsustainable Meme Tokens",
      description: "Most fan tokens are pump-and-dump schemes with no real utility or long-term value proposition",
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Illiquid Real-World Assets",
      description: "Royalties, tickets, and IP rights remain locked in traditional systems, preventing fan participation",
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20 mb-8">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-red-300 font-medium">Industry Crisis</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            The Entertainment
            <span className="block gradient-text">Industry Crisis</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The entertainment industry faces critical challenges that prevent creators and fans 
            from reaching their full potential in the digital age, lacking AI-powered insights and intelligent blockchain innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="group hover-lift h-full">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <p className="text-white font-bold text-2xl mb-2">
              Industry Transformation Needed
            </p>
            <p className="text-pink-100 text-lg">
              The entertainment industry needs a unified blockchain solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};