// src/components/Homepage.jsx

import React from 'react';
import './Homepage.css';
import Header from './Header';


const Homepage = () => {
  return (
    <>
    <Header/>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">New Arrivals</span>
            <h1 className="hero-title">
              Discover Our<br />
              New Collection
            </h1>
            <p className="hero-description">
              Dive into our latest arrivals — bestselling novels, hidden gems, 
              and fresh stories waiting to be discovered.
            </p>
            <button className="btn-primary">Shop New Releases</button>
          </div>

          {/* CHANGE HERO IMAGE HERE */}
          <div 
            className="hero-image"
            style={{
              backgroundImage: `url('https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2026/04/07/2945_PCS_A3_HardcoverBestsellers_04_07_26.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D')` // ← Replace this URL
            }}
          />
        </div>
      </section>

      {/* ==================== BROWSE THE RANGE ==================== */}
      <section className="browse-section">
        <div className="container">
          <h2 className="section-title">Browse The Range</h2>
          <p className="section-subtitle">Explore books by genre</p>

          <div className="browse-grid">
            {/* Fiction Card */}
            <div className="browse-card">
              <div 
                className="browse-image"
                style={{
                  backgroundImage: `url('https://picsum.photos/id/201/600/450')` // ← Change this
                }}
              />
              <h3>Fiction</h3>
            </div>

            {/* Mystery Card */}
            <div className="browse-card">
              <div 
                className="browse-image"
                style={{
                  backgroundImage: `url('https://picsum.photos/id/870/600/450')` // ← Change this
                }}
              />
              <h3>Mystery & Thriller</h3>
            </div>

            {/* Romance Card */}
            <div className="browse-card">
              <div 
                className="browse-image"
                style={{
                  backgroundImage: `url('https://picsum.photos/id/1011/600/450')` // ← Change this
                }}
              />
              <h3>Romance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR BOOKS ==================== */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Books</h2>
            <a href="#" className="view-all">View All Books →</a>
          </div>

          <div className="products-grid">
            {[
              {
                id: 1,
                title: "We're A Bad Idea, Right?",
                author: "K.L. Walther",
                price: "14.99",
                badge: "New",
                image: "https://m.media-amazon.com/images/I/71yAuMYpc7L._AC_UY327_FMwebp_QL65_.jpg"   
              },
              {
                id: 2,
                title: "Dune Messiah",
                author: "Frank Herbert",
                price: "22.50",
                image: "https://picsum.photos/id/870/400/300"    // ← Change book cover
              },
              {
                id: 3,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                price: "16.99",
                image: "https://picsum.photos/id/1011/400/300"   // ← Change book cover
              },
              {
                id: 4,
                title: "Project Hail Mary",
                author: "Andy Weir",
                price: "19.99",
                badge: "Bestseller",
                image: "https://picsum.photos/id/133/400/300"    // ← Change book cover
              },
            ].map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-image">
                  {book.badge && <span className="badge-small">{book.badge}</span>}
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="book-info">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-author">{book.author}</p>
                  <div className="book-price-row">
                    <span className="book-price">${book.price}</span>
                    <button className="btn-add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INSPIRATION SECTION ==================== */}
      <section className="inspiration-section">
        <div className="container">
          <div className="inspiration-content">
            <div className="inspiration-text">
              <span className="inspiration-label">INSPIRATION</span>
              <h2 className="inspiration-title">
                50+ Beautiful<br />Reading Spaces
              </h2>
              <p className="inspiration-desc">
                Get inspired by cozy corners, dreamy libraries, and peaceful spots 
                made for losing yourself in a good book.
              </p>
              <button className="btn-primary">Browse Inspiration</button>
            </div>

            {/* CHANGE INSPIRATION IMAGES HERE */}
            <div className="inspiration-images">
              <div 
                className="inspiration-image large"
                style={{
                  backgroundImage: `url('https://picsum.photos/id/1015/600/600')` // ← Change this
                }}
              />
              <div 
                className="inspiration-image small"
                style={{
                  backgroundImage: `url('https://picsum.photos/id/133/600/600')` // ← Change this
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="section-title">#BookNook</h2>
            <p className="gallery-subtitle">Share your reading moments with us</p>
          </div>

          <div className="gallery-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="gallery-item">
                <img 
                  src={`https://picsum.photos/id/${300 + i}/600/600`} 
                  alt="Reading moment" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;