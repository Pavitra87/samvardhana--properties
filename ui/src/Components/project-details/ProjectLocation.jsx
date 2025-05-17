import React from 'react';
import location from "../../assets/location.png";

const ProjectLocation = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
        Location
      </h2>
      <div className="flex justify-center">
        <img
          src={location}
          alt="Project Location"
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-auto rounded-lg shadow-md object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectLocation;
