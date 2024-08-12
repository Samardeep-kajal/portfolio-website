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
    <div className="font-Poppins">
      <Navbar handleScrollTo={handleScrollTo} />
      <Element name="home" className="section">
        <div className="mt-12 flex justify-center">
          <div className="flex flex-row items-center w-3/4">
            <div className="w-3/5">
              <p className="text-[#4171b0] text-2xl">
                {helloArray[count]}, my name is
              </p>
              <h1 className="mt-4 text-6xl font-bold">Samardeep Kajal.</h1>
              <p className="text-[#d97d77] mt-5 text-4xl">
                I create full stack web applications.
              </p>
              <p className="mt-5 text-lg" style={{ textAlign: "justify" }}>
                I am currently pursuing my Bachelor's degree in Information
                Technology and am set to graduate in 2024. Throughout my
                academic journey, I have undertaken various full-stack web
                development projects, demonstrating my passion and dedication
                for software development.
              </p>
            </div>
            <div className="w-2/5 flex justify-center ml-24">
              <img
                src={samardeepImage}
                alt="Samardeep Kajal"
                className="border-4 border-solid border-[#d97d77] rounded-full h-5/6 w-5/6 object-cover"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
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
