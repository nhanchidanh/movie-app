import React, { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import { MovieContext } from "../contexts/MovieProvider";

// Carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const { handlPlayMovie } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl  uppercase mb-4">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item?._id}
              onClick={() => handlPlayMovie(item?.slug)}
              className="w-[200px] h-[300px] relative group select-none"
            >
              <div className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <img
                  src={`${import.meta.env.VITE_IMG_URL}/${item?.poster_url}`}
                  alt="imagemovie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-base">
                    {item?.name || item?.origin_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default MovieList;
