import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import { RevealBento } from "./Grid";

const Home = () => {
  const [landingLoaded, setLandingLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLandingLoaded(true);
    }, 2800);
  }, []);
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <RevealBento />
    </>
  );
};

export default Home;
