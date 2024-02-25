import React, { useState } from "react";
import axios from "axios";
import { dummyHospitalServicesData } from "../data/dummyHospitalService";

const CreateHospital = () => {
  const [formData, setFormData] = useState({
    creator: "", // Assuming creator is a user ID
    image: "",
    name: "",
    address: "",
    services: dummyHospitalServicesData.map(({ service, price }) => ({
      service,
      rate: 0,
    })),
    patientsNo: 0,
    availableBeds: 0,
    totalBeds: 0,
    doctors: [{ name: "", specialty: "", experience: 0 }],
    bloodRequired: "",
    phoneNumber: "",
    callAmbulance: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (index, rate) => {
    setFormData((prevData) => {
      const updatedServices = [...prevData.services];
      updatedServices[index].rate = rate;
      return {
        ...prevData,
        services: updatedServices,
      };
    });
  };

  
  const handleBloodChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      bloodRequired: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/hospital/create-hospital",
        formData
      );
      console.log(response.data);
      // Handle success, redirect, or perform other actions
    } catch (error) {
      console.error("Error creating hospital:", error);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Services
          </label>
          {dummyHospitalServicesData.map(({ service, price }, index) => (
            <div key={index} className="mb-2">
              <label className="inline-block mr-2">{service}</label>
              <input
                type="radio"
                name={`service-${index}`}
                value={price}
                checked={formData.services[index].rate === price}
                onChange={() => handleServiceChange(index, price)}
                className="mr-2"
              />
              <label className="inline-block mr-2">{price}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Beds
          </label>
          <input
            type="number"
            name="totalBeds"
            value={formData.totalBeds}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Patients
          </label>
          <input
            type="number"
            name="patientsNo"
            value={formData.patientsNo}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Available Beds
          </label>
          <input
            type="number"
            name="availableBeds"
            value={formData.availableBeds}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Blood Group Required
  </label>
  {["A", "B", "AB+", "O", "Other"].map((group, index) => (
    <div key={index} className="mb-2">
      <label className="inline-block mr-2">{group}</label>
      <input
        type="radio"
        name="bloodRequired"
        value={group}
        checked={formData.bloodRequired === group}
       onChange={handleBloodChange}
        className="mr-2"
      />
    </div>
  ))}
</div>

        {/* Add input fields for other properties... */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Hospital
        </button>
      </form>
    </div>
  );
};

export default CreateHospital;
