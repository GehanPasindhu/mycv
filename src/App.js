import React, { useEffect } from "react";
import ReactGA from "react-ga";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Recomendations from "./components/Recomendations/Recomendations";
import TimeLineb from "./components/TimeLine/TimeLineb";
import ReactTalk from "./components/ReactTalk/ReactTalk";
import Footer from "./components/Footer/Footer";


function App() {
  const TRACKING_ID = "G-38V66T52X1";
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <TimeLineb />
      // <ReactTalk />
      <Recomendations />
      <Footer/>
    </Router>
  );
}

export default App;
