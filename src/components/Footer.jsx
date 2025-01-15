
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Business</h2>
            <p className="text-sm">
              Providing industrial electrical solutions since 1996. Experts in Solar Installation, HT & LT Motor Repairs, and more.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500 transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500 transition">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500 transition">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500 transition">Contact Us</a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">📍 Address: Your Business Address</p>
            <p className="text-sm mb-2">📧 Email: yourbusiness@email.com</p>
            <p className="text-sm">📞 Phone: +1 (123) 456-7890</p>
          </div>
        </div>
  
        {/* Social Media & Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bapodra Electricals. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">Facebook</a>
            <a href="#" className="hover:text-red-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-red-500 transition">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  