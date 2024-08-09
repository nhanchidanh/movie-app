import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const {handlPlayMovie} = useContext(MovieContext)

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl  uppercase mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
        {data &&
          data?.length > 0 &&
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
      </div>
    </div>
  );
};

export default MovieSearch;
