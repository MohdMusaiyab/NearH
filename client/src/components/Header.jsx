import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <span className="text-xl font-bold">NearH</span>
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex gap-5">
            <li className="mr-6">
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="text-white hover:text-gray-300 ">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="text-white hover:text-gray-300 mr-3">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
