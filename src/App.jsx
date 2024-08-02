import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Home/Nav";
import About from "./components/About/About";
import { RevealBento } from "./components/Home/Grid";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout component
import Project from "./components/projects/Project";
import { Analytics } from "@vercel/analytics/react";
import Article from "./components/Article/Article"

function App() {

  return (
    <>
      <div className="">
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/articles" element={<Article />} />
        </Routes>
        {/* <RevealBento /> */}
      </Layout>
      <Analytics />
      </div>
    </>
  );
}

export default App;
