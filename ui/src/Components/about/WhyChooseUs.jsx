import React, { useRef, useEffect, useState } from "react";
import choice1 from "../../assets/choice1.png";
import choice2 from "../../assets/choice2.png";
import choice3 from "../../assets/choice3.png";
import choice4 from "../../assets/choice4.png";
import choiceus from "../../assets/choiceus.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-white   sm:px-4 lg:px-2 max-auto   ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 item-center">
        {/* Left - Features */}
        <div>
          <h4 className="md:text-left text-2xl font-bold text-gray-800 mb-4 mt-1 sm:text-center text-center">
            Why Choose Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start space-x-4 border rounded-sm bg-gray-100 p-3">
              <img src={choice1} alt="cus" className="w-5 h-5 mt-1" />
              <div>
                <h6 className="text-base font-semibold text-gray-700 mb-1">
                  Customer-Centric Approach:
                </h6>
                <p className="text-sm text-gray-600">
                  Our customers are at the heart of everything we do. We listen
                  to your needs, understand your expectations, and tailor our
                  offerings to deliver the best experience. Whether you’re
                  looking for a residential plot or a commercial space, our team
                  is dedicated to making the process smooth and rewarding.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4 border rounded-sm bg-gray-100 p-3">
              <img src={choice2} alt="" className="w-5 h-5 mt-1" />
              <div>
                <h6 className="text-base font-semibold text-gray-700 mb-1">
                  Sustainability:
                </h6>
                <p className="text-sm text-gray-600">
                  We believe in building for the future. Our projects are
                  designed with sustainable practices in mind, including green
                  building principles and eco-friendly infrastructure. From
                  rainwater harvesting to energy-efficient designs, we strive to
                  minimize our environmental footprint.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4 border rounded-sm bg-gray-100 p-3">
              <img src={choice3} alt="" className="w-5 h-5 mt-1" />
              <div>
                <h6 className="text-base font-semibold text-gray-700 mb-1">
                  Customer-Centric Approach:
                </h6>
                <p className="text-sm text-gray-600">
                  Our customers are at the heart of everything we do. We listen
                  to your needs, understand your expectations, and tailor our
                  offerings to deliver the best experience. Whether you’re
                  looking for a residential plot or a commercial space, our team
                  is dedicated to making the process smooth and rewarding.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4 border rounded-sm bg-gray-100 p-3">
              <img src={choice4} alt="" className="w-5 h-5 mt-1" />
              <div>
                <h6 className="text-base font-semibold text-gray-700 mb-1">
                  Sustainability:
                </h6>
                <p className="text-sm text-gray-600">
                  We believe in building for the future. Our projects are
                  designed with sustainable practices in mind, including green
                  building principles and eco-friendly infrastructure. From
                  rainwater harvesting to energy-efficient designs, we strive to
                  minimize our environmental footprint.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src={choiceus}
            alt="Why Choose Us"
            className="max-w-full h-[630px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
