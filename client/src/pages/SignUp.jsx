import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  // console.log(userData);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const data = await axios.post(
        "http://localhost:3000/api/v1/auth/sign-up",
        formData
      );
      console.log(data);
      toast.success("Sign Up Successful");
      navigate("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Sign In Form */}
      <div className="w-1/2 bg-blue-500 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Hospital Sign Up
          </h2>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Registration Page */}
          <p className="mt-4 text-sm text-white">
            Already have an account?{" "}
            <Link to="/sign-in" className="hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}

      {/* Right Side: Image */}

      <div className="w-1/2 bg-white-200 flex justify-center items-center">
        {/* You can place your image or content here */}
        <Tilt>
          <img
            src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=740&t=st=1708758820~exp=1708759420~hmac=3368677ca8e0b48ddbc1059520732468f6dba149534eb990fa340137b005be30"
            alt="Medical Image"
            className="object-cover w-3/4 h-3/4 rounded-lg ml-auto mr-auto"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default SignUp;
