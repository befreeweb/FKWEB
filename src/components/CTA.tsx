import React, { useEffect } from 'react';
import { ArrowRight, Download, Zap, Sparkles, Rocket, Users } from 'lucide-react';

export const CTA = () => {
  useEffect(() => {
    // Load Helio script if not already loaded
    if (!document.querySelector('script[src="https://embed.hel.io/assets/index-v1.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.crossOrigin = 'anonymous';
      script.src = 'https://embed.hel.io/assets/index-v1.js';
      document.head.appendChild(script);

      script.onload = () => {
        if (window.helioCheckout) {
          window.helioCheckout(
            document.getElementById("helioCheckoutContainer2"),
            {
              paylinkId: "68a8255c6ab983716cd6d36e",
              theme: {"themeMode":"dark"},
              primaryColor: "#f915a6",
              neutralColor: "#5A6578",
            }
          );
        }
      };
    } else {
      // Script already loaded, just initialize
      if (window.helioCheckout) {
        window.helioCheckout(
          document.getElementById("helioCheckoutContainer2"),
          {
            paylinkId: "68a8255c6ab983716cd6d36e",
            theme: {"themeMode":"dark"},
            primaryColor: "#f915a6",
            neutralColor: "#5A6578",
          }
        );
      }
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl floating-animation delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl floating-animation delay-2000"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-200 rounded-full animate-pulse opacity-80 delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-200 rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-70 delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 fade-in-up">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-black text-white leading-tight text-shadow">
              Join the Future of
              <br />
              <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                Entertainment
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-3xl text-purple-100 font-bold max-w-4xl mx-auto">
                Fankoin = Entertainment × Blockchain × AI × Community
              </p>
              
              <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                Be part of the AI-powered revolution that's reshaping how creators and fans connect, 
                engage, and prosper together in the intelligent digital entertainment ecosystem.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-md">
              <h3 className="text-3xl font-bold text-white mb-8">Founding Member Digital Asset</h3>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 mb-6">
                <p className="text-purple-200 text-sm mb-6">Join the entertainment revolution</p>
                <a 
                  href="https://fankoin-investor-lan-l2k9.bolt.host/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline font-semibold block mb-6"
                >
                  See more projection details
                </a>
                <div id="helioCheckoutContainer2"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <div className="glass-effect rounded-3xl p-8 border border-white/20 hover-lift">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3">150</div>
              <div className="text-purple-200 text-lg">Creators Ready For Launch</div>
              <div className="text-pink-200 text-sm mt-2">At platform launch</div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8 border border-white/20 hover-lift">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3">200M</div>
              <div className="text-purple-200 text-lg">Fans</div>
              <div className="text-pink-200 text-sm mt-2">Total reach at launch</div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8 border border-white/20 hover-lift">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3">$100M</div>
              <div className="text-purple-200 text-lg">Creator Value Captured</div>
              <div className="text-pink-200 text-sm mt-2">At launch</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="pt-16">
            <p className="text-purple-200 text-lg mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-white font-bold text-2xl">Netflix</div>
              <div className="text-white font-bold text-2xl">Spotify</div>
              <div className="text-white font-bold text-2xl">Warner Bros</div>
              <div className="text-white font-bold text-2xl">Universal</div>
              <div className="text-white font-bold text-2xl">Disney</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};