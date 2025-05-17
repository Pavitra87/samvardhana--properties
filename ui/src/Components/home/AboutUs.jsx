import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutus1 from "../../assets/aboutus1.png";
import aboutus2 from "../../assets/aboutus2.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-1 px-4  md:px-2 ">
      <div className="grid md:grid-cols-2 gap-6 ">
        {/* Images Section */}
        <div className="flex gap-4 md:gap-6 ">
          <img
            src={aboutus1}
            alt="About Us 1"
            className="rounded-sm shadow-md w-1/2 h-64 object-cover"
          />
          <img
            src={aboutus2}
            alt="About Us 2"
            className="rounded-sm shadow-md w-1/2 h-64 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className=" ">
          <div className="mb-4 flex items-center sm:gap-2 sm:mb-2  gap-3 text-sm">
            <span className="h-0.5 w-10 bg-green-800"></span>
            <h5 className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Who We Are
            </h5>
          </div>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 leading-snug mb-2">
          Discover Sustainable Luxury Living with Samvardhana properties.
          </h2>
          <p className="text-gray-600 mb-6 text-base">
          Building sustainable communities for a better tomorrow. With a focus on eco-friendly 
          developments and prime
           locations, we deliver residential and commercial spaces that inspire.
          </p>
          <button className="inline-flex items-center gap-2 bg-green-800 text-white px-5 py-2 rounded-md text-sm hover:bg-green-700 transition">
            Know More <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
