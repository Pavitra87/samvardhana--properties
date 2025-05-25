import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://samvardhana-properties.onrender.com/api/contact/"
      );
      setContacts(res.data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      alert("Failed to fetch contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(
        `https://samvardhana-properties.onrender.com/api/contact/${id}`
      );
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Delete error: " + error.message);
    }
  };

  if (error)
    return (
      <p className="text-center text-red-600 mt-10 font-semibold">{error}</p>
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contact Dashboard</h2>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {loading ? (
          <p className="text-center">Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <p className="text-center text-gray-600">No contacts found.</p>
        ) : (
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">phone</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{contact.name}</td>
                  <td className="p-2 border">{contact.email}</td>
                  <td className="p-2 border">{contact.phone}</td>
                  <td className="p-2 border">{contact.message}</td>
                  <td className="p-2 border text-center space-x-2">
                    <button
                      onClick={() => handleDelete(contact._id)}
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

export default ContactDashboard;
