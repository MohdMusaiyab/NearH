import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { Link ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser + "Current User");
  const [usernames, setUsernames] = useState();
  useEffect(() => {
    setUsernames(localStorage.getItem("user"));
  }, [localStorage.getItem("user")]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSignOut = async() => {
    // Add your sign-out logic here
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUsernames(null);
      setShowDropdown(false);
      navigate("/");
      toast.success("Logged out successfully");
    }
    catch(error){
      console.log(error);

    }
  };
  return (
    <header className="bg-blue-700 text-white py-4">
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
          <ul className="flex gap-2">
            <li className="mr-2">
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            {usernames ? (
              <li className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="text-white hover:text-gray-300"
                >
                  Dashboard
                </button>
                {showDropdown && (
                  <ul className="absolute mt-2 bg-white shadow-md">
                    <li>
                      <Link
                        to={`/dashboard/${JSON.parse(usernames).id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={handleDropdownToggle}
                      >
                        View Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/create-hospital/${JSON.parse(usernames).id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={handleDropdownToggle}
                      >
                        Create Hospital
                      </Link>
                    </li>
                    <li>
                      {/* Add your sign out logic here */}
                      <button
                        onClick={handleSignOut}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <ul className="flex gap-5">
                <li>
                  <Link
                    to="/sign-in"
                    className="text-white hover:text-gray-300"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-up"
                    className="text-white hover:text-gray-300 mr-3"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
