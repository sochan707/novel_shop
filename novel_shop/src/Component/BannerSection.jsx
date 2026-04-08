

import React from 'react';
import heroBanner from '../assets/hero-banner.webp';

const BannerSection = () => {
  return (
    <section className="bg-[#F9F6F0] pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-white px-6 py-2 rounded-full text-sm font-medium text-amber-800">
            New Arrivals
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Discover Our<br />
            New Collection
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            Curated novels, timeless classics, and hidden literary gems — 
            carefully selected for every reader.
          </p>

          <button className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-xl font-medium transition-all">
            Explore New Releases
          </button>
        </div>

        {/* Local Image */}
        <div 
          className="h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
      </div>
    </section>
  );
};

export default BannerSection;