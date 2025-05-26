import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Videocard from "./Components/Videocard/Videocard";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/videos/Videos";

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
{
  /* <Router>
  <Navbar />
  <Hero />
  <Videocard />
  <About />
  <Footer />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
</Router>; */
}

export default App;
