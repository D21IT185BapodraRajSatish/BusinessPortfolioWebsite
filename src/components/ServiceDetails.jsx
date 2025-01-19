import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function ServiceDetails({ services }) {
  const { slug } = useParams();
  console.log("Services in ServiceDetails:", services);
  console.log("Slug from URL:", slug);

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-center py-12">Service not found.</div>;
  }

  // Counter animation state
  const [count, setCount] = useState(0);
  const serviceCount = 150; // Number of services completed (example)

  useEffect(() => {
    if (count < serviceCount) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, serviceCount));
      }, 10); // Adjust the speed of animation
      return () => clearInterval(interval);
    }
  }, [count]);

  // Inquiry form state
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiryData({
      ...inquiryData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryData);
  };

  // Testimonials data
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Excellent service! My solar installation was handled perfectly, and the team was very professional.",
    },
    {
      name: "Jane Smith",
      feedback: "I highly recommend their HT & LT motor installation services. Very reliable and efficient.",
    },
    {
      name: "Michael Johnson",
      feedback: "Great team! The transformer oil filtration service was top-notch, and I could see the results immediately.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Service Title and Image */}
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {service.title}
      </motion.h1>
      <motion.img
        src={service.imageSrc}
        alt={service.title}
        className="w-full h-60 object-cover rounded-md mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <p className="text-gray-700 mb-6">{service.details}</p>

      {/* Service Description with Benefits */}
      <section className="bg-gray-50 py-8 mb-12">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Go Solar with Confidence
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We handle every step of the process, from initial design and installation to ongoing maintenance and timely repairs. 
          Enjoy clean, renewable energy, lower electricity bills, and peace of mind knowing your system is in expert hands.
        </motion.p>
      </section>

      {/* Service Count Animation */}
      <section className="text-center py-8 bg-gray-100 mb-12">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We Have Completed <span className="text-blue-600">{count}</span> Services So Far
        </motion.h2>
      </section>

      {/* Additional Content with Photos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More About This Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Additional Photo"
            className="w-full h-60 object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/159181/pexels-photo-159181.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Additional Photo"
            className="w-full h-60 object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 * index }}
            >
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <p className="font-semibold mt-4">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Inquire About This Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inquiryData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inquiryData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={inquiryData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}

export default ServiceDetails;
