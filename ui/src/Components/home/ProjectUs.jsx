import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import Projectdetails from "../../data/data.json";
import { Link } from "react-router-dom";




// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-white cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowDroprightCircle size={32} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowDropleftCircle size={32} />
  </div>
);
const ProjectUs = () => {
  const images = Projectdetails.projectDetails?.images || [];
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
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="py-2 px-4">
      <>
        <div className="mb-4 flex items-center  gap-3 text-sm">
          <span className="h-0.5 w-10 bg-green-800"></span>
          <h5 className="text-sm font-semibold uppercase tracking-widest text-green-800">
           Our Projects
          </h5>
        </div>
        <h2 className="text-2xl md:text-2xl font-bold text-gray-800 leading-snug mb-4">
        Discover our projects – Where Innovation, Luxury, and Location Come Together!
        </h2>
        <p className="text-gray-600 mb-6 text-base">
        we offer a comprehensive range of real estate services designed to meet the diverse needs of our clients. Whether you’re looking for a dream home, commercial investment, or sustainable living space, 
        we provide personalized solutions that ensure quality, satisfaction, and long-term value.
        </p>
        <div className="flex flex-row mb-3 gap-3">
          <Link to='/project' className="inline-flex items-center border gap-2 bg-green-800 text-white px-5 py-3 rounded text-sm ">
            Completed Projects
          </Link>
          <button className="inline-flex items-center border gap-2 bg-gray-100 text-black px-5 py-3 rounded text-sm ">
            Ongoing Projects
          </button>
        </div>
      </>
      {/* Slider Section */}
      <>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-60 object-cover px-1"
                />
              </div>
            </div>
          ))}
        </Slider>
      </>
    </div>
  );
};

export default ProjectUs;
