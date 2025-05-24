import React,{ useState, useEffect } from "react";
import Banner from "../Components/Banner";
import projectData from "../data/data.json";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-black cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowDroprightCircle size={32} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-black cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowDropleftCircle size={32} />
  </div>
);

const Projects = () => {
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
  const { imgUrl, altText, explore } = projectData.projects;
  const [apiProjectData, setApiProjectData] = useState([]);
  const [error, setError] = useState(null);
useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get("https://samvardhana-properties.onrender.com/api/project");
        setApiProjectData(response.data); 
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch blog data.");
      }
    };
    fetchProjectData();
  }, []);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (apiProjectData.length === 0) return <p className="p-4">Loading...</p>;
  return (
    <>
      <Banner imgUrl={imgUrl} altText={altText} />

      <div className="max-w-7xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Header */}
        <div className="mb-2 flex items-center gap-3">
          <span className="h-0.5 w-10 bg-green-800"></span>
          <h5 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-green-800">
            Our Projects
          </h5>
        </div>

        {/* Welcome Heading */}
        <div className="mb-4">
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold">
            Welcome to Samvardhana Properties!
          </h2>
        </div>

        {/* Introduction Paragraph */}
        <div className="mb-5 max-w-3xl text-gray-600">
          <p className="text-base sm:text-sm">
            Samvardhana Properties, where modern living meets strategic
            locations and unparalleled amenities. Our projects are designed to
            offer sustainable, luxurious, and convenient living spaces that
            cater to diverse lifestyles. Explore our latest developments that
            promise a perfect blend of comfort, nature, and urban accessibility.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
          <Link to="/project-details">
            <button className="bg-orange-600 text-white px-4 sm:px-5 py-2 text-sm hover:bg-green-700 transition-colors duration-200">
              Featured Projects
            </button>
          </Link>
          <button className="bg-gray-200 border border-gray-300 text-black px-4 sm:px-5 py-2 text-sm">
            All Ongoing Projects
          </button>
          <button className="bg-gray-200 border border-gray-300 text-black px-4 sm:px-5 py-2 text-sm">
            Completed Projects
          </button>
        </div>

        {/* Project Cards */}
       
      <div className="relative">
  <Slider {...settings}>
    {apiProjectData.map((project, index) => (
      <div key={index} className="px-2"> {/* spacing between slides */}
        <div className="bg-white rounded-md overflow-hidden border border-gray-200 flex flex-col hover:shadow-md transition-shadow duration-300">
          <img
            src={
              project.imgUrl
                ? `https://samvardhana-properties.onrender.com/uploads/${project.imgUrl}`
                : '/default-image.jpg'
            }
            alt={project.heading}
            className="w-full h-56 object-cover" // height adjusted for consistency
          />
          <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-base sm:text-base font-semibold mb-2">
                {project.heading}
              </h3>
              <p className="text-gray-600 text-sm sm:text-sm mb-4">
                {project.description}
              </p>
            </div>
            <Link
              to="/project-details"
              className="mt-auto text-white bg-green-800 text-sm sm:text-sm px-3 py-2 rounded flex items-center gap-2 w-fit hover:bg-green-700 transition-colors"
            >
              <span>Explore</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

        
      </div>
    </>
  );
};

export default Projects;
