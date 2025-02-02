import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

function Hero() {
  const slides = [
    {
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      service: "Solar Solutions",
      description: "Leading the future with sustainable solar energy solutions.",
    },
    {
      image: "https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      service: "Industrial Motors",
      description: "Efficient and reliable motors for industrial use.",
    },
    {
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      service: "Electrical Panels",
      description: "Innovative panels for seamless power distribution.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slideDirection, setSlideDirection] = useState("right");

  // Function to change slides
  const changeSlide = (direction = 1) => {
    setSlideDirection(direction > 0 ? "right" : "left"); // Set slide direction
    setFade(false); // Start fade out

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
      setFade(true); // Fade in after changing
    }, 800);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 5000);
    return () => clearInterval(interval);
  }, []);

  // Pause auto-slide when manually interacting
  const handleManualChange = (direction) => {
    changeSlide(direction);
  };

  // Swipe gestures for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => handleManualChange(1),
    onSwipedRight: () => handleManualChange(-1),
  });

  return (
    <section
      {...handlers}
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image Transition */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: fade ? 1 : 0, // Fade effect
          transition: "opacity 1s ease-in-out",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Text Content */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 w-full max-w-4xl transition-all duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Bapodra Electricals | <span>{slides[currentIndex].service}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">{slides[currentIndex].description}</p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualChange(index - currentIndex)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;