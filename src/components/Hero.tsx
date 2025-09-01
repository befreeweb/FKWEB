import React, { useEffect } from 'react';
import { ArrowRight, Play, Zap, Shield, Users, Sparkles, Star, Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl floating-animation delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl floating-animation delay-2000"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-200 rounded-full animate-pulse opacity-80 delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-200 rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-70 delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-12 fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span className="text-purple-300 font-medium">AI-Powered Blockchain Revolution</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight text-shadow">
                The Future of
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Entertainment
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-2xl text-purple-100 font-bold">
                  AI-Enhanced Blockchain + Entertainment = Fankoin
                </p>
                
                <p className="text-xl text-purple-200 leading-relaxed max-w-2xl">
                  The world's first AI-powered blockchain ecosystem designed specifically for entertainment. 
                  Connect fans, creators, and studios through intelligent tokenization, smart NFTs, and AI-driven governance.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3">
                <span>Launch Your Token</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group glass-effect text-white px-10 py-5 rounded-full font-bold text-xl border border-white/20 hover:border-pink-300/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <Play className="h-6 w-6" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">150+</div>
                <div className="text-purple-200">Creators Ready</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">200M+</div>
                <div className="text-purple-200">Fan Reach</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">$100M+</div>
                <div className="text-purple-200">Value Captured</div>
              <div className="text-purple-200">Value Captured at Launch</div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Boxes */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 fade-in-up">
          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Launchpad</h3>
                <p className="text-gray-300 leading-relaxed">
                  Launch fan tokens in minutes with our intelligent 1-click AI-powered platform. 
                  No technical knowledge required.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Asset Tokenization</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-enhanced tokenization of real-world assets like royalties, tickets, 
                  and IP rights with enterprise security.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="bg-gradient-to-r from-pink-600 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Fan Engagement</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-driven insights connect fans and creators through smart governance, 
                  rewards, and personalized experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};