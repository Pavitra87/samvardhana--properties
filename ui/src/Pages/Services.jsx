import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import ServiceData from "../data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Desktop arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:block absolute top-[220px] right-2 transform -translate-y-1/2 z-10 text-green-800 bg-white rounded-full cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowRight size={32} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden sm:block absolute top-[220px]  left-2 transform -translate-y-1/2 z-10 text-green-800 bg-white rounded-full cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft  size={32} />
  </div>
);

const Services = () => {
  const sliderRef = useRef(); // 👈 Create a reference for Slider

  const images = ServiceData.services || [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
        autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false, // mobile: hide default arrows
        },
      },
    ],
  };

  return (
    <div className="px-4 py-6">
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3 text-sm">
        <span className="h-0.5 w-10 bg-green-800"></span>
        <h5 className="text-sm font-semibold uppercase tracking-widest text-green-800">
          Our Services
        </h5>
      </div>
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 leading-snug mb-4">
        Samvardhana Properties: Comprehensive Real Estate Services, Tailored for You
      </h2>
      <p className="text-gray-600 mb-6 text-base leading-normal">
        We offer a comprehensive range of real estate services designed to meet the diverse needs of our clients.
        Whether you’re looking for a dream home, commercial investment, or sustainable living space,
        we provide personalized solutions that ensure quality, satisfaction, and long-term value.
      </p>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <div className="bg-white border m-2  overflow-hidden">
              <img
                src={item.img}
                alt={`Service ${index + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-800">{item.heading}</h3>
                <p className="text-sm text-gray-600 leading-normal">{item.description}</p>
                <button className="mt-auto  inline-flex items-center gap-2 px-4 py-2 text-sm bg-green-800 text-white rounded hover:bg-green-700 transition w-fit">
                  {item.btn} <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Mobile Arrows */}
      <div className="sm:hidden flex justify-center gap-5  ">
        <MdKeyboardArrowLeft
          size={32}
          className="cursor-pointer text-green-800 border rounded-full"
          onClick={() => sliderRef.current?.slickPrev()} 
        />
        <MdKeyboardArrowRight
          size={32}
          className=" cursor-pointer text-green-800 border rounded-full"
          onClick={() => sliderRef.current?.slickNext()} 
        />
      </div>
    </div>
  );
};

export default Services;
