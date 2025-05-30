import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      // Simulate successful submission
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setError(null);
    } catch (err) {
      setError("There was an error. Please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl mt-8 backdrop-blur-lg">
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="text-red-600 text-center">{error}</div>}
        {success && (
          <div className="text-green-600 text-center">
            Your message has been sent successfully!
          </div>
        )}

        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer mt-4 p-5 w-full rounded-xl border-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-500 transition-all duration-300 shadow-md"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:bg-white px-1"
          >
            Full Name
          </label>
        </div>

        {/* Email Address */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer mt-4 p-5 w-full rounded-xl border-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-500 transition-all duration-300 shadow-md"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:bg-white px-1"
          >
            Email Address
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="peer mt-4 p-5 w-full rounded-xl border-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-500 transition-all duration-300 shadow-md"
            rows="6"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-5 top-5 transform -translate-y-1/2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:bg-white px-1"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-4 mt-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
