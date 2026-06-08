import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import PlaceDetails from "./pages/PlaceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/states" element={<States />} />
      <Route path="/state/:id" element={<StateDetails />} />
      <Route path="/place/:id" element={<PlaceDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;