import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://samvardhana-properties.onrender.com/api/blog/");
      setBlogs(res.data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("Failed to fetch blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`https://samvardhana-properties.onrender.com/api/blog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Delete error: " + error.message);
    }
  };

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading Blogs...</p>;

  if (error)
    return (
      <p className="text-center text-red-600 mt-10 font-semibold">{error}</p>
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Blog Dashboard</h2>

        <Link to="/createblog">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            + Create Blog
          </button>
        </Link>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {loading ? (
          <p className="text-center">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blogs found.</p>
        ) : (
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Heading</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{blog.heading}</td>
                  <td className="p-2 border">{blog.description}</td>
                  <td className="p-2 border text-center space-x-2">
                    <Link to={`/editblog/${blog._id}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlogDashboard;
