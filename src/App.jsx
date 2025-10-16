import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { FundraiserPage } from "./pages/FundraiserPage";
import DonatePage from "./pages/DonatePage";
import YourDetails from "./components/YourDetails";
import YourDetailsPg from "./pages/YourDetailsPg";

const App = () => {
  return (
    <Router>
      {/* start Header */}
      <Header />

      {/* Start Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/fundraiser" element={<FundraiserPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/yourdetail" element={<YourDetailsPg />} />


      </Routes>

      {/* Start Footer */}
      <Footer />
    </Router>
  );
};

export default App;
