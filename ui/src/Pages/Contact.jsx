import React, { useState } from "react";
import Banner from "../Components/Banner";
import contactData from "../data/data.json";
import { FaArrowRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Question from "../Components/Question";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import { FaTimes } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("city", formData.city);

    data.append("message", formData.message);
    try {
      const response = await axios.post(
        "https://samvardhana-properties.onrender.com/api/contact/",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(" created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating :", error);
      alert("Failed to create ");
    }
  };

  const { imgUrl, altText } = contactData.contact;

  return (
    <>
      <Banner imgUrl={imgUrl} altText={altText} textColor="black" />

      <div className="max-w-7xl md:max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border rounded-lg p-5 bg-white shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                 required
                 placeholder="Enter Name"
                  onChange={handleChange}
                  className="w-full bg-green-50 rounded-lg px-4 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                 
                  onChange={handleChange}
                  className="w-full bg-green-50 rounded px-4 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91"
                 
                  onChange={handleChange}
                  className="w-full bg-green-50 rounded px-4 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                
                  onChange={handleChange}
                  className="w-full bg-green-50 rounded px-4 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Description"
                
                  onChange={handleChange}
                  className="w-full bg-green-50 h-10 rounded px-4 py-2 h-[85px] text-sm mt-1 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white text-sm px-6 py-2 rounded hover:bg-green-700 transition duration-200 ease-in-out flex items-center justify-center"
            >
              Send <FaArrowRight className="ml-2" />
            </button>
          </form>

          {/* Map & Contact Info */}
          <div className="space-y-6">
            <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019244916738!2d144.96305771531797!3d-37.81421797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f06a7a91%3A0xb1d8f971e1c012e6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632730272311!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="text-gray-700">
              <h4 className="font-bold text-base mb-2">Support</h4>
              <div className="flex flex-row  md:flex-row gap-7 items-center">
                <p className="text-xs flex flex-row gap-3 items-center">
                  <span className="text-orange-600 text-sm rounded-xl bg-orange-50">
                    <IoMail />
                  </span>
                  info@samvardhan.co.in
                </p>
                <p className="text-xs flex flex-row gap-3 items-center">
                  <span className="text-orange-600 text-sm rounded-xl bg-orange-50">
                    <FaPhone />
                  </span>{" "}
                  08065478
                </p>
              </div>
            </div>

            <div className="text-gray-700">
              <h4 className="font-bold text-base mb-2">Office Address</h4>
              <p className="text-sm flex flex-row gap-2">
                <span className="text-orange-600 text-xl  rounded-xl  p-1 ">
                  <FaLocationDot className="sm:bg-orange-none" />
                </span>
                <span className="flex flex-wrap w-1/2">
                  No:4540, Ayyappa Swami Temple, 3333/781/3322, Opposite Main
                  Road, M V Extension, Hoskote, Bengaluru, Karnataka 581324
                </span>
              </p>
            </div>

            <div className="text-gray-700 font-bold flex flex-row gap-1 flex-wrap">
              <p className="text-sm bg-green-50 rounded-sm p-1">
                Sunday-Monday{" "}
                <span className="text-green-700"> (9:00 – 17:00)</span>
              </p>
              <p className="text-sm bg-green-50 rounded-sm p-1">
                Saturday <span className="text-green-700"> (9:00 – 14:00)</span>
              </p>
              <p className="text-sm bg-gray-50 rounded-sm p-1">
                Sunday <span className="text-red-700">(Closed)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-1">
        <Question />
      </div>
    </>
  );
};

export default Contact;
