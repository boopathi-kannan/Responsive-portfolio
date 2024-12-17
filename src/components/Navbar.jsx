import { useState } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-600 text-white">
      <div className="container mx-auto px-5 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 text-xl font-bold">
            Profile
          </Link>
          <Link to="/Project"  className="hover:text-gray-300 text-xl font-bold">
            Project
          </Link>
          <Link to="/Contact" className="hover:text-gray-300 text-xl font-bold">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-700 text-white text-xl font-bold"
          >
            Profile
          </Link>
          <Link
            to="/Project"
            className="block py-2 px-4 hover:bg-gray-700 text-white text-xl font-bold"
          >
            Project
          </Link>
          <Link
            to="/Contact"
            className="block py-2 px-4 hover:bg-gray-700 text-white text-xl font-bold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
