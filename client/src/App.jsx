import './App.css';
import { Link } from 'react-router-dom';
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
        
      </main>
    </>
  );
}

export default App;
