"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type StyleType = "fantasy" | "scifi" | "real";

export default function Features() {
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
      title: "Epic Features",
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
      featureCardBg: "bg-amber-900/20 border border-amber-700/50",
      featureHighlight: "text-amber-400",
      featureIcon: "text-amber-300"
    },
    scifi: {
      title: "Advanced Systems",
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
      featureCardBg: "bg-blue-900/20 border border-cyan-700/50",
      featureHighlight: "text-cyan-400",
      featureIcon: "text-cyan-300"
    },
    real: {
      title: "Key Features",
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
      featureCardBg: "bg-emerald-900/20 border border-emerald-700/50",
      featureHighlight: "text-emerald-400",
      featureIcon: "text-emerald-300"
    }
  };

  const currentSettings = styleSettings[currentStyle];

  // Features data
  const features = [
    {
      icon: "🧠",
      title: "API-Powered Memory",
      description: "Our system uses advanced LLM context management to remember your choices, conversation history, and key events, ensuring a cohesive experience without the limitations of traditional game engines."
    },
    {
      icon: "🎒",
      title: "Dynamic Inventory System",
      description: "Collect and manage items with AI-generated sprites created on-the-fly. The AI can add, remove, and transform items in your inventory based on your actions and the narrative context."
    },
    {
      icon: "👥",
      title: "Companion System",
      description: "Build a party of companions with unique personalities, portraits, and voices—all generated by our AI. Each companion has their own stats, inventory, and relationships that evolve throughout your journey."
    },
    {
      icon: "🗺️",
      title: "Self-Generated Minimap",
      description: "Explore the world with a dynamically generated minimap that tracks your journey and reveals new locations as you discover them, giving you a visual record of your adventure."
    },
    {
      icon: "🌍",
      title: "Generated Environments",
      description: "Each location is dynamically created through prompt engineering and AI image generation, allowing for infinitely varied settings that evolve based on the narrative context."
    },
    {
      icon: "👤",
      title: "Deep Characters",
      description: "Characters are powered by Claude 3.7 and Gemini models with carefully crafted system prompts that maintain consistent personalities, memories, and relationships throughout your adventure."
    },
    {
      icon: "🔄",
      title: "Branching Narratives",
      description: "Unlike scripted games, our Python-based architecture allows for truly emergent storytelling where consequences ripple through the narrative and create genuine, unpredictable story paths."
    },
    {
      icon: "📝",
      title: "Prompt-Controlled Prose",
      description: "Our system uses prompt engineering to adapt the writing style, descriptive density, and dialogue approach based on the current narrative context and your preferences."
    },
    {
      icon: "🎭",
      title: "True Genre Fluidity",
      description: "Switch seamlessly between fantasy, sci-fi, and realistic settings with our innovative prompt architecture that transforms the entire experience—not just the visuals, but the underlying narrative logic."
    },
    {
      icon: "✨",
      title: "Unlimited AI Control",
      description: "Our system grants the AI complete access to all game elements—it can kill or resurrect companions, heal wounds, remember key details, transfer items between characters, and much more through our proprietary architecture."
    }
  ];

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
              className={`${currentSettings.menuTextColor} ${currentSettings.menuHoverColor} transition relative px-3 py-1 ${currentSettings.navigationHoverEffect} ${currentSettings.menuActiveIndicator}`}
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
        <h1 className={`text-4xl font-bold mb-4 text-white drop-shadow-lg ${currentSettings.subtitleFont}`}>{currentSettings.title}</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 text-center">
            <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>
              Experience the Future of Storytelling
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Endless Novel combines advanced AI with thoughtful narrative design to create stories that feel alive. 
              Discover how our technology transforms passive reading into an interactive journey where your 
              choices shape a truly personalized narrative experience.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${currentSettings.featureCardBg} backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg`}
              >
                <div className={`text-4xl mb-3 ${currentSettings.featureIcon}`}>{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${currentSettings.featureHighlight}`}>{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Technology Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Our Technology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-xl font-bold mb-3 ${currentSettings.featureHighlight}`}>AI-API Architecture</h3>
                <p className="text-white/90 mb-4">
                  Endless Novel harnesses the power of multiple AI APIs through sophisticated prompt engineering and a custom
                  Python orchestration layer. Rather than traditional game engines, we've built a system that coordinates
                  various AI models to create a cohesive, dynamic experience.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className={`mr-2 ${currentSettings.featureHighlight}`}>✓</span> 
                    <span>Claude 3.7 and Gemini for core narrative generation and character interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-2 ${currentSettings.featureHighlight}`}>✓</span> 
                    <span>On-the-fly generation of character portraits, item sprites, and environment visuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-2 ${currentSettings.featureHighlight}`}>✓</span> 
                    <span>AI-driven voice synthesis for unique character voices and narration</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-2 ${currentSettings.featureHighlight}`}>✓</span> 
                    <span>Custom prompt engineering for consistent world-building and character development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 rounded-lg overflow-hidden">
                <Image 
                  src="/images/ai-visualization.jpg" 
                  alt="AI Visualization" 
                  width={500} 
                  height={300}
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
          
          {/* Gameplay Mechanics Section - NEW */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h2 className={`text-2xl font-bold text-white mb-4 ${currentSettings.subtitleFont}`}>Gameplay Mechanics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-bold mb-3 ${currentSettings.featureHighlight}`}>Character Development</h3>
                <p className="text-white/90 mb-4">
                  Your character and companions evolve throughout the adventure with dynamically tracked statistics, skills, and relationships.
                  The AI remembers injuries, emotional states, and growth opportunities for each character in your party.
                </p>
                <div className={`${currentSettings.featureCardBg} p-4 rounded-lg`}>
                  <h4 className="text-white font-bold">Character Features:</h4>
                  <ul className="mt-2 space-y-1 text-white/80">
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Unique AI-generated portraits that reflect character development</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Distinctive voices created through voice synthesis technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Individual inventories, abilities, and relationship dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Persistent memories that influence behavior and dialogue options</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-3 ${currentSettings.featureHighlight}`}>World Interaction</h3>
                <p className="text-white/90 mb-4">
                  Our system creates a fully interactive environment where items can be manipulated, locations discovered, and
                  the state of the world persistently tracked through your adventure.
                </p>
                <div className={`${currentSettings.featureCardBg} p-4 rounded-lg`}>
                  <h4 className="text-white font-bold">World Features:</h4>
                  <ul className="mt-2 space-y-1 text-white/80">
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Intelligently managed inventory with item transfers between characters</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Procedurally generated maps that expand as you explore</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>Location-aware interactions with environmental consequences</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${currentSettings.featureHighlight}`}>•</span> 
                      <span>State-aware AI that can fundamentally alter the game world</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Unique Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <h2 className={`text-xl font-bold text-white mb-3 ${currentSettings.subtitleFont}`}>Every Story is Unique</h2>
              <p className="text-white/90 mb-4">
                Unlike traditional books or games with predetermined paths, Endless Novel creates a truly personal 
                narrative experience. Each playthrough leverages the generative capabilities of modern AI models to create
                scenarios, challenges, and character interactions that adapt to your decisions.
              </p>
              <div className="border-l-4 border-white/30 pl-4 italic text-white/80">
                "No two journeys through an Endless Novel will ever be the same, because the system dynamically responds
                to your choices with the full creative power of cutting-edge AI."
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <h2 className={`text-xl font-bold text-white mb-3 ${currentSettings.subtitleFont}`}>Platform Availability</h2>
              <p className="text-white/90 mb-4">
                Endless Novel is designed for immersive experiences on larger screens. Access your adventures through
                our browser application, standalone desktop client, or via our Steam release.
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-black/40 p-2 rounded-lg text-center">
                  <span className="text-2xl text-white">💻</span>
                  <p className="text-white/80 text-sm mt-1">Web Browser</p>
                </div>
                <div className="bg-black/40 p-2 rounded-lg text-center">
                  <span className="text-2xl text-white">🖥️</span>
                  <p className="text-white/80 text-sm mt-1">Desktop App</p>
                </div>
                <div className="bg-black/40 p-2 rounded-lg text-center">
                  <span className="text-2xl text-white">🎮</span>
                  <p className="text-white/80 text-sm mt-1">Steam</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mb-8">
            <Link 
              href="/" 
              className={`${currentSettings.buttonColor} text-white px-8 py-3 rounded-md ${currentSettings.buttonStyle} ${currentSettings.buttonHoverEffect} inline-flex items-center space-x-2 transition-all`}
            >
              <span>Experience It Now</span>
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