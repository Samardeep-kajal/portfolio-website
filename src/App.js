import "./App.css";
import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import samardeepImage from "./media/samardeep.jpg";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleScrollTo = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const helloArray = ["Olá", "Hello", "Bonjour", "नमस्ते"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((index) => (index + 1) % helloArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [helloArray.length]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-Poppins w-full fixed mt-12 h-screen overflow-y-auto overflow-x-hidden">
      <Navbar handleScrollTo={handleScrollTo} />
      <Element name="home" className="section">
        <div className="mt-24 flex flex-col md:flex-row items-center md:justify-center md:ml-36  md:mt-12">
          <div className="md:w-2/4 px-4">
            <p className="text-[#4171b0] text-xl md:text-2xl">
              {helloArray[count]}, my name is
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold">
              Samardeep Kajal.
            </h1>
            <p className="text-[#d97d77] mt-5 text-2xl md:text-4xl">
              I build scalable, data-driven products.
            </p>
            <p className="mt-5 text-sm md:text-lg text-justify">
              Full-stack developer with hands-on experience building and
              supporting an IT Project Portfolio Management (PPM) tool used
              within an enterprise environment. Currently working as an
              Application Developer at NCR Atleos, I specialize in creating
              scalable solutions with real business impact from UI and APIs to
              database design and integrations.
            </p>
          </div>
          <div className="md:w-2/5 w-full flex justify-center mt-8 md:mt-0">
            <img
              src={samardeepImage}
              alt="Samardeep Kajal"
              className="border-4 border-solid border-[#d97d77] rounded-full h-52 w-52 md:h-80 md:w-80 object-cover"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      </Element>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Element name="experience" className="section">
        <Experience />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Contact />
      <footer className="mt-10 py-4 pb-8 text-center text-sm text-gray-500 mb-8">
        <p>&copy; 2026 Samardeep Kajal · Built with React</p>
      </footer>
    </div>
  );
}

export default App;
