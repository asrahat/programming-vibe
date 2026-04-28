import React from "react";
import bannerImg from '../../../../../assets/banner.png'
const Banner = () => {
  return (
    <div className="hero bg-white min-h-[70vh] container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse  justify-between w-full">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg "
        />
        <div className="space-y-5">
          <h1 className="text-6xl font-bold w-full">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="px-4 py-1 bg-green-500 text-white rounded-md ">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
