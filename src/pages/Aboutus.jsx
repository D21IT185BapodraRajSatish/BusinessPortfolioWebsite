import React from "react";

const AboutUs = () => {
  const milestones = [
    {
      year: "1996",
      title: "A Humble Beginning",
      description: "Launched small-scale industrial electrical work.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      year: "2000",
      title: "Expanding Services",
      description: "Introduced HT and LT motor repair services.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      year: "2010",
      title: "Embracing Sustainability",
      description: "Started solar installation services.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      year: "2015",
      title: "Filtration Solutions",
      description: "Added filtration systems to our services.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      year: "2020",
      title: "Comprehensive Work",
      description: "Became a trusted partner for industrial electrical work.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center space-x-6"
            >
              <div>
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </h3>
                <h4 className="text-xl font-semibold mt-2 mb-4">
                  {milestone.title}
                </h4>
                <p className="text-gray-700">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
