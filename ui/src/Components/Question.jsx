import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

const Question = ({ hideSubText = false }) => {
  const [openId, setOpenId] = useState(null);
  const [faqList, setFaqList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("https://samvardhana-properties.onrender.com/api/faqs");
        setFaqList(response.data); // Store all FAQ items
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to fetch FAQ data.");
      }
    };
    fetchFaqs();
  }, []);

  const toggleAnswer = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!faqList.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="w-full px-4 py-2 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto">
      <h2 className={`text-center text-3xl font-bold ${!hideSubText ? "mb-1" : "mb-4"}`}>
        FAQs
      </h2>

      {!hideSubText && (
        <p className="text-center text-base text-gray-600 mb-6">
          Hear from our satisfied customers and clients
        </p>
      )}

      <div className="flex flex-col gap-3">
        {faqList.map((faq, index) => {
          const isOpen = openId === faq._id;

          return (
            <div
              key={faq._id}
              className="transition-all duration-300 border border-gray-200 rounded-md"
              onClick={() => toggleAnswer(faq._id)}
            >
              {/* Question */}
              <div
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors rounded-t-md ${
                  isOpen ? "bg-[#effaeb]" : "bg-[#edf5ef]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-base font-semibold ${
                      isOpen ? "text-green-800" : "text-[#b4bdb1]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h5 className="text-base text-gray-800">{faq.question}</h5>
                </div>
                <span className="bg-white text-green-700 rounded-full p-1">
                  {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </div>

              {/* Answer */}
              {isOpen && (
                <div className="bg-[#effaeb] px-4 py-3 text-base text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
