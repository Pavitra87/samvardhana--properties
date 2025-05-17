import React from "react";
import masterplan from "../../assets/masterplan.png";


const MasterPlan = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
        Master Plan
      </h2>
      <div className="flex justify-center">
        <img
          src={masterplan}
          alt="Master Plan"
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto  object-contain"
        />
      </div>
    </div>
  );
};

export default MasterPlan;
