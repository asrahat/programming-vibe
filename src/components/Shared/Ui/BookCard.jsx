import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-5">
              {/* Image Container */}
              <div className="bg-gray-100 rounded-xl p-6 flex justify-center items-center">
                <img
                  src={book.image}
                  alt="Book"
                  className="h-40 object-contain hover:scale-105 transition duration-300"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-4">
                
                {
                    book.tags.map(((tag,idx)=><span key={idx} className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full font-medium">
                 {tag}
                </span>))
                }
              </div>

              {/* Title */}
              <h2 className="mt-4 text-xl font-bold text-gray-800 leading-snug">
                {book.bookName}
              </h2>

              {/* Author */}
              <p className="text-gray-500 mt-1">
                By :{" "}
                <span className="font-medium text-gray-700">{book.author}</span>
              </p>

              {/* Divider */}
              <div className="border-t border-dashed my-4"></div>

              {/* Footer */}
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-sm font-medium">{book.category}</span>

                <div className="flex items-center gap-1 font-semibold">
                  <p>{book.rating}</p>
                   <CiStar className="w-6 h-6" />
                </div>
              </div>
            </Link>
    );
};

export default BookCard;