"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Footer turns black when it's 50% visible from the top
      // and when it's 50% visible from the bottom (scrolling away)
      const isTopVisible = rect.top < windowHeight * 0.5;
      const isBottomVisible = rect.bottom > windowHeight * 0.5;
      
      setIsInView(isTopVisible && isBottomVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer 
      className={`w-full min-h-screen flex items-center justify-center transition-all duration-500 ease-in-out relative ${
        isInView ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Location on Far Left */}
      <div className="absolute top-8 left-8 z-10">
        <p className="text-sm opacity-80">
          Boston area, Massachusetts
        </p>
      </div>

      {/* Email on Far Right - Aligned with Logo Top */}
      <div className="absolute top-8 right-8 z-10">
        <a href="mailto:info@stedisupply.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
          info@stedisupply.com
        </a>
      </div>

      {/* Sitemap above Logo */}
      <div className="absolute bottom-8 left-8 z-10" style={{ bottom: 'calc(8rem + 211px + 2rem)' }}>
        <div className="space-y-4">
          <h3 className="text-xl font-normal">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About
              </a>
            </li>
            <li>
              <a href="/catalog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Catalog
              </a>
            </li>
            <li>
              <a href="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Shop Our Products
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Text on Right Side above Logo */}
      <div className="absolute bottom-8 right-8 z-10" style={{ bottom: 'calc(8rem + 211px + 2rem)' }}>
        <p className="text-4xl font-bold text-white max-w-lg text-right" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
          Long turnarounds are not required anymore; they are just an option.
        </p>
      </div>

      {/* Large Logo in Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10">
        <Image
          src="/logos/stedilogofinal.svg"
          alt="Stedi Logo"
          width={600}
          height={211}
          className="transition-all duration-500 ease-in-out"
          style={{
            filter: isInView ? 'brightness(0) invert(1)' : 'none'
          }}
        />
      </div>

      {/* Copyright in Bottom Right */}
      <div className="absolute bottom-8 right-8 z-10">
        <p className="text-sm opacity-80">
          © 2024 Stedi Supply. All rights reserved.
        </p>
      </div>

    </footer>
  );
}