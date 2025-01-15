import React from "react";

function Service({ services }) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Card Image */}
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-40 object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-red-800 hover:scale-105 transition-transform duration-300"
                >
                  Learn More {'>'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
