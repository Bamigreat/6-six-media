import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Videocard from "./Components/Videocard/Videocard";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Videocard />
      <About />
      <Footer />
    </>
  );
}

export default App;
