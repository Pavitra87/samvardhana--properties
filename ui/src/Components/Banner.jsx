import React from "react";

const Banner = ({ imgUrl, altText, textColor = "white" }) => {
  return (
    <div className="relative w-full h-[40vh]">
      <img
        src={imgUrl}
        alt={altText}
        className="w-full h-full object-cover shadow-lg "
      />
      <h1
        className={`absolute  left-10 top-5 p-8 text-${textColor} font-bold text-5xl md:text-5xl sm:text-4xl `}
      >
        {altText}
      </h1>
    </div>
  );
};

export default Banner;
