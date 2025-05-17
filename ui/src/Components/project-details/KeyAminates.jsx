import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projectdetails from "../../data/data.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
      autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const KeyAminates = () => {
  const sliderRef = useRef(null);
  const keyData = Projectdetails.projectDetails?.keyammenties || [];

  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold mb-2 md:text-left text-center">
        Key Amenities
      </h2>
      <p className="mb-6 text-bse md:text-left text-center">
        The well-designed space offers a range of premium amenities for your
        comfort and convenience.
      </p>

      {/* Slider: Mobile View */}
      <div className="block md:hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {keyData.map((item, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center p-2 border rounded shadow-sm">
                <img
                  src={item.keyimg}
                  alt={item.text}
                  className="w-10 h-10 object-contain mb-2"
                />
                <span className="text-sm text-center">{item.text}</span>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <MdKeyboardArrowLeft
              size={28}
              className="text-green-800 border rounded-full cursor-pointer"
            />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <MdKeyboardArrowRight
              size={28}
              className="text-green-800 border rounded-full cursor-ponter"
            />
          </button>
        </div>
      </div>

      {/* Grid: Desktop View */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-3">
        {keyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded shadow-sm"
          >
            <img
              src={item.keyimg}
              alt={item.text}
              className="w-10 h-10 object-contain mb-2"
            />
            <span className="text-sm text-center">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyAminates;
