"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<'black' | 'green'>('black');

  const colorImages: Record<'black' | 'green', string[]> = {
    black: [
      "/products/black/flatwallet_front_black.png",
      "/products/black/flatwallet_back_black.png"
    ],
    green: [
      "/products/green/flatwallet_front_green.png",
      "/products/green/flatwallet_back_green.png"
    ]
  };

  const leftImages: Record<'black' | 'green', string> = {
    black: "/otherimages/leftimageblack.png",
    green: "/otherimages/leftimagegreen.png"
  };

  const slideshowImages = colorImages[selectedColor];

  const handleColorSelect = (color: 'black' | 'green') => {
    setSelectedColor(color);
    setCurrentImageIndex(0); // Reset to first image when color changes
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

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
          <div className="flex items-center gap-12 max-w-6xl px-4">
            <h1 
              className="font-bold leading-tight flex-1"
              style={{
                fontSize: '4.5rem',
                color: 'white',
                mixBlendMode: 'difference',
              }}
            >
              Custom modern accesories for higher education, without supplier wait times.
            </h1>
              <div className="flex flex-col gap-8">
                <a href="/catalog" className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors text-lg text-center">
                  Catalog
                </a>
                <a href="#products" className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors text-lg text-center scroll-smooth">
                  Shop Our Products
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
            <h2 className="text-4xl font-bold text-gray-900 text-left">
              Directly sold by Stedi
            </h2>
            <span className="text-4xl font-bold text-gray-900 ml-4" style={{ transform: 'rotate(270deg)' }}>↵</span>
          </div>
          <div className="flex items-end gap-16">
          {/* Left side - Image */}
           <div className="flex-1 flex justify-center items-end">
             <Image
               src={leftImages[selectedColor]}
               alt="Babson College iPhone Card Holder"
               width={1400}
               height={1344}
               className="object-cover"
             />
           </div>
          
          {/* Right side - Content */}
          <div className="flex flex-col justify-center items-start text-left border-l border-r border-gray-300 p-8 relative" style={{ width: '600px' }}>
            {/* Full-width top border extending across entire page */}
            <div className="absolute top-0 -left-full right-0 border-t border-gray-300" style={{ left: '-100vw', width: '200vw' }}></div>
            {/* Full-width bottom border extending across entire page */}
            <div className="absolute bottom-0 -left-full right-0 border-b border-gray-300" style={{ left: '-100vw', width: '200vw' }}></div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Babmag Black Leather MagSafe Wallet
            </h2>
            
            {/* Slideshow */}
            <div className="mb-8 w-full flex justify-center">
              <div className="relative cursor-pointer" onClick={nextImage}>
                <Image
                  key={currentImageIndex}
                  src={slideshowImages[currentImageIndex]}
                  alt={`Wallet ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
                  className="object-cover transition-all duration-300 ease-in-out"
                  style={{ 
                    opacity: 1,
                    transform: 'scale(1)'
                  }}
                />
                
                  {/* Slideshow indicators */}
                  <div className="flex justify-center mt-4 gap-2">
                    {slideshowImages.map((_: string, index: number) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full">
              <a href="https://kanu.us/business/babo-wallets?product=68c5c54ffd8180468a95a28e" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-12 py-4 font-semibold hover:bg-gray-800 transition-colors text-xl">
                Buy Now
              </a>
              
              <div className="flex items-center gap-4">
                {/* College and Price - Aligned with slideshow right edge */}
                <div className="flex flex-col items-end">
                  <div className="text-3xl font-bold text-gray-900">
                    $15
                  </div>
                  <div className="text-lg text-gray-900">
                    Babson College
                  </div>
                </div>
                
                {/* Color Selector */}
                <div className="flex flex-col gap-1">
                  <div 
                    className={`w-7 h-7 bg-black border-2 cursor-pointer ${selectedColor === 'black' ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => handleColorSelect('black')}
                  ></div>
                  <div 
                    className={`w-7 h-7 border-2 cursor-pointer ${selectedColor === 'green' ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#006644' }}
                    onClick={() => handleColorSelect('green')}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}