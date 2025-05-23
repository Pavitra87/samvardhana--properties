import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CreateFaqForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
     const response = await axios.post(
  "https://samvardhana-properties.onrender.com/api/faqs/",
  formData,
  {
    headers: { "Content-Type": "application/json" },
  }
);

      if (response.data.success) {
        alert("FAQ created successfully!");
        navigate("/faqdashboard");
      } else {
        setError("Failed to create FAQ");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/faqdashboard");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-bold"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Create FAQ</h2>

      {error && (
        <p className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="question" className="block mb-2 font-medium text-gray-700">
            Question
          </label>
          <input
            id="question"
            name="question"
            type="text"
            value={formData.question}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the FAQ question"
          />
        </div>

        <div>
          <label htmlFor="answer" className="block mb-2 font-medium text-gray-700">
            Answer
          </label>
          <textarea
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the FAQ answer"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white font-semibold rounded ${
            loading ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          } transition duration-200`}
        >
          {loading ? "Saving..." : "Create FAQ"}
        </button>
      </form>
    </div>
  );
};

export default CreateFaqForm;
