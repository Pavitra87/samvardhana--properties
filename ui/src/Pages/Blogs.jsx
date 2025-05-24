import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import blogData from "../data/data.json";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import axios from "axios";

const Blogs = () => {
  const { imgUrl, altText } = blogData.blog;
  const [apiBlogData, setApiBlogData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "https://samvardhana-properties.onrender.com/api/blog"
        );
        setApiBlogData(response.data); // expecting an array of blog objects
      } catch (err) {
        setError("Failed to fetch blog data.");
      }
    };
    fetchBlogData();
  }, []);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (apiBlogData.length === 0) return <p className="p-4">Loading...</p>;

  return (
    <>
      <Banner imgUrl={imgUrl} altText={altText} />
      <div className="max-w-6xl mx-auto mt-10 space-y-6 px-4">
        {apiBlogData.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-gray-100 gap-4 rounded-lg overflow-hidden shadow-md"
          >
            {/* Blog Image */}
            <div className="md:w-[450px] w-full h-64">
              <img
                src={
                  blog.imgUrl
                    ? `https://samvardhana-properties.onrender.com/uploads/${blog.imgUrl}`
                    : "/default-blog.jpg"
                }
                alt={blog.heading}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-black">
                  {blog.heading}
                </h2>
                <p className="text-base text-gray-700 mt-2">
                  {blog.description}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-4 flex items-center space-x-3 text-sm text-gray-500">
                <img
                  src={
                    blog.profilepic
                      ? `https://samvardhana-properties.onrender.com/uploads/${blog.profilepic}`
                      : "/default-avatar.jpg"
                  }
                  alt={blog.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-black">{blog.name}</span>
                <span className="text-gray-400">• {blog.time}</span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex justify-between text-gray-600">
                <div className="flex space-x-4 text-[15px] items-center">
                  <span className="flex items-center gap-1">
                    <AiOutlineLike className="text-green-500 text-xl" />
                    {blog.like}
                  </span>
                  <span className="flex items-center gap-1">
                    <AiOutlineDislike className="text-xl" />
                    {blog.dislike}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMessageSquare className="text-xl" />
                    {blog.message}
                  </span>
                </div>
                <IoMdShareAlt className="text-green-800 text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
