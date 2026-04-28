import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center max-w-lg w-full border border-white/20">
        
   
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

 
        <h2 className="text-2xl font-semibold text-white mt-4">
          Oops! Page not found
        </h2>
        <p className="text-white/80 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

    
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300">
            Go Home
          </button>
        </Link>

        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ErrorPage;