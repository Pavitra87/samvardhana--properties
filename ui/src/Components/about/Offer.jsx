import React from "react";
import offerBg from "../../assets/offer.png";
import AboutDetails from "../../data/data.json";

const Offer = () => {
  const offerData = AboutDetails.aboutDetails?.offer || [];

  return (
    <div className="relative">
      {/* Background Section */}
      <div
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${offerBg})` }}
      >
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          What We Offer
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 -mt-20 md:-mt-28 relative z-10 py-10">
        {offerData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center p-6"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full p-4 flex items-center justify-center mb-4">
              <img
                src={card.img}
                alt={card.heading}
                className="max-w-full max-h-full"
              />
            </div>
            <h2 className="text-2xl md:text-lg font-semibold text-gray-800 mb-2">
              {card.heading}
            </h2>
            <p className="text-gray-600 text-base md:text-base leading-relaxed">
              {card.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
