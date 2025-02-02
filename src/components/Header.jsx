import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close the menu and dropdown on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close the menu on large screens
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#" }, // Placeholder for dropdown
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
  ];

  const servicesLinks = [
    { name: "Service 1", href: "/service1" },
    { name: "Service 2", href: "/service2" },
    { name: "Service 3", href: "/service3" },
  ];

  return (
    <nav className="w-full h-14 flex justify-between px-4 md:px-8 items-center bg-gray-100 shadow-md z-50 fixed top-0 left-0 right-0">
      {/* Logo Section */}
      <div className="text-xl font-bold flex items-center">
        <img src="/logo.png" alt="Business Logo" className="h-10" />
        <p className="m-4">Bapodra Electricals</p>
      </div>

      {/* Menu Links for Larger Screens */}
      <ul className="md:flex hidden items-center">
        {menuLinks.map((link) => (
          <li key={link.name} className="mx-6 cursor-pointer hover:text-red-800 relative">
            {link.name === "Services" ? (
              <>
                <span
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  Services
                </span>
                <span
                  className={`ml-2 inline-block transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  ▼
                </span>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                    {servicesLinks.map((service) => (
                      <li key={service.name} className="px-6 py-2 cursor-pointer hover:bg-gray-200">
                        <a href={service.href}>{service.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a href={link.href}>{link.name}</a>
            )}
          </li>
        ))}
      </ul>

      {/* View Projects Button */}
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
              {link.name === "Services" ? (
                <>
                  <span
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown in mobile
                    className="cursor-pointer"
                  >
                    Services
                    <span
                      className={`ml-2 inline-block transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    >
                      ▼
                    </span>
                  </span>
                  {isDropdownOpen && (
                    <ul className="flex flex-col space-y-4 mt-4">
                      {servicesLinks.map((service) => (
                        <li key={service.name}>
                          <a
                            href={service.href}
                            onClick={() => setIsMenuOpen(false)} // Close menu on item click
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on item click
                >
                  {link.name}
                </a>
              )}
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