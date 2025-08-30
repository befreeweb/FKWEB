import React from 'react';
import { ChevronDown, Play, Users, Zap, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-mesh">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-pink-200 rounded-full animate-pulse opacity-80 delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-200 rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse opacity-70 delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-pink-300 rounded-full animate-pulse opacity-60 delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-pink-300/30 rounded-lg floating-animation delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 slide-in-left">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="h-5 w-5 text-pink-200" />
                <span className="text-white font-medium">Entertainment on the Blockchain</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight text-shadow">
                Fankoin
              </h1>
              
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  Tokenizing Culture, Fans & Real-World Assets
                </p>
                <p className="text-xl text-purple-100 font-medium leading-relaxed max-w-2xl">
                  The first blockchain ecosystem designed specifically for entertainment, 
                  connecting millions of fans with their favorite creators and studios.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center space-x-3">
                <span>Join the Ecosystem</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <Play className="h-5 w-5" />
                <a href="https://fankoin-white-paper-q7ux.bolt.host" target="_blank" rel="noopener noreferrer">White Paper</a>
              </button>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Users className="h-6 w-6 text-pink-200" />
                </div>
                <div>
                  <div className="font-bold text-2xl">1M+</div>
                  <div className="text-purple-200 text-sm">Active Fans</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-purple-200" />
                </div>
                <div>
                  <div className="font-bold text-2xl">50K+</div>
                  <div className="text-purple-200 text-sm">Creators</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative slide-in-right">
            <div className="relative z-10 glass-effect rounded-3xl p-10 shadow-2xl border border-white/20 hover-lift">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
                <p className="text-purple-100">Checkout integration will be available soon</p>
              </div>
            </div>

            {/* Floating elements around the card */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center floating-animation">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-full floating-animation delay-1000"></div>
          </div>
        </div>

        <div className="flex justify-center mt-16 pb-8 fade-in-up">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white/80 text-sm">Discover More</p>
            <ChevronDown className="h-8 w-8 text-white animate-bounce cursor-pointer hover:text-pink-200 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};