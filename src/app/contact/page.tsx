"use client";

import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("message");

  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-32 pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Get in Touch */}
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-black mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
              Get in Touch
            </h1>
            <p className="text-lg text-black mb-8" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
              If you&apos;re a college or university looking for better supplier turnaround times and modern accessories for your campus store, we&apos;d love to discuss how we can help. Please fill out the form below and we will be in touch.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-black" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  Email
                </p>
                <a href="mailto:contact@stedi.com" className="text-lg text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  contact@stedi.com
                </a>
              </div>
              <div>
                <p className="text-lg font-semibold text-black" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  Phone
                </p>
                <a href="tel:+1234567890" className="text-lg text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}>
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white">
            {/* Tab Buttons */}
            <div className="flex mb-8">
              <button
                onClick={() => setActiveTab("message")}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === "message"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
                style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
              >
                Send a Message
              </button>
              <button
                onClick={() => setActiveTab("call")}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === "call"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
                style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
              >
                Book a Call
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent placeholder-gray-600"
                  style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
                />
              </div>
              
              <div>
                <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent appearance-none text-gray-600">
                  <option>College/University*</option>
                  <option>Harvard University</option>
                  <option>MIT</option>
                  <option>Stanford University</option>
                  <option>Yale University</option>
                  <option>Princeton University</option>
                  <option>Columbia University</option>
                  <option>University of Pennsylvania</option>
                  <option>Duke University</option>
                  <option>Northwestern University</option>
                  <option>University of Chicago</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent placeholder-gray-600"
                  style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
                />
              </div>
              
              <div>
                <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent appearance-none text-gray-600">
                  <option>Product Interest</option>
                  <option>MagSafe Wallets</option>
                  <option>Phone Cases</option>
                  <option>Custom Merchandise</option>
                  <option>University Branding</option>
                  <option>Bulk Orders</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent resize-none placeholder-gray-600"
                  style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
                />
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 font-semibold hover:bg-gray-800 transition-colors"
                style={{ fontFamily: 'MonumentGrotesk-Regular, sans-serif' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
