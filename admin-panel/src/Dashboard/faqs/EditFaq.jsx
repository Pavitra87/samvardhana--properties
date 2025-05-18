import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditFaq = () => {
  const { id } = useParams(); // get FAQ id from route params
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Fetch FAQ data by id to populate the form
    const fetchFaq = async () => {
      try {
        const response = await axios.get(
          `https://samvardhana-properties.onrender.com/api/faqs/${id}`
        );
        const faq = response.data.data || response.data; // adjust based on API
        setQuestion(faq.question || "");
        setAnswer(faq.answer || "");
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch FAQ");
      } finally {
        setLoading(false);
      }
    };
    fetchFaq();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      // Update FAQ via PUT or PATCH request
      const response = await axios.put(`https://samvardhana-properties.onrender.com/api/faqs/${id}`, {
        question,
        answer,
      });
      console.log(response.data);

      if (response.data && response.data.data) {
        navigate("/faqdashboard");
      } else {
        setError("Failed to update FAQ");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading FAQ data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="question">
            Question
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="answer">
            Answer
          </label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            rows={5}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {saving ? "Saving..." : "Update FAQ"}
        </button>
      </form>
    </div>
  );
};

export default EditFaq;
