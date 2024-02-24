import "./App.css";
import { Link } from "react-router-dom";
import { dummyHospitalData } from "./data/hospitalData.jsx";
function App() {
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
        </div>
        {/* Hospital List */}
        <div className="max-w-full mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">List of dummyHospitalData</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {dummyHospitalData.map((hospital) => (
          <Link to={{ pathname: `/hospital/${hospital.creator}`, state: { hospital } }} key={hospital.creator} className="flex-shrink-0 w-full">
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
        ))}
      </div>
    </div>

      </main>
    </>
  );
}

export default App;
