import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // <-- import useNavigate
import { FaTimes } from "react-icons/fa";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    heading: "",
    description: "",
   
    message: "",
  });

  const [imgUrl, setImgUrl] = useState(null);
  const [profilepic, setProfilepic] = useState(null);
  const navigate = useNavigate(); // <-- get navigate function

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "imgUrl") setImgUrl(files[0]);
    if (name === "profilepic") setProfilepic(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("heading", formData.heading);
    data.append("description", formData.description);
    data.append("like", formData.like);
    data.append("dislike", formData.dislike);
    data.append("message", formData.message);
    if (imgUrl) data.append("imgUrl", imgUrl);
    if (profilepic) data.append("profilepic", profilepic);

    try {
      const response = await axios.post("https://samvardhana-properties.onrender.com/api/blog/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog created successfully!");
      console.log(response.data);

      // Redirect to blog dashboard after successful creation
       navigate("/blogdashboard");  // <-- Adjust this path to your dashboard route

    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog");
    }
  };
 const handleClose = () => {
    navigate("/blogdashboard");  // Go back to blog dashboard
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 relative">
       <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-bold"
        aria-label="Close create blog form"
      >
       <FaTimes/>
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Create Blog</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="heading"
          placeholder="Heading"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
          rows={3}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
          <label className="block mb-1 font-medium">Blog Image</label>
          <input
            type="file"
            name="imgUrl"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Profile Picture</label>
          <input
            type="file"
            name="profilepic"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
