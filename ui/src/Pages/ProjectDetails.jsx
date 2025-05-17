import React from "react";
import Slider from "react-slick";
import Projectdetails from "../data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import LocationHighlights from "../Components/project-details/LocationHighlights";
import LayoutSection from "../Components/project-details/LayoutSection";
import KeyAminates from "../Components/project-details/KeyAminates";
import MasterPlan from "../Components/project-details/MasterPlan";
import ProjectLocation from "../Components/project-details/ProjectLocation";
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

const ProjectDetails = () => {
  const images = Projectdetails.projectDetails?.images || [];

  const keyData = Projectdetails.projectDetails?.keyammenties || [];

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
    <>
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

      {/* Description Section */}
      <div className="max-w-7xl mx-auto">
        <LayoutSection />

        <hr />

        <>
          <KeyAminates />
        </>

        <hr />
        <>
          <MasterPlan />
        </>

        <>
          <ProjectLocation />
        </>

        <div className="p-6">
          <LocationHighlights />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
