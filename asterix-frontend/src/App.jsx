import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./partials/Header";
import Slider from "./components/Slider";
import Faculty from "./components/Faculty";
import Team from "./Pages/People";
import Sponsors from "./Pages/Sponsors";
import Footer from "./partials/Footer";
import About from "./Pages/About"; // Import the About component
import Opps from "./partials/404";
import Feedback from "./Pages/Feedback";
import { StoreProvider } from "./Store-module/Store";
import "./App.css";
import Asterix_Logo from "./images/Dark version.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-24 h-16 animate-spin">
          <img src={Asterix_Logo} alt="Loading..." className="w-full h-full" />
        </div>
      </div>
    );
  }

  return (
    <StoreProvider>
      <Header />
      <Routes>
        {/* Main route */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Faculty />
              <Team />
              <Sponsors />
              <Footer />
            </>
          }
        />
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/People" element={<Team />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/Feedback" element={<Feedback />} />

        {/* 404 Route (catch-all) */}
        <Route path="*" element={<Opps />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
