import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Health Street</p>
          <p>Noida, India</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hospital.com</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <Link to="/about">About</Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Add your social media icons or links here */}

            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/512px-Facebook_f_logo_%282019%29.svg.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 NearH . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
