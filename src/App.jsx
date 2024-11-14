import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Connect from "./Components/Connect/Connect";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      
      <Routes>
      <  Route path="/" element={
        <>
         <Navbar />
         <Hero />
         <Skills />
         <Work />
         <Footer />
        </>
    } />
      <Route path = "/connect" element = {<Connect/>} />
      </Routes>
    </>
  );
}
