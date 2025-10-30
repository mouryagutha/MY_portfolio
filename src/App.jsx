import Home from "./components/Home/Home";
import Nav from "./components/Home/Nav";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout component
import Project from "./components/projects/Project";
import { Analytics } from "@vercel/analytics/react";
import Article from "./components/Article/Article"


function App() {

  return (
    <>
      <div className="w-full overflow-x-hidden">
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/About" element={<About />} />
          
          <Route path="/Projects" element={<Project />} />
          <Route path="/Articles" element={<Article />} />
        </Routes>
        {/* <RevealBento /> */}
      </Layout>
      <Analytics />
      </div>
    </>
  );
}

export default App;
