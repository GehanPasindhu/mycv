import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
 <Router>
   <GlobalStyle />
   <Navbar />
   <Hero/>
 </Router>
  );
}

export default App;
