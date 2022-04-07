import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Recomendations from "./components/Recomendations/Recomendations";

function App() {

  const TRACKING_ID = "G-38V66T52X1";
  ReactGA.initialize(TRACKING_ID);

useEffect(() => {
  ReactGA.pageview(window.location.pathname + window.location.search);
},[]);

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
