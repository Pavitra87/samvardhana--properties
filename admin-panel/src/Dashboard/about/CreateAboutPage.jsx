import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import { FaTimes } from "react-icons/fa";

const CreateAboutPage = () => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    title:""
  });
  const [imgUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "imgUrl") setImgUrl(files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
 data.append("title", formData.title);
    data.append("heading", formData.heading);
    data.append("description", formData.description);

    if (imgUrl) data.append("imgUrl", imgUrl);

    try {
      const response = await axios.post(
        "https://samvardhana-properties.onrender.com/api/about/",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(" created successfully!");
      console.log(response.data);

      // Redirect to blog dashboard after successful creation
      navigate("/aboutdashboard"); // <-- Adjust this path to your dashboard route
    } catch (error) {
      console.error("Error creating :", error);
      alert("Failed to create ");
    }
  };
  const handleClose = () => {
    navigate("/aboutdashboard"); // Go back to blog dashboard
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
            <h2 className="text-2xl font-bold mb-6 text-center">Create About</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
           
      
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
      
              
      
            
      
              <div>
                <label className="block mb-1 font-medium">About Image</label>
                <input
                  type="file"
                  name="imgUrl"
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
                Create About
              </button>
            </form>
          </div>
  )
}

export default CreateAboutPage