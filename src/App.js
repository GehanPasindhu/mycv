import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Recomendations from "./components/Recomendations/Recomendations";

function App() {
  return (
 <Router>
   <GlobalStyle />
   <Navbar />
   <Hero/>
   <Recomendations/>
   <Footer />
 </Router>
  );
}

export default App;
