import React from "react";

const Banner = () => {
  const iconRating =
    "https://movie-trailer1.vercel.app/assets/rating-BuQvW_pG.png";
  const iconRatingHalf =
    "https://movie-trailer1.vercel.app/assets/rating-half-Cfr3I943.png";
  const tempImage =
    "https://movie-trailer1.vercel.app/assets/temp-1-Dei48Wx-.jpeg";

  return (
    <div className="bg-banner relative w-full h-[700px] bg-cover bg-center">
      <div className="bg-black absolute w-full h-full opacity-40"/>
      <div className="relative z-10 flex items-center justify-center w-full h-full space-x-[30px] p-10">
        {/* Content */}
        <div className="flex flex-col items-baseline space-y-5 w-1/2">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-base py-2 px-3">
            TV Show
          </p>
          <div className="space-y-4">
            <h2 className="text-white font-bold text-4xl">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={iconRating} className="w-8 h-8" alt="rating" />
              <img src={iconRating} className="w-8 h-8" alt="rating" />
              <img src={iconRating} className="w-8 h-8" alt="rating" />
              <img src={iconRating} className="w-8 h-8" alt="rating" />
              <img src={iconRatingHalf} className="w-8 h-8" alt="rating" />
            </div>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              eveniet obcaecati reprehenderit inventore mollitia, itaque
              repellendus exercitationem, voluptas in incidunt tempore ex
              nostrum et ad tenetur facilis eum nisi sequi. Error doloremque
              quis earum corrupti pariatur sed numquam ducimus incidunt
              delectus, dolorem minus minima repellendus tempore mollitia
              excepturi quo alias corporis omnis voluptatem ullam vel labore
              velit! Ab, non.
            </p>
            <div className="space-x-4">
              <button className="text-white p-3 bg-black font-bold">
                Chi Tiết
              </button>
              <button className="text-white p-3 bg-red-600 font-bold">
                Xem phim
              </button>
            </div>
          </div>
        </div>

        {/* Image temp */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={tempImage}
              className="w-full h-full object-cover"
              alt="tempImage"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src="https://movie-trailer1.vercel.app/assets/play-button-BXNI1BZT.png"
                alt="iconplay"
                className="h-16 w-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
