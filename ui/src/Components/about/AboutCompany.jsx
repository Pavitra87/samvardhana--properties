import React, { useRef } from "react";
import Slider from "react-slick";
import journey from "../../assets/journey.png";
import AboutDetails from "../../data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AboutCompany = () => {
  const sliderRef = useRef(null);

  const cardsData = AboutDetails.aboutDetails?.cardsdetail || [];

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false, // Disable internal arrows
    dots: false,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div
        className="w-full h-[100vh] sm:h-[1000vh] md:h-[70vh] lg:h-[60vh] bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${journey})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="md:text-4xl sm:text-4xl font-bold mb-4 md:text-left sm:text-center">Our Journey</h1>
          <p className="text-sm text-white text-left sm:w-3/4 md:w-1/2 leading-relaxed">
            Founded in 2010, Samvardhana Properties has grown from a visionary
            idea into a leading real estate developer with a strong portfolio of
            successful projects. From Hoskote to Malur and Bangalore East, we’ve
            delivered 10 landmark projects that have helped shape the real
            estate landscape in these rapidly growing regions.
          </p>
        </div>
      </div>

      {/* Cards: Slider for smaller screens */}
      <div className="block md:hidden px-4 -mt-24 relative z-20">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg sm:w-[400px] mx-auto overflow-hidden shadow-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-30 object-cover"
                />
                <div className="p-6">
                  <h2 className="sm:text-base md:text-xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-600 sm:text-xs md:text-sm leading-snug whitespace-pre-line">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Slider Arrows */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <MdKeyboardArrowLeft
              size={28}
              className="text-gray-800 bg-green-100 rounded-full"
            />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <MdKeyboardArrowRight
              size={28}
              className="text-gray-800 bg-green-100 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Cards: Grid on medium and larger screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto px-4 -mt-24 relative z-20">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="md:text-xl sm:text-base font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 md:text-sm sm:text-xs leading-snug whitespace-pre-line">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;
