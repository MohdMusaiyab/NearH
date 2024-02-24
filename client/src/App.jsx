import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Site Name */}
          <div>
            <img src="./assets/logo.jpg" alt="Logo" className="h-10 mr-2" />
            <span className="text-xl font-bold">NearH</span>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex">
              <li className="mr-6">
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="/sign-in" className="text-white hover:text-gray-300">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-out" className="text-white hover:text-gray-300">Sign </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
        {/* Sign In/Sign Out Box */}
        <div>
          {/* Your sign in/sign out logic here */}
          <Link to="/sign-in" className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none">Sign In</Link>
        </div>
      </main>
    </>
  );
}

export default App;
