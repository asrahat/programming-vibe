import React from "react";

const BookListedCard = ({ book }) => {
  return (
    <div className="flex  bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
      <div className="px-4 pt-4">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-72 w-full object-cover"
        />
      </div>

      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold leading-tight">
          {book.bookName}
        </h2>
        <p className="text-base-content/70">by {book.author}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {book.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm my-4">
          <div>
            <p className="text-xs text-base-content/60">Category</p>
            <p className="font-medium">{book.category}</p>
          </div>
          <div>
            <p className="text-xs text-base-content/60">Pages</p>
            <p className="font-medium">{book.totalPages}</p>
          </div>
          <div>
            <p className="text-xs text-base-content/60">Published</p>
            <p className="font-medium">{book.yearOfPublishing}</p>
          </div>
          <div>
            <p className="text-xs text-base-content/60">Publisher</p>
            <p className="font-medium text-ellipsis overflow-hidden">
              {book.publisher}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="badge badge-warning badge-lg font-semibold">
            ★ {book.rating}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookListedCard;
