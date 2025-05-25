import React, { useState } from "react";
import Banner from "../Components/Banner";
import contactData from "../data/data.json";
import { FaArrowRight, FaPhone, FaTimes } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Question from "../Components/Question";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
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

  try {
    const response = await axios.post(
      "https://samvardhana-properties.onrender.com/api/contact/",
      formData, // send plain JSON
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Message sent successfully!");
    console.log(response.data);

    // Optional: Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
  } catch (error) {
    console.error("Submission error:", error);
    alert("Failed to send message.");
  }
};


  const { imgUrl, altText } = contactData.contact;

  return (
    <>
      <Banner imgUrl={imgUrl} altText={altText} textColor="black" />

      <section className="max-w-7xl mx-auto px-4 py-12">
         <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <div>
           
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-sm shadow-md">
              {["name", "email", "phone", "city"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-base font-medium text-gray-700 capitalize">
                    {field === "phone" ? "Phone Number" : field}
                  </label>
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    name={field}
                    placeholder={`Enter ${field}`}
                      value={formData[field]}
                    required
                    onChange={handleChange}
                    className="w-full bg-green-50 px-4 py-2 mt-1 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                   value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-green-50 px-4 py-2 mt-1 rounded-sm text-base resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white text-sm px-6 py-2 rounded-md hover:bg-green-700 flex items-center transition"
              >
                Send <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>

          {/* Right: Map and Info */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="h-96 w-full  overflow-hidden shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019244916738!2d144.96305771531797!3d-37.81421797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f06a7a91%3A0xb1d8f971e1c012e6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632730272311!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Support Info */}
            <div className="text-gray-700 space-y-2">
              <h4 className="font-bold text-lg">Support</h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <IoMail className="text-orange-600" />
                  info@samvardhan.co.in
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-orange-600" />
                  08065478
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="text-gray-700">
              <h4 className="font-bold text-lg mb-1">Office Address</h4>
              <div className="flex items-start gap-2 text-sm">
                <FaLocationDot className="text-orange-600 text-lg mt-1" />
                <p>
                  No:4540, Ayyappa Swami Temple, 3333/781/3322, Opposite Main
                  Road, M V Extension, Hoskote, Bengaluru, Karnataka 581324
                </p>
              </div>
            </div>

            {/* Office Timing */}
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <span className="bg-green-50 p-2 rounded">
                Mon–Fri: <span className="text-green-700">9:00 – 17:00</span>
              </span>
              <span className="bg-green-50 p-2 rounded">
                Saturday: <span className="text-green-700">9:00 – 14:00</span>
              </span>
              <span className="bg-gray-100 p-2 rounded">
                Sunday: <span className="text-red-600">Closed</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-10">
        <Question />
      </div>
    </>
  );
};

export default Contact;
