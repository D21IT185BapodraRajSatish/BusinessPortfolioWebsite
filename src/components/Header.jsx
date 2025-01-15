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

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <nav className="w-full h-14 flex justify-between px-4 md:px-8 items-center bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <img src="/logo.png" alt="Business Logo" className="h-10" />
        <p className="m-4">Bapodra Electricals</p>
      </div>

      {/* Menu for Larger Screens */}
      <ul className="md:flex hidden items-center">
        {menuLinks.map((link) => (
          <li key={link.name} className="mx-6 cursor-pointer hover:text-red-800">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
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
        <span className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
          &#8801;
        </span>
      </div>

      {/* Full-Screen Sliding Menu for Mobile */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-black text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-black text-lg">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="bg-red-800 text-white py-2 px-4 rounded-xl"
            >
              View Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
