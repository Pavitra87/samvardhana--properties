import React from "react";
import Banner from "../Components/Banner";
import projectData from "../data/data.json";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const { imgUrl, altText, explore } = projectData.projects;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {explore.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden border border-gray-200 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover"
              />
              <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-sm mb-4">{project.description}</p>
                </div>
                <Link
                  to="/project-details"
                  className="mt-auto text-white bg-green-800 text-sm sm:text-sm px-3 py-2 rounded flex items-center gap-2 w-fit hover:bg-green-700 transition-colors"
                >
                  <span>{project.buttonText}</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
