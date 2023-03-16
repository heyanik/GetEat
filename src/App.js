import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
