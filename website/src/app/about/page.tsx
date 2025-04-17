"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type StyleType = "fantasy" | "scifi" | "real";

export default function About() {
  // Use a simple default state without checking localStorage during initial render
  const [currentStyle, setCurrentStyle] = useState<StyleType>("fantasy");
  
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
      title: "Our Story",
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
      quoteStyle: "border-l-4 border-amber-500/50 pl-4 italic",
      timelineConnector: "border-l-2 border-amber-500/30",
      timelineDot: "bg-amber-500 border-2 border-amber-300",
      cardBg: "bg-amber-900/20"
    },
    scifi: {
      title: "Our Mission",
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
      quoteStyle: "border-l-4 border-cyan-500/50 pl-4 font-mono",
      timelineConnector: "border-l-2 border-cyan-500/30",
      timelineDot: "bg-cyan-500 border-2 border-cyan-300",
      cardBg: "bg-blue-900/20"
    },
    real: {
      title: "About Us",
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
      quoteStyle: "border-l-4 border-emerald-500/50 pl-4",
      timelineConnector: "border-l-2 border-emerald-500/30",
      timelineDot: "bg-emerald-500 border-2 border-emerald-300",
      cardBg: "bg-emerald-900/20"
    }
  };

  const currentSettings = styleSettings[currentStyle];

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
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect} ${currentSettings.menuActiveIndicator}`}
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
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect}`}
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
        <h1 className={`text-4xl font-bold mb-2 text-white drop-shadow-lg ${currentSettings.subtitleFont}`}>{currentSettings.title}</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Vision Section */}
          <div className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8`}>
            <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Our Vision</h2>
            <p className="text-white/90 mb-4">
              At Endless Novel, we're building the next evolution in interactive storytelling. Our vision is to create living, breathing narratives where the boundary between reader and creator dissolves, opening up limitless possibilities for imagination and discovery.
            </p>
            <div className={`${currentSettings.quoteStyle} text-white/80 my-6`}>
              "Stories are the most powerful technology humans have ever created. Our mission is to evolve them into living worlds that respond to you, grow with you, and surprise you."
            </div>
            <p className="text-white/90">
              Through cutting-edge AI and a deep respect for the craft of storytelling, we're creating a platform where every choice matters, every character remembers, and every world evolves based on your unique journey.
            </p>
          </div>

          {/* Team Section */}
          <div className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8`}>
            <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${currentSettings.cardBg} backdrop-blur-sm rounded-lg p-4 border border-white/10`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <Image 
                      src="/images/profile1.jpg" 
                      alt="Andrea Edelman" 
                      width={64} 
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Andrea Edelman</h3>
                    <p className="text-white/70 text-sm">Lead Game Developer</p>
                    <p className="text-white/90 mt-2 text-sm">
                      Innovative game developer with expertise in narrative systems and procedural content generation.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${currentSettings.cardBg} backdrop-blur-sm rounded-lg p-4 border border-white/10`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <Image 
                      src="/images/profile2.jpg" 
                      alt="Luke Kramer" 
                      width={64} 
                      height={64}
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Luke Kramer</h3>
                    <p className="text-white/70 text-sm">Game Developer</p>
                    <p className="text-white/90 mt-2 text-sm">
                      Versatile developer with a passion for creating immersive game mechanics and interactive experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${currentSettings.cardBg} backdrop-blur-sm rounded-lg p-4 border border-white/10`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <Image 
                      src="/images/profile3.jpg" 
                      alt="Bojan Andrejek" 
                      width={64} 
                      height={64}
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Bojan Andrejek</h3>
                    <p className="text-white/70 text-sm">Tech Lead</p>
                    <p className="text-white/90 mt-2 text-sm">
                      Backend architect with expertise in scalable systems and AI integration for dynamic content.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${currentSettings.cardBg} backdrop-blur-sm rounded-lg p-4 border border-white/10`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <Image 
                      src="/images/profile4.jpg" 
                      alt="Bifari Achmad" 
                      width={64} 
                      height={64}
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Bifari Achmad</h3>
                    <p className="text-white/70 text-sm">Art Lead</p>
                    <p className="text-white/90 mt-2 text-sm">
                      Creative artist specializing in procedural art generation and visual storytelling techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8`}>
            <h2 className={`text-2xl font-bold text-white mb-6 ${currentSettings.subtitleFont}`}>Our Journey</h2>
            <div className="relative pl-20">
              <div className={`absolute left-8 top-0 bottom-0 ${currentSettings.timelineConnector}`}></div>
              
              <div className="mb-10 relative">
                <div className={`absolute left-[-36px] top-1 w-8 h-8 rounded-full ${currentSettings.timelineDot} flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-xl">February 2025 - Development Begins</h3>
                <p className="text-white/90 mt-2 pl-1">
                  We began development of Endless Novel with a focus on creating an AI-powered adventure engine. Our small team established the core architecture and started building the fundamental narrative systems.
                </p>
              </div>
              
              <div className="mb-10 relative">
                <div className={`absolute left-[-36px] top-1 w-8 h-8 rounded-full ${currentSettings.timelineDot} flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-xl">March 2025 - Team Expansion</h3>
                <p className="text-white/90 mt-2 pl-1">
                  Luke Kramer joined our development team, bringing valuable expertise in interactive storytelling and game mechanics. This addition accelerated our progress and expanded our creative capabilities.
                </p>
              </div>
              
              <div className="mb-10 relative">
                <div className={`absolute left-[-36px] top-1 w-8 h-8 rounded-full ${currentSettings.timelineDot} flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-xl">April 2025 - Website Launch</h3>
                <p className="text-white/90 mt-2 pl-1">
                  Launch of our official website (you're looking at it!) to showcase our vision, introduce our team, and begin building our community. This milestone marks our first public-facing presence.
                </p>
              </div>
              
              <div className="relative">
                <div className={`absolute left-[-36px] top-1 w-8 h-8 rounded-full ${currentSettings.timelineDot} flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-xl">May 2025 - Early Access on Steam</h3>
                <p className="text-white/90 mt-2 pl-1">
                  Planned release of our Early Access version on Steam, allowing players to experience the first generation of our AI-powered storytelling engine while helping us refine and expand the experience.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8">
            <Link 
              href="/follow" 
              className={`${currentSettings.buttonColor} text-white px-8 py-3 rounded-md ${currentSettings.buttonStyle} ${currentSettings.buttonHoverEffect} inline-flex items-center space-x-2 transition-all`}
            >
              <span>Join Our Journey</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 