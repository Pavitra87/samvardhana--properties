import React from "react";
import upcoming from "../../assets/upcoming.png";

const UpcomingProject = () => {
  return (
    <div className=" bg-gray-100 ">
      <img
        src={upcoming}
        alt="Upcoming Project"
        className="w-full h-[515px] object-contain"
      />
    </div>
  );
};

export default UpcomingProject;
