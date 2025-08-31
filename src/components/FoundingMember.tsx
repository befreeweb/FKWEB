import React from 'react';
import { TrendingUp, DollarSign, Users, Building, Star, ArrowRight, Calculator, PieChart, BarChart3, Target, Crown, Zap } from 'lucide-react';

export const FoundingMember = () => {
  const marketData = [
    {
      title: "Creator Economy",
      value: "$1.3T",
      subtitle: "by 2030",
      description: "Content creators, streamers, influencers, sports communities, artists, and fan engagement platforms",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Entertainment Industry", 
      value: "$2.4T",
      subtitle: "today",
      description: "Film, music, sports, gaming, live events, streaming - historically early adopter of tech shifts",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const comparisonData = [
    { metric: "Total Supply", fankoin: "200M tokens", pumpfun: "1T tokens" },
    { metric: "FDV Target", fankoin: "$200B+ by 2029", pumpfun: "$4B achieved" },
    { metric: "Revenue Model", fankoin: "Direct yield to holders", pumpfun: "Buybacks only" },
    { metric: "Market Focus", fankoin: "Entertainment + Creator Economy", pumpfun: "Memecoins only" },
    { metric: "Sustainability", fankoin: "Utility-driven", pumpfun: "Hype-dependent" }
  ];

  const investmentBreakdown = [
    { year: 2026, growth: 428, revenue: 4279, total: 4707 },
    { year: 2027, growth: 3376, revenue: 33758, total: 37134 },
    { year: 2028, growth: 8466, revenue: 84656, total: 93122 }
  ];

  const creatorMix = [
    { category: "Mega-Celebrities", count2026: 100, count2027: 500, count2028: 1000, tokenValue: 10.00 },
    { category: "Macro-Influencers", count2026: 400, count2027: 5000, count2028: 13000, tokenValue: 5.00 },
    { category: "Mid-Tier Creators", count2026: 1000, count2027: 5000, count2028: 20000, tokenValue: 2.00 },
    { category: "Emerging Creators", count2026: 3000, count2027: 6000, count2028: 25000, tokenValue: 1.25 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 mb-8">
            <Crown className="h-6 w-6 text-yellow-300" />
            <span className="text-white font-semibold text-lg">Exclusive Investment Opportunity</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight text-shadow mb-8">
            Founding Member
            <br />
            <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Digital Asset
            </span>
          </h1>
          
          <p className="text-2xl text-purple-100 font-bold max-w-4xl mx-auto mb-8">
            Join the entertainment revolution with exclusive founding member benefits
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 inline-block">
            <div className="text-6xl font-black text-white mb-4">$999</div>
            <div className="text-purple-200 text-xl">Founding Member Token Price</div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">📊 Market Backdrop</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {marketData.map((market, index) => (
              <div key={index} className="glass-effect rounded-3xl p-10 border border-white/20 hover-lift text-center">
                <div className={`bg-gradient-to-r ${market.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{market.title}</h3>
                <div className="text-5xl font-black text-white mb-2">{market.value}</div>
                <div className="text-purple-200 text-xl mb-4">{market.subtitle}</div>
                <p className="text-purple-100 leading-relaxed">{market.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 inline-block shadow-2xl">
              <p className="text-white font-bold text-xl">
                🎯 FanKoin = The only blockchain positioned at the intersection
              </p>
            </div>
          </div>
        </div>

        {/* FanKoin vs pump.fun */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">🔑 Investor Framing</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <p className="text-2xl text-white font-bold mb-4">
                pump.fun scaled to $4B FDV by capturing memecoin flows
              </p>
              <p className="text-xl text-purple-200">
                FanKoin targets two giant markets with utility-driven tokens
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-pink-200 font-bold text-lg">Metric</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold text-lg">🚀 FanKoin</th>
                    <th className="text-center py-4 px-6 text-purple-200 font-bold text-lg">pump.fun</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-white font-semibold">{row.metric}</td>
                      <td className="py-4 px-6 text-center text-green-300 font-bold">{row.fankoin}</td>
                      <td className="py-4 px-6 text-center text-gray-400">{row.pumpfun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">💰 Revenue Projections</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Revenue Per $999 Token Investment</h3>
              <p className="text-xl text-purple-200">Combined primary and secondary market revenue</p>
            </div>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-pink-200 font-bold">Timeframe</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2026</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2027</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2028</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Yearly</td>
                    <td className="py-4 px-6 text-center text-green-300 font-bold text-lg">$4,278.75</td>
                    <td className="py-4 px-6 text-center text-green-300 font-bold text-lg">$33,757.50</td>
                    <td className="py-4 px-6 text-center text-green-300 font-bold text-lg">$84,656.25</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Monthly</td>
                    <td className="py-4 px-6 text-center text-blue-300 font-bold">$356.56</td>
                    <td className="py-4 px-6 text-center text-blue-300 font-bold">$2,813.13</td>
                    <td className="py-4 px-6 text-center text-blue-300 font-bold">$7,054.69</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Daily</td>
                    <td className="py-4 px-6 text-center text-purple-300 font-bold">$11.71</td>
                    <td className="py-4 px-6 text-center text-purple-300 font-bold">$92.42</td>
                    <td className="py-4 px-6 text-center text-purple-300 font-bold">$231.79</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Investment Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">$999</div>
                <div className="text-pink-200">Initial Investment</div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-green-300 mb-2">$84,656</div>
                <div className="text-pink-200">Annual Revenue by 2028</div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-yellow-300 mb-2">8,475%</div>
                <div className="text-pink-200">3-Year ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Market Analysis */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">🎭 Creator Market Analysis</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-purple-500/20 rounded-2xl p-6 border border-purple-400/30">
                <div className="text-3xl font-black text-white mb-2">200M</div>
                <div className="text-purple-200">Total Creator Market Worldwide</div>
              </div>
              <div className="text-center bg-pink-500/20 rounded-2xl p-6 border border-pink-400/30">
                <div className="text-3xl font-black text-white mb-2">4M</div>
                <div className="text-pink-200">Creators Above 1M Followers</div>
              </div>
              <div className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-purple-400/30">
                <div className="text-3xl font-black text-white mb-2">40,000</div>
                <div className="text-purple-200">Target: 1% Market Share in 3 Years</div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-pink-200 font-bold">Creator Category</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2026</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2027</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">2028</th>
                    <th className="text-center py-4 px-6 text-pink-200 font-bold">Token Value</th>
                  </tr>
                </thead>
                <tbody>
                  {creatorMix.map((creator, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-white font-semibold">{creator.category}</td>
                      <td className="py-4 px-6 text-center text-blue-300 font-bold">{creator.count2026.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center text-purple-300 font-bold">{creator.count2027.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center text-pink-300 font-bold">{creator.count2028.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center text-green-300 font-bold">${creator.tokenValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FanKoin Token Value Progression */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">📈 FanKoin Token Value Progression</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-purple-400/30">
                <div className="text-5xl font-black text-pink-300 mb-4">$102</div>
                <div className="text-white text-xl font-bold mb-2">2026</div>
                <div className="text-purple-200">Token Launch Value</div>
              </div>
              <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-pink-400/30">
                <div className="text-5xl font-black text-purple-300 mb-4">$536</div>
                <div className="text-white text-xl font-bold mb-2">2027</div>
                <div className="text-purple-200">Growth Phase</div>
              </div>
              <div className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-purple-400/30">
                <div className="text-5xl font-black text-yellow-300 mb-4">$1,008</div>
                <div className="text-white text-xl font-bold mb-2">2028</div>
                <div className="text-purple-200">Maturity Phase</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 inline-block">
                <p className="text-white font-bold text-2xl">
                  🚀 988% Token Appreciation in 3 Years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Metrics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">🚀 Launch Metrics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-3xl p-10 border border-white/20 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <Users className="h-8 w-8 text-pink-400" />
                <span>Platform Launch Stats</span>
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-purple-200 text-lg">Creators at Launch</span>
                  <span className="text-white font-bold text-2xl">150+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-purple-200 text-lg">Digital Assets & IPs</span>
                  <span className="text-white font-bold text-2xl">50+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-purple-200 text-lg">Total Fan Base Reach</span>
                  <span className="text-white font-bold text-2xl">200M+</span>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-3xl p-10 border border-white/20 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <Target className="h-8 w-8 text-purple-400" />
                <span>Growth Targets</span>
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-purple-200 text-lg">Total Creators Available</span>
                  <span className="text-white font-bold text-2xl">4M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-purple-200 text-lg">Target Market Share</span>
                  <span className="text-white font-bold text-2xl">1%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-purple-200 text-lg">3-Year Creator Goal</span>
                  <span className="text-white font-bold text-2xl">40,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Breakdown Chart */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">📊 $100 Investment Breakdown</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-pink-200 font-bold">Year</th>
                    <th className="text-center py-4 px-6 text-blue-200 font-bold">Growth</th>
                    <th className="text-center py-4 px-6 text-green-200 font-bold">Revenue</th>
                    <th className="text-center py-4 px-6 text-yellow-200 font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentBreakdown.map((year, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-white font-bold text-lg">{year.year}</td>
                      <td className="py-4 px-6 text-center text-blue-300 font-bold">${year.growth.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center text-green-300 font-bold">${year.revenue.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center text-yellow-300 font-bold text-lg">${year.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 inline-block">
                <p className="text-white font-bold text-2xl">
                  💎 $100 → $93,122 by 2028 (93,022% ROI)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Differentiator */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">⭐ Unique Differentiator</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <div className="text-6xl">🎯</div>
                <h3 className="text-2xl font-bold text-white">Entertainment Focus</h3>
                <p className="text-purple-200">Only blockchain dedicated to entertainment industry</p>
              </div>
              <div className="space-y-4">
                <div className="text-6xl">⚡</div>
                <h3 className="text-2xl font-bold text-white">Ethereum Legacy</h3>
                <p className="text-purple-200">Backed by Ethereum founding team (Taylor Gerring)</p>
              </div>
              <div className="space-y-4">
                <div className="text-6xl">🏆</div>
                <h3 className="text-2xl font-bold text-white">Proven Track Record</h3>
                <p className="text-purple-200">BusinessofCinema.com legacy since 2005</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6">
              <p className="text-white font-bold text-2xl">
                "If Ethereum transformed finance, FanKoin will transform entertainment"
              </p>
            </div>
          </div>
        </div>

        {/* Investment Summary */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">💼 Investment Summary</h2>
          <div className="glass-effect rounded-3xl p-10 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">By 2029 Returns</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-blue-500/20 rounded-2xl p-6 border border-blue-400/30">
                <div className="text-4xl font-black text-blue-300 mb-2">$100,780</div>
                <div className="text-blue-200 font-bold">Growth Component</div>
                <div className="text-blue-100 text-sm mt-2">Capital appreciation</div>
              </div>
              <div className="text-center bg-green-500/20 rounded-2xl p-6 border border-green-400/30">
                <div className="text-4xl font-black text-green-300 mb-2">$5,291</div>
                <div className="text-green-200 font-bold">Yield Component</div>
                <div className="text-green-100 text-sm mt-2">≈$441/mo, $14.5/day</div>
              </div>
              <div className="text-center bg-yellow-500/20 rounded-2xl p-6 border border-yellow-400/30">
                <div className="text-4xl font-black text-yellow-300 mb-2">$106,071</div>
                <div className="text-yellow-200 font-bold">Total Return</div>
                <div className="text-yellow-100 text-sm mt-2">Dual-engine returns</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 inline-block">
                <p className="text-white font-bold text-xl">
                  🎯 Formula-driven, scalable, not hype-dependent
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <div className="glass-effect rounded-3xl p-12 border border-white/20">
            <h2 className="text-5xl font-bold text-white mb-8">Secure Your Position</h2>
            <p className="text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Limited founding member tokens available. Join the entertainment revolution today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 flex items-center space-x-3">
                <Zap className="h-7 w-7 group-hover:text-pink-500 transition-colors" />
                <span>Buy Founding Member Token</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                <Calculator className="h-7 w-7" />
                <span>Calculate Returns</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 inline-block shadow-2xl">
              <p className="text-white font-bold text-lg flex items-center space-x-2">
                <Star className="h-6 w-6" />
                <span>🚀 Early adopters get exclusive access to token presale and founder benefits</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};