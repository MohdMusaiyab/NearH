import React,{useState} from "react";
import { dummyHospitalData } from "../data/hospitalData";
import { useParams } from "react-router-dom";
const Dashboard = () => {
  const { id } = useParams();
  const hospital = dummyHospitalData.find(
    (hospital) => hospital.creator === id
  );
  // console.log(hospital);
  const handleAddMore = () => {
    console.log("Add More");
  }
  const [editableHospital, setEditableHospital] = useState({ ...hospital });
  const handleChange = (field, value) => {
    setEditableHospital({ ...editableHospital, [field]: value });
  };
  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...editableHospital.services];
    updatedServices[index][field] = value;
    setEditableHospital({ ...editableHospital, services: updatedServices });
  };
  
  const handleDoctorChange = (index, field, value) => {
    const updatedDoctors = [...editableHospital.doctors];
    updatedDoctors[index][field] = value;
    setEditableHospital({ ...editableHospital, doctors: updatedDoctors });
  };
  
  const handleBloodRequiredChange = (index, value) => {
    const updatedBloodRequired = [...editableHospital.bloodRequired];
    updatedBloodRequired[index] = value;
    setEditableHospital({
      ...editableHospital,
      bloodRequired: updatedBloodRequired,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for updating the data in the backend
    console.log("Updated Hospital Data:", editableHospital);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <form className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:mr-4 mb-4 md:mb-0">
          <input
            type="text"
            value={editableHospital.name}
            onChange={handleChange}
            className="border-b-2 border-blue-500 focus:outline-none text-xl font-bold mb-2"
            placeholder="Hospital Name"
          />

          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-64 h-64 object-cover rounded-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul>
            {editableHospital.services.map((service, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={service.service}
                  onChange={(e) =>
                    handleServiceChange(index, "service", e.target.value)
                  }
                  className="border-b-2 border-gray-400 focus:outline-none mb-2"
                  placeholder="Service"
                />
              </li>
            ))}
          </ul>
          <button className="bg-blue-400 rounded-lg">Add More</button>

          <h2 className="text-2xl font-semibold mb-4">Doctors</h2>
          <ul>
            {editableHospital.doctors.map((doctor, index) => (
              <li key={index} className="mb-4">
                <p>Name</p>
                <input
                  type="text"
                  value={doctor.name}
                  onChange={(e) =>
                    handleDoctorChange(index, "name", e.target.value)
                  }
                  className="border-b-2 border-gray-400 focus:outline-none mb-2"
                  placeholder="Doctor Name"
                />
                <p className="text-sm font-thin">Speciality</p>
                <input
                  type="text"
                  value={doctor.specialty}
                  onChange={(e) =>
                    handleDoctorChange(index, "specialty", e.target.value)
                  }
                  className="border-b-2 border-gray-400 focus:outline-none"
                  placeholder="Specialty"
                />
              </li>
            ))}
          </ul>
          <button className="bg-blue-400 rounded-lg" onClick={handleAddMore}>Add More</button>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Total Beds</h2>
            <input
              type="number"
              value={hospital.totalBeds}
              onChange={(e) => handleChange("totalBeds", e.target.value)}
              className="border-b-2 border-gray-400 focus:outline-none mb-4"
              placeholder="Total Beds"
            />

            <h3 className="text-xl font-semibold mb-2">Available Beds</h3>
            <input
              type="number"
              value={hospital.availableBeds}
              onChange={(e) => handleChange("availableBeds", e.target.value)}
              className="border-b-2 border-gray-400 focus:outline-none mb-4"
              placeholder="Available Beds"
            />

            <h3 className="text-xl font-semibold mb-2">Patients</h3>
            <input
              type="number"
              value={hospital.patientsNo}
              onChange={(e) => handleChange("patientsNo", e.target.value)}
              className="border-b-2 border-gray-400 focus:outline-none mb-4"
              placeholder="Number of Patients"
            />

            <h3 className="text-xl font-semibold mb-2">Blood Required</h3>
            <input
              type="text"
              value={hospital.bloodRequired.join(", ")}
              onChange={(e) => handleBloodRequiredChange(0, e.target.value)}
              className="border-b-2 border-gray-400 focus:outline-none mb-4"
              placeholder="Blood Required"
            />

            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
            <input
              type="text"
              value={hospital.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className="border-b-2 border-gray-400 focus:outline-none mb-4"
              placeholder="Phone Number"
            />
          </div>

          {/* ========================== */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
