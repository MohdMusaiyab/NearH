import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Health Street</p>
          <p>City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hospital.com</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Doctors</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Appointments</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Add your social media icons or links here */}
           
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Hospital. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
