import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"; // Font Awesome Icons

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
          >
            Submit
          </button>
        </form>

        {/* Map Section */}
        <div className="relative">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
          <div className="h-64 border border-gray-300 rounded-lg overflow-hidden">
            {/* Embed Google Map */}
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-400"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
