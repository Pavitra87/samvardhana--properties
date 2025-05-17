import React from "react";
import Projectdetails from "../../data/data.json";

const LayoutSection = () => {
    const layoutData = Projectdetails.projectDetails?.layout || [];
  return (
    <>
      <div className="mt-8 mb-5 px-4 flex flex-col md:flex-row gap-5">
        {/* Left Section (Text) */}
        <div className="flex-1 flex flex-col gap-5 max-w-full md:max-w-2xl">
          <div className="top">
            <h2 className="text-xl md:text-xl font-semibold">
              Nisarga Hi-Tech Layout, Hoskote
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Situated in the rapidly growing satellite town of Hoskote, just 20
              km from Bangalore’s Central Business District (CBD) and 18 km from
              the International Airport, Nisarga Hi-Tech Layout offers the
              perfect combination of urban proximity and eco-friendly living.
            </p>
          </div>
          <div className="bottom">
            <h4 className="font-semibold text-base">Plot Availability:</h4>
            <p className="text-gray-600 text-xs md:text-sm leading-snug">
              A variety of plot sizes are available to suit your needs, offering
              ample space to build your dream home. Whether you’re looking for a
              compact residential plot or a larger area for a villa, Nisarga
              Hi-Tech Layout has the right option for you.
            </p>
          </div>
        </div>

        {/* Right Section (Grid) */}
        <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-4 text-green-700">
          {layoutData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-green-100 rounded p-2"
            >
              <img
                src={item.img}
                alt={`Layout ${index + 1}`}
                className="w-8 h-8 object-cover rounded" // slightly larger
              />
              <p className="text-xs sm:text-xs mt-1 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutSection;
