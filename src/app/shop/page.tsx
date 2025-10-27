"use client";

import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-end pr-32">
      {/* Product Display */}
      <div className="w-full h-full flex items-center justify-end">
        {/* Single Image */}
        <div className="relative">
          <Image
            src="/otherimages/flatwallet_front_black small.png"
            alt="Black Wallet"
            width={400}
            height={150}
            className="object-cover"
            style={{ 
              transform: 'rotate(-90deg) scale(1.5)'
            }}
          />
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
          <span className="text-xl">💬</span>
          <span style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>Chat with us</span>
        </button>
      </div>
    </div>
  );
}
