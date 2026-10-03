```react
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Crown, 
  Compass, 
  ShieldCheck, 
  Building2, 
  DollarSign, 
  Key, 
  ChevronRight, 
  Sliders, 
  Send, 
  Bot, 
  CheckCircle2, 
  PhoneCall, 
  Plane, 
  Eye, 
  Maximize2, 
  Bed, 
  Bath, 
  MapPin, 
  Search, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Globe, 
  Award, 
  Menu, 
  X,
  Play,
  Share2,
  Calendar,
  Lock
} from 'lucide-react';

export default function App() {
  // Navigation & Modals
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currency, setCurrency] = useState('USD'); // USD, AED, EUR
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [privateTourModalOpen, setPrivateTourModalOpen] = useState(false);

  // Before / After AI Staging Slider State
  const [sliderPos, setSliderPos] = useState(50);

  // Investment Calculator State
  const [propVal, setPropVal] = useState(12500000); // $12.5M default
  const [downPaymentPct, setDownPaymentPct] = useState(30);
  const [holdingYears, setHoldingYears] = useState(5);
  const [expectedAppreciation, setExpectedAppreciation] = useState(7.5);

  // Concierge Chatbot State
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to AURA LUXE VIP Concierge. How may I assist your portfolio today?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  // Currency Converter Helpers
  const formatPrice = (usdAmount) => {
    let rate = 1;
    let symbol = '$';
    if (currency === 'AED') { rate = 3.67; symbol = 'AED '; }
    if (currency === 'EUR') { rate = 0.92; symbol = '€'; }

    const converted = usdAmount * rate;
    if (converted >= 1000000) {
      return `${symbol}${(converted / 1000000).toFixed(1)}M`;
    }
    return `${symbol}${converted.toLocaleString()}`;
  };

  const calculatedDownPayment = (propVal * downPaymentPct) / 100;
  const projectedFutureVal = propVal * Math.pow(1 + expectedAppreciation / 100, holdingYears);
  const estimatedCapitalGain = projectedFutureVal - propVal;
  const estimatedAnnualRentalReturn = propVal * 0.058; // 5.8% avg luxury yield

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    setTimeout(() => {
      let botReply = "Thank you for inquiring. Our private client partner will verify your request under non-disclosure protocols and connect with you shortly.";
      if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
        botReply = "Our portfolio properties range from $5M to over $45M. We also facilitate off-market transactions upon proof of funds.";
      } else if (userText.toLowerCase().includes('dubai') || userText.toLowerCase().includes('penthouse')) {
        botReply = "We currently have 3 off-market penthouses on Palm Jumeirah and Downtown Dubai with private helipads.";
      } else if (userText.toLowerCase().includes('tour') || userText.toLowerCase().includes('visit')) {
        botReply = "We arrange private jet transport and direct helicopter transfers to property viewings for qualified buyers.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  const luxuryProperties = [
    {
      id: 1,
      title: 'The Obsidian Sky Penthouse',
      location: 'Downtown Dubai, UAE',
      priceUSD: 24500000,
      beds: 6,
      baths: 8,
      sqft: '14,200',
      type: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      badge: 'AI Predictive Growth: +18.4%',
      features: ['Private Helipad', 'Infinity Sky Pool', '360° Skyline Views', '24/7 Butler Service']
    },
    {
      id: 2,
      title: 'Villa La Lumière',
      location: 'Côte d’Azur, French Riviera',
      priceUSD: 38000000,
      beds: 8,
      baths: 11,
      sqft: '21,500',
      type: 'Waterfront Villa',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      badge: 'Off-Market Exclusive',
      features: ['Private Beach Access', 'Wine Cellar (2000 bottles)', 'Helipad', 'Private Dock']
    },
    {
      id: 3,
      title: 'Aura Private Island Estate',
      location: 'Exuma, Bahamas',
      priceUSD: 45000000,
      beds: 10,
      baths: 14,
      sqft: '32,000',
      type: 'Private Island',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      badge: 'AI Yield Estimate: 9.2%',
      features: ['100% Solar Powered', 'Private Airstrip', 'Superyacht Berth', 'Staff Quarters']
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Background Ambient Luxury Mesh Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none z-0 opacity-20">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[180px]"></div>
      </div>

      {}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#07090e]/80 border-b border-amber-500/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div>
              <span className="text-xl font-serif tracking-widest text-white font-bold block leading-none">
                AURA<span className="text-[#D4AF37]">.</span>LUXE
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/80 block mt-1">Real Estate AI</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider text-slate-300 uppercase">
            <a href="#properties" className="hover:text-[#D4AF37] transition-colors">Residences</a>
            <a href="#staging" className="hover:text-[#D4AF37] transition-colors">AI Virtual Staging</a>
            <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">Yield Calculator</a>
            <a href="#agency-pitch" className="hover:text-[#D4AF37] transition-colors">Tech Architecture</a>
          </div>

          {/* Currency Switcher & VIP Action */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-slate-900/90 border border-amber-500/20 rounded-lg p-1 text-xs">
              {['USD', 'AED', 'EUR'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-md font-mono transition-all ${
                    currency === curr ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setPrivateTourModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] via-amber-400 to-amber-600 text-black font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-lg shadow-amber-500/20 flex items-center space-x-2"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Request Private Jet Tour</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-amber-400 p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenu && (
          <div className="md:hidden bg-[#0d111a] border-b border-amber-500/20 px-6 py-6 space-y-4">
            <a href="#properties" onClick={() => setMobileMenu(false)} className="block text-slate-300 text-sm font-medium">Residences</a>
            <a href="#staging" onClick={() => setMobileMenu(false)} className="block text-slate-300 text-sm font-medium">AI Virtual Staging</a>
            <a href="#calculator" onClick={() => setMobileMenu(false)} className="block text-slate-300 text-sm font-medium">Yield Calculator</a>
            <a href="#agency-pitch" onClick={() => setMobileMenu(false)} className="block text-slate-300 text-sm font-medium">Tech Architecture</a>
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">Select Currency:</span>
              <div className="flex bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs">
                {['USD', 'AED', 'EUR'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-1 rounded ${currency === curr ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400'}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
            <button 
              onClick={() => { setMobileMenu(false); setPrivateTourModalOpen(true); }}
              className="w-full mt-2 py-3 rounded-lg bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request Private Jet Tour
            </button>
          </div>
        )}
      </nav>

      {}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-36 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tracking-wide">AI-Powered Ultra-High-Net-Worth Portfolio Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-[1.15] text-white max-w-5xl mx-auto">
            Where Predictive AI Meets <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-amber-200 to-amber-500">
              Ultra-Luxury Real Estate
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Gain confidential access to $4.2B+ in off-market penthouses, private islands, and waterfront estates. Enhanced with real-time valuation algorithms & AI virtual staging.
          </p>

          {/* Luxury Search Bar */}
          <div className="mt-10 max-w-4xl mx-auto bg-slate-900/80 border border-amber-500/20 rounded-2xl p-3 backdrop-blur-2xl shadow-2xl shadow-black">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
              <div className="flex items-center space-x-3 px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-800">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Location</p>
                  <p className="text-xs font-medium text-white">Dubai, Monaco, French Riviera</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-800">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Property Type</p>
                  <p className="text-xs font-medium text-white">Penthouses & Islands</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-3 py-2 border-b sm:border-b-0 border-slate-800">
                <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Price Bracket</p>
                  <p className="text-xs font-medium text-white">$10M – $50M+</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-amber-400 transition-all font-bold text-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2">
                <Search className="w-4 h-4" />
                <span>Search Portfolio</span>
              </button>
            </div>
          </div>

          {/* Live Trust Metrics Ticker */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { val: '$4.2B+', label: 'Confidential Portfolio Sold' },
              { val: '0.08s', label: 'AI Valuation Processing' },
              { val: '100%', label: 'Strict NDA Compliance' },
              { val: '99.8%', label: 'UHNWI Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">{stat.val}</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="properties" className="py-20 relative z-10 bg-slate-950/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">Curated Luxury Showcase</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Featured Trophy Assets</h2>
            </div>
            <p className="mt-3 md:mt-0 text-slate-400 text-xs sm:text-sm max-w-md">
              Each residence includes an embedded AI capital appreciation predictor & confidential private jet tour arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryProperties.map((item) => (
              <div 
                key={item.id} 
                className="group bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Property Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-amber-500/30 text-[10px] font-semibold text-amber-300 backdrop-blur-md">
                      {item.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-slate-950/90 text-xs font-mono font-bold text-[#D4AF37] border border-slate-800">
                      {formatPrice(item.priceUSD)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center text-xs text-slate-400 space-x-1 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Property Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-xs text-slate-300 font-mono mb-4">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.beds} Beds</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.baths} Baths</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.sqft} sqft</span>
                      </div>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => { setSelectedProperty(item); setPrivateTourModalOpen(true); }}
                    className="w-full py-3 rounded-xl bg-slate-950 hover:bg-[#D4AF37] border border-amber-500/30 hover:border-transparent text-slate-200 hover:text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Confidential Dossier</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="staging" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">Proprietary Neural Rendering</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">AI Instant Virtual Staging Engine</h2>
            <p className="mt-4 text-slate-400 text-sm">Drag the interactive slider below to transform raw architectural structural shells into fully staged ultra-luxury interiors in real-time.</p>
          </div>

          <div className="max-w-4xl mx-auto relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-amber-500/30 shado151291777408161349049357154055570047