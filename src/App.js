import "./App.css";
import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import samardeepImage from "./media/samardeep.PNG";
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
              I create full stack web applications.
            </p>
            <p className="mt-5 text-sm md:text-lg text-justify">
              I am a Bachelor of Technology in Information Technology and
              currently working as an Application Developer at NCR Atleos. With
              experience in full-stack web development across personal and
              professional projects, I am dedicated to creating innovative
              software solutions.
            </p>
          </div>
          <div className="md:w-2/5 w-full flex justify-center mt-8 md:mt-0">
            <img
              src={samardeepImage}
              alt="Samardeep Kajal"
              className="border-4 border-solid border-[#d97d77] rounded-full h-52 w-52 md:h-3/6 md:w-3/6 object-cover"
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
      <footer className="mt-10 py-6 text-center text-gray-600 bg-gray-200">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <p>Designed with ❤️ by me</p>
      </footer>
    </div>
  );
}

export default App;
