"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if scrolled (more than 50px from top)
      setIsScrolled(scrollY > 50);
      
      // Check if near bottom (within 100px of bottom)
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      setIsAtBottom(distanceFromBottom < 100);
    };

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      setCurrentTime(`Boston, Massachusetts ${timeString}`);
    };

    window.addEventListener("scroll", handleScroll);
    updateTime(); // Set initial time
    const timeInterval = setInterval(updateTime, 1000); // Update every second

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-8 left-16 right-16 z-50 flex items-end justify-between transition-all duration-500 ease-in-out ${
        isAtBottom ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ 
        mixBlendMode: 'difference',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Left - Logo */}
      <div className="flex items-end">
        <a href="/" style={{ mixBlendMode: 'difference', filter: 'invert(0)' }}>
          <Image
            src={isScrolled ? "/logos/stedilogodouble.svg" : "/logos/stedilogofinal.svg"}
            alt="Stedi Logo"
            width={isScrolled ? 120 : 160}
            height={isScrolled ? 42 : 56}
            priority
            style={{ 
              filter: 'brightness(0) invert(1)',
              transition: 'all 0.3s ease-in-out'
            }}
          />
        </a>
      </div>

      {/* Center - Location and Time */}
      <div className="text-lg font-normal text-white">
        {currentTime}
      </div>

      {/* Right - Navigation Links */}
      <div className="flex items-end">
        <a href="/shop" className="text-lg font-normal text-white hover:underline transition-all">
          Catalog
        </a>
        <span className="text-lg font-normal text-white">,&nbsp;</span>
        <a href="/about" className="text-lg font-normal text-white hover:underline transition-all">
          About
        </a>
        <span className="text-lg font-normal text-white">,&nbsp;</span>
        <a href="/contact" className="text-lg font-normal text-white hover:underline transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
}