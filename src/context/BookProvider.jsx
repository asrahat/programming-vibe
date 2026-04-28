import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  // -----------------
  const [readBooks,setReadBooks]= useState([])
  const [wishList,setWishList]= useState([])

  const handleMarkAsRead = (currentBook)=>{
    // step-1: store book id
    // step-1: where to store
    // step-1: array or collection
    // step-1: if the book is already exist the show a aleart or toast
    // step-1: if not the add the book in the array or collection

    
    const isExistBook = readBooks.find(book=>book.bookId === currentBook.bookId);
    if(isExistBook){
      toast.error('This is already Exist')
    }else{
      setReadBooks([...readBooks, currentBook])
      toast.success(`${currentBook.bookName} is added to list`)
    }
    // console.log(currentBook,readBooks,'currentBook');
  }
  const handleWishlist = (currentBook)=>{
    // step-1: store book id
    // step-1: where to store
    // step-1: array or collection
    // step-1: if the book is already exist the show a aleart or toast
    // step-1: if not the add the book in the array or collection
    const isExistInReadList = readBooks.find(book=>book.bookId === currentBook.bookId);
    if(isExistInReadList){
      toast.error('this book is already in Read list');
      return;
    }

    const isExistWishlist = wishList.find(book=>book.bookId === currentBook.bookId);
    if(isExistWishlist){
      toast('This is already Exist')
    }else{
      setWishList([...wishList, currentBook])
      toast.success(`${currentBook.bookName} is added to Wishlist`)
    }
    // console.log(currentBook,readBooks,'currentBook');
  }
    const data = {
        readBooks,setReadBooks,handleMarkAsRead,handleWishlist,wishList,setWishList
    };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
