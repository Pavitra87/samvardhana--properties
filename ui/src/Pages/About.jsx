import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import aboutBannerData from "../data/data.json"; 
import AboutCompany from "../Components/about/AboutCompany";
import Offer from "../Components/about/Offer";
import WhyChooseUs from "../Components/about/WhyChooseUs";
import axios from "axios";

const About = () => {
  const { imgUrl, altText } = aboutBannerData.about;

  const [apiAboutData, setApiAboutData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get("https://samvardhana-properties.onrender.com/api/about");
        setApiAboutData(response.data[0]); 
      } catch (err) {
        setError("Failed to fetch About data.");
      }
    };
    fetchAboutData();
  }, []);

  return (
    <>
      <Banner imgUrl={imgUrl} altText={altText} />

      <div className="max-w-7xl md:max-w-6xl mx-auto mt-14 px-4">
        {apiAboutData ? (
          <div className="flex flex-col md:flex-row gap-8 h-auto md:h-64">
            <div className="w-full md:w-1/2">
              <img
                src={
                  apiAboutData.imgUrl?.length > 0
                    ? `https://samvardhana-properties.onrender.com/uploads/${apiAboutData.imgUrl}`
                    : '/default-image.jpg'
                }
                alt={apiAboutData.heading}
                className="w-full h-64 md:h-full object-cover rounded-md"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-3 text-sm">
              <div className="mb-2 flex items-center gap-1">
                <span className="h-0.5 w-8 bg-green-800"></span>
                <h5 className="text-sm font-semibold uppercase tracking-wide text-green-800">
                  About Us
                </h5>
              </div>

              <h1 className="text-2xl md:text-2xl font-bold mb-1">
                {apiAboutData.heading}
              </h1>
              <p className="text-base md:text-base text-gray-600 leading-relaxed">
                {apiAboutData.description}
              </p>
            </div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-14 px-4 ">
        <AboutCompany />
      </div>
      <div className="max-w-7xl mx-auto md:mt-12 sm:mt-8 px-4 py-2 ">
        <WhyChooseUs />
      </div>
      <div className="max-w-7xl mx-auto md:mt-12 sm:mt-8 px-4">
        <Offer />
      </div>
    </>
  );
};

export default About;
