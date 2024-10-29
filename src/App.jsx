import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Employee from "./components/Employee";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Employee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
