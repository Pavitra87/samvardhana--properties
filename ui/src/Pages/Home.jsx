import React from "react";
import homebanner1 from "../assets/homebanner/home-banner1.png";
import homebanner2 from "../assets/homebanner/home-banner2.png";

import AboutUs from "../Components/home/AboutUs";
import ProjectUs from "../Components/home/ProjectUs";
import UpcomingProject from "../Components/home/UpcomingProject";
import Services from "./Services";
import CustomerSays from "../Components/home/CustomerSays";

import Question from "../Components/Question";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-4 left-1/2 transform -translate-x-[-40px] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <MdKeyboardArrowRight size={28} className="text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-4 left-1/2 transform -translate-x-[40px] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <MdKeyboardArrowLeft size={28} className="text-gray-800" />
  </button>
);

const Home = () => {
  const banners = [homebanner1, homebanner2];
  const bannerSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
    
<div className="relative w-full h-[100vh] object-conatin">
  <Slider {...bannerSettings}>
    {banners.map((banner, index) => (
      <div key={index} >
        <img
          src={banner}
          alt={`Home Banner ${index + 1}`}
          className="w-full h-[87vh] "
        />
      </div>
    ))}
  </Slider>
</div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto mt-1 px-4 md:px-5">
        <AboutUs />
      </div>

      {/* Project Us Section */}
      <div className="max-w-7xl mx-auto mt-8 px-4 md:px-5">
        <ProjectUs />
      </div>

      {/* upcoming project Section */}
      <div className="max-w-7xl mx-auto mt-7 px-4 md:px-5">
        <UpcomingProject />
      </div>
      {/* service Section */}
      <div
        className="max-w-7xl mx-auto mt-10 px-4 md:px-5"
        id="services-section"
      >
        <Services />
      </div>

      {/* customer says Section */}
      <div className="max-w-7xl mx-auto mt-2 px-4 md:px-5">
        <CustomerSays />
      </div>

      {/* faq says Section */}
      <div className="max-w-7xl mx-auto mt-1 px-4 md:px-5">
        <Question hideSubText={true} />
      </div>
    </>
  );
};

export default Home;
