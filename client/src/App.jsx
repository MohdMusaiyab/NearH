import "./App.css";
import { Link } from "react-router-dom";
import { dummyHospitalData } from "./data/hospitalData.jsx";
function App() {
  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to NearH..!</h1>
        {/* Search Box */}
        <div className="w-1/2 mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* dummyHospitalData List */}
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">List of dummyHospitalData</h1>

          <div className="grid gap-4 ">
            {dummyHospitalData.map((hospital) => (
              <div
                key={hospital.creator}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <h2 className="text-lg font-semibold mb-2">{hospital.name}</h2>
                <p className="text-gray-600">{hospital.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
