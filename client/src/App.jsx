import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dummyHospitalData } from "./data/hospitalData.jsx";
import { dummyHospitalServicesData } from "./data/dummyHospitalService.jsx";
function App() {
  
  // console.log(dummyHospitalServicesData)
  const [selectedService, setSelectedService] = useState("");
  const handleServiceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    console.log(selectedValue);
  };
  const getHospitalsWithService = () => {
    if (!selectedService) {
      return dummyHospitalData; // Return all hospitals if no service is selected
    }

    return dummyHospitalData.filter((hospital) =>
      hospital.services.some((service) => service.service === selectedService)
    );
  };
  const renderHospitalList = () => {
    const hospitalsWithService = getHospitalsWithService();

    if (hospitalsWithService.length === 0) {
      return <p>No hospitals provide the selected service.</p>;
    }
    return (
      <ul>
        {hospitalsWithService.map((hospital) => (
          <div className="max-w-full mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">
              List of dummyHospitalData
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <Link
                to={{
                  pathname: `/hospital/${hospital.creator}`,
                  state: { hospital },
                }}
                key={hospital.creator}
                className="flex-shrink-0 w-full"
              >
                <div className="bg-white p-4 rounded-md shadow-md">
                  {/* Assuming you have an 'image' property in your hospital data */}
                  <img
                    src={hospital.image} // Replace 'image' with the actual property name for the image
                    alt={hospital.name}
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-semibold mb-2">
                    {hospital.name}
                  </h2>
                  <p className="text-gray-600">{hospital.address}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    );
  };
  const filteredHospitals = selectedService
    ? dummyHospitalData.filter((hospital) =>
        hospital.services.some((service) => service.service === selectedService)
      )
    : dummyHospitalData;

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 ml-5">Welcome to NearH..!</h1>
        {/* Search Box */}
        <div className="w-1/2 mb-8/ ml-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div>
            <select
              id="serviceSelect"
              name="service"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              value={selectedService}
              onChange={handleServiceChange}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {dummyHospitalServicesData.map((service, index) => (
                <option key={index} value={service.service}>
                  {service.service}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Hospital List */}

        {filteredHospitals.length === 0 && (
          <h1 className="text-red-600 text-center font-semibold p-3">No Hospital with that Service</h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    
          {filteredHospitals.map((hospital) => (
            <Link
              to={{
                pathname: `/hospital/${hospital.creator}`,
                state: { hospital },
              }}
              key={hospital.creator}
              className="flex-shrink-0 w-full"
            >
              <div className="bg-white p-4 rounded-md shadow-md">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-semibold mb-2">{hospital.name}</h2>
                <p className="text-gray-600">{hospital.address}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* Here is the part that can cause problem */}
      </main>
    </>
  );
}

export default App;
