import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import MenuAndTiffin from "./Pages/service";
import TiffinPlans from "./Pages/tiffin";
import Footer from "./Components/Footer";
import MandlaLaunchSection from "./Pages/avail";
import OrderPlatforms from "./Pages/order";
import Menu from "./Pages/menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <MandlaLaunchSection />
              <MenuAndTiffin />
              <TiffinPlans />
              <OrderPlatforms />
            </>
          }
        />

        {/* MENU PAGE */}
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
