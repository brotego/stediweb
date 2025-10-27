"use client";

import { useState, useEffect } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: "Modern",
      description: "We design contemporary products that bring a new standard to college merchandise. Every item we make balances practical use with modern aesthetics, ensuring each campus product feels current and thoughtfully made."
    },
    {
      title: "Reliable",
      description: "Our supply model is built around consistency. By managing production directly with our manufacturers, we ensure every order arrives on time and to spec — keeping campus stores stocked and dependable year-round."
    },
    {
      title: "Efficient",
      description: "Speed matters. We streamline every step of the process — from order to delivery — reducing turnaround times and optimizing batch production so each campus partner receives exactly what they need, when they need it."
    },
    {
      title: "Collaborative",
      description: "We work closely with colleges and student teams to bring their ideas to life. From product customization to restock planning, every partnership is built on transparency, communication, and shared goals."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Square Background */}
        <div className="absolute inset-0">
          {/* One Big Square */}
          <div 
            className="absolute w-96 h-96 bg-black"
            style={{
              left: `${150 + (scrollY * 0.3)}px`,
              top: `${250 + (scrollY * -0.2)}px`,
            }}
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl px-4 w-full">
            <h1 
              className="font-bold leading-tight mb-8 text-left"
              style={{
                fontSize: '4.5rem',
                color: 'white',
                mixBlendMode: 'difference',
              }}
            >
              Modern Products. Smarter Supply.
            </h1>
            <p 
              className="text-xl leading-relaxed max-w-2xl ml-auto text-right"
              style={{
                color: 'white',
                mixBlendMode: 'difference',
                fontFamily: 'MonumentGrotesk-Regular, sans-serif'
              }}
            >
              Stedi Supply partners with colleges to modernize campus merchandise — building better products, faster operations, and reliable delivery for every store.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Values Section */}
      <section 
        className="py-20 min-h-screen transition-colors duration-300" 
        style={{ backgroundColor: activeValue < 2 ? '#000000' : '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* Left Column - Values List */}
            <div className="flex flex-col justify-center -ml-16">
                <h2 
                  className="text-3xl mb-12" 
                  style={{ 
                    fontFamily: 'MonumentGrotesk-Regular, sans-serif',
                    color: activeValue < 2 ? '#ffffff' : '#000000'
                  }}
                >
                  Our values
                </h2>
              <div className="space-y-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer group"
                    onMouseEnter={() => setActiveValue(index)}
                  >
                    <span 
                      className="text-8xl font-thin transition-all duration-300"
                      style={{ 
                        fontFamily: 'MonumentGrotesk-Regular, sans-serif',
                        color: activeValue === index 
                          ? (activeValue < 2 ? '#ffffff' : '#000000')
                          : (activeValue < 2 ? '#6b7280' : '#9ca3af')
                      }}
                    >
                      {value.title}
                    </span>
                    <span 
                      className="text-sm ml-4"
                      style={{
                        color: activeValue < 2 ? '#9ca3af' : '#6b7280'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <p 
                  className="text-3xl leading-relaxed"
                  style={{ 
                    fontFamily: 'MonumentGrotesk-Regular, sans-serif',
                    color: activeValue < 2 ? '#ffffff' : '#000000'
                  }}
                >
                  {values[activeValue].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}