import React from "react";
import { ALL_NOVELS } from "../data/productData"; 
import { useNavigate } from "react-router-dom";

const FeaturedBooks = () => {

  const books = ALL_NOVELS.slice(0, 8);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Books</h2>
          <button onClick={() => navigate(`/shop`)} className="text-amber-800 hover:underline font-medium">
            View All Books →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-120 bg-gray-100">
                {book.specialbadge && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-4 py-1 rounded-full">
                    {book.specialbadge}
                  </span>
                )}

                <img
                  src={book.src}   
                  alt={book.name}  
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="p-6">
                <h4 className="font-semibold text-lg line-clamp-2">
                  {book.name}
                </h4>

                <p className="text-gray-500 mt-1">
                  {book.subtitle}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold">
                    {book.price} 
                  </span>

                  <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-2xl text-sm">
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