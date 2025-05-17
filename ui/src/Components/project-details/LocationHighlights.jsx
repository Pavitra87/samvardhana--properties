import React from "react";
import Projectdetails from "../../data/data.json";

const LocationHighlights = () => {
  const locationData = Projectdetails.projectDetails?.locationhighlights || [];

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 sm:text-center md:text-left text-center">Location Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3 max-auto">
        {locationData.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <img
              src={item.img}
              alt={item.heading}
              className="w-full h-48 sm:h-40 md:h-44 lg:h-48 object-cover"
            />
            <div className="p-2">
              <h5 className="text-base font-semibold mb-2">{item.heading}</h5>
              <ul className="list-disc list-inside  text-gray-700 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="text-xs">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationHighlights;
