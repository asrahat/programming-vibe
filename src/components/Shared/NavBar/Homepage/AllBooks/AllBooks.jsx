import React, { use } from "react";

import BookCard from "../../../Ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h2 className="font-bold text-3xl text-center">Books</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <BookCard book={book} key={book.bookId}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
