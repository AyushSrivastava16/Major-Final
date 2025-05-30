import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="text-2xl font-bold mb-4 lg:mb-0">
            <NavLink
              to="/"
              className="text-indigo-400 hover:text-white transition duration-300"
            >
              FitTrack
            </NavLink>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <NavLink
              to="/aboutus"
              className="hover:text-indigo-400 transition duration-300"
            >
              About Us
            </NavLink>
            <NavLink
              to="/features"
              className="hover:text-indigo-400 transition duration-300"
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-indigo-400 transition duration-300"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/privacy"
              className="hover:text-indigo-400 transition duration-300"
            >
              Privacy Policy
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 FitTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
