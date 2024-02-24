import './App.css'
import { Link } from 'react-router-dom';
function App() {
  
  return (
    <>
      <h1 className="text-red-800 text-3xl">Hello..</h1>
      <h1>Home Page</h1>
      <Link to="/sign-in">Sign In</Link>
    </>
  )
}

export default App
