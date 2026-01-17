
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import MenuAndTiffin from "./Pages/service";
import TiffinPlans from "./Pages/tiffin";
import Footer from "./Components/Footer";
import MandlaLaunchSection from "./Pages/avail";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Navbar />
      <MandlaLaunchSection />
      <MenuAndTiffin />
      <TiffinPlans />
      <Footer />
    </Router>
  );
}

export default App;
