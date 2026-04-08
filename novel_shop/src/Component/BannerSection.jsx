// src/components/BannerSection.jsx

import React from 'react';

const BannerSection = () => {
  return (
    <section className="bg-[#F9F6F0] py-20">
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

        {/* Banner Image */}
        <div 
          className="h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{
            backgroundImage: `url('https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2026/04/07/2945_PCS_A3_HardcoverBestsellers_04_07_26.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D')`
          }}
        />
      </div>
    </section>
  );
};

export default BannerSection;