"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type StyleType = "fantasy" | "scifi" | "real";

export default function Follow() {
  // Use a simple default state without checking localStorage during initial render
  const [currentStyle, setCurrentStyle] = useState<StyleType>("fantasy");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  // First useEffect: Only runs once on mount to load theme from localStorage
  useEffect(() => {
    // This code only runs on the client, after hydration
    const storedTheme = localStorage.getItem("theme") as StyleType | null;
    if (storedTheme) {
      setCurrentStyle(storedTheme);
    }
  }, []); // Empty dependency array means this only runs once on mount
  
  // Second useEffect: Runs when theme changes to save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", currentStyle);
  }, [currentStyle]); // Only runs when currentStyle changes

  // Theme settings based on selected style
  const styleSettings = {
    fantasy: {
      title: "Join Our Journey",
      titleImage: "/images/titlefantasy.png",
      themeColor: "from-amber-600 to-amber-800",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      buttonStyle: "border-2 border-amber-300 shadow-lg shadow-amber-900/30",
      buttonHoverEffect: "hover:shadow-amber-500/50 hover:border-amber-200",
      switcherActiveColor: "bg-gradient-to-r from-amber-700 to-amber-600",
      switcherHoverColor: "hover:bg-amber-900/40",
      menuTextColor: "text-amber-200",
      menuHoverColor: "hover:text-amber-400",
      bgImage: "/images/fantasy.jpg",
      subtitleFont: "font-serif italic",
      navigationFont: "font-serif tracking-wide",
      navigationBorder: "border-b border-amber-700/30",
      navigationHoverEffect: "hover:border-b hover:border-amber-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-amber-400 after:mt-0.5",
      inputBorder: "border-amber-700/50 focus:border-amber-300",
      inputFocus: "focus:ring-amber-400/30",
      socialIcon: "bg-amber-800/50 hover:bg-amber-700",
      socialIconBorder: "border-amber-600/30",
      formBg: "bg-amber-900/20 border border-amber-700/50"
    },
    scifi: {
      title: "Connect With Us",
      titleImage: "/images/titlescifi.png",
      themeColor: "from-cyan-600 to-blue-900",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      buttonStyle: "border border-cyan-400 shadow-lg shadow-cyan-900/30",
      buttonHoverEffect: "hover:shadow-cyan-500/50 hover:border-cyan-300",
      switcherActiveColor: "bg-gradient-to-r from-blue-600 to-cyan-700",
      switcherHoverColor: "hover:bg-blue-900/40",
      menuTextColor: "text-cyan-200",
      menuHoverColor: "hover:text-cyan-400",
      bgImage: "/images/scifi.jpg",
      subtitleFont: "font-mono tracking-wider",
      navigationFont: "font-mono tracking-widest uppercase text-xs",
      navigationBorder: "border-b border-blue-700/30",
      navigationHoverEffect: "hover:border-b hover:border-cyan-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-cyan-400 after:mt-0.5",
      inputBorder: "border-blue-700/50 focus:border-cyan-300",
      inputFocus: "focus:ring-cyan-400/30",
      socialIcon: "bg-blue-800/50 hover:bg-cyan-700",
      socialIconBorder: "border-cyan-600/30",
      formBg: "bg-blue-900/20 border border-cyan-700/50"
    },
    real: {
      title: "Stay Updated",
      titleImage: "/images/titlereal.png",
      themeColor: "from-emerald-600 to-emerald-800",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      buttonStyle: "border border-emerald-400 shadow-lg shadow-emerald-900/30",
      buttonHoverEffect: "hover:shadow-emerald-500/50 hover:border-emerald-300",
      switcherActiveColor: "bg-gradient-to-r from-emerald-700 to-emerald-600",
      switcherHoverColor: "hover:bg-emerald-800/40",
      menuTextColor: "text-emerald-200",
      menuHoverColor: "hover:text-emerald-400",
      bgImage: "/images/real.jpg",
      subtitleFont: "font-sans tracking-tight",
      navigationFont: "font-sans tracking-normal",
      navigationBorder: "border-b border-emerald-700/30",
      navigationHoverEffect: "hover:border-b hover:border-emerald-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-emerald-400 after:mt-0.5",
      inputBorder: "border-emerald-700/50 focus:border-emerald-300",
      inputFocus: "focus:ring-emerald-400/30",
      socialIcon: "bg-emerald-800/50 hover:bg-emerald-700",
      socialIconBorder: "border-emerald-600/30",
      formBg: "bg-emerald-900/20 border border-emerald-700/50"
    }
  };

  const currentSettings = styleSettings[currentStyle];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to your API
      console.log("Subscribing email:", email);
      setSubscribed(true);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${currentSettings.bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className={`absolute inset-0 bg-gradient-to-b ${currentSettings.themeColor} opacity-25`} />
      </div>

      {/* Transparent Header */}
      <header className={`relative z-10 w-full py-3 ${currentSettings.navigationBorder} bg-black/20 backdrop-blur-sm transition-all duration-500`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Left side: Combined theme switcher with instruction */}
          <div className="flex items-center">
            {/* Theme logos */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentStyle("fantasy")}
                className={`transition-all duration-300 rounded-md overflow-hidden ${
                  currentStyle === 'fantasy' 
                    ? 'ring-2 ring-amber-400 scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image 
                  src="/images/titlefantasy.png" 
                  alt="Fantasy Theme" 
                  width={70} 
                  height={28} 
                  className="transition-all duration-300"
                />
              </button>
              <button 
                onClick={() => setCurrentStyle("scifi")}
                className={`transition-all duration-300 rounded-md overflow-hidden ${
                  currentStyle === 'scifi' 
                    ? 'ring-2 ring-cyan-400 scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image 
                  src="/images/titlescifi.png" 
                  alt="Sci-Fi Theme" 
                  width={70} 
                  height={28} 
                  className="transition-all duration-300"
                />
              </button>
              <button 
                onClick={() => setCurrentStyle("real")}
                className={`transition-all duration-300 rounded-md overflow-hidden ${
                  currentStyle === 'real' 
                    ? 'ring-2 ring-emerald-400 scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image 
                  src="/images/titlereal.png" 
                  alt="Realistic Theme" 
                  width={70} 
                  height={28} 
                  className="transition-all duration-300"
                />
              </button>
            </div>
            
            {/* Arrow and instruction */}
            <div className="flex items-center ml-3">
              <div className="animate-pulse">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 10M3 10L12 19M3 10H23" stroke="#FF3333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-2 text-white text-sm">Change style here (try it!)</span>
            </div>
          </div>
          
          {/* Right side: Navigation */}
          <nav className={`flex bg-black/30 px-4 py-2 rounded-lg ${currentSettings.navigationFont}`}>
            <Link 
              href="/" 
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect}`}
            >
              About
            </Link>
            <Link 
              href="/features" 
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect}`}
            >
              Features
            </Link>
            <Link 
              href="/follow" 
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect} ${currentSettings.menuActiveIndicator}`}
            >
              Follow
            </Link>
            <div className="border-l border-white/20 mx-2"></div>
            <Link 
              href="/auth" 
              className={`${currentSettings.buttonColor} text-white px-4 py-1 rounded-md text-sm transition-all hover:scale-105 flex items-center gap-1`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Login / Sign Up</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-8">
        <h1 className={`text-4xl font-bold mb-4 text-white drop-shadow-lg ${currentSettings.subtitleFont}`}>{currentSettings.title}</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Newsletter */}
            <div className={`${currentSettings.formBg} rounded-lg p-6 backdrop-blur-sm`}>
              <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Get Early Access</h2>
              
              {!subscribed ? (
                <>
                  <p className="text-white/90 mb-4">
                    Join our growing community and be the first to experience the next generation of interactive storytelling.
                    Subscribe to receive development updates, beta test invitations, and exclusive content.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className={`w-full px-4 py-2 rounded-md bg-black/20 text-white border ${currentSettings.inputBorder} placeholder-white/50 ${currentSettings.inputFocus} focus:ring focus:outline-none transition-all`}
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className={`${currentSettings.buttonColor} text-white px-8 py-3 rounded-md ${currentSettings.buttonStyle} ${currentSettings.buttonHoverEffect} w-full transition-all`}
                      >
                        Subscribe Now
                      </button>
                    </div>
                    
                    <p className="text-white/70 text-sm">
                      We respect your privacy and will never share your information.
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-block rounded-full bg-white/10 p-4 mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You for Subscribing!</h3>
                  <p className="text-white/90">
                    We've sent a confirmation email to your inbox. 
                    Please check your email to complete the subscription process.
                  </p>
                </div>
              )}
            </div>
            
            {/* Right Column - Social & Community */}
            <div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Connect With Us</h2>
                
                <p className="text-white/90 mb-6">
                  Follow our journey across social media for the latest updates, behind-the-scenes content, 
                  and opportunities to shape the future of our platform.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Social Media Icons */}
                  <a href="#" className={`${currentSettings.socialIcon} rounded-lg p-4 flex flex-col items-center border ${currentSettings.socialIconBorder} transition-all hover:transform hover:scale-105`}>
                    <span className="text-3xl mb-2">𝕏</span>
                    <span className="text-white text-sm">Twitter</span>
                  </a>
                  <a href="#" className={`${currentSettings.socialIcon} rounded-lg p-4 flex flex-col items-center border ${currentSettings.socialIconBorder} transition-all hover:transform hover:scale-105`}>
                    <span className="text-3xl mb-2">📱</span>
                    <span className="text-white text-sm">Instagram</span>
                  </a>
                  <a href="#" className={`${currentSettings.socialIcon} rounded-lg p-4 flex flex-col items-center border ${currentSettings.socialIconBorder} transition-all hover:transform hover:scale-105`}>
                    <span className="text-3xl mb-2">🎮</span>
                    <span className="text-white text-sm">Discord</span>
                  </a>
                  <a href="#" className={`${currentSettings.socialIcon} rounded-lg p-4 flex flex-col items-center border ${currentSettings.socialIconBorder} transition-all hover:transform hover:scale-105`}>
                    <span className="text-3xl mb-2">📺</span>
                    <span className="text-white text-sm">YouTube</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className={`text-xl font-bold text-white mb-3 ${currentSettings.subtitleFont}`}>Our Community</h3>
                <p className="text-white/90 mb-4">
                  Join thousands of storytelling enthusiasts, writers, and gamers who are helping shape
                  the future of interactive fiction. Share ideas, give feedback, and be part of our creative process.
                </p>
                <div className="flex justify-center space-x-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                    <Image src="/images/avatar1.jpg" alt="Community Member" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                    <Image src="/images/avatar2.jpg" alt="Community Member" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                    <Image src="/images/avatar3.jpg" alt="Community Member" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                    <Image src="/images/avatar4.jpg" alt="Community Member" width={40} height={40} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                    +2.5k
                  </div>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className={`inline-block ${currentSettings.buttonColor} text-white px-6 py-2 rounded-md ${currentSettings.buttonStyle} ${currentSettings.buttonHoverEffect} transition-all text-sm`}>
                    Join Our Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mt-8">
            <h2 className={`text-2xl font-bold text-white mb-6 ${currentSettings.subtitleFont}`}>Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">When will the platform launch?</h3>
                <p className="text-white/80">
                  We're targeting a beta launch in Q3 2023, with full release planned for early 2024.
                  Subscribers will receive priority access to our closed beta program.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What platforms will be supported?</h3>
                <p className="text-white/80">
                  At launch, we'll support web browsers, iOS, and Android devices.
                  Desktop applications for Windows and Mac are on our roadmap for release post-launch.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Will there be a free version?</h3>
                <p className="text-white/80">
                  Yes! We'll offer a free tier with access to select stories and features.
                  Premium subscriptions will unlock unlimited access to all content and advanced features.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">How can I become a creator?</h3>
                <p className="text-white/80">
                  We'll be launching a creator program shortly after our initial release.
                  Sign up for our newsletter to be notified when creator applications open.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 