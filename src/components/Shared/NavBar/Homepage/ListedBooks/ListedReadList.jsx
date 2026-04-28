import React, { useContext } from "react";
import { BookContext } from "../../../../../context/BookProvider";
import BookListedCard from "../../../Ui/BookListedCard";

const ListedReadList = () => {
  const { readBooks } = useContext(BookContext);
  console.log(readBooks);
  return (
    <div className="">
        {
                readBooks.length==0 && <div className='bg-base-300 h-[50vh] rounded-3xl flex justify-center items-center'>
                    <h2 className='text-4xl font-bold'>No Read listed Book!</h2>
                </div>
            }
      <div className="flex flex-col gap-10">
        {readBooks.map((book) => (
          <BookListedCard book={book}></BookListedCard>
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
