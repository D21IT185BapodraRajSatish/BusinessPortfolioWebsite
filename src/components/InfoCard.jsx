import React from "react";

function InfoCard({ imageSrc, title, description, link }) {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
