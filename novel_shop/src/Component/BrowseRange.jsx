// src/components/BrowseRange.jsx

import React from 'react';
import fictionImg from '../assets/fiction.jpg';
import mysteryImg from '../assets/mystery.jpg';
import romanceImg from '../assets/romance.jpg';

const BrowseRange = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Browse The Range</h2>
          <p className="text-gray-600 text-lg">Discover stories across different genres</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-md">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${fictionImg})` }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Fiction</h3>
              <p className="text-gray-500">Literary & Contemporary</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-md">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${mysteryImg})` }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Mystery & Thriller</h3>
              <p className="text-gray-500">Suspense & Crime</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-md">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${romanceImg})` }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Romance</h3>
              <p className="text-gray-500">Love & Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;