// src/components/Homepage.jsx

import React from 'react';
import Header from './Component/Header';
import BannerSection from './Component/BannerSection';

import BrowseRange from './Component/BrowseRange';
import FeaturedBook from './Component/FeaturedBook';

import Header from './Component/Header';
import Footer from './Component/Footer';
// import Genres from './Genres';
// import FeaturedBooks from './FeaturedBooks';
// import Inspiration from './Inspiration';
// import Gallery from './Gallery';
import Footer from './Component/Footer';

const Homepage = () => {
  return (
    <>

      <Header  />

        {/* Padding to avoid overlap with fixed header */}
        <BannerSection />
        <BrowseRange />
         <FeaturedBook />
        { /*<Inspiration />
        <Gallery /> */}
      

      <Footer />
      <Header/>
      <BannerSection />
      {/* <Genres />
      <FeaturedBooks />
      <Inspiration />
      <Gallery /> */}
      <Footer/>

    </>
  );
};

export default Homepage;