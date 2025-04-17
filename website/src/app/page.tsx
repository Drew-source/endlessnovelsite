"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type StyleType = "fantasy" | "scifi" | "real";

export default function Home() {
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

  // Hero image and theme settings based on selected style
  const styleSettings = {
    fantasy: {
      title: "Endless Novel",
      titleImage: "/images/titlefantasy.png",
      subtitle: "Craft your own epic tale in a world of magic and mystery",
      subtitleFont: "font-serif italic",
      navigationFont: "font-serif tracking-wide",
      navigationBorder: "border-b border-amber-700/30",
      navigationHoverEffect: "hover:border-b hover:border-amber-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-amber-400 after:mt-0.5",
      ctaText: "Begin Your Adventure",
      themeColor: "from-amber-600 to-amber-800",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      buttonStyle: "border-2 border-amber-300 shadow-lg shadow-amber-900/30",
      buttonHoverEffect: "hover:shadow-amber-500/50 hover:border-amber-200",
      switcherActiveColor: "bg-gradient-to-r from-amber-700 to-amber-600",
      switcherHoverColor: "hover:bg-amber-900/40",
      menuTextColor: "text-amber-200",
      menuHoverColor: "hover:text-amber-400",
      bgImage: "/images/fantasy.jpg"
    },
    scifi: {
      title: "Endless Novel",
      titleImage: "/images/titlescifi.png",
      subtitle: "Explore the cosmos in a universe of limitless technological wonders",
      subtitleFont: "font-mono tracking-wider",
      navigationFont: "font-mono tracking-widest uppercase text-xs",
      navigationBorder: "border-b border-blue-700/30",
      navigationHoverEffect: "hover:border-b hover:border-cyan-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-cyan-400 after:mt-0.5",
      ctaText: "Launch Experience",
      themeColor: "from-cyan-600 to-blue-900",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      buttonStyle: "border border-cyan-400 shadow-lg shadow-cyan-900/30",
      buttonHoverEffect: "hover:shadow-cyan-500/50 hover:border-cyan-300",
      switcherActiveColor: "bg-gradient-to-r from-blue-600 to-cyan-700",
      switcherHoverColor: "hover:bg-blue-900/40",
      menuTextColor: "text-cyan-200",
      menuHoverColor: "hover:text-cyan-400",
      bgImage: "/images/scifi.jpg"
    },
    real: {
      title: "Endless Novel",
      titleImage: "/images/titlereal.png",
      subtitle: "Live through extraordinary stories in worlds that feel real",
      subtitleFont: "font-sans tracking-tight",
      navigationFont: "font-sans tracking-normal",
      navigationBorder: "border-b border-emerald-700/30",
      navigationHoverEffect: "hover:border-b hover:border-emerald-400",
      menuActiveIndicator: "after:content-[''] after:block after:w-full after:h-0.5 after:bg-emerald-400 after:mt-0.5",
      ctaText: "Start Your Journey",
      themeColor: "from-emerald-600 to-emerald-800",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      buttonStyle: "border border-emerald-400 shadow-lg shadow-emerald-900/30",
      buttonHoverEffect: "hover:shadow-emerald-500/50 hover:border-emerald-300",
      switcherActiveColor: "bg-gradient-to-r from-emerald-700 to-emerald-600",
      switcherHoverColor: "hover:bg-emerald-800/40",
      menuTextColor: "text-emerald-200",
      menuHoverColor: "hover:text-emerald-400",
      bgImage: "/images/real.jpg"
    }
  };

  const currentSettings = styleSettings[currentStyle];

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero Background Image */}
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
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect} ${currentSettings.menuActiveIndicator}`}
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

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 text-center pt-8 md:pt-0">
        <div className="mb-4 flex justify-center">
          <Image 
            src={currentSettings.titleImage} 
            alt="Endless Novel" 
            width={400} 
            height={150} 
            className="transition-opacity duration-500"
          />
        </div>
        <p className={`text-xl md:text-2xl mb-8 text-center max-w-2xl text-white/90 drop-shadow-md transition-all duration-700 ${currentSettings.subtitleFont}`}>
          {currentSettings.subtitle}
        </p>
        <div className="mb-20">
          <a 
            href="#" 
            className={`
              ${currentSettings.buttonColor} 
              ${currentSettings.buttonStyle}
              ${currentSettings.buttonHoverEffect}
              text-white font-bold py-3 px-10 rounded-full text-lg 
              transition-all duration-300 transform hover:scale-105
              inline-block
            `}
          >
            {currentSettings.ctaText}
          </a>
        </div>
      </section>
    </main>
  );
}
