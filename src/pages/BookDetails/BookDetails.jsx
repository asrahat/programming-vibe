import { use, useContext } from "react";
import { useParams } from "react-router";
import  { BookContext } from "../../context/BookProvider";
// import { BookContext } from "../../context/BookProvider";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId, "bookId");
  // const books = useLoaderData();
  const books = use(booksPromise);
  // console.log(books);

  const expactedBook = books.find((book) => bookId == book.bookId);
  // console.log(expactedBook);




  const {handleMarkAsRead,handleWishlist} = useContext(BookContext)
  // console.log(handleMarkAsRead,storedBooks);


  

  return (
    <div className="container mx-auto p-8">
      <div className="md:flex justify-between gap-10 bg-white shadow-lg rounded-xl ">
        {/* Book Cover */}
        <div className="h-170 bg-zinc-200">
          <img
            src={expactedBook.image || "/placeholder-cover.jpg"} // Use image URL from your JSON
            alt={expactedBook.bookName}
            className="w-full p-10
              h-full object-containrounded-xl"
          />
        </div>

        {/* Book Information */}
        <div className="flex-1 py-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {expactedBook.bookName}
            </h1>
            <p className="text-xl text-gray-600 mt-1">
              by {expactedBook.author}
            </p>
            {/* <p className="text-sm text-gray-500 mt-2">{book.genre || book.category}</p> */}

            {/* Description / Review Snippet */}
            <div className="mt-6 text-gray-700 leading-relaxed">
              {expactedBook.review || "No description available."}
            </div>

            {/* Tags */}
            {expactedBook.tags && expactedBook.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {expactedBook.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Metadata */}
            <div className="mt-8 space-y-5 text-sm">
              <div>
                <span className="text-gray-500">Number of Pages</span>
                <p className="font-semibold text-gray-900">
                  {expactedBook.totalPages}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Publisher</span>
                <p className="font-semibold text-gray-900">
                  {expactedBook.publisher}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Year of Publishing</span>
                <p className="font-semibold text-gray-900">
                  {expactedBook.yearOfPublishing}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Rating</span>
                <p className="font-semibold text-gray-900">
                  ⭐ {expactedBook.rating}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-4">
            <button onClick={()=>handleMarkAsRead(expactedBook)} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-lg transition">
              Mark as Read
            </button>
            <button onClick={()=>handleWishlist(expactedBook)} className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3.5 rounded-lg transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
