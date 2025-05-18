import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FaqDashboard = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("https://samvardhana-properties.onrender.com/api/faqs/");
      setFaqs(response.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await axios.delete(`https://samvardhana-properties.onrender.com/api/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } catch (err) {
      alert("Failed to delete FAQ");
    }
  };

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading FAQs...</p>;

  if (error)
    return (
      <p className="text-center text-red-600 mt-10 font-semibold">{error}</p>
    );

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">FAQ Dashboard</h2>

      <Link to="/createfaq">
        <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Create New FAQ
        </button>
      </Link>

      {faqs.length === 0 ? (
        <p className="text-gray-600">No FAQs found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 border-b border-gray-300 font-medium text-gray-700">
                  Question
                </th>
                <th className="text-left py-3 px-4 border-b border-gray-300 font-medium text-gray-700">
                  Answer
                </th>
                <th className="text-center py-3 px-4 border-b border-gray-300 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {faqs.map(({ _id, question, answer }) => (
                <tr
                  key={_id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 border-b border-gray-200">{question}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{answer}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center space-x-2">
                    <Link to={`/editfaq/${_id}`}>
                      <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FaqDashboard;
