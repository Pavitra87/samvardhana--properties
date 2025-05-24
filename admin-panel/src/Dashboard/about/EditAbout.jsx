import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAbout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [heading, setHeading] = useState("");
const [title,setTitle]=useState("")
  const [description, setDescription] = useState("");

  const [imgUrl, setImgUrl] = useState(""); // existing image URL
  const [imageFile, setImageFile] = useState(null); // new image file

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(
          `https://samvardhana-properties.onrender.com/api/about/${id}`
        );
        const about = res.data.data || res.data;
        setHeading(about.heading || "");
   setTitle(about.tilte || "");
        setDescription(about.description || "");

        setImgUrl(about.imgUrl || "");
      } catch (err) {
        setError("Error fetching : " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("heading", heading);
formData.append("title", title);
      formData.append("description", description);

      if (imageFile) {
        formData.append("imgUrl", imageFile);
      }

      const res = await axios.put(
        `https://samvardhana-properties.onrender.com/api/about/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
      navigate("/aboutdashboard");
    } catch (err) {
      setError("Update failed: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return <p className="text-center text-gray-600">Loading data...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  return (
     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Edit About
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="heading"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="imgUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image
          </label>
          {imgUrl && (
            <div className="mb-2">
              <p className="text-sm text-gray-600">Current Image:</p>
              <img
                src={imgUrl}
                alt="Current"
                className="w-32 h-32 object-cover border rounded"
              />
            </div>
          )}
          <input
            id="imgUrl"
            accept="image/*"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-2 px-4 rounded text-white font-semibold transition ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  )
}

export default EditAbout