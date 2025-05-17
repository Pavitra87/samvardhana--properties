import React, { useRef } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import CustomerData from "../../data/data.json";

const CustomerSays = () => {
  const images = CustomerData.customer || [];
  const sliderRef = useRef(null); 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <div className="md:py-1 sm:py-3 px-4">
      <div className="text-center mb-6 flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-gray-800">What our customers say?</h2>
        <p className="text-base text-gray-500">Hear from our satisfied customers and clients.</p>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
          <div key={index}>
          <div className="h-[400px] overflow-hidden bg-white border m-2 flex flex-col flex-1">
            <img
              src={item.img}
              alt={`Customer ${index + 1}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center flex flex-col justify-between ">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {item.heading}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        </div>
        
          ))}
        </Slider>

        {/* Custom arrows below the slider using sliderRef */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <MdKeyboardArrowLeft  size={28} className="text-green-800 border rounded-full cursor-ponter " />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()} >
            <MdKeyboardArrowRight  size={28} className="text-green-800 border rounded-full cursor-ponter " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
