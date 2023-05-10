/* Styles */
import "../styles/App.scss";

/* HOOKS */
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
/* SECCIÓN DE IMPORT */

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
