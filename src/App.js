import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const helloArray = ["Olá", "Hello", "Bonjour", "नमस्ते"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((index) => (index + 1) % helloArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [helloArray.length]);

  return (
    <div className="font-Poppins">
      <div className="bg-[#E0E1DD] min-h-screen">
        {/* Background color applied to this wrapper */}
        <Navbar />
        <div className="mt-32 ml-56 w-3/4">
          <p className="text-[#4171b0] text-2xl ">
            {helloArray[count]}, my name is
          </p>
          <h1 className="mt-4 text-6xl font-bold ">Samardeep Kajal.</h1>
          <p className=" text-[#d97d77] mt-5 text-4xl">
            I create full stack web applications.
          </p>
          <p className="mt-5 text-lg w-2/4" style={{ textAlign: "justify" }}>
            I am currently pursuing my Bachelor's degree in Information
            Technology and am set to graduate in 2024. Throughout my academic
            journey, I have undertaken various full-stack web development
            projects, demonstrating my passion and dedication for software
            development.
          </p>
          <Skills />
          <Projects className="ml-5" />
          {/* Footer */}
          <footer className="mt-10 py-6 text-center text-gray-600 bg-gray-200">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <p>Designed with ❤️ by me</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

// "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     },
//     {
//       "src": "logo192.png",
//       "type": "image/png",
//       "sizes": "192x192"
//     },
//     {
//       "src": "logo512.png",
//       "type": "image/png",
//       "sizes": "512x512"
//     }
//   ],
