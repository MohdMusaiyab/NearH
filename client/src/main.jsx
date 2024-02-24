import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SignIn from "./pages/SignIn.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import HospitalDetails from "./pages/HospitalDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn></SignIn>} />
      <Route path="/sign-up" element={<SignUp></SignUp>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/hospital/:id" element={<HospitalDetails></HospitalDetails>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
