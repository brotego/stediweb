"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Square Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-black"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center">
            <h1 
              className="font-bold leading-tight mb-8"
              style={{
                fontSize: '4.5rem',
                color: 'white',
                mixBlendMode: 'difference',
                fontFamily: 'MonumentGrotesk-Regular, sans-serif'
              }}
            >
              About Stedi Supply
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{
                color: 'white',
                mixBlendMode: 'difference',
                fontFamily: 'MonumentGrotesk-Regular, sans-serif'
              }}
            >
              We&apos;re revolutionizing university accessory supply chains with modern solutions and unprecedented turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Stedi Supply was founded to solve a critical problem in higher education: the frustratingly long wait times for campus store accessories. We believe that universities shouldn&apos;t have to wait months for quality, branded merchandise.
              </p>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Our mission is to provide modern, high-quality accessories with dramatically reduced turnaround times, allowing universities to keep their campus stores stocked with fresh, relevant merchandise year-round.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  Mission Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Speed
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                We deliver products faster than traditional suppliers, ensuring your campus store never runs out of popular items.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Quality
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Every product meets our high standards for durability, design, and student appeal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Partnership
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                We work closely with universities to understand their unique needs and provide tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  Story Image Placeholder
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Founded in Boston, Massachusetts, Stedi Supply emerged from firsthand experience with the challenges universities face in maintaining well-stocked campus stores. We saw the frustration of students and administrators alike when popular items were out of stock for months.
              </p>
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Our team combines deep knowledge of university operations with modern supply chain expertise to deliver solutions that actually work for higher education institutions.
              </p>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                Today, we&apos;re proud to serve universities and colleges across the United States, helping them provide better experiences for their students and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
            Ready to Transform Your Campus Store?
          </h2>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
            Join the universities already experiencing faster turnaround times and happier students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-colors text-lg"
              style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
            >
              Get Started
            </a>
            <a 
              href="/shop" 
              className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-colors text-lg"
              style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
