import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu on screen resize if the screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Automatically close the menu for large screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full h-14 flex justify-between px-4 md:px-8 items-center bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <img src="https://scontent.fraj5-1.fna.fbcdn.net/v/t39.30808-1/224154723_103496111984248_8769582561693844700_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=0Xi7rzUQyrAQ7kNvgGxK_l1&_nc_oc=AdjISXOSgIiIOSElVVIolpnU9zBFbDb1MyMWmDrfmPaKMA7YHaIHX-bCL6df7dn7N93hRPKqU5vJqClPY4UQcz_1&_nc_zt=24&_nc_ht=scontent.fraj5-1.fna&_nc_gid=AihbWaBDZyyapZVM1E8IiqG&oh=00_AYC3ZKkU6dnpMWAKQseoXq4ZhX-sE0o1SqUmTiaxUgwGhg&oe=6775C97C" alt="Business Logo" className="h-10" />
        <p className="m-4">Bapodra Electricals</p>
      </div>

      {/* Menu for Larger Screens */}
      <ul className="md:flex hidden items-center">
        <li className="mx-6 cursor-pointer hover:text-red-800">
          <a href="#home">Home</a>
        </li>
        <li className="mx-6 cursor-pointer hover:text-red-800">
          <a href="#about">About Us</a>
        </li>
        <li className="mx-6 cursor-pointer hover:text-red-800">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block px-4 py-2 bg-red-800 text-white rounded-xl cursor-pointer hover:bg-red-700">
        <a href="#projects">View Projects</a>
      </div>

      {/* Hamburger Menu for Smaller Screens */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Toggle Hamburger and X icon based on isMenuOpen */}
        {isMenuOpen ? (
          <span>&#10005;</span> // Unicode for "X"
        ) : (
          <span>&#8801;</span> // Unicode for Hamburger
        )}
      </div>

      {/* Dropdown Menu for Mobile with Animation */}
      <div
        className={`absolute top-14 left-0 w-full bg-gray-100 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li className="py-2 w-full text-center hover:bg-gray-200">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-200">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-200">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </li>
          <li className="py-2 w-full text-center bg-red-800 text-white hover:bg-red-700">
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              View Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
