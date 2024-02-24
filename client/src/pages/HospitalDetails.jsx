import React from 'react'
import { useParams } from 'react-router-dom'
import { dummyHospitalData } from '../data/hospitalData'

const HospitalDetails = ({hospital}) => {
  const { id } = useParams();
  const selectedHospital = dummyHospitalData.find(hospital => hospital.creator === id) || {};
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="mb-4">
          <img
            src={selectedHospital.image}
            alt={selectedHospital.name}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{selectedHospital.name}</h1>
          <p className="text-gray-600">{selectedHospital.address}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <ul>
              {selectedHospital.services.map((service, index) => (
                <li key={index}>
                  {service.service}: ${service.rate}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Doctors</h2>
            <ul>
              {selectedHospital.doctors.map((doctor, index) => (
                <li key={index}>
                  {doctor.name} - {doctor.specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>
            <strong>Patients:</strong> {selectedHospital.patientsNo}
          </p>
          <p>
            <strong>Available Beds:</strong> {selectedHospital.availableBeds}
          </p>
          <p>
            <strong>Total Beds:</strong> {selectedHospital.totalBeds}
          </p>
          <p>
            <strong>Blood Required:</strong> {selectedHospital.bloodRequired.join(', ')}
          </p>
          <p>
            <strong>Phone Number:</strong> {selectedHospital.phoneNumber}
          </p>
          <p>
            <strong>Call Ambulance:</strong> {selectedHospital.callAmbulance ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HospitalDetails
