

import React from 'react';

// Import your book cover images
import book1 from '../assets/book1.webp';
import book2 from '../assets/book2.webp';
import book3 from '../assets/book3.webp';
import book4 from '../assets/book4.webp';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';
import book7 from '../assets/book7.jpg';
import book8 from '../assets/book8.webp';

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "The Night We Met",
      author: "Abby Jimenez",
      price: "14.99",
      badge: "New",
      image: book1
    },
    {
      id: 2,
      title: "from Strength to Strength",
      author: "Author C. Brook",
      price: "22.50",
      image: book2
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      price: "16.99",
      image: book3
    },
    {
      id: 4,
      title: "In her own league",
      author: "Liz Tomforde",
      price: "19.99",
      badge: "Bestseller",
      image: book4
    },
    {
      id: 5,
      title: "Just Last Night",
      author: "Mhairi McFarlane",
      price: "14.99",
      badge: "New",
      image: book5
    },
    {
      id: 6,
      title: "When We Lied",
      author: "Claire Contreras",
      price: "22.50",
      image: book6
    },
    {
      id: 7,
      title: "It's Not Easy Being A Bunny",
      author: "Marilyn Sadler",
      price: "6.99",
      image: book7
    },
    {
      id: 8,
      title: "Harry Potter and the Goblet of Fire (Harry Potter, Book 4) (Interactive Illustrated Edition)",
      author: "J.K. Rowling",
      price: "29.99",
      badge: "Bestseller",
      image: book8
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Books</h2>
          <a href="#" className="text-amber-800 hover:underline font-medium">View All Books →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-120 bg-gray-100">
                {book.badge && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-4 py-1 rounded-full font-medium z-10">
                    {book.badge}
                  </span>
                )}
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg line-clamp-2">{book.title}</h4>
                <p className="text-gray-500 mt-1">{book.author}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold">${book.price}</span>
                  <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-2xl text-sm font-medium transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;