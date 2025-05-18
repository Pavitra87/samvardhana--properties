import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFaqForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://samvardhana-properties.onrender.com/api/faqs/", { question, answer });
      if (response.data.success) {
        navigate("/faqdashboard");
      } else {
        setError("Failed to create FAQ");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create FAQ</h2>

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
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
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
