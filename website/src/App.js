import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Testimonial from "./Pages/Testimonial";
import Profile from "./Components/Profile"
import Feedback from "./Pages/Feedback";
import Order from "./Components/Order"
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
